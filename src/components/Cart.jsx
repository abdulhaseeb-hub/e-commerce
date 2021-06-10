import Product from './Product'
import {Container   ,Grid} from "@material-ui/core"
import useStyles from './Cartstyles';
import {Link} from 'react-router-dom'
import React, { Fragment } from 'react'
import {Typography ,Button, CardActions ,Card, CardContent ,CardMedia} from '@material-ui/core'
import CartData from './CartData'


const Cart = ({cart,removeFromCart,clearCart,getProductsTotal ,setQuantity}) => {

const classes = useStyles();

const EmptyCart = () => ( 
  <Typography  variant="h3" style={{textAlign: 'center',color: 'Red',marginTop:"5%"}}>Shopping cart is empty
  
  
  </Typography>



);

const FilledCart = () => ( 
        <main>
    
<Typography style={{marginTop:"-6%"}} variant="h3" >Your shopping cart</Typography>
    

            <Grid container  spacing={3}>
            <div class="container-fluid"  style={{marginTop:'5%'}} >

<div class="card shadow mb-4">
        
        {cart.map((product) => (


<CartData product={product} key={product.id}  removeFromCart={removeFromCart} setQuantity={setQuantity}/>


        ))}
</div>

</div>
        </Grid>

        <Container maxWidth="sm">


        <div className={classes.cardDetails} >

        <Typography variant="h4" >
            Subtotal: Rs.{getProductsTotal()}
        </Typography>

        <div  class="text-center ">

        <Button className={classes.emptyButton} type="button" size="large" color="secondary" variant="contained" onClick={clearCart} > Empty Cart</Button>
        
        <Button className={classes.checkoutButton} component={Link} to='/checkout' type="button" size="large" color="primary" variant="contained"> Checkout</Button>

        </div>

        </div>
        <br></br>
        <br></br>
        <br></br>

        </Container>

    </main>

    );

if(!cart) return "loding...";
    return (
<Container>
<div className={classes.toolbar} />


{!cart.length ? <EmptyCart /> : <FilledCart /> }
</Container>  

)
}

export default Cart

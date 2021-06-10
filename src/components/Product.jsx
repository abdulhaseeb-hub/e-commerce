import { makeStyles } from '@material-ui/core';
import React from 'react'
import {Card, CardMedia , CardContent , CardActions , Typography , IconButton,Container  } from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 345,
        marginTop:"20%"
      },
      media: {
        height: 240,
        
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },

  }));


const Product = ({product,addToCart}) => {

    const classes = useStyles();

    return (
        <Container maxWidth="sm">

            

        <div>


<Card className={classes.root} >

<CardMedia className={classes.media} image={product.image}  />

<CardContent >

<div className={classes.cardcontent}>

<Typography variant="h5" gutterBottom>
    {product.name}
</Typography>

<Typography variant="h5" >

  RS.{product.price}
</Typography>


</div>

</CardContent>

<Typography style={{textAlign: 'center'}} variant="body2" color="textSecondary">
{product.description}
</Typography>

<CardActions  disableSpacing className={classes.cardActions}>
    <IconButton aria-label="Add to Cart" onClick={()=>addToCart(product)}>

    <AddShoppingCart/>         
   
    </IconButton>
</CardActions>

</Card>
            
        </div>
        </Container>
    )
}

export default Product

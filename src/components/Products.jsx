import React from 'react'
import Product from './Product'
import './Products.css';
import {Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

   
}));



const Products = ({products,addToCart}) => {
    const classes = useStyles();

    return (
        
        <main className={classes.content}>
            <div className="section-title" data-aos="zoom-out">
        <h2>Categories</h2>
        <p>What we do offer</p>
      </div>
        <div className={classes.toolbar} />
        
        <Grid container justify="center" spacing={2}>
        {products.map((product) =>

         (
            <Grid item key={product.key} xs={12} sm={6} md={3} lg={4}>
             <Product  key={product.id} product={product} addToCart={addToCart}  />
             </Grid>
             
             ))}
            </Grid>

        </main>

        
    )
}

export default Products

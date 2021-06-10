import { Button, Typography } from '@material-ui/core'
import React from 'react'

const CartData = ({product,removeFromCart,setQuantity,onRemove}) => {
    return (
        <div class="card-body" >

        <div class="table-responsive">
    
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th width="100"> Product Image </th>
    
                <th> Product Name </th>
                <th>Pice </th>
                <th>Quantity</th>
                <th>Remove </th>
              </tr>
            </thead>
            <tbody>
         
              <tr>
                <td> <img class="w-100" src={product.image}></img></td>
                <td> {product.name}</td>
                <td> Rs.{product.price}</td>
                <td>
                    <div >
    
    <Button size="small" type="button" onClick={() => setQuantity(product,product.quantity - 1)} >-</Button>
    <Typography>{product.quantity}</Typography>
    <Button size="small" type="button" onClick={() => setQuantity(product,product.quantity+1)} >+</Button>
    </div> 
                </td>
                <td>
                    <Button variant="contained"  color="secondary" type="button" onClick={() => removeFromCart(product)}>Remove</Button>
    
                </td>
              </tr>
            
            </tbody>
          </table>
    
        </div>
      </div>
    )
}

export default CartData

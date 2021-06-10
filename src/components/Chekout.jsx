import { Badge, Button } from '@material-ui/core'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const Chekout = ({totalItems,cart,getProductsTotal}) => {
    return (
        <Fragment>
  <main class="mt-5 pt-4">
    <div class="container wow fadeIn">

      <h2 class="my-5 h2 text-center">Checkout form</h2>

      <div class="row">

        <div class="col-md-8 mb-4">

          <div class="card">

            <form class="card-body">

              <div class="row">

                <div class="col-md-6 mb-2">

                  <div class="md-form ">
                    <label for="firstName" class="">First name</label>

                    <input type="text" id="firstName" class="form-control" />
                  </div>

                </div>
              
                <div class="col-md-6 mb-2">

                  <div class="md-form">
                    <label for="lastName" class="">Last name</label>

                    <input type="text" id="lastName" class="form-control" />
                  </div>

                </div>

              </div>

              <div class="md-form input-group pl-0 mb-5">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1" />
              </div>

              <div class="md-form mb-5">
                <label for="email" class="">Email (optional)</label>

                <input type="text" id="email" class="form-control" placeholder="youremail@example.com" />
              </div>

              <div class="md-form mb-5">
                <label for="address" class="">Address</label>

                <input type="text" id="address" class="form-control" placeholder="1234 Main St" />
              </div>

              

              <div class="row">

                <div class="col-lg-4 col-md-12 mb-4">

                  <label for="country">Country</label>
                  <select class="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>Pakistan</option>

                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>

                </div>


                <div class="col-lg-4 col-md-6 mb-4">

                  <label for="zip">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required />
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>

                </div>

              </div>

              <hr />

              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="same-address" />
                <label class="custom-control-label" for="same-address"> &nbsp; Shipping address is the same as my billing address</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="save-info" />
                <label class="custom-control-label" for="save-info">&nbsp; Save this information for next time</label>
              </div>

              <hr />

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                  <label class="custom-control-label" for="credit">&nbsp; Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
                  <label class="custom-control-label" for="debit">&nbsp; Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                  <label class="custom-control-label" for="paypal">&nbsp; Paypal</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required />
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr class="mb-4 "/>
        <div  class="text-center ">

              <Button type="button" size="large" color="secondary" variant="contained"  >Continue to shipping</Button>
        &nbsp;
        <Button component={Link} to='/cart' type="button" size="large" color="primary" variant="contained"> Go Back to Cart</Button>
</div>
            </form>

          </div>

        </div>

        <div class="col-md-4 mb-4">

          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <Badge badgeContent={totalItems} color="secondary" />
            
          </h4>
          {cart.map((product) => (

          <ul class="list-group mb-3 z-depth-1">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
              <p width="100"><img style={{width: '20%', height: '20%'}} src={product.image}></img></p>
                <h6 class="my-0">{product.name} <small class="text-muted">({product.quantity})</small></h6>
                
                <small class="text-muted">{product.description}</small>
              </div>
              <span class="text-muted">Rs.{product.price}</span>
            </li>
          </ul>
           
           
            

        ))}

        <li class="list-group-item d-flex justify-content-between">
              <span>Total (Rs)</span>
              <strong>{getProductsTotal()}</strong>
            </li>
          

        </div>

      </div>

    </div>
  </main>
  </Fragment>
    )
}

export default Chekout

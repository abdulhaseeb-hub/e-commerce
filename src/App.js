import logo from './logo.svg';
import './App.css';
import { Typography } from '@material-ui/core';
import Navbar from './components/Navbar'
import Slider from './components/slider'
import Products from './components/Products'
import {React,Fragment, useState, useEffect} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Cart from './components/Cart'
import Chekout from './components/Chekout'

const cartFromStorage = JSON.parse(localStorage.getItem('cart') || "[]");
function App() {

  const [cart,setCart] =useState(cartFromStorage);
  const [search, setSearch] = useState("");

  useEffect(() => {
    
    localStorage.setItem("cart",JSON.stringify(cart));
    
  }, [cart])


  const [show, setShow] = useState(true);
  const [products,setProducts] =useState([

    { id : 1,
      name : 'Toy Car',
      price:2000,
      description:"Ver Good Product",
      image:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
     { id : 2,
      name : 'Bicycle',
      price:15990,
      description:"Ver Good Product",
      image:'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
      { id : 3,
        name : 'Soda',
        price:1000,
        description:"Ver Good Product",
        image:"https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }

  ]);

  const addToCart = (product) => {
    
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
     
    if(itemInCart){
      itemInCart.quantity++;
    }
    else{
      itemInCart = {
        ...product,
        quantity:1
      }
      newCart.push(itemInCart);
    }

    // setCart([...cart,{...product}]);
    setCart(newCart);



  }

  const removeFromCart = (productRemove) => {

    setCart(cart.filter((product) => product !== productRemove))

  }

  const clearCart = () => {

    console.log("cleared");
    setCart([]);
  }

  const getProductsTotal = () => {

    return cart.reduce((sum , {price,quantity}) => sum + price * quantity ,0);

  }

  const getTotalCart = () => {

    return cart.reduce((sum , {quantity}) => sum + quantity ,0);

  }


  const setQuantity = (product,amount) => {

    
    const newCart = [...cart];

    newCart.find((item) => product.name  === item.name  ).quantity = amount;
    
    if (product.quantity == 0) {
      setCart(newCart.filter((x) => x.id !== product.id));
      
    } else {

      
      setCart(newCart)
    }

  }




  return (

    <BrowserRouter>

    
<Fragment>

  


   
    <Route  path="/" exact component={Products}>
    <Navbar totalItems= {getTotalCart()} />
    
    <Slider />
    

    <Products  products ={products}  addToCart={addToCart} />

    </Route>
    <Route  path="/cart" exact component={Cart}>
    <Navbar totalItems= {getTotalCart()} />
    <br></br>
    <br></br>
    <br></br>
    <br></br>



    <Cart  cart ={cart}  removeFromCart={removeFromCart} clearCart={clearCart}
      getProductsTotal={getProductsTotal} setQuantity={setQuantity}  />

    </Route>

    

    <Route  path="/checkout" exact component={Chekout}>


    <Chekout totalItems= {getTotalCart()} cart ={cart}  getProductsTotal={getProductsTotal}/>

    </Route>



  
    </Fragment>

    </BrowserRouter>
    
    
  );
}

export default App;

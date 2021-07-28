import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Order from './components/Order';

const promise = loadStripe("pk_test_51Ig3hgSHtjlrMibML6tzEQblh41vnsHAProPnQ3sO0CIlGUjlo3b5frpcL9bcl8RvWBeOSQ2SJ46fR04IMtxudWs00SYeUjZ8S");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/orders">
           <Header/>
            <Order />       
          </Route>
          <Route path="/login">
            <Login />       
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />        
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

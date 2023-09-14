import './App.css';
// import About from './Component/Route/About';
import React from 'react';
import Home from './Component/Route/Home';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Component/Route/Navbar';
import NoMatch from './Component/Route/NoMatch';
import Products from './Component/Route/Products';
import Featured from './Component/Featured';
import New from './Component/New';
import User from './Component/Route/User';
import User1 from './Component/Route/User1';
import { AuthProvider } from './Component/Route/Auth';
import { Login } from './Component/Route/Login';
import { Profile } from './Component/Route/Profile';
import OrderSummary from './Component/Route/OrderSummary';
// import { RequiredAuth } from './Component/Route/RequiredAuth';
const LazyAbout =React.lazy(()=>import('./Component/Route/About'))



function App() {
  return (
    // <Provider store={store}>
    <AuthProvider>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<LazyAbout/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route path='featured' element={<Featured/>}></Route>
          <Route path='new' element={<New/>}></Route>
        </Route>
        <Route path='ordersummary' element={<OrderSummary/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
        <Route path='user' element={<User/>}></Route>
        <Route path='user/:userId' element={<User1/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>



      </Routes>
     {/* <HookCakeContainer></HookCakeContainer> */}
     {/* <HookCakeContainer></HookCakeContainer> */}
    </div>
    </AuthProvider>
  );
}

export default App;

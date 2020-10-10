import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import HomePage from './pages/homepage/homepage.component';
//import ShopPage from './pages/shop/shop.component';
import {Switch,Route} from 'react-router-dom';
import Header from './components/header/header.component';
import Top from './components/top/top.component';
import Jumb from './components/jumbs/jumbs.component';
import CollectionItem from './components/collection-item/collection-item.component';




class App extends Component {
  render(){
  return (
    <div className="App">
      <Top/>
      <Header/>
      <Jumb/>
      <CollectionItem/>  
        </div>
  );
  }
}

export default App;

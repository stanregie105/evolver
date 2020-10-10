  
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../search/search.component';


import { ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg';
 
import './header.styles.scss';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      searchField: ''
    }
    this.handleChange=this.handleChange.bind(this);
  }
  
   handleChange=(e)=>{
     e.preventDefault();
     this.setState({ searchField:e.target.value});
    }

    render(){
  return(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
     <SearchBox
      
        placeholder="search-items"
        handleChange={this.handleChange}
       />
    <div className='options'>
       <Link className='option' to='/shop'>
       <ul className='top'>
             <li><i class="fab fa-accusoft"></i></li>
             <li> My Account</li>
      </ul>
      </Link>
      <Link className='option' to='/shop'>
      <ul className='top'>
        <li><i class="fas fa-archive"></i></li>
        <li>List</li>
      </ul>
      </Link>
      <Link className='option' to='/shop'>
      <ul className='top'>
        <li><i class="fas fa-caravan"></i></li>
        <li>Cart</li>
      </ul>
      </Link>
      
    </div>
  </div>
  )
    }
};

export default Header;
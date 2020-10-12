  
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
<i class="fas fa-archway"></i>
    </Link>
     <SearchBox
      
        placeholder="search for a product or sale"
        handleChange={this.handleChange}
       />
    <div className='options js--main-nav'>
    <ul class="list-unstyled main-nav js--main-nav">

      <li> <Link className='option' to='/!#'>
       <ul className='top'>
             <li><i class="fab fa-accusoft"></i></li>
             <li> My Account</li>
      </ul>
      </Link></li>
      <li><Link className='option' to='/!#'>
      <ul className='top'>
        <li><i class="fas fa-archive"></i></li>
        <li>List</li>
      </ul>
      </Link></li>
     <li> <Link className='option' to='/!#'>
      <ul className='top'>
        <li><i class="fas fa-caravan"></i></li>
        <li>Cart</li>
      </ul>
      </Link></li>
   </ul>
    </div>
          <a className="mobile-nav-icon js--nav-icon"><i class="fas fa-bars"></i></a>

  </div>
  )
    }
};

export default Header;
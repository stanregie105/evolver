import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = () => (
  <Fragment>
  <div className='collection-item row'>
    <div className='little-frame col-sm-4'>
      <div className='explorex'>
        <strong>Explore our Showroom</strong>
      </div>
      <div className='explore'>
        <p>Not sure of what you are looking for?<br/>No worries, use
           <strong>Light Explorers</strong>to <br/>see what you can get</p>
        
      </div>
      <button class="button">Proceed to lighting xplorer<i class="fas fa-arrow-right"></i></button>
    </div>
  </div>
  <div className='container'>
    <div className='row space'>
      <div className='rex'>
      <p><strong>Shop By Space</strong> <a href='!#'>view all</a><br/>
      Select the type of apartment you want to light up</p>
      </div>
    </div>
    <div className='row apartment'>
      <div className='col-sm-4 home'>
        <img src="img/download2.jpg"/>
      </div>
      <div className='col-sm-4 home'>
         <img src="img/download3.jpg"/>
      </div>
      <div className='col-sm-4 home'>
         <img src="img/download4.jpg"/>
        </div>
    </div>
    <div className='row'>
    <div className='popular'>
      <p><strong>Popular Category</strong> <a href='!#'>view all</a></p>
      </div>
    </div>
  <div className='lights row'>
    <div className='lamp col-sm-6'>
       <button class="buttonl">CIELING LAMP</button>
    </div>
     <div className='chandelier col-sm-6'>
       <button class="buttonc">CHANDELIER</button>
      </div>
  </div>
  <div className='row'>
    <div className='col-sm-9'>
      </div>
      <div className='col-sm-3'>
        <ul className='direct'><li><i class="fas fa-arrow-left"></i></li><li><i class="fas fa-arrow-right"></i></li></ul>
      </div>
    </div>
    <div className='row'>
      </div>
  </div>
  </Fragment>
);

export default CollectionItem;
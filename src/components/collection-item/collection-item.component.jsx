import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import Top from '../top/top.component';

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
        <img src="img/download2.jpg" class='rover'/>
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
    <div className='row product'>
       <div className='col-sm-4 popular'>
          <p><strong>Popular Product</strong> <a href='!#'>view all</a></p>
      </div>
      <hr/>
      <div className='row '>
        <div className='col-sm-3'>
            <img src="img/download7.jpg"/>
            <ul className='prod1'>
              <li>
                Standing Lamp
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
        </div>
          <div className='col-sm-3'>
            <img src="img/download8.jpg"/>
            <ul className='prod1'>
              <li>
                Wooden Chandelier
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
          </div>
          <div className='col-sm-3'>
             <img src="img/download9.jpg"/>
               <ul className='prod1'>
              <li>
                Penchant Lamp
               </li>
               <li>
                <strong>N15,000</strong>
               </li>
              </ul>
         </div>
          <div className='col-sm-3'>
             <img src="img/download2.jpg"/>
               <ul className='prod1'>
              <li>
                Standing Lamp
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
        </div>
        </div>
         <div className='row'>
        <div className='col-sm-3'>
                  <img src="img/download11.jpg"/>
            <ul className='prod1'>
              <li>
                Standing Lamp
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
          </div>
          <div className='col-sm-3'>
                    <img src="img/download12.jpg"/>
              <ul className='prod1'>
              <li>
                Standing Lamp
               </li>
               <li>
                <strong>N425,000</strong>
               </li>
              </ul>
          </div>
          <div className='col-sm-3'>
              <img src="img/download13.jpg"/>
              <ul className='prod1'>
              <li>
                Penchant Lamp
               </li>
               <li>
                <strong>N15,000</strong>
               </li>
              </ul>
          </div>
          <div className='col-sm-3'>
              <img src="img/download14.jpg"/>
              <ul className='prod1'>
              <li>
               Wooden Chandelier
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
          </div>
        </div>
        
      </div>
       <div className='row product2'>
       <div className='col-sm-4 popular'>
          <p><strong>Product on Sale</strong> </p>
      </div>
      <hr/>
      <div className='row '>
        <div className='col-sm-3'>
            <img src="img/download7.jpg"/>
            <ul className='prod1'>
              <li>
                Standing Lamp
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
             
        </div>
          <div className='col-sm-3'>
            <img src="img/download8.jpg"/>
            <ul className='prod1'>
              <li>
                Wooden Chandelier
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
              
          </div>
          <div className='col-sm-3'>
             <img src="img/download9.jpg"/>
               <ul className='prod1'>
              <li>
                Penchant Lamp
               </li>
               <li>
                <strong>N15,000</strong>
               </li>
              </ul>
                  
         </div>
          <div className='col-sm-3'>
             <img src="img/download2.jpg"/>
               <ul className='prod1'>
              <li>
                Standing Lamp
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>     
              
        </div>
        </div>
         <div className='row'>
        <div className='col-sm-3'>
                  <img src="img/download11.jpg"/>
            <ul className='prod1'>
              <li>
                Standing Lamp
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
            
          </div>
          <div className='col-sm-3'>
                    <img src="img/download12.jpg"/>
              <ul className='prod1'>
              <li>
                Standing Lamp
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
                  
          </div>
          <div className='col-sm-3'>
              <img src="img/download13.jpg"/>
              <ul className='prod1'>
              <li>
                Penchant Lamp
               </li>
               <li>
                <strong>N15,000</strong>
               </li>
              </ul>
                  
          </div>
          <div className='col-sm-3'>
              <img src="img/download14.jpg"/>
              <ul className='prod1'>
              <li>
               Wooden Chandelier
               </li>
               <li>
                <strong>N45,000</strong>
               </li>
              </ul>
                
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 productl '>
            <ul className='topper-roots'>
               
                <li className='topper-childs'><i class="fa fa-envelope fa-lg"></i> sales@thelightinghouse.com</li>
            </ul>
            <div className='offers'>
              <p>Subscribe to our newsletters to get <br/>
              updates on our latest offers!!</p>
              </div>
               <div className='Emailer'>
              <p> Enter email address here</p>
              </div>
              <hr className='hor'/>
           <button class="buttono">Subscribe</button>

          </div>
          <div className='col-sm-6 productr'>
          </div>
        </div>
  </div>
  <div className='row spaceout'>
    </div>
  
    <footer class="footer">
        <div class="container">
            <div class="row"> 
                  <div class="col-sm-3 water">
                    <h5><i class="fas fa-archway"></i></h5>
                    <h6>The LIGHTINGCHAUS</h6>
                    <p>
		              121, Clear Water Bay Road<br/>
		              Clear Water Bay, Kowloon<br/>
		              HONG KONG<br/>
		            </p>
                </div>            
                <div class="col-sm-2 quick">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled utils">
                        <li>LIGHTING EXPLORERS</li>
                        <li>OFFICE</li>
                        <li>HOTEL</li>
                        <li>HOME</li>
                        <li>MY ACCOUNT</li>
                        <li>CART</li>
                    </ul>
                </div>
            
                <div class="col-12 col-sm-4 socials">
                  <h5>Connect</h5><br/>
                  <h6>Connect with us on social media</h6>
                    <div class="text-center soc">
                        <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
                        <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i></a>
                    </div>
                </div>
                <div className='col-sm-3 mob'>
                  <i className="fas fa-archway"></i>
                   <ul className="list-unstyled access">
                        <li><strong>download our mobile app</strong></li>
                        <li>get access to exclusive offers</li>
                     </ul>
                      <div className="accessimg">
                        <img src="img/download-app.svg" alt="App Store button"/>
                        <img src="img/download-app-android.png" alt="Play Store button"/>
                     </div>
                  </div>
           </div>
           
        </div>
    </footer>
    <Top/>
  </Fragment>
);

export default CollectionItem;
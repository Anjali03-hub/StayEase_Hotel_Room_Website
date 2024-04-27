 import './main.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav1 from './nav';
import { Link } from "react-router-dom";


function  Main()
{
    return(
        <>
        
        <div  className='backimg'>

          <Nav1/>
      
           <div class="text" >
           WELCOME TO<br></br>
           "StayEase"<br></br>
            HOTEL</div>
            </div>


        
  {/* //-------------Rooms Card Section-----------// */}
    <div id='rooms'>
    <div className='container-fluid ' >
      <h2 className='mt-1 pt-3 mb-4 text-center fw-bold ' style={{fontFamily:'Merienda'}}> OUR ROOMS</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 my-3'>
          <div class="card border-0 shadow" style={{maxWidth: '350px', margin:'auto'}}>
  <img src="/images/simple room.webp" class="card-img-top" alt="..."/>

  <div class="card-body">
    <h5 class="card-title">SIMPLE ROOM</h5>
    <h6 class="mb-4"> ₹800 per night</h6>
    <div class='feature mb-4 '>
      <h6 class="mb-1">Features</h6>
      <span class="badge rounded-pill bg-light text-dark text-wrap">1 Room
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">1 Bathroom
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">1 Balcony
      </span><span class="badge rounded-pill bg-light text-dark text-wrap">2 Sofa
      </span>
      </div>
      <div class='facilities mb-4 '>
      <h6 class="mb-1">Facilities</h6>
      <span class="badge rounded-pill bg-light text-dark text-wrap">Wifi
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">Televison
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">Room Heater
      </span>
     

    </div>

  </div>
  
</div>
</div>

<div className='col-lg-4 col-md-6 my-3'>
          <div class="card border-0 shadow" style={{maxWidth: '350px', margin:'auto'}}>
  <img src="/images/non ac.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Non-AC ROOM</h5>
    <h6 class="mb-4"> ₹800 per night</h6>
    <div class='feature mb-4 '>
      <h6 class="mb-1">Features</h6>
      <span class="badge rounded-pill bg-light text-dark text-wrap">1 Room
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">1 Bathroom
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">1 Balcony
      </span><span class="badge rounded-pill bg-light text-dark text-wrap">5 Sofa
      </span>
      </div>
      <div class='facilities mb-4 '>
      <h6 class="mb-1">Facilities</h6>
      <span class="badge rounded-pill bg-light text-dark text-wrap">Wifi
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">Televison
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">Room Heater
      </span>
     

    </div>
   
  </div>
</div>
 </div>
 <div className='col-lg-4 col-md-6 my-3'>
          <div class="card border-0 shadow" style={{maxWidth: '350px', margin:'auto'}}>
  <img src="/images/superiorroom.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SUPERIOR  ROOM</h5>
    <h6 class="mb-4"> ₹800 per night</h6>
    <div class='feature mb-4 '>
      <h6 class="mb-1">Features</h6>
      <span class="badge rounded-pill bg-light text-dark text-wrap">1 Room
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">2 Bathroom
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">1 Balcony
      </span><span class="badge rounded-pill bg-light text-dark text-wrap">5 Sofa
      </span>
      </div>
      <div class='facilities mb-4 '>
      <h6 class="mb-1">Facilities</h6>
      <span class="badge rounded-pill bg-light text-dark text-wrap">Wifi
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">Televison
      </span>
      <span class="badge rounded-pill bg-light text-dark text-wrap">Room Heater
      </span>
     

    </div>
   
  </div>
</div>

</div>

 </div>
 </div> 
</div>
</div>


      
   
  {/* //-------------Facility Section-----------// */}
 <div id='facilities'>
    <h2 className='mt-1 pt-3 mb-4 text-center fw-bold ' style={{fontFamily:'Merienda'}}>OUR FACILITIES</h2>
    <div className='container'>
      <div className='row justify-content-evenly px-lg-0 px-md-0 px-5'>
        <div className='col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3'   >
          {/* <img src='/images/wifi.png' style={{width:"80px"}}/> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="70" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16">
  <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
  <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
</svg>
          <h5 className='mt-3'>Wifi</h5>
        </div>
        <div className='col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3'  >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="75" fill="currentColor" class="bi bi-p-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5V4.002Zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z"/>
</svg>
          <h5 className='mt-3'>Parking</h5>
        </div>
        <div className='col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3'   >
          <img src='/images/food.png' style={{width:"80px"}}/>
          <h5 className='mt-3'>Food</h5>
        </div>
        <div className='col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3'>
          <img src='/images/pool.png' style={{width:"80px"}}/>
          <h5 className='mt-3'>Pool</h5>
        </div>
        
      </div>
    </div>
    </div>


   

                 {/* //-------------Footer Section-----------// */}
      <footer class='footer'>
        <div class='container'>
          <div class='row'>

            <div className='footer-col'>
              <h4>Location</h4>
              <ul>
                <li><a href=''>122,Kamri Marg ,Ujjain - 456006(M.P.)</a></li>
              </ul>
              <h5>Email Id</h5>
              <ul>
                <li> <a href="mailto:anjaliparmal5@gmail.com">anjaliparmal5@gmail.com</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Quick Link</h4>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='#rooms'>Rooms</a></li>
                <li><a href='fact'>Facilities</a></li>
                <li><a href='about'>About us</a></li>
                <li><a href='/contact'>Contact us</a></li>
              </ul>
            </div> <div className='footer-col'>
              <h4>Contact Us</h4>
              <ul>
                <li> <a href="tel:+917999164265">+917999164265</a> </li>
                <li><a href="tel:+917770130152">+917770130152</a></li>
                <li><a href="tel:+919907301031">+919907301031</a></li>
              </ul>
            </div>


            <div className='footer-col'>
              <h4>Follows</h4>
              <div className='social-link'>

                <a href="https://instagram.com/anjali__parmar28?igshid=MzRlODBiNWFlZA==" style={{ color: "black" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-facebook " viewBox="0 0 16 16"  >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-twitter " viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                {/* <p className='end'>Design By
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-emoji-smile-fill ml-2" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>
                 &nbsp;Anjali Parmal</p> */}



              </div>
            </div>
          </div>
        </div>
      </footer>
   
  
             
              


   
    </>
    )
}
export default Main;
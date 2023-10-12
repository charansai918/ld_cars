import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import CarRentals from './CarRentals';
import { Link } from 'react-router-dom';


function BootstrapCars() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='ldmain'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="cont">
      <img src='https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg'
            width="50" alt='' onClick={handleShow}/>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className='offt'>
        <Offcanvas.Title>
        <Link to="/pvf" id='link'>
        <Navbar.Brand  id='utit'>U</Navbar.Brand>
        </Link>
         <h2 id='htw'>Customer</h2>   
         <h6 id='hsix'>9393608924@gmail.com</h6>
         <h5 id='hfiv'>9393608924</h5>
         <div className='canv'>
          <img id='ldc' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGqnOQDG4yWol8BOf1zQLawWfpvtpqxatXQ&usqp=CAU' alt="Third slide"/>
          <p id='cash'>LDC CASH <br/> 0</p>
          <img id='ldcimag' src='./imags/linesymbol.png' alt=''/>
          <Link to='/pvf'><img id='ldc' src='./imags/doc-icon.png' alt="Third slide"/>
          <p id='cash'>Documents <br/> Not Verified</p></Link>
         </div>
         </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Navbar.Brand  className='nav'>
        <Link to="/pvf" id='link'> 
         <img src='./imags/logo-1.png' 
         width="30"
         alt='' />
         <Navbar.Brand href="" id='titl'>Profile Verification</Navbar.Brand></Link>
          </Navbar.Brand>
          <br/>
          <Navbar.Brand className='nav'>
          <Link to="/ref"id='link'> 
         <img id='phot' src='./imags/rfe.png' 
         width="30"
         alt='' />
         <Navbar.Brand href="" id='titl'>Refer & Earn</Navbar.Brand></Link>
          </Navbar.Brand>
          <br/>
          <Navbar.Brand className='nav'>
          <Link to='/myt' id='link'>  
         <img id='phot' src='./imags/carlogo.png' 
         width="30"
         alt='' />
         <Navbar.Brand href="" id='titl'>My Trips</Navbar.Brand></Link>
          </Navbar.Brand>
          <br/>
          <Navbar.Brand className='nav'>
          <Link to="/pri" id='link'>  
         <img id='phot' src='./imags/price-logo.png' 
         width="30"
         alt='' />
         <Navbar.Brand href="" id='titl'>Prices</Navbar.Brand></Link>
          </Navbar.Brand>
          <br/>
          <Navbar.Brand className='nav'>
          <Link to='/off' id='link'>  
         <img id='phot' src='./imags/offers-logo.png' 
         width="30"
         alt='' />
         <Navbar.Brand href="" id='titl'>Offers</Navbar.Brand></Link>
          </Navbar.Brand>
          <br/>
          <Navbar.Brand href="" className='nav'>
         <img id='phot' src='./imags/call-icon.png' 
         width="30"
         alt='' />
         <Navbar.Brand href="tel:123-456-7890p123" id='titl'>Call Us</Navbar.Brand>
          </Navbar.Brand>
          <br/>
          <Navbar.Brand href="" className='nav'>
         <img id='phot' src='./imags/whatsapp-icon.png' 
         width="30"
         alt='' />
         <Navbar.Brand href="https://wa.me/whatsappphonenumber/?text=urlencodedtext" id='titl'>Whatsapp</Navbar.Brand>
          </Navbar.Brand>
          <br/>
          <Navbar.Brand href="" className='nav'>
          <Link to='/tcs' id='link'>  
         <img id='phot' src='./imags/terms-icon.png' 
         width="30"
         alt='' />
         <Navbar.Brand href="" id='titl'>Terms & Conditions</Navbar.Brand></Link>
          </Navbar.Brand>
          <br/>
          <Navbar.Brand href="" className='nav'>
          <Link to='/log' id='link'>  
         <img src='./imags/logout2-icon.png' 
         width="30"
         alt='' />
         <Navbar.Brand href="" id='titl'>LogOut</Navbar.Brand></Link>
          </Navbar.Brand>
        </Offcanvas.Body>
      </Offcanvas>

        <Navbar.Brand href="#">
        <img
              src='./imags/car-logo.png'
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Brand href="#" id="head">LONG DRIVE CARS</Navbar.Brand>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src='./imags/bell.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
      </Container>
    </Navbar>
    </div>
   <div>
    <CarRentals/>
   </div>
        <div className='zeromain'>
          <img id='zero1' src='./imags/zero-icon1.png' alt=''/>
          <img id='zero2' src='./imags/zero-depositt.png' alt=''/>
          <br/>
          <img id='dcar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmYVzZtMGcgIQl2LPD2kGoFFsHjDBVIGbXw&usqp=CAU' alt='' width="30px" height="30px"/>
          <p id='dcar'>Damage Protection</p>
          <br/>
          <h4 id='numb'>9000-478-478</h4>
        </div>
        <br/>
        <div className='yuinic'>
          <a href='https://www.youtube.com/channel/UCSo__5uIhzTJkYy4bJAMVdQ'><img id='yuimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQtkkOvrNYvFfCWc6BRFjL7F1Kp70bsZObg&usqp=CAU' alt=''/></a>
          <a href='https://www.instagram.com/longdrivecars_official/?hl=en'><img id='inimg' src='https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg' alt=''/></a>
        </div>
        <br/>
        <img className='prip' src="https://www.longdrivecars.com/ldcars_assets/img/two.webp"
          alt="First slide"/>
    <img className='prip' src="https://www.longdrivecars.com/ldcars_assets/img/three.webp"
          alt="Second slide"/>
     <img className='prip' src="https://www.longdrivecars.com/ldcars_assets/img/one.webp"
          alt="Third slide"/> 
    <img className='smg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UPNPeXx7lOyPym5u1MmQDmwl_3Rj2WrQqA&usqp=CAU' alt="Third slide"/>
    <img className='smg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrcbOZXgF5J8kqnUpDr9J_IPL4QtIIlMrvw&usqp=CAU' alt="Third slide"/> 
    <img className='smg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJFw3gMBsLmcFnJw5k0XbVa9Uo-dXhQ193A&usqp=CAU' alt="Third slide"/> 
    <img className='smg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJPUDHC7OcHlRnhIpJJEWIgj-7MRoIbybNA&usqp=CAU' alt="Third slide"/> 
    <img className='smg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRXPecSE8KhQ85SHhtcf7jQ8w874ulwq8DQ&usqp=CAU' alt="Third slide"/>
    <img className='smg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3dwYgK1eZi8_SHZC7rXPFUHs77cv3sAuKw&usqp=CAU' alt="Third slide"/>
    <div>
    <h1 id='que'>Questions</h1>
    <Link to='/que'><p id='view'>View All</p></Link>
    </div>
    <div className='acit'>
    <Accordion defaultActiveKey="0" className='acco'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Documents Required</Accordion.Header>
        <Accordion.Body className='acbody'>
          Aadhar & Driving Licence.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Damage ?</Accordion.Header>
        <Accordion.Body className='acbody'>
         <p className='accdiv'>Incase of damage Rent Amount No Refund & No Abjustment for Another Car booking</p>
        <p className='accdiv'>For damage Upto 2 Lakhs</p>
        <p className='accdiv'>No insurance will be Applied</p>  
        <p className='accdiv'>Custmer has to Pay 2 Lakh Rupees</p>
        <p className='accdiv'>if damage more than 2 Lakhs Customer has to Pay 2 Lakhs Rupess</p>
        <p className='accdiv'>if basic protection taken he has to pay 20000</p>
        <p className='accdiv'>if premium protection taken he has to pay 10000</p> 
        <p className='accdiv'>Custmer has to bring FIR copy from police station</p> 
        <p className='accdiv'>Custmer has to keep his Driving Licence for Applying insurance</p>
        <p className='accdiv'>Custmer has to Visit Police Station & for insurance company Verification many times until the insurance process is completed.</p> 
        <p className='accdiv'>Damage protection plan fees are non-refundable once Delivered</p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Extension Rules ?</Accordion.Header>
        <Accordion.Body className='acbody'>
        <p className='accdiv'>After Return Time engine will off Automatically.</p>
        <p className='accdiv'>upto 23 Hours extension or Late 5 seater 400/hr,7 sedter 600/hr</p>
        <p className='accdiv'>24hrs above Extension both Rent Amount & Damage protection Amount will be doubled</p>  
        <p className='accdiv'>Note: Free Extension before pickup Time Modify in Mytrips in App</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Late Fee ?</Accordion.Header>
        <Accordion.Body className='acbody'>
        <p className='accdiv'>400/hr for 5 Seater</p>
        <p className='accdiv'>600/hr for 6,7,8 seater</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Cancellation ?</Accordion.Header>
        <Accordion.Body className='acbody'>
        <p className='accdiv'>500% Refund befor 12hr pick-up Time</p>
        <p className='accdiv'>25% Refund before 6hr pick-up Time</p>
        <p className='accdiv'>10% Refund befor 2ht pick-up Time</p>
        <p className='accdiv'>0% Refund After That</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>   
    </div>
  )
}

export default BootstrapCars
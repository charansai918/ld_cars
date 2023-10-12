import React,{useRef,useState} from 'react';
import { Link } from 'react-router-dom';

function ProfileVerification() {

  const fileInputRef=useRef(null);
  const [file,setFile]=useState(null);

  const handleImageClick=()=>{
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <h1 id='pvcn'>Profile Verification</h1> 

      <div className='form-pro'> 
      <div className='form-main'>

        <div id='profo'>
        <h1 id='profile'>Profile</h1>
        </div>

      <div className="form-group">
       <label for="name">Name as Per Driving Licence</label>
       <div className="input-group">
        <img  id='person' src='./imags/person-icon.png' alt=''/>
        <img id='line' src='./imags/line.png' alt=''/>
         <input id="name" type="text" placeholder='Name' className="form-login @error('password') is-invalid @enderror"/>
         <img id='pencil' src='./imags/pencil.png' alt=''/>
       </div>
       </div>

      <div className="form-group">
       <label for="email">Email</label>
      <div className="input-group">
        <img  id='person' src='./imags/email-icon1.png' alt=''/>
        <img id='line' src='./imags/line.png' alt=''/>
         <input id="email" type="email" placeholder='Email' className="form-login @error('password') is-invalid @enderror"/>
         <img id='pencil' src='./imags/pencil.png' alt=''/>
      </div>
      </div>

      <div className="form-group">
       <label for="phone">Phone number</label>
       <div className="input-group">
         <img  id='person' src='./imags/phone-icon.png' alt=''/>
         <img id='line1' src='./imags/line.png' alt=''/>
         <input id="phone" type="number" placeholder='Phone number' className="form-login @error('password') is-invalid @enderror"/>
      </div>
      </div>

      <div className="form-group">
       <label for="aadhar">Aadhar number</label>
       <div className="input-group">
         <img id='person' src='./imags/drive-icon.png' alt=''/> 
         <img id='line1' src='./imags/line.png' alt=''/>
         <input id="aadhar" type="number" placeholder='Aadhar number' className="form-login @error('password') is-invalid @enderror"/>
         <img id='pencil' src='./imags/pencil.png' alt=''/>
      </div>
      <img id='uplod' src='./imags/uplod.png'
      style={{cursor:'pointer'}}
      onClick={handleImageClick} 
      alt='Upload'/>
      <input ref={fileInputRef}
      type='file'
      style={{display:'none'}}
      onChange={handleFileChange}/>
      <img id='uplod' src='./imags/uplod.png'
      style={{cursor:'pointer'}}
      onClick={handleImageClick} 
      alt='Upload'/>
      <input ref={fileInputRef}
      type='file'
      style={{display:'none'}}
      onChange={handleFileChange}/>
      </div> 

      <div className="form-group">
       <label for="driving">Driving License number</label>
       <div className="input-group">
         <img  id='person' src='./imags/drive-icon.png' alt=''/>
         <img id='line1' src='./imags/line.png' alt=''/>
         <input id="driving" type="text" placeholder='Driving Licence number' className="form-login @error('password') is-invalid @enderror"/>
         <img id='pencil' src='./imags/pencil.png' alt=''/>
      </div>
      <img id='uplod' src='./imags/uplod.png'
       style={{cursor:'pointer'}}
       onClick={handleImageClick}  
       alt='Upload'/>
       <input ref={fileInputRef} 
       type='file'
       style={{display:'none'}}
       onChange={handleFileChange}/>
      <img id='uplod' src={process.env.PUBLIC_URL+'./imags/uplod.png'}
      style={{cursor:'pointer'}}
      onClick={handleImageClick}
       alt='Upload'/>
       <input ref={fileInputRef}
       type='file'
       style={{display:'none'}}
       onChange={handleFileChange}/>
      </div> 
      <Link to='/log'>
      <img className='flgt' src='./imags/logout2-icon.png' width="30" height='30px' alt='' />
      <p className='flgt'>Logout</p></Link>
      </div>
      </div>
      
    </div>
  )
}

export default ProfileVerification
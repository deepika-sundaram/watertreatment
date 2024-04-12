
import { useState } from 'react';
import './home.css';
import {Admin} from './Admin.jsx';
import {NewEntry} from './NewEntry.jsx';
import {AddNewDevice} from './AddNewDevice.jsx';
import {CreateUser} from './CreateNewUser';
import { useLocation } from 'react-router-dom';

import {View} from './View.jsx';

 export function Home() {
 
  const location = useLocation();
  const username = location.state.username;
  console.log(username);
 let intials=username[0].toUpperCase()+username[1].toUpperCase();

    const [selectedItem, setSelectedItem] = useState('NewEntry');
   

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    

 return (
    <div className="home">
        <span className= 'header'>
  <div className="heading">Water  Monitoring
  
 </div> 
                
                <ul className="drawer-menu">
                    <li onClick={() => handleItemClick('NewEntry')}>Home</li>
                   <li onClick={() => handleItemClick('View')}>View all entered data</li>
                    <li onClick={() => handleItemClick('Admin')}>Update the normal range</li>
                    <li onClick={() => handleItemClick('AddNewDevice')}>Add new device</li>
                    <li onClick={() => handleItemClick('CreateNewUser')}>Create new user</li>
                 
                </ul>
                {/* <button type="button" className="menuButton" onClick={handleMenuButtonClick}>
            ☰
          </button> */}
              <div className='profile-dropdown'>
                <div data-initials={intials} className="intials"></div>
                
       
  
                </div>
                </span>


  
   
    <div className='content'>
    
        {selectedItem==='Admin'?<Admin/>:''}
        {selectedItem==='NewEntry'?<NewEntry userName={username}/>:''}
          {selectedItem==='View'?<View/>:''}
          {selectedItem==='AddNewDevice'?<AddNewDevice/>:''}
          {selectedItem==='CreateNewUser'?<CreateUser/>:''}
     
  
    </div>
    </div>
  )
}




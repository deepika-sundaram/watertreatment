
import { useState } from 'react';
import './home.css'
import {Admin} from './Admin.jsx';
import {NewEntry} from './NewEntry.jsx';
import {AddNewDevice} from './AddNewDevice.jsx';
import {CreateUser} from './CreateNewUser';

import {View} from './View.jsx';

 export function Home() {
    const [selectedItem, setSelectedItem] = useState('NewEntry');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    
 return (
    <div className="home">
        
  <div className="heading">Water quality monitoring</div>
    <div className="drawer-container">
  
    
        <div className="drawer">
                
                <ul className="drawer-menu">
                    <li onClick={() => handleItemClick('NewEntry')}>Home</li>
                   <li onClick={() => handleItemClick('View')}>View all entered data</li>
                    <li onClick={() => handleItemClick('Admin')}>Update the normal range</li>
                    <li onClick={() => handleItemClick('AddNewDevice')}>Add new device</li>
                    <li onClick={() => handleItemClick('CreateNewUser')}>Create new user</li>
                 
                </ul>
            </div>
    <div className='content'>
         {/* <a href='/admin'>Update the normal range</a> */}
        {selectedItem==='Admin'?<Admin/>:''}
        {selectedItem==='NewEntry'?<NewEntry/>:''}
          {selectedItem==='View'?<View/>:''}
          {selectedItem==='AddNewDevice'?<AddNewDevice/>:''}
          {selectedItem==='CreateNewUser'?<CreateUser/>:''}
     
  
    </div>
    </div>
    </div>)
}




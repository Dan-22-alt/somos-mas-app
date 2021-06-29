import React from 'react';
import Header from '../backoffice/Header';
import Sidebar from "../backoffice/Sidebar"
import Dasboard from '../backoffice/Dasboard';

const BackofficePage = () => {
    return ( 
        <div>
            <div>
                <Header/>
            </div>
            <Sidebar/>
            <Dasboard/>
        </div>
     
     );
}
 
export default BackofficePage;
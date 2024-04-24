import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import TimelineComponent from '../timeline/TimelineComponent';
 
const Home = () => {
    const navigate = useNavigate();
 
    
    return(
        <>
            <nav>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			
        		</div>
            </nav>



            <TimelineComponent/>
        </>
    )
}
 
export default Home;
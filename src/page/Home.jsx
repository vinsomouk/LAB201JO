import React from 'react';
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
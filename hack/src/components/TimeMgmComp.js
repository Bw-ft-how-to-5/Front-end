import React, { useContext } from 'react';
import { TimeContext } from './stateManagement/TimeContext';
import ContentCard from './ContentCard';


const TimeMgmComp = () => {

    const {timeData, setTimeData}=useContext(TimeContext)

    return (

        <>

            <h1>Hacks about Time Managment</h1>
            <p>Time is too precious to waste, check out some time saving hacks below</p>
            <br />
            <p>Time Hacks</p>

            <ContentCard />
            

        </>

    );
    
};

// export default TimeMgmComp;
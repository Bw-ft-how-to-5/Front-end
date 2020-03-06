import React, { useState } from 'react';
import './App.css';

// import TimeMgmComp from './components/TimeMgmComp';
import StudyHacksComp from './components/StudyHacksComp';

import { StudyContext } from './components/stateManagement/StudyContext';
import { TimeContext } from './components/stateManagement/TimeContext';



import AppRouter from './components/AppRouterAP'


function App() {

  const [studyData, setStudyData] = useState([]);

  const [timeData, setTimeData] = useState([]);


  return (
    

    
          <div className="App">

            {/* <TimeMgmComp /> */}

           
            <AppRouter/> 
    
          </div>
       

     
  
      

    
  );
}

export default App;

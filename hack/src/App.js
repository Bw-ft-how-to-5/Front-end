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
    <div>

      <TimeContext.Provider value={{ timeData, setTimeData }}>
        <StudyContext.Provider value={{ studyData, setStudyData }} >
          <div className="App">

            {/* <TimeMgmComp /> */}

            <StudyHacksComp />

          </div>
        </StudyContext.Provider>
      </TimeContext.Provider>

      <div className="App">
  
      <AppRouter/> 
    </div>

    </div>

  );
}

export default App;

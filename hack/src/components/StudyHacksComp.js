import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { StudyContext } from './stateManagement/StudyContext';
import ContentCard from './ContentCard';

const StudyHacksComp = () => {

    const {studyData, setStudyData } = useContext(StudyContext)
    
    useEffect(() => {
        axios
          .get('https://howto5.herokuapp.com/api/study')
             .then(res => {
               console.log('STUDY HACK DATA FROM API', res)
               setStudyData(res.data)
             })
             .catch(error => {
               console.log("Sorry nothing returned", error);
             })
      }, []); 


    

    return (

        <>

            <h1>Hacks for studying</h1>
            <p>Get it in your brain fast with these hacks</p>
            <br />
            <p>Study Hacks</p>

            {studyData.map(item => <ContentCard item={item}/>)}

        </>

    );
    
};

export default StudyHacksComp;
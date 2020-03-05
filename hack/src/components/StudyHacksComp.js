import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { StudyContext } from './stateManagement/StudyContext';
import ContentCard from './ContentCard';
import axiosWithAuth from './utilities/axiosWithAuth';

const StudyHacksComp = (props) => {

    const {studyData, setStudyData } = useContext(StudyContext)

    const addHack = (hack) => {

      const userID = parseInt(window.localStorage.getItem('userid'));

      const [form, setForm] = useState({

        title: '',
        description: ''

      });

      const handleChanges = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
      }

      const postHackToServer = (event) => {
        event.preventDefault();

        let apiForm = {
          title: form.title,
          description: form.description
        }

        //axios with auth
        axiosWithAuth()
          .post('https://howto5.herokuapp.com/api/study')
          .then(res => {
            console.log(res)
            props.history.push('/study');
            window.location.reload();
          })
          .catch(err=> console.log('try again', err))
          setForm({title: '', description: ''})
      };
    };
    
    // useEffect(() => {
    //     axios
    //       .get('https://howto5.herokuapp.com/api/study')
    //          .then(res => {
    //            console.log('STUDY HACK DATA FROM API', res)
    //            setStudyData(res.data)
    //          })
    //          .catch(error => {
    //            console.log("Sorry nothing returned", error);
    //          })
    //   }, []); 


    

    return (

        <>

            <h1>Hacks for studying</h1>
            <p>Get it in your brain fast with these hacks</p>
            <br />
            <p>Study Hacks</p>

            <form onSubmit={postHackToServer}>

              <label htmlFor='title'>
                  <input type='text' name='title' onChange={handleChanges} value={apiForm.title} placeholder='input hack title'/>
              </label>

              <label htmlFor='description'>
                  <input type='text' name='description' onChange={handleChanges} value={apiForm.description} placeholder='input hack title'/>
              </label>

              <button type='submit' to='/'>Add a hack</button>

            </form>

            {studyData.map(item => <ContentCard item={item}/>)}

        </>

    );
    
};

export default StudyHacksComp;
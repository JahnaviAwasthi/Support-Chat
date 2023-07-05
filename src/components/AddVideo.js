import './AddVideo.css';
import { useState } from 'react';

function AddVideo({sV})
{
    //Defining all the other variables, apart from view and title for the video needed,
    //as they are not taken as an input
    const [video,setVideo]=useState(
        { //defining an object, therefore used {} this bracket
        time:'1 month ago',
        channel:"Jahnavi's Tutorials",
        verified : true
        }
    );
    function handleSubmit(e) //This event handler function picks up the actual inputs from 
    //input tags
    {
        e.preventDefault();
        // console.log(video);
        // console.log('Coming from handleSubmit');
        sV(video);


    }
    function handleChange(e)
    {
        // console.log(e.target.name,e.target.value);
        setVideo({...video,
         [e.target.name]:e.target.value});

         //console.log(video); //to check on console, that is video ka value updated?

    }
    return(
        <form>
            <input type="text" name='title' onChange={handleChange} placeholder='title'></input>
            <input type="text" name='views' onChange={handleChange} placeholder='views'></input>
            <button onClick={handleSubmit}
            >Add Video</button>
        </form>
    )

}
export default AddVideo;
import React from "react";
import { useState } from "react";
import {styles} from '../styles'
import { LoadingOutlined } from "@ant-design/icons";
import Avatar from '../Avatar.js'
import axios from "axios";


//We will install some icons for loading
//go to a new terminal in the same working directory
//npm install @ant-design/icons

const EmailForm = props => {
    const[email,setEmail]=useState('');
    const[loading,setLoading]=useState(false);

    // function getOrCreateUser(callback)
    // {
    //     axios.put(
    //         'https://api.chatengine.io/users/',
    //         {
    //             "username":email,
    //             "secret":email,
    //             "email":email,
    //         },
    //         {headers:{"Private-Key":process.env.REACT_APP_CE_PRIVATE_KEY}}
    //     )
    //     //when this API call goes through and a user gets created, we wanna create a callback function to basically call the next API
    //     .then(r=>callback(r.data))
    //     .catch(e => console.log('Get or create user error', e))

    // }
    // //same as getOrCreateUser()
    // function getOrCreateChat(callback)
    // {
    //     axios.put(
    //         'https://api.chatengine.io/chats/',
    //         {
    //             "usernames":[email,"devanshAwasthi"],
    //             "is_direct_chat":true
                
    //         },
    //         {headers: {
    //             "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
    //             "User-Name": email,
    //             "User-Secret": email,
    //         }}
    //     )
    //     //when this API call goes through and a user gets created, we wanna create a callback function to basically call the next API
    //     .then(r=>callback(r.data))
    //     .catch(e => console.log('Get or create chat error', e))
    // }


    function getOrCreateUser(callback) {
        axios.post(
            'https://api.chatengine.io/users/',
            {username: email, email: email, secret: email},
            // {headers: {
            //     'Private-Key': 'f9594725-369d-417e-856f-190d87ddd1b',
            //   },}
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => callback(r.data))
        .catch(e => console.log('Get or create user error1', e))
    }

    function getOrCreateChat(callback) {
        axios.put(
            'https://api.chatengine.io/chats/',
            {usernames: [email, 'devanshAwasthi'], is_direct_chat: true},
            {headers: {
                "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
                "User-Name": email,
                "User-Secret": email,
            }}
        )
        .then(r => callback(r.data))
        .catch(e => console.log('Get or create chat error2', e))
    }




    //NOW WE WILL ROPE THESE API CALLS TOGETHER IN handleSubmit()

    function handleSubmit(event)
    {
        event.preventDefault(); //to prevent the page from reloading
        setLoading(true);
        console.log("Sending email",email);

        getOrCreateUser(
            user=>(
                getOrCreateChat(
                    chat=>console.log('success',chat)
                )
            )
        )


        //This code from a branch from the dudes repo, not the actual code from the video
        
        // getOrCreateUser(
        //     user => {
        //         props.setUser && props.setUser(user)
        //         getOrCreateChat(chat => {
        //             setLoading(false)
        //             props.setChat && props.setChat(chat)
        //         })
        //     }
        // )
    }

    return(
        <div style={{...styles.EmailFormWindow,
        ...{
            height:'100%', 
            opacity:'1',   
        }
        }}>
            {/*adding that diagonal purple line */}
            <div style={{height:'0px', }}>
                <div style={styles.stripe} /> 
            </div>

            {/* The loading page and loading icon */}

            <div className="Transition-5"
            style={{
                ...styles.loadingDiv,
                ...{
                    zIndex:loading?'10':'-1', //Higher zIndex shows that the element will be positioned infornt of the element with lower zIndex
                    opacity:loading?'0.33':'0',
                }
            }}
            />
            <LoadingOutlined className="Transition-5"
            style={{
                ...styles.loadingIcon,
            ...{
                zIndex:loading?'10':'-1', //stacking
                opacity:loading?'1':'0',
                fontSize:'82px',

                //Neeche vaali dono lines ke bina beech mein aaraha hai, unke saath top left corner mein

                // top:'calc(50%-41px)', //these 2 statements make the loading circle come in the center
                // left:'calc(50%-41px)' //41 is half of 82 (the fontSize)
             }
             }}
            />


            {/* This is to display the avatar inside the emailForm window */}
            <div style={{position:'absolute',height:'100%',width:'100%',textAlign:'center'}}>
                <Avatar
                style=
                {{
                    position:'relative',
                    // left:'calc(50%-44px)',
                    top:'10%',
                    left:'168px'
                }}
                />
            </div>
{/* //This is for the text below the avatar */}
{/* Ye lekin <br/> lagane par dhaang se justify nahi horaha hai */}
            <div style={styles.topText}>
                Welcome to my support
            </div>

{/* The actual email form */}
            <div>
                <form 
                     onSubmit={e=>handleSubmit(e)}
                     style={{position:'absolute',width:'100%',top:'45%',left:'50px'}}
                     >
                        <input
                           type="email"
                           style={styles.emailInput}
                           onChange={(e)=>setEmail(e.target.value)}
                            // onChange={console.log('pagal')}
                           placeholder="Your Email"
                           />
                         {/* <button type="submit">Submit</button> */}
                     </form>
            </div>
            {/* Alag se div banaya to justify the br ke baad vala line properly */}
            <div style={styles.bottomText}>
                Enter your email
            </div>
            <div 
              style={{position: 'absolute', 
              width: '100%', 
              top: '65%', 
              color: '#7a39e0', 
              fontSize: '24px', 
              fontWeight: '600',
              textAlign: 'justify',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'}}>

                to get started.
                
                </div>



        </div>

    );
}

export default EmailForm;
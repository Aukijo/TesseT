import React, { useRef, useState,useEffect } from 'react'
import style from '../modules/Login.module.css'
import { useNavigate } from 'react-router'
import showPass from '../resources/view.png'
import hidePass from '../resources/eye.png'

import axios from 'axios'

export default function Login() {
    const [userAuth,setUserAuth]= useState('Login');
    const [isLogin,setIsLogin] = useState('Login')
    const [passType,setPassType] = useState('password')
    const [confrimPassType,setconfrimPassType] = useState('password')
    const authChoice =(e)=> {
        const choice = e.target.id;
        setUserAuth(choice);
        setIsLogin(choice === 'Login');
    }

    const mouseDown =(button)=> {
        if(button === 1 || button === 2 ) {
            setPassType('text')
        }else if (button === 3 ){ 
            setconfrimPassType('text')
        }
    }
    const mouseUp =(button)=> {
        if(button === 1 || button === 2 ) {
            setPassType('password')
        }else if (button === 3 ){ 
            setconfrimPassType('password')
            
        }
    }
    const userLoginInput =useRef('')
    const userPasswordInput = useRef('')

    const userRegName = useRef(null)
    const userRegEmail = useRef(null)  
    const userRegPass = useRef(null) 
    const userRegPassAuth = useRef(null)

    const submitRegister =(e)=> {
        e.preventDefault();
        const userDetails ={
            userName: userRegName.current.value,
            UserEmail: userRegEmail.current.value,
            userPassword: userRegPass.current.value,
        }
        axios.post('http://localhost/tesset_api/user/register', userDetails)
              .then(response => {
                console.log(response.status);
                userRegName.current.value = '';
                userRegEmail.current.value = '';
                userRegPass.current.value = '';
              })
              .catch(error => {
                console.error('There was an error submitting the form!', error);
              });
    }
  return (
    <div>
        {/*action="will send to php file" method = 'post'*/}
        <div className={style.login_modal}>
            <div className={style.userAuthChoice}>
                <div>
                    <h1 className={style.fade}>{userAuth || 'Login'}</h1>
                </div>
                <div>
                    <button id='Login' onClick={authChoice} className={`${style.login_button}  ${userAuth === 'Login' ? style.selectedAuth : ''}`}>Login</button>
                    <button id='Signup' onClick={authChoice} className={`${style.signup_button} ${userAuth === 'Signup' ? style.selectedAuth : ''}`}>Signup</button>
                </div>

            </div>
            <div className={`${style.userAuth_form} ${style.fade}`}>
            { isLogin ?(
                <div className={`${style.user_form} ${style.fade}`}>
                
                    <input 
                        type="text" 
                        ref={userLoginInput}
                        className={`${style.fade}`}
                        placeholder='Username or Email' 
                    />
                    <div className={`${style.pass_cont} ${style.fade}`}>
                        <input 
                            className={`${style.pass} `} 
                            type={passType}
                            placeholder='Password'
                        />
                        <div 
                            onMouseDown={()=>mouseDown(1)} 
                            onMouseUp={()=>mouseUp(1)} 
                            onMouseLeave={()=>mouseUp(1)} 
                            className={`${style.icon_cont}`}
                        >
                            <img
                                src={passType === 'text'? showPass:hidePass} 
                                alt="showPass" 
                                draggable='false' 
                            />
                        </div> 
                    </div>
                    <button className={`${style.pass_change} ${style.fade}`}>Forgot Password ? </button>
                    <button className={`${style.submit_button} ${style.fade}`}>Confirm</button>
                </div>
            ): (
                <form  className={`${style.user_form}`}>
                  
                    <input className={style.fade} type="text" placeholder='Username' name="username" ref={userRegName} />
                    <input className={style.fade} type="text" placeholder='Email' name="email" ref={userRegEmail} />
                    <div className={`${style.pass_cont} ${style.fade}`}>
                        <input className={`${style.pass}`} type={passType} 
                            placeholder='Password'
                            name="password"
                            ref={userRegPass}
                        />
                        <div 
                            onMouseDown={()=>mouseDown(2)} 
                            onMouseUp={()=>mouseUp(2)} 
                            onMouseLeave={()=>mouseUp(2)} 
                            className={`${style.icon_cont}`}
                        >
                            <img 
                                src={passType === 'text'? showPass:hidePass} 
                                alt="showPass" 
                                draggable='false'
                            />
                        </div> 
                    </div>
                    <div className={`${style.pass_cont} ${style.fade}`}>
                        <input 
                            className={`${style.pass} `} 
                            type={confrimPassType}
                            placeholder='Confirm Password'
                            ref={userRegPassAuth}
                        />
                        <div 
                            onMouseDown={()=>mouseDown(3)} 
                            onMouseUp={()=>mouseUp(3)} 
                            onMouseLeave={()=>mouseUp(3)} 
                            className={`${style.icon_cont}`}
                        >
                            <img 
                                src={confrimPassType === 'text'? showPass:hidePass} 
                                alt="showPass" 
                                draggable='false'
                            />
                        </div> 
                    </div>
                    <button className={`${style.submit_button} ${style.fade}`} type='button' onClick={submitRegister}>Create Account</button>
                </form>
             )}
    </div>
            
        </div> 
        <div className={style.modal_ovarlay}/>
        
       
    </div>
  )
}

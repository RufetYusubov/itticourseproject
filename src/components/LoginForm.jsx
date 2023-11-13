import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginEmailFunc, loginPswFunc } from '../redux/MainReducer'
import axios from 'axios'
import { baseUrl } from '../MainApi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const LoginForm = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {loginEmail,loginPsw}=useSelector(state=>state.Data)

   
    const loginSubmit=(e)=>{
        e.preventDefault()

        const data={
            email: loginEmail,
            password: loginPsw
        }

        console.log(data);


        axios({
           method: "POST",
           url: `${baseUrl}token/`,
           data
        }).then(resp=>{
            console.log(resp.data.access);
            if(resp.data.access){
                localStorage.setItem('ACCESS_TOKEN',resp.data.access)
                navigate('/dashboard')
                localStorage.setItem('loggedEmail',loginEmail)
            }
        }).catch(err=>{
            Swal.fire({
                title: 'Error!',
                text: 'Daxil olunmadi',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
    }
    
  return (
    <form onSubmit={loginSubmit}  className='login_form_container'>
        <div className="login_inner_container">
            <label htmlFor="">Email</label>
            <input id='' type="email" value={loginEmail} onChange={(e)=>dispatch(loginEmailFunc(e.target.value))}/>
        </div>
        <div className="login_inner_container">
            <label htmlFor="">Password</label>
            <input id='' type="password" value={loginPsw} onChange={(e)=>dispatch(loginPswFunc(e.target.value))}/>
        </div>
        <a href="">Forgot Password</a>
        <button>Log in</button>
    </form>
  )
}

export default LoginForm
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import Cookies from "js-cookie"
import './Login.css'
import { useEffect } from 'react'

const Login = () => {
    const loggedIn = ()=>{
        const tokenRetrived = localStorage.getItem("token")
        if(tokenRetrived){
            const URL = `${import.meta.env.VITE_API_URL}/user/token` || 'http://localhost:3000/user/token'
            fetch(URL,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({token: tokenRetrived})
            })
            .then(res => res.json())
            .then(data => {
                if(data.message == 'success'){
                    location.href = '/'
                }
            })
            .catch(err => console.log(err))
        }
    }
    const handleSuccess = (credentials)=>{
        const tokenRetrived = localStorage.getItem("token")
        if(tokenRetrived){
            loggedIn()
        }
        else{
            const URL = `${import.meta.env.VITE_API_URL}/user` ||'http://localhost:4000/user'
            const token = credentials.credential
            fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({token})
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("token", data.token)
                console.log('success')
            })
            .catch(error => console.log('Error parsing token to backend', error))
        }
    }

    useEffect(()=>{
        loggedIn()
    },[])
    return (
        <section className="login">
            <div className="wrapper">
                <h1>Sign in</h1>
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={()=>{
                        console.log("login failed");
                    }}
                />
            </div>
        </section>
    )
}

export default Login
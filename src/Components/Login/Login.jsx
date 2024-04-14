import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import './Login.css'

const Login = () => {
    const handleSuccess = (credentials)=>{
        const URL = 'http://localhost:3000/user'
        const token = credentials.credential
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({token})
        })
        .then(res => res.json())
        .then(data => console.log('success'))
        .catch(error => console.log('Error parsing token to backend'))
    }
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
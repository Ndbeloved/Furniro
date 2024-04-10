import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import './Login.css'

const Login = () => {
  return (
    <section className="login">
        <div className="wrapper">
            <h1>Sign in</h1>
            <GoogleLogin
                onSuccess={(credentialResponse)=>{
                    const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                    console.log(credentialResponseDecoded)
                }}
                onError={()=>{
                    console.log("login failed");
                }}
            />
        </div>
    </section>
  )
}

export default Login
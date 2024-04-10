import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const Login = () => {
  return (
    <section className="login">
        <GoogleLogin
            onSuccess={(credentialResponse)=>{
                const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                console.log(credentialResponseDecoded)
            }}
            onError={()=>{
                console.log("login failed");
            }}
        />
    </section>
  )
}

export default Login
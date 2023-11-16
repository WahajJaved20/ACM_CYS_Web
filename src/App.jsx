import { useState} from 'react'
import './App.css'
import { useNavigate} from 'react-router-dom';
function App() {
  const [id,setId] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  async function submit(){
    const result = await fetch(`https://server-linux-for-dummies.vercel.app/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                password: password,
            }),
        }).then((resp) => resp.json());
        console.log(result)
        if (result.type ===  "Sucess") {
          navigate('/login',{state:result.message});
        } else {
            alert(result.message);
        }
  }
  const handleIdChange = (e) => {
    setId(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <>
        <div className="container" id="login-container">
          <h1 className="header">ACM Cyber Security</h1> 
          <h2 className="loginheader" >Login</h2>
              <input type="text" name="cred1" id="cred1" placeholder="Username" required  onChange={handleIdChange} /><br />
              <input type="password" name="cred2" id="cred2" placeholder="Password" required  onChange={handlePasswordChange} /><br />
              <input type="submit" value="Login" onClick={submit}/>
          
        </div>
    </>
  )
}

export default App

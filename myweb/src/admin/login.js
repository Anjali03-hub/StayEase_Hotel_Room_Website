import './admin.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
        const [adminname, setAdminname] = useState("");
        const [password, setPassword] = useState("");
    
        const navigate=useNavigate();
        const Login=()=>{
            if(adminname==="Anjali Parmal" &&password==="anjali28" )
            {
                
                navigate('/reguser');
                   
        
            }
            else{
              
             alert("login faild")
    
               
            }
        }
    

    
    return(
        <>

         <div className="bg-light">
         <div className="login text-center rounded bg-white shadow overflow-hidden" >
            <form>
                <h4 className="bg-dark text-white py-3">ADMIN LOGIN</h4>
                <div className="p-4">
                    <div className="mb-3">
                        <input type="text"  required class="form-control shadow-none text-center" placeholder="Admin Name" value={adminname} onChange={(e) => setAdminname(e.target.value)}></input>
                    </div>
                    <div className="mb-4">
                        <input type="password" required class="form-control shadow-none text-center" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-dark text-white shadow-none" onClick={Login}>LOGIN</button>
                    
                </div>
            </form>

         </div></div>
        </>
    )
}
export default Login;
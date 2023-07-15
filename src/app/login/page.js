
import "./login.css"
export default function Login(){
    return (
         <div style ={{
            display:"flex",
            flexDirection:"column"
         }}>
            <input type="text" placeholder="email"/> 
            <input type="password" placeholder="123456"/> 
            <button>Login</button>

        </div>
    )
}

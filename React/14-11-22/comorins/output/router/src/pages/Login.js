import {Link} from "react-router-dom";
// import {useHistory} from 'react-router-dom'

function Login({user,setEmail,setPass,email,pass}){
    // const history = useHistory();
    
    let login = () =>{
            let data = {
                request :'candidate_login',
                email:email,
                password:pass,
            }
            fetch('http://karka.academy/api/action.php',{
                method:'post',
                body:JSON.stringify(data)
            }).then((data) => data.json())
            .then((response) => console.log(response))
            // history.push({
            //     pathname:"/home",
            //     state:{
            //         status:"true"
            //     }
            // })
    }


    return(
        <div className="m-auto" style={{width: "300px"}}>
            <form className="form-signin text-center">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail">Email address</label>
                <input type="email" className="form-control" placeholder="Email address"  onKeyUp={(e) =>setEmail(e.target.value)}/>
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" className="form-control" placeholder="Password" onKeyUp={(e) =>setPass(e.target.value)}/>
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block mx-1" onClick={login}>Sign in</button>
                <Link to="/Register" className="btn btn-lg btn-primary btn-block">Register</Link>
                <p className="mt-5 mb-3 text-muted">© 2022-2024</p>
            </form>
        </div>
    )
}
export default Login;
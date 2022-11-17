import {Link} from "react-router-dom";
function Register(){
    return(
        <div className="m-auto" style={{width: "300px"}}>
            <form className="form-signin text-center">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail">Email address</label>
                <input type="email" className="form-control" placeholder="Email address"  />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" className="form-control" placeholder="Password"/>
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <Link to="/Login" className="btn btn-lg btn-primary btn-block">Sign In</Link>
                <p className="mt-5 mb-3 text-muted">© 2022-2024</p>
            </form>
        </div>
    )
}

export default Register;
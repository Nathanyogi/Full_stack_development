import './header.css'

function Header(props){
    console.log(props)
    return(
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            {!props.state && <a href="#login" className="float-right">login</a>}
            {props.state &&<><a href="#login" className="float-right"> logout</a><label className='float-right text-white'>Hello,{props.userName}</label></>}
            
        </div>
    )
}

export default Header
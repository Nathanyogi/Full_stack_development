import {useLocation} from 'react-router-dom'

function Home(){
    let location = useLocation()
    return(
        
        <h1>Home {location.state.status}</h1>
    )
}

export default Home;
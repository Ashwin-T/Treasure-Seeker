import { Link } from 'react-router-dom';
import mainImage from '../images/main.png';
const Main = () => {
    return (  
        <div className = 'main'>
            {
                window.innerWidth < 768 
                && <img src = {mainImage} alt = 'main'/>

            }
            <div className="subContainer">
                <h1>Treasure Seeker</h1>
                <h6>Voted Best Overall Project in ADV CS</h6>
                <Link to = {{pathname:'download'}}><button className = 'startButton'>Download</button></Link>
            </div>
            {
                window.innerWidth > 768
                && <img src = {mainImage} alt = 'main'/>
            }
        </div>
        
    );
}
 
export default Main;    
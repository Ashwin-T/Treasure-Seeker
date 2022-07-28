import { Link } from 'react-router-dom'; 
import smallLogo from '../images/logo.png';
const Navbar = () => {
    return ( 
        <>
            <nav>
                <Link to = {{pathname: '/'}}><img src = {smallLogo} alt = 'logo'/></Link>
                <div>
                    <Link to = {{pathname: '/download'}}>Download</Link>
                </div>

            </nav>
        </>
     );
}
 
export default Navbar;
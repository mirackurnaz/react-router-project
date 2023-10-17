import Burgeryeni from "../img/banneryeni.jpg"

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../App.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Home() {
  const navigate=useNavigate();
 
  return (
   <div>
    <div>
      <div className="cardBody">
    <img className="cardbodyImage" src={Burgeryeni}>
    </img>
    
    <button className="btn" onClick={()=>navigate("/menu")}>Sipariş ver</button>
    </div>
    <div>
      <div className="cardfooter">
        <div className="footer">
          <Link to="/contact">
        <InstagramIcon sx={{ fontSize: 50, color:"white",marginTop:"30px" }} />
    </Link>
    <Link to="/contact">
    <FacebookIcon  sx={{ fontSize: 50, color:"white",marginTop:"30px" }}/>
    </Link>
    <Link to="/contact">
    <TwitterIcon sx={{ fontSize: 50,color:"white",marginTop:"30px" }}/>
    </Link>
    </div>
      </div>
    </div>
    </div>
   </div>
  )
}

export default Home
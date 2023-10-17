import React from 'react'
import Burgeryeni from "../img/banneryeni.jpg"

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../App.css'

import { Link, useNavigate } from "react-router-dom";

function About() {
    

  return (
    <div>
    <div>
      <div className="cardBodyAbout">
    <img className="cardbodyImage" src={Burgeryeni}>
    </img>
    <p className='cardbodyp' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit explicabo est sit maiores illo consequatur quos dolor et dolorem alias aperiam quam, similique nulla ratione perferendis inventore repellat minima sunt eum rerum totam porro nemo, iusto animi. Tenetur necessitatibus deleniti animi odio possimus, beatae qui totam repellendus eaque commodi natus corporis, magni magnam dicta! Ad, nulla commodi natus facilis molestiae aliquam asperiores. Dolore illum labore quibusdam ratione possimus a officiis?</p>
    
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

export default About
import React from 'react'
import BurgerMenu from "../img/burgermenu.jpg"
import '../App.css'
import {Text,Button, Heading, Image,Card} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Cardd() {
  return (
    <>
    <Link className='linkmenu' to="/">
    <div className='menu' >
     <Card >
 
    <Image
      src={BurgerMenu}
     w={"250px"}
     ml={"10px"}
     mt={"2px"}
      borderRadius='lg'
    />

      <Heading textAlign={"center"} size='md'>BIG MAC BURGER</Heading>
      <Text textAlign={"center"}>Köfte,Patates,Turşu,Yeşillik</Text>
      
      <Text textAlign={"center"} color='red' fontSize='28px' fontStyle={"italic"}>
        $450
      </Text>
     
     </Card>
     </div>
     </Link>
     </>
  )
}

export default Cardd
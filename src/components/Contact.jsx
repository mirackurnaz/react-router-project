
import React from 'react'
import { Box,Input, Grid,Text, GridItem, Heading, Image, Textarea, Button} from '@chakra-ui/react'
import Afis from "../img/afis.png"
function Contact() {
  return (
    <Box  >
    <Grid  templateColumns='repeat(2, 1fr)' gap={0}>
<GridItem w='100%' h='820px' bg='blue' >
  <Image w='100%' h='820px' src= {Afis} ></Image>
</GridItem>
<GridItem w='100%' h='820px' bg='white' >
  <Box mt={"100px"} ml={"40px"}>
    <Heading  fontSize={42}>Bizimle İletişime Geçin</Heading>

    <Heading opacity={"0.5"} fontSize={18}>Ad Soyad</Heading>
    <Input mt={"5px"} borderLeft={"6px"} borderRight={"6px"} borderTop={"6px"} height={"30px"} width={"80%"} placeholder='Adınızı ve Soyadınızı Giriniz' />

    <Heading opacity={"0.5"} mt={"40px"} fontSize={18}>Email</Heading>
    <Input mt={"5px"} borderLeft={"6px"} borderRight={"6px"} borderTop={"6px"} height={"30px"} width={"80%"} placeholder='Emailinizi giriniz' />

    <Heading opacity={"0.5"} mt={"40px"}  fontSize={18}>Mesajınız</Heading>
    <Textarea mt={"5px"} borderLeft={"6px"} borderRight={"6px"} borderTop={"6px"} height={"50px"}  width={"80%"} placeholder='Mesajınızı giriniz' />
  </Box>
  <Button fontSize={18} mt={"50px"} bg={"#b81811"} color={"white"} ml={"40px"} borderRadius={"40px"} height={"50px"} width={"130px"}>Gönder</Button>
</GridItem>

</Grid>
  </Box>
  )
}

export default Contact
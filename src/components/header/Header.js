import React, { useState } from 'react'
import Search from './Search'
import styled from "styled-components";
// import toggleStyle from "NavBar.js"

const Heading = styled.div`
  /* height: 200px; */
  /* width: 100%; */
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 100px;
  `
function Header() {
  const [myStyle, setMyStyle] = useState(
 {
    backgroundColor: 'white',
    color: 'black'
  })
  
  const [btntext, setBtntext] = useState("Enable Dark Mode")
  
  const toggleStyle = () => {
    if(myStyle.color === 'black') {
        setMyStyle({
          color:'white',
          backgroundColor: 'black'
        })
        setBtntext("Enable Light Mode")
    }
    else {
      setMyStyle({
        color:'black',
        backgroundColor: 'white',
      })
      setBtntext("Enable Dark Mode")
    }
}
 
  return (
  
    <div>
      
     <Heading style={myStyle}>
     <button onClick={toggleStyle} className="lg:mt-1 " style = {{ 
      border: 'solid',
      borderRadius: "10px",
      backgroundColor: "black", color: "white" , padding: "12px"}}>
      {btntext}
      </button> 
       <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-10 lg:mb-16  capitalize">
         Download High Quality Images by creators
        </h1>
        <Search />
     </Heading> 
    
    </div>
  )
}

export default Header

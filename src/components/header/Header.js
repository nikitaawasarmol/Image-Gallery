import React from 'react'
import Search from './Search'
import styled from "styled-components";


const Heading = styled.div`
  background-color: white;
  /* height: 200px; */
  /* width: 100%; */
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 100px;
  `
function Header() {
  return (
    <div>
     <Heading> 
       <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-2 lg:mb-16 text-slate-800 capitalize">
         Download High Quality Images by creators
        </h1>
        <Search />
     </Heading> 
    
    </div>
  )
}

export default Header
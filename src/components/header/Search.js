import axios from 'axios'
// import { response } from 'express'
import React, {useState } from 'react'
// import styled from "styled-components";
// import  {format} from "date-fns"
// const Input = styled.input`
//   @media only screen and (min-width: 150px) and (max-width: 780px) {
//     width: 95px;
//     margin: 0 auto;
//   }
// `
function Search() {
  
  const [image, setImage] = useState("")
  const [result, setResult] = useState([])


  const getImages = () => {
    axios.get(`https://api.unsplash.com/search/photos?query=${image}&client_id=v2Q6qVW5wBOw8gvaP_iLMvJQJ73ULpVq-tACygzEhRQ`)
    .then((response) => {
      console.log(response.data)
      setResult(response.data.results);
    })
  }


  // useEffect(() => {
  //   axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })
  
  return (
    <>
    <div>
      {/* <Input> */}
      <input 
      style={{
       textAlign: "start",
       border: "1px solid",
       width: "1000px",
       display: 'inline-flex',
       maxWidth: "300px",
       padding: "13.5px",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
       flexGrow: "1",
     }}

     type="text" 
     placeholder="Search high quality name" 
     value={image}
     onChange={(e) => {
       setImage(e.target.value)
     }}
     />
     {/* <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pl-4" onClick={getImages} type="submit">Search</button> */}
     <button  onClick={getImages} type="submit" class="absolute p-3 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
      {/* </Input> */}
     
    </div>


   <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 pt-5">
    
     {result.map((value) => {
           return (   
             <div 
             className="shadow-md bg-white rounded-2xl">
              <img className="h-52 w-full object-cover rounded-2xl md:h-80" alt="" src={value.urls.small} loading="lazy" />
             
            <article className="flex items-center justify-between">
            <div className="pt-2 p-2 flex items-center justify-start">
               <img 
               src={value.user.profile_image.large} 
               loading="lazy" 
               className="w-20 rounded-full shadow"
               alt = ""/>
               
               <ul className="ml-3">
                 <li className="font-bold text-lg text-slate-800 mb-1">{value.user.name}</li>
                 <li className="text-slate-600 text-sm">{value.user.username}</li> {/* style -> color-greyish, font-italic */}
                 {/* <li>{format(new Date(value.created_at), "dd MMMM yyyy")}</li> */}
               </ul>
             </div>

             <div>
               <ul className="text-slate-600 text-sm text-right">
                 <li className="p-3">{value.likes} likes</li>
               </ul>
             </div>

            </article>
  
          
          
             </div>
          )

        })}
   </div>
      
   
    </>
  )
}

export default Search
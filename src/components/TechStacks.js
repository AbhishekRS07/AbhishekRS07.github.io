import React from 'react'
import java from "../assets/img/java.svg"
import javascript from "../assets/img/javascript.svg"
import html from "../assets/img/html.png"
import css from "../assets/img/css.png"
import mongodb from "../assets/img/mongodb.svg"
import github from "../assets/img/github.svg"
import netlify from "../assets/img/netlify.png"
import react from "../assets/img/react.png"
import "./mix.css"

const TechStacks = () => {
  return (
    <div  className='techStacks' >
         
         <div  style={{backgroundColor:"white",width:"100px",height:"100px",borderRadius:"50%",alignItems:"center" ,justifyContent:"space-around",display:"flex"}}>
         <img style={{width:"75%"}} src={java} alt=''/>
         </div>
          <div  style={{backgroundColor:"white",width:"100px",height:"100px",borderRadius:"50%",alignItems:"center" ,justifyContent:"space-around",display:"flex"}}>
          <img style={{width:"75%"}} src={javascript} alt=''/>
          </div>
          <div  style={{backgroundColor:"white",width:"100px",height:"100px",borderRadius:"50%",alignItems:"center" ,justifyContent:"space-around",display:"flex"}}>
          <img style={{width:"75%"}} src={html} alt=''/>
          </div>
          <div  style={{backgroundColor:"white",width:"100px",height:"100px",borderRadius:"50%",alignItems:"center" ,justifyContent:"space-around",display:"flex"}}>
          <img style={{width:"75%"}} src={css} alt=''/>
          </div>
          <div  style={{backgroundColor:"white",width:"100px",height:"100px",borderRadius:"50%",alignItems:"center" ,justifyContent:"space-around",display:"flex"}}>
          <img style={{width:"75%"}} src={mongodb} alt=''/>
          </div>
          <div  style={{backgroundColor:"white",width:"100px",height:"100px",borderRadius:"50%",alignItems:"center" ,justifyContent:"space-around",display:"flex"}}>
          <img  style={{width:"75%"}} src={github} alt=''/>
          </div>
          <div  style={{backgroundColor:"white",width:"100px",height:"100px",borderRadius:"50%",alignItems:"center" ,justifyContent:"space-around",display:"flex"}}>
          <img style={{width:"75%"}} src={netlify} alt=''/>
          </div>
          <div style={{backgroundColor:"white",width:"100px",height:"100px",borderRadius:"50%",alignItems:"center" ,justifyContent:"space-around",display:"flex"}}> 
            <img style={{width:"75%"}} src={react} alt=''/>
         </div>
      
    </div>
  )
}

export default TechStacks
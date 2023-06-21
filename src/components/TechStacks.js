import React from 'react'
import java from "../assets/img/java.svg"
import javascript from "../assets/img/javascript.svg"
import html from "../assets/img/html.png"
import css from "../assets/img/css.png"
import mongodb from "../assets/img/mongodb.svg"
import github from "../assets/img/github.svg"
import netlify from "../assets/img/netlify.png"
import react from "../assets/img/react.png"

const TechStacks = () => {
  return (
    <div  style={{display:"flex",height:"100px",alignItems:"center" ,justifyContent:"space-around", backgroundColor:"whitesmoke"}} className='techStacks' >
       <img style={{width:"6%"}} src={java} alt=''/>
       <img style={{width:"6%"}} src={javascript} alt=''/>
       <img style={{width:"6%"}} src={html} alt=''/>
       <img style={{width:"6%"}} src={css} alt=''/>
       <img style={{width:"6%"}} src={mongodb} alt=''/>
       <img  style={{width:"6%"}} src={github} alt=''/>
       <img style={{width:"6%"}} src={netlify} alt=''/>
       <img style={{width:"6%"}} src={react} alt=''/>

      
    </div>
  )
}

export default TechStacks
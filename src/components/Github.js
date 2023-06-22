import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import "./mix.css"
const Github = () => {
  return (
    <>
    <h3 style={{marginTop:"50px",textAlign:"center"}}>Github Statistics</h3>
    <div className='github' >
           
         <div>
         <GitHubCalendar class="react-activity-calendar" username="AbhishekRS07" />
         </div>
         <div>
         <img id="github-streak-stats" src='https://github-readme-streak-stats.herokuapp.com?user=AbhishekRS07' alt=''/>
            </div>
            <div>
            <img id="github-top-langs" src=' https://github-readme-stats.vercel.app/api/top-langs/?username=AbhishekRS07' alt=''/>
            </div>
            <div>
            <img id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=AbhishekRS07' alt=''/>
            </div>


    </div>
    </>
  )
}

export default Github
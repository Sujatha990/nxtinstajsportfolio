import React from 'react'
import "./Insta1.css";



const InstaGram = () => {
  return (
    <div>
      <div style={{fontSize:"20px",textAlign:"center"}}   >

        <img class="image" src="Instaimg/logofend.png" />

        
        <h1 class="name">Sujatha </h1>
        <div class="button" style={{textAlign:"center"}}>
          
          <button style={{marginRight:"30px",fontSize: "20px",width:"150px",height: "50px",color:"blue",border:"solid black"}}>Message</button>
          <button style={{marginRight: "30px",fontSize: "20px",width:"150px",height: "50px",color: "blue",border:"solid black"}}>Follow</button>
          <button style={{width: "100px",fontSize: "20px",height: "50px",color: "blue"}}>...        </button>
          
        </div>


        <ul class="li" type="none" style={{fontSize: "20px",textAlign:"center"}}>
          <div>
            <h1>4</h1>

            <li>projects</li>
          </div>
          <div>
            <h1>10</h1>
            <li>connections</li>
          </div>
          <div>
            <h1>5</h1>
            <li>following</li>
            
          </div>
        </ul>
        <div class="Description">
          <h1 style={{color:"red",textAlign:"left",marginLeft:"10px"}}><b>Description</b></h1>
          <p style={{textAlign:"left"}}>Developing user-friendly web interfaces is my passion as a
            front-end developer.<br/>
            I&apos;m looking for an entry-level job where I can use my talents
            in  HTML, CSS,<br/>JavaScript,
            Bootstrap, and React.js to create responsive websites.</p>
        </div>

        <div class="button1">
          <button style={{marginRight: "100px",width:"200px",height: "50px",fontSize: "30px",border:"solid black",color:"blue"}}><a href="frontendimg.html" style={{textDecoration: "none",color: "blue"}} />Photos</button>
          <button style={{marginRight: "100px",width: "200px",height: "50px",fontSize: "30px",border:"solid black",color:"blue"}}><a href="videos.html" style={{textDecoration: "none",color: "blue" }}/>Video</button>
          <button style={{marginRight: "100px",width: "200px",height: "50px", fontSize: "30px",color: "blue",border:"solid black"}}>Contact</button>
        </div>

        <div class="Photos" style={{display:"flex",gap:"20px",marginLeft:"50px"}}>
          <img src="Instaimg/Html.jpg" width="500px" height="500px" /><br/>
          <img src="Instaimg/css.jpg" width="500px" height="500px" /><br/>

         
          </div><br/>
          <div class="Photos" style={{display:"flex",gap:"20px",marginLeft:"50px"}}>

          <img src="Instaimg/js.png" width="500px" height="500px" /><br/>
          <img src="Instaimg/react.jpg" width="500px" height="500px" /><br/>
          </div><br/>
          <div class="Photos" style={{display:"flex",gap:"20px",marginLeft:"50px"}}>

          <img src="Instaimg/nxtjs.jpg" width="500px" height="500px" />
        </div>


      </div>
    </div>

  )
}

export default InstaGram;

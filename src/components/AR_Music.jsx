
import React, { useState } from 'react';
import './style.css'
import '../styles2.css'
import card11Pic from '../img/portfolio/AR_Music-banner.png';
import jacquelinePersona from "../img/jacquelinePersona.png";
import johnPersona from "../img/johnPersona.png";
import oprahPersona from "../img/oprahPersona.png";
import AR_Prot from "../img/Emusic_ARGlasses_video_prototype.mp4";
import Tab_Prot from "../img/portfolio/Emusic_tablet_video_prototype.MOV";

import DesignDecAR from "../img/portfolio/designDecisionsAR.PNG";
import DesignDecTab from "../img/portfolio/designDecisionsTablet.PNG";
import LoFI_AR1 from "../img/portfolio/ARloFi1.jpg";
import LoFI_AR2 from "../img/portfolio/ARloFi2.jpg";
import LoFI_AR3 from "../img/portfolio/ARloFi3.jpg";
import LoFI_Tab1 from "../img/portfolio/tab_LoFi1.jpg";
import LoFI_Tab2 from "../img/portfolio/tab_LoFi2.jpg";
import LoFI_Tab3 from "../img/portfolio/tab_loFi3.PNG";
import HiFi_AR1 from "../img/portfolio/AR_HiFi1.PNG";
import HiFi_AR2 from "../img/portfolio/AR_HiFi2.PNG";
import HiFi_AR3 from "../img/portfolio/AR_HiFi3.PNG";
import HiFi_Tab1 from "../img/portfolio/Tablet_HiFi.PNG";
import HiFi_Tab2 from "../img/portfolio/Tablet_HiFi2.PNG";
import HiFi_Tab3 from "../img/portfolio/Tablet_HiFi3.PNG";


import { SocialIcon } from 'react-social-icons';

//import Button from 'react-bootstrap/Button';
import { Modal, Button, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import CloseButton from 'react-bootstrap/CloseButton';

require("react-bootstrap/ModalHeader")



function MyVerticallyCenteredModalP1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
      
        <Modal.Title id="contained-modal-title-vcenter">
        Persona #1
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Jacqueline</h4>
        <p>
        <img  className="img-fluid rounded mb-5 border" vspace= {15} src={jacquelinePersona} alt="Jacqueline Persona"   />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
  

function MyVerticallyCenteredModalP2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        Persona #2
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>John</h4>
        <p>
        <img className="img-fluid rounded mb-5 border" vspace = {15} src={johnPersona} alt="John Persona"   />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function MyVerticallyCenteredModalP3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
         Persona #3
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Oprah</h4>
        <p>
        <img  className="img-fluid rounded mb-5 border" vspace= {15} src={oprahPersona} alt="Oprah Persona"  />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const AR_Music = () => {
  const hStyle= { color: 'white' };
/*   const [showP1,setShowP1] = useState(false);
  const handleClickP1 = (event) => {
    setShow(!show);
    setTarget(event.target); 
  };*/
  const [modalShowP1, setModalShowP1] = React.useState(false);
  const [modalShowP2, setModalShowP2] = React.useState(false);
  const [modalShowP3, setModalShowP3] = React.useState(false);



  
  return (
    <div>
      <div className="fill">
        
      <img src={card11Pic}></img>
    
     
      </div>
      {/* <h1>Bookflix</h1> */}
      <div className="body">
      <div className="container120">

      <h2 style={hStyle} className="portfolio-title pt-5 " >About</h2>
        <p style={hStyle}>This project was done in the “Design Methods” class at UPM for the Human Computer Interaction and Design MSc. The project's objective was to apply the UCD process and lasted 4 months. 
                                            The work focused on the design of an online music course in augmented reality. </p>


<h2 style={hStyle} className="portfolio-title pt-5 " >Problem Statement</h2>
        <p style={hStyle}>How to make learning an instrument/music more engaging by using technology and considering both the students' and the teacher's perspective? </p>


        <h2 style={hStyle} className="portfolio-title pt-5 ">Roles and responsibilities</h2>

        <p style={hStyle}>Roles were interchangeable. Due to the language barrier, I conducted the interviews in Spanish. We designed two prototypes collaboratively but I was more involved in the AR prototype and
         had to figure work-arounds to make it appear more realistic in Figma.</p>

         <h2 style={hStyle} className="portfolio-title pt-5">My personal contributions during this project</h2>
         <p style ={hStyle}> I contributed to all the phases in the project. I interviewed a musiclogy student and a musicology teacher at the Universidad Complutense de Madrid (Madrid, Spain). I contributed to the 
         analysis and goal definition. In the design phase, I sketched two UIs for the tablet prototype and was
         mostly involved in prototyping the AR glasses, for which I designed the majority of UIs. In the high-fidelity phase I designed the entirety of the AR device and recorded a video, showing the interaction. </p>

<h2 style={hStyle} className="portfolio-title pt-5">Final users</h2>
        <p style={hStyle}>Originally, we were targeting adults interested in learning or perfecting their musical knowledge (both theoretically and practically) and music teachers. After interviewing real users (a doctor in musicology, a piano teacher and 4 music students), we were able to 
        perfect our profiling and create these personas. Click on the buttons to discover our personas!  </p>


        <div className="row center">

        <div className="col center">
        
        <Button variant="primary" onClick={() => setModalShowP1(true)}>
        
       <FontAwesomeIcon icon={faUser} /> &nbsp; Jacqueline 
      </Button>

      <MyVerticallyCenteredModalP1
        show={modalShowP1}
        onHide={() => setModalShowP1(false)}
      />

        </div>


        <div className="col center">

        <Button variant="primary" onClick={() => setModalShowP2(true)}>
        <FontAwesomeIcon icon={faUser} /> &nbsp; John 
      </Button>

      <MyVerticallyCenteredModalP2
        show={modalShowP2}
        onHide={() => setModalShowP2(false)}
      />

        </div>

        <div className="col center">
        <Button variant="primary" onClick={() => setModalShowP3(true)}>
        <FontAwesomeIcon icon={faUser} /> &nbsp; Oprah 
      </Button>

      <MyVerticallyCenteredModalP3
        show={modalShowP3}
        onHide={() => setModalShowP3(false)}
      />


        </div>

        </div>

        

        {/* <div className="row">
        <img  class="img-fluid rounded mb-5 border" vspace= {15} src={jacquelinePersona} alt="Jacqueline Persona"   />
        </div>
        

        <div className="row">
<img class="img-fluid rounded mb-5 border" vspace = {15} src={johnPersona} alt="John Persona"   />

</div>

<div className="row">
<img  class="img-fluid rounded mb-5 border" vspace= {15} src={oprahPersona} alt="Oprah Persona"  />
</div>
         */}
        
      

<h2 style={hStyle} className="portfolio-title pt-5">Work process</h2>
        <p style={hStyle}>The User-Centric Design was applied during this project. In this section the different phases are summarized. </p>

        <h3 style={hStyle} className="portfolio-title pt-5">User-Research Phase</h3>
        <p style ={hStyle}>
          As with all UCD projects, the first thing is to find out information about users. We set out to interview users that belonged to our target group. Since we have identified two distinct user roles in our system (students and teachers), we prepared two questionnaires
          to find out their needs. We compiled all the information in the personas presented previously.
        </p>

        <h3 style={hStyle} className="portfolio-title pt-5">Development of the low-fidelity prototype</h3>
      <p style ={hStyle}>With the information we obtained about our users during the interviews, we created a low-fidelity prototype. Below are some images from our interfaces in this phase.</p>

      

      <div className= "row">

        <div className = "col">
        <img  className="img-fluid rounded mb-5 border" vspace= {15} src={LoFI_Tab1} alt="Tablet UI 1"  />

        </div>

        <div className = "col">
        <img  className="img-fluid rounded mb-5 border" vspace= {15} src={LoFI_Tab2} alt="Tablet UI 2"  />
        </div>

        <div className = "col">
        <img  className="img-fluid rounded mb-5 border" vspace= {15} src={LoFI_Tab3} alt="Tablet UI 3"  />
        </div>


      </div>
      

      <div className= "row">

        <div className = "col">
        <img  className="img-fluid rounded mb-5 border" vspace= {15} src={LoFI_AR1} alt=" AR UI 1"  />

        </div>

        <div className = "col">
        <img  className="img-fluid rounded mb-5 border" vspace= {15} src={LoFI_AR2} alt=" AR UI 2"  />
        </div>

        <div className = "col">
        <img  className="img-fluid rounded mb-5 border" vspace= {15} src={LoFI_AR3} alt="AR UI 3"  />
        </div>


      </div>

      <h3 style = {hStyle} className="portfolio-title pt-5"> Trial of the low-fidelity prototype</h3>
      <p style ={hStyle}> We did not have access to real users, and therefore as a group we discussed what should be changed in both prototypes. We culd change things quickly, because we did not invest a lot of time purposefully on these prototype, which allowed 
      for quick discussion and readjustments.</p>

      <h3 style = {hStyle} className="portfolio-title pt-5">Development of the high-fidelity prototype</h3>
      <p style = {hStyle}>In this phase, we considered our discussions from the previous phase and developed a high-fidelity version. We divided the work and I created The A.R. prototype in its entirety. Below, are some pictures from the tablet and the AR glasses' prototype.
</p>

<div className ="row">

<div className='col'><img  className="img-fluid rounded mb-5 border" vspace= {15} src={HiFi_Tab1} alt="Tablet UI 1"  /></div>

<div className='col'><img  className="img-fluid rounded mb-5 border" vspace= {15} src={HiFi_Tab2} alt="Tablet UI 2"  /></div>

<div className='col'><img  className="img-fluid rounded mb-5 border" vspace= {15} src={HiFi_Tab3} alt="Tab UI 3"  /></div>
</div>

      <div className ="row">

        <div className='col'><img  className="img-fluid rounded mb-5 border" vspace= {15} src={HiFi_AR1} alt="AR UI 1"  /></div>

        <div className='col'><img  className="img-fluid rounded mb-5 border" vspace= {15} src={HiFi_AR2} alt="AR UI 2"  /></div>

        <div className='col'><img  className="img-fluid rounded mb-5 border" vspace= {15} src={HiFi_AR3} alt="AR UI 3"  /></div>
      </div>

      <h2 style = {hStyle} className="portfolio-title">Design decisions for the tablet prototype</h2>
      <p style = {hStyle}>Overall, <a href= "https://material.io/design">Material Design</a> was followed. The following pictures contain some reasons behind some of the design decisions.</p>

      {/* <h6 style= {hStyle}>Colors and shapes</h6>
      <p style={hStyle}>We wanted to have a consistent design because of aesthetic purposes but more importantly, in order not to confuse or distract the user.
Our primary color is associated with calmness, energy, wisdom, creativity, and patience amongst others. 
We used rounded edges to go along with these feels.
</p>

<h6 style= {hStyle}>Usage of pictures or solid colors
</h6>
      <p style={hStyle}>When the information is aimed at being learned, we do not use pictures for the background, in order not to distract the user. However, when the information has different purpose, we  decided to take a more decorative approach.
</p>

<h6 style={hStyle}></h6>
<p style={hStyle}></p>

<h6 style={hStyle}></h6>
<p style={hStyle}></p> */}
<div className="row">
  <div className="col">
    <figure>
     <img  className="img-fluid rounded mb-5 border" vspace= {15} src={DesignDecTab} alt="Design Decisions Tablet"  />
     
     </figure>
      </div>
  <div className="col">
    <figure>
    <img  className="img-fluid rounded mb-5 border" vspace= {15} src={DesignDecAR} alt="Design Decisions AR"  />
    
    </figure>
    </div>
</div>

      {/* <h6 style = {hStyle}>Design decisions for the A.R. prototype</h6>
      <p style = {hStyle}></p>
 */}

      <div className="row">

        <div className="col">

      <video controls="controls" preload="metadata"
        src={AR_Prot} type="video/mp4">
        </video>

        </div>

        <div className="col">

      <video controls="controls" preload="metadata"
        src={Tab_Prot} type="video/mp4">
        </video>

        </div>

      <p style ={hStyle}></p>

      </div>



      <h2 style={hStyle} className="portfolio-title pt-5">Challenges and limitations</h2>
      <p style ={hStyle}>
        The main challenge in this project was related to the lack of guidelines, when designing for Augmented-Reality systems. This presented a challenge when imagining the interfaces and interaction but also when prototyping as we were not (I am still not, at least)
        aware of good prototyping software similar to Figma for AR. As a result, we had to imagine many guidelines, by using common sense and considering the main interaction type. Secondly, we imagined the interaction taking place almost exclusively via voice commands. For this to work, it was essential to adapt and simplify the tablet's UIs, so that the end user could 
        understand what voice command to use. Due to this project being of an academic nature, usability tests could not performed due to time constraints. It would be valuable to conduct these and use the <a href="https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html">SUS</a> to measure 
        usability  and <a href="https://www.ueq-online.org/"> UEQ</a> to measure the overall user experience.

      </p>

<h2 style={hStyle} className="portfolio-title pt-5">Final conclusions</h2>
        <p style={hStyle}>This was the first project where I had to apply the UCD and work together in a group of designers. In my opinion, it was an interesting project, because we took full advantage of the academic setting 
        and we tried to design for an unknown technology, imagining possible interactions. One of the problems is that there are no real standards for AR (compared to material design for
         Android). However, I honestly think we did a solid job as a team. </p>
         <p style={hStyle}>This project allowed us to apply the User-Centered Design from beginning to end. Even though, the principles are simple, dealing with people and interpretability is difficult. I find that thinking about new design 
        solutions is stimulating and gives real meaning to the work, since we were dealing with real users. </p>

</div>
<div className="container-fluid  footer1 pt-5">

<div className="row justify-content-center ">

<div className='col-lg-2 center' ><a><SocialIcon style={{ height: 70, width: 70 }} url="https://www.linkedin.com/in/alejandro-esquivias-ca%C3%B1adas-640208a1/"/></a></div>
<div className='col-lg-2 center'>
<SocialIcon style={{ height: 70, width: 70 }} url="mailto: aleesq97@gmail.com" target="_blank" />

  </div>
  <div className='col-lg-2 center'>
<SocialIcon style={{ height: 70, width: 70 }} url="https://github.com/ESQ0001/"/>

  </div>




</div>

<div className='row justify-content-center pt-4'>

Copyright &copy; AEC 2022</div>



</div>
      </div>

       
    </div>
  );
};
  
export default AR_Music;
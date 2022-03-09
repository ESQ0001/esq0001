import React from "react";
import './style.css';

import card11Pic from '../img/portfolio/pearly-banner.png';
import Prot1Vid from '../img/prot1T2CroppedResized.mp4';
import Prot2Vid from '../img/prot2Task1_cropped.mp4';
import NavMap from '../img/NavMap_HiFi_HCIP.jpg';
import AndroidProt from '../img/AndroidProt.mp4';
import AndroidUI_1 from '../img/AndroidUno_1.jpg';
import AndroidUI_2 from '../img/AndroidUno_2.jpg';
import AndroidUI_3 from '../img/AndroidUno_3.jpg';
import cardPlay from '../img/pearly_CardPlay.png';
import modView from '../img/pearly_ModVie.png';
import testView from '../img/pearly_testing.png';
import mainView from '../img/pearly_mainView.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

const Pearly = () => {
  const hStyle = { color: 'white' };
  const vStyle = {display: 'flex', verticalAlign:"middle"};
  const style = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '..', height: '..'};
  return (
    <div>
    <div className="fill">
      <img src={card11Pic}></img>
      </div>
      {/* <h1>Bookflix</h1> */}
      <div className="body">
      <div className="container120">

      <h2 className="portfolio-title pt-5" style={hStyle}>About</h2>
        <p style={hStyle} >This project was done in the HCI Project class at UPM (Human Computer Interaction and Design MSc), during the year 2019-2020. The goal was to follow the UCD (User Centered Design) methodology 
        to design a fun table-top gaming platform. </p>


<h2 className="portfolio-title pt-5" style={hStyle}>Problem Statement</h2>
        <p style = {hStyle}>With this work we wanted to address different problems, related to table-top digital gaming:
        <ol>
            <li>Creation of an innovative digital pataform, where players could play with their friends a variety of different games</li>
            <li>Creation of a innovative digital platform that allows game creators to test their games</li>
        </ol>
        </p>

<h2 className="portfolio-title pt-5" style={hStyle}>Final users</h2>
        <p style={hStyle} >Firstly, we were targeting table-top players, keen on trying a new solution for their game-playing necessities. Secondly, we were targetting table-top game designers, looking for a new platform to test their games. </p>


<h2 className="portfolio-title pt-5" style={hStyle}>Roles and responsibilities</h2>
<p style={hStyle}>We were a team of four students and for academic purposes we tried to rotate the roles. However, due to the language barrier, I was the person in charge of conducting the interviews in Spanish.</p>

<h2 className="portfolio-title pt-5" style={hStyle}>My personal contributions to the project</h2>
<p style={hStyle}>In the interview process with a professional game designer, I was one of the observers and paid close attention to the designer's non-verbal language. I also conducted one usability test with the role of facilitator (explaining the objective of the test, reading the 
tasks and helping the user, but only when help was asked so that I interfered as little as possible in the results). In the Android implmentation I coded the part responsible for the interaction between the user and the virtual player when playing a UNO card game. Finally,
I was the main creator of the application's navigation map. </p>

<h2 className="portfolio-title pt-5" style={hStyle}>Work process</h2>
        <p style={hStyle}>
      We applied the User Centered Design process. In total, we went through different phases, including:</p>

<h6 style={hStyle}>The idea and project description</h6>
<p style={hStyle}>As a team we came up with the idea and started analyzing it under different perspectives.</p>

<h6 style={hStyle}>An initial planning</h6>
<p style={hStyle}>We created an initial planning to achieve our solution on time.</p>

<h6 style={hStyle}>Analysis of the context of use</h6>
<p style={hStyle}>We had various interview sessions with game players and a couple of interviews with game creators (one of them a professional game creator), as well. Finally, we went to a Boardgame Café in Madrid to observe some players and ask them some brief questions.</p>

<h6 style={hStyle}>Low fidelity prototypes</h6>
<p style={hStyle}>We designed two prototypes, with distinct functionalities and use cases. To better understand the different designs, we used two scenarios illustrating how these prototypes would be used in different settings. Finally, we planned 
the usability testing process, including the introductory test, the tasks to be carried out by the participant and an informed consent where we asked the participant permission to record them while performing the tasks. Below are the videos of both prototypes:</p>

<div className="container">

    <div className="row">


        <div className="col-lg-7">


             <video className=" rounded mb-5 border" controls 
                 src= {Prot1Vid}>
            </video>  


        </div>


        <div className="col-lg-5">


             <video className="rounded mb-5 border" controls 
                 src= {Prot2Vid}>
            </video>  


        </div>

    </div>
    </div>



<h6 className="portfolio-title pt-5" style={hStyle}>Usability testing of the low fidelity prototype</h6>
<p style={hStyle}>In this phase, we wanted to determine the preferred prototype. There were two user roles, within the system (game creator and game player) and our tasks tested both roles. When conducting the usability tests, 
we asked a few introductory questions to assess our user’s familiarity with the technological devices to better understand the impact their previous experience had when interacting with our prototypes. This is especially important, since 
the usability tests took place online, due to COVID, and therefore unfamiliarity with technological tools could impact our results.  We gave the participants different tasks and we measured the effectiveness (by averaging the mistakes made 
by all participants and then calculating the standard deviation to better explain the consistency of our results) and the success rate for each design. Secondly, we measured the efficiency by averaging the actions (in this case number of “clicks”)
 and calculating the standard deviation. We used the System Usability Scale and the User Experience Questionnaire (UEQ) to measure the user satisfaction and user experience respectively. The results were analyzed at the end of this phase and the 
 “tablet” prototype performed better than its phone counterpart both in the SUS and UEQ. However, we found interesting features in the phone that were appreciated by a majority of users and we decided to implement them (or similar) in the 
 final prototype.
 </p>

<h6 className="portfolio-title pt-5" style={hStyle}>High-fidelity prototype design</h6>
<p style={hStyle}>The objective in this phase was to design a final prototype. We started by designing our system’s navigation map, and we designed the prototype according to our main tasks (defined from the beginning of the project). 
We then developed the prototype on Android and we planned for the usability tests. Below is a video of the final prototype in Android Studio and the final application map:</p>


<div className="container-fluid">
    <div className="row">
        <div className="col-lg-6">
            <figure>
                <img className="img-fluid rounded mb-5 border"   src={NavMap}  alt="" />
                <figcaption style={hStyle}> Application Navigation Map </figcaption>
            </figure>
        </div>
        <div className="col-lg-4">

        <video className="rounded mb-5 border" controls 
                 src= {AndroidProt}>
            </video> 
            </div>
    </div>

    </div>
    
    <p style={hStyle}>Below are the UIs I designed, along with the interaction. Granted the design is simple, but this is due to a tight schedule and the making sure the Android application was working properly</p>

    <div className="row">
        <div className="col-lg-3">
        <img className = "img-fluid" src={AndroidUI_1}></img>

        </div>

        <div className="row align-items-center">
         <div className="col-lg-1">
         <FontAwesomeIcon icon={faLongArrowAltRight} style={hStyle} />
                </div>
                </div>
        
                

         <div className="col-lg-3">
         <img className = "img-fluid" src={AndroidUI_2}></img>
                </div>
         <div className="row align-items-center">
         <div className="col-lg-1">
         <FontAwesomeIcon icon={faLongArrowAltRight} style={hStyle}  />
                </div>
                </div>

         <div className="col-lg-3">
         <img className = "img-fluid" src={AndroidUI_3}></img>
                </div>

    </div>






                
                
                
               




<div>
<h2 className="portfolio-title pt-5" style={hStyle}>Usability testing of high-fidelity prototype</h2>
<div className="row">
      <p style={hStyle}>Similarly to the low-fidelity prototype, we measured efficiency and effectiveness in the same way and we used the UEQ and SUS to measure our prototype’s performance. For the SUS questionnaire we obtained <span className="num">80.625</span>, 
surpassing the 80.3 mark, meaning our product will likely be recommended by our users. For the six UX attributes measured by the UEQ, we obtained grades comprised between “above average” or “ good”, with the exception of “novelty”, where we 
obtained a “bad” grade. We concluded that our users did not think our product was innovative.</p> 
</div>
</div>

<div >
<h2 className="portfolio-title pt-5" style={hStyle}>Improvements</h2>

<div className="row pt-3">
    <div className="col-lg-3">
        <img src={cardPlay} className="img-fluid"></img>
    </div>
    <div style={hStyle} className="col-lg-4 my-auto ">
        <ul>
        <li >Adding a tutorial for new users</li>
        <li>Adding icons to the buttons</li>
        <li>Adding new interactions possibilities with other users(chat, videochat)</li>
        </ul>
        </div>
</div>

<div className="row pt-3">
    <div className="col-lg-3"><img className="img-fluid" src={testView}></img></div>
    <div style={hStyle} className="col-lg-4 my-auto">
    <ul>
        <li> Add more descriptive button names</li>
        <li>Verifying the mandatory parts when submitting new card </li>
        </ul>

    </div>
</div>

<div className="row pt-3">
    <div className="col-lg-3 col-md-3"><img className="img-fluid" src={mainView}></img></div>
    <div style={hStyle} className="col-lg-4 my-auto">
    <ul>
        <li> Allow font size change</li>
        <li>Notification for newly created games</li>
        </ul>

    </div>
</div>

<div className="row pt-3">
    <div className="col-lg-3"><img className="img-fluid" src={modView}></img></div>
    <div style={hStyle} className="col-lg-4 my-auto">
    <ul>
        <li> Allow for different interation flows</li>
        <li>Add icons to buttons</li>
        </ul>

    </div>
</div>
</div>
<div className="pt-5 pb-5">
<h2 className="portfolio-title " style={hStyle}>Final conclusions</h2>
        <p style={hStyle}>This project allowed us to apply the User-Centered Design from beginning to end. Even though, the principles are simple, dealing with people and interpretability is difficult. I find that thinking about new design 
        solutions is stimulating and gives real meaning to the work, since we were dealing with real users. </p>
    </div>





        

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
  
export default Pearly;
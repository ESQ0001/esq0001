import './index.js';
import './App.css';
import profile from './img/profCircle.png';
import logo from './img/logoAEC-removebg-preview.png';
import card11Pic from './img/portfolio/bookflix.png';
import pic1 from './img/Australia.png';
import pic2 from './img/finland.jpg';
import pic3 from './img/beijing2Edit.jpg';
import profile2 from "./img/profPic2.png"
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import * as React from 'react';

import styles from "./App.module.css";
import Card from "./components/Card";
import ContactUs from "./components/ContactUs";
import posts from "./data/posts";
import background from "./img/email-pattern.png";

import { Button } from '@react-md/button';
import { BsCaretDownSquare } from 'react-icons/bs';

import { Routes, Route, Router } from "react-router-dom"


import ReactDOM from 'react-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { SocialIcon } from 'react-social-icons';

import {Link} from 'react-scroll';

const Home = () =>{
  return(
  <div>
    <h1>Home</h1>
    </div>
    )
      
    }

function App() {
 
  // useState searchBar
  const [search, setSearch] = useState('')
  const hStyle= { color: 'white' };
  const tableBorder = {border: "1px solid white"};
 
  const imgSt={textAlign:"right"}

  const handleFilter = (event) => {    
    console.log(event.target.value)
    setSearch(event.target.value)    
    //setNewNumber(event.target.value) 
   
  }

  const searchTags = (event) =>{

    event.preventDefault()


  }


  const Intro = () =>{
    return (
    
    <div className='container-fluid'>

<div className ="row">
      {/* <Link to ="/"> Home </Link> */}
        <div className = "col-lg-5 col-md-12 col-sm-12">
         
         <img className="profPic mb-5-border" src={profile2} alt="profile picture"/>
        </div>

        <div className = "toplogo col-lg-4 col-sm-12 my-auto" align="left" >

        
         <p className="hi">Hi, I am</p> <h1 className='name'>Alejandro Esquivias Cañadas </h1>
         <h6 className='description'>A passionate UX/UI Designer with frontend and backend knowledge and international experience</h6>
      
        </div>
      <div className='toplogo col-lg-3 my-auto'>

      <div className='row'>🇪🇸 Spanish (Fluent) </div>
      <div className='row'> 🇦🇺 English (Fluent) </div>
      <div className='row'> 🇫🇷 French (Fluent) </div>
      </div>
      </div>
    </div>
    )
  }
  const About =  () =>{
return(
<section id="about">
<div >
 {/* <div className = "row ">
   <div className = "col-lg-3 pl-5">
  <h2>About</h2>
  </div> 
  </div>*/}

  <div className="row justify-content-center">
<div className = "col-lg-3 ml-5">




<div style={{ textAlign: "left" }}>
<VerticalTimeline contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }} layout={'1-column-left'} lineColor='black'>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="February 2022 - Present"
iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Researcher in Data Marketplaces</h4>
<h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
I am currently working in the conceptual modelling of a data marketplace that will be created in the context of the <a style={{color:"navy"}} href ="https://smartotaniemi.fi/"><b>Smart Otaniemi</b></a> project
</p>
</VerticalTimelineElement>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Oct 2021 - Jan 2022"
iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Teaching Assistant in the UI Construction course</h4>
<h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
Helped professor <a style={{color:"navy"}} href="https://users.aalto.fi/~mhtn/home/"> <b>Marko Nieminen</b></a> in the course. I taught students about ReactJS and Android
</p>
</VerticalTimelineElement>

<VerticalTimelineElement
className="vertical-timeline-content-arrow"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black', borderColor:'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Feb 2021 - Sep 2021"
iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">UX Researcher</h4>
<h5 className="vertical-timeline-element-subtitle">@PEN-CP (Remote)</h5>

<p>
Conducted interviews with EU Customs practitioners and wrote a qualitative analysis report, 
thanks to Atlas.TI on their experiences, with problems and recommendations for the company to 
improve the UX. Additionally, I developed a prototype for future software development.
</p>
</VerticalTimelineElement>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(210, 233, 175)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Nov 2020"
iconStyle={{ background: 'rgb(210, 233, 175)', color: '#fff' }}

>
<h4 className="vertical-timeline-element-title">Finalist of the entrepreneurial competition Actua UPM</h4>
<h5 className="vertical-timeline-element-subtitle">Universidad Politécnica de Madrid (Remote)</h5>

<p>
In collaboration with <a style={{color:'blue'}}href="https://www.linkedin.com/in/andrea-del-nido-garc%C3%ADa/"> Andrea Del Nido García</a>, we participated in the entrepreneurial competition Actua UPM. Our idea consisted of a web-app capable of
 summarizing legal terms and conditions thanks to NLP techniques.
</p>
</VerticalTimelineElement>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(210, 233, 175)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Sep 2020 - Present"
iconStyle={{ background: 'rgb(210, 233, 175)', color: '#fff' }}

>
<h4 className="vertical-timeline-element-title">Second year of the Master's Program in HCI</h4>
<h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>


</VerticalTimelineElement>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(210, 233, 175)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Sep 2020 - Present"
iconStyle={{ background: 'rgb(210, 233, 175)', color: '#fff' }}

>
<h4 className="vertical-timeline-element-title">Data Science Internship </h4>
<h5 className="vertical-timeline-element-subtitle">@Gofore (Madrid)</h5>

<p>
I was in charge of creating chat-bots with the RASA Python framework and a MongoDb database for data-labelling tasks to later be used by NLP models
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(210, 233, 175)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Sep 2019 - Jul 2020"
iconStyle={{ background: 'rgb(210, 233, 175)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">First year of the Master's Program in HCI</h4>
<h5 className="vertical-timeline-element-subtitle">@UPM (Madrid)</h5>

</VerticalTimelineElement>



<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(210, 233, 175)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Feb 2019 - Jul 2019"
iconStyle={{ background: 'rgb(210, 233, 175)',borderColor:'black', color: '#00000' }}

>


<h4 className="vertical-timeline-element-title">End of degree thesis on Blockchain's Consensus Algorithms</h4>
<h5 className="vertical-timeline-element-subtitle">@BIT (Beijing)</h5>
<p>
I obtained a grade of 9.2/10 for this work. It can be read <a href="https://oa.upm.es/56764/1/TFG_ALEJANDRO_ESQUIVIAS_CA%C3%91ADAS.pdf"><u><b>here</b></u></a>.
</p>

</VerticalTimelineElement>


<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(210, 233, 175)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Sep 2015 - Jul 2019"
iconStyle={{ background: 'rgb(210, 233, 175)',borderColor:'black', color: '#00000' }}

>


<h4 className="vertical-timeline-element-title">BSc in Computer Science</h4>
<h5 className="vertical-timeline-element-subtitle">@UPM (Madrid)</h5>


</VerticalTimelineElement>


<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Oct 2013 - Jul 2015"
iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Move to Madrid for the university exams</h4>
<h5 className="vertical-timeline-element-subtitle">@Lycée Français de Madrid (Madrid)</h5>


</VerticalTimelineElement>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Oct 2013"
iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">High-school diploma</h4>
<h5 className="vertical-timeline-element-subtitle">@Glen Eira College (Melbourne, AU)</h5>


</VerticalTimelineElement>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
date="Jul 2009"
iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Primary school diploma</h4>
<h5 className="vertical-timeline-element-subtitle">@Lycée Français d'Ankara (Ankara, TUR)</h5>


</VerticalTimelineElement>



</VerticalTimeline>


</div>
</div>

<div className = "col-lg-7" >




<div className="row">
  <div className='col-lg-12'>

<p className='text-left'>
   I hold a <b>BSc in Computer Science and Mathematics</b>  by the Universidad Politécnica de Madrid and soon an international double degree <b>MSc in Human Computer Interaction</b>, with a minor in <b>Innovation and Entrepreurship</b>
  by the Universidad Politécnica de Madrid and Aalto University. I am interested in a wide range of different aspects related to technology. Currently I am working in <b>User Experience and Design</b> and 
  <b> innovation</b> thanks to the latest project I am involved in. <b>Innovation and entrepreneurship</b> are topics that interest me a lot and I have studied some of it in my minor studies.
  Thanks to my technical background and some subjects in my MSc I am also familiar with some aspects of <b>data science</b> and <b>software engineering</b>. 
  </p>
  <p className='text-left'>
    I have international experience. I have been living in <b>Ankara (Turkey)</b> and <b>Istanbul (Turkey)</b>, <b>Melbourne (Australia)</b>, <b>Madrid (Spain)</b>, <b>Beijing (China)</b>,
    <b>Helsinki(Finland)</b> and visited countless other countries. I really enjoy travelling and meeting and working with people from other cultures to learn about their solutions to a problem 
    or just to hear diferent opinions or their life experiences.

</p>

<p className='text-left'>
    In general I enjoy challenging, diverse and open-ended work. I think my own experience is a reflection of this. I enjoy staying at the conceptual level and defining paths to take because
    I am curious and want to know about different dimensions of technology: from user-centered design to the more hardcore engineering concepts of AI.

</p>

<div className='conteiner-fluid quote p-5'>
  "Simplicity is the ultimate sophistication" - Steve Jobs
</div>
</div>
</div>

<div className='row justify-content-end p-5'>
<div className="col-lg-4 float-right">
<img style={imgSt} className="img-fluid2 " src={pic1}></img>
</div>
  <div className="col-lg-4 float-right">
<img style={imgSt} className="img-fluid2 " src={pic2}></img>
</div>

<div className="col-lg-4 float-right">
  <img style={imgSt} className="img-fluid2 float-right" src={pic3}></img></div>

</div>


</div>

</div> 
</div>
</section>

)

  }

  const Navbar = () =>{
    return(
      
<nav className="nav-fill w-100 navbar navbar-expand-lg bg-secondary text-uppercase static-top navbar-shrink">
      <a className="toplogo" href="#page-top"><img src={logo}></img></a>
            <div className="container">
                
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" 
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                   
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <Link to="work" py={true} smooth={true}>
                     <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="" >Work</a></li>
                     </Link>
                     <Link to="about" py={true} smooth={true}>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="">About</a></li>
                        </Link>
                        <Link to="contact" py={true} smooth={true}>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="">Contact</a></li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
  }

  const Work = () =>{

return (
  <section id="work">
<div className='container-fluid p-5'>

{/* <section id="work">
      <form onSubmit={searchTags}> */}
      <div className="row">
<div className = "col-lg-4 ml-4 mt-5 p-5">
  <div className ="row justify-content-center">
    
          <h1 className="title">Work</h1>
          
          </div>
          </div>
          </div>
          <div className='container' >
{/* 
          <div className = "row">
          <div className="pb-5 col-md-12 text-right">

          <input placeholder="Search for tags/projects" value={search} onChange={handleFilter} />
          </div>

          </div> */}
          <div className="row justify-content-center">
          
          {posts.map((element, index) => (
 <div  key={element.likes}  className="col-lg-6 p-4">
   
   <div className= "img-fluid" style={imgSt}> 
   
   <Card 
   key={index}
  title={element.title}
  likes={element.likes}
  image={element.image}
  imageOff = {element.imageOff}
  tags={element.tags} />
  </div>
  
  
            
            
</div>

            
          ))}
        
  </div>
  </div>
{/* 
  </form>
          </section> */}

</div>
</section>

)

  
}




  const Contact = () =>{

    return (
      <section id="contact">
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
      
    {/* 
      </form>
              </section> */}
    
    </div>
    </section>
    
    )
    
      }

  
  return (
    
    
    // <div className="App"  >
    <div>
    <Navbar />
      <div className= "container-fluid" style={{ backgroundImage: 'url('+background+')', }}>

    
        
        
        
        <Intro />
        <About />
     
        <Work />
        
        </div>
        <div>
          
        <Contact />
        

      
      
    </div>
    </div>
      
  )}
 
export default App;

import React from "react";
import './style.css'
import card11Pic from '../img/portfolio/bookflix-banner.png';
import codingFramework from "../img/portfolio/coding-framework.png";
import tabletQA from "../img/portfolio/tabletQA.png";
import phoneQA from "../img/portfolio/phoneQA.png";
import cohenInt from "../img/cohenInt.png";
import phoneTablet from "../img/bookflix-tablet+phone-removebg-preview.png";
import categories from "../img/categoriesBookflix.png";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import '../SuperResponsiveTableStyle.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { SocialIcon } from 'react-social-icons';

import {
    // main component
    Chart,
    // graphs
    Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
    // wrappers
    Layer, Animate, Transform, Handlers,
    // helpers
    helpers, DropShadow, Gradient
  } from 'rumble-charts';

  
const Bookflix = () => {

    /* const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => 1),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => 2),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }; */
       

      const series = [{
        data: [1, 2, 3], 
      }, {
        data: [5, 7, 11]
      }, {
        data: [13, 17, 19]
      }];
  const hStyle = { color: 'white' };
  const tableStyle = {border: "1px solid white",width:"100%",color:"white"};
  const tableBorder = {border: "1px solid white"};

  return (
    <div >
    <div className="fill">
      <img src={card11Pic}></img>
      </div>
      {/* <h1>Bookflix</h1> */}
      <div className="body">
      <div className="container120">

      <h2 style={hStyle} className="portfolio-title pt-5">About</h2>
        <p style={hStyle}>This project was done in the “Evaluation of Interactive Systems” class at UPM for the Human Computer Interaction and Design MSc. The project's objective was to apply qualitative and 
        quantitative techniques to find usability problems in Bookflix (an ebook platform, similar to a "Netflix for books" designed during our studies as well).  </p>
        
{/*         <Chart width={600} height={250} series={series} minY={0} maxY={20}>
  <Bars innerPadding={5} groupPadding={10} />
  <Labels
      dotStyle={{
        dominantBaseline: 'text-after-edge',
        fontFamily: 'sans-serif',
        fontSize: '0.65em',
        textAnchor: 'middle'
      }}
      label={function noRefCheck(){}}
      labelAttributes={{
        y: -4
      }}
    />
</Chart> */}

<h2 style={hStyle} className="portfolio-title pt-5">Problem Statement</h2>
        <p style={hStyle}>Considering Booklix has two prototype versions (smartphone and tablet), what prototype do users prefer and what are some problems they experience? </p>

        <h2 style={hStyle} className="portfolio-title pt-5">My personal contributions during this project</h2>
        <p style={hStyle}>I conducted one usability test as the facilitator, explaining the tasks and helping the user with as little intervention as possible. In the data-analysis phase I transcribed 3 interviews and fully coded them. Secondly, I calculated Cohen's 
        Kappa. I was also responsible for interpreting the values of the SUS and UEQ and relating them to issues that were seen during the usability tests. </p>

<h2 style={hStyle} className="portfolio-title pt-5">Final users</h2>
        <p style={hStyle}>Bookflix is an ebook platform targetted at younger audiences that enjoy reading. Its objective is to promote reading habits and make books accessible to people all over the world in the same fashion as "Netflix".  </p>

<div>
<h2 style={hStyle} className="portfolio-title pt-5">Work process</h2>

<div className="row">
    <div className="col-lg-4">
    <div style={{ textAlign: "left" }}>
<VerticalTimeline contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }} layout={'1-column-left'} lineColor='black'>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}

iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Material preparation</h4>
{/* <h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
Creative Direction, User Experience, Visual Design, SEO, Online Marketing
</p> */}
</VerticalTimelineElement>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}

iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Pilot Testing</h4>
{/* <h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
Creative Direction, User Experience, Visual Design, SEO, Online Marketing
</p> */}
</VerticalTimelineElement>


<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}

iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Test 1 and 2</h4>
{/* <h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
Creative Direction, User Experience, Visual Design, SEO, Online Marketing
</p> */}
</VerticalTimelineElement>


<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}

iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Test 3 and 4</h4>
{/* <h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
Creative Direction, User Experience, Visual Design, SEO, Online Marketing
</p> */}
</VerticalTimelineElement>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}

iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Text transcription</h4>
{/* <h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
Creative Direction, User Experience, Visual Design, SEO, Online Marketing
</p> */}
</VerticalTimelineElement>



<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}
iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Coding</h4>
{/* <h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
Creative Direction, User Experience, Visual Design, SEO, Online Marketing
</p> */}
</VerticalTimelineElement>


<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}

iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Data analysis</h4>
{/* <h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
Creative Direction, User Experience, Visual Design, SEO, Online Marketing
</p> */}
</VerticalTimelineElement>
</VerticalTimeline>
        </div>
        </div>

    <div className="col-lg-6">
    <p style={hStyle}>
        The project was planned according to the timeline described on the left. For the project to be completed successfully, we had to conduct some usability tests with different participants on two different prototypes. Below are the tasks selected for 
        the usability tests:
          <ol>
                                            <li>
                                                <b>Search, Read and Dark Mode:</b> <i>You have gone down to the pool and, after a while, the sun has begun to set. However, you don't feel like going up yet, so you decide to stay for a short reading.
                                                You decide it's a good time to finally read Harry Potter and the Deathly Hallows. Due to the low light, you would like to activate the dark mode.</i>

                                            </li>
                                            <ul></ul>

                                            <li>
                                                <b>Add a friend: </b> 
                                                <i>
                                                Jay Sunny Day, your new colleague, has told you that he has a Bookflix account. You want to add him as a friend in the Bookflix system.
                                                </i>
                                            </li>
                                            <li>
                                            <b>Leave a Review: </b>
                                            <i>This morning you finished the book "10 Little Indians" and now you would like to add a review saying that “You love it.”</i>
                                        </li>
                                            <li>
                                               <b>Look for Friend Activity: </b> 
                                                <i>You want to add to your list of pending books the one that your friend Jay Sunny Day just finished reading.</i>

                                            </li>

                                            <li>
                                                <b>Discover and read: </b>
                                                <i>Now that you have finished reading all your books, you want to read something new but you are not sure what. 
                                                Read the currently most trendy book.</i>

                                            </li>


                                        </ol> </p>

        <div className="row justify-content-center"> <img class="img-fluid" src={phoneTablet} alt="Prototypes"  /></div> 

        <div className="row quoteMedium justify-content-center" style={hStyle}>What are the reasons for a user to prefer one prototype over another ?</div> 
        
    
    </div>

    </div>


</div>
        





<h2 style={hStyle} className="portfolio-title pt-5">Evaluation and Results</h2>
        <p style={hStyle}>During this project, different metrics were taken into account and measured for each task: 
                                        <ul>
                                            <li>	Number of actions used to carry out the task</li>
                                            <li>Errors description</li>
                                            <li>Frequency of use of the help (and/or manual)</li>
                                            <li>Task completion</li>
                                            <li>Satisfaction </li>
                                        </ul>
       </p>

  <h3 style={hStyle} className="portfolio-title pt-5">SUS and UEQ</h3>
  <p style={hStyle}>To assess the overall usability and user experience of the system both SUS and UEQ were used. The smartphone prototype received a SUS score of 75,  indicating good usability. On the other hand the  tablet prototype obtained an average SUS score of  58, which denotes poor usability. 
  Below are the tables with three qualities measured per prototype with a brief explanation. </p>

  <div>


<div className= "row">
    <div className ='col'>
    <Table style={tableStyle} >
                                                <caption style={hStyle}>Scales for the three qualities for the tablet prototype</caption>

                                                <Tr style={tableBorder}>
                                                    <Td style={tableBorder}>Pragmatic quality</Td>
                                                    <Td style={tableBorder}>-0.563</Td>

                                                </Tr>
                                                <Tr style={tableBorder} >
                                                    <Td style={tableBorder} >Hedonic quality</Td>
                                                    <Td style={tableBorder}>-0.500</Td>

                                                </Tr>
                                                <Tr style={tableBorder}>
                                                    <Td style={tableBorder}>Overall</Td>
                                                    <Td style={tableBorder}>-0.531</Td>

                                                </Tr>
                                            </Table> 
        </div>

        <div className ='col'>
        <Table style={tableStyle} >
                                                <caption style={hStyle}>Scales for the three qualities for the phone prototype</caption>

                                                <Tr style={tableBorder}>
                                                    <Td style={tableBorder}>Pragmatic quality</Td>
                                                    <Td style={tableBorder}>0.625</Td>

                                                </Tr>
                                                <Tr style={tableBorder} >
                                                    <Td style={tableBorder} >Hedonic quality</Td>
                                                    <Td style={tableBorder}>0.0</Td>

                                                </Tr>
                                                <Tr style={tableBorder}>
                                                    <Td style={tableBorder}>Overall</Td>
                                                    <Td style={tableBorder}>0.313</Td>

                                                </Tr>
                                            </Table> 
        </div>
    </div>

    <div className= 'row p-4'>
        <div className='col'>
        <div className= 'row num2 justify-content-center' style={hStyle}>
            58
            </div>
            <div className= 'row justify-content-center' style={hStyle}>
                SUS Score for the tablet prototype
            </div>
            </div>
            <div className='col'>
            <div className= 'row num2 justify-content-center'  style={hStyle}>
                75
            </div>
            <div className= 'row justify-content-center'  style={hStyle}>
                SUS Score for the phone pototype
            </div>
            </div>

          </div>

    <div className= "row">
    <div className ='col'>
        
        </div>

        <div className ='col'>
        
        </div>
    </div>

  </div>


  <div >
                                            
                                        </div>
                                        
   <p style={hStyle}>
   Values between -0.8 and 0.8 represent a neutral evaluation of the corresponding scale, values above 0,8 represent a positive evaluation and values below -0,8 represent a negative evaluation. 
   For this prototype, this means that the pragmatic (usefulness, efficiency, and ease of use) and the hedonic quality (joy of use) received a neutral evaluation. This is because in general,
    users felt that this prototype was more obstructive than supportive (pragmatic quality ), more conventional than inventive (hedonic quality) and more usual than leading edge. However,
     this prototype was exciting to use, according to our results. For the rest of the attributes, users were neutral in their opinion.
     </p>                                     

                                        <div >
                                           
                                        </div>

<p style={hStyle}>
In this prototype, we can observe that the users found the prototype interesting and exciting. However, they thought that it was conventional and usual. As a result, both the pragmatic 
and the hedonic quality have increased to give an overall mean result of 0.313, which still corresponds to neutral evaluation. 

</p>

<h3 style ={hStyle} className="portfolio-title pt-5" >
  Qualitative Analysis
</h3>

<ol style={hStyle}>
    <p>The data was analyzed according to the methodology presented by Taylor-Powell and Renner (2003):</p>


                                            <li>
                                                <b>Initial data exploration:</b>We went over the transcripts, listening to some parts from the recordings, when something was not completely clear, to understand the 
                                            data. When we found an interesting observation, we noted it and sometimes asked for similar information in the usability test. On the other hand, we also discarded non-useful information
                                            for this project.
                                            </li>

                                            <li>

                                                <b>Definition of a research question: </b>Focus on a specific topic and define a question to answer. In this case the purpose of the analysis is to understand. Our research question was: 
                                                <i>What are the reasons for a person to choose one prototype over another? </i>
                                            </li>

                                            <li>
                                                <b>Development of a coding framework and categorization:</b> As a team we read through the first interview and decided on a series of codes and the atomic level we were going to use. We could not use sentences, 
                                                because we realized some of them were too complex and often expressed more than a simple idea. Below is a picture of the framework we used, with different categories and their meanings.
                                                <div className="row justify-content-center p-4">
                                                <div className="col-lg-6"><img class="img-fluid" src={categories} alt="Categories" /></div>
                                                <div className="col-lg-6"><img class="img-fluid" src={codingFramework} alt="coding framework" /></div>
                                                
                                                </div>
                                            </li>
                                            
                                            <li>
                                                <b>Conclusions and written results:</b> Below are two graphs that show the frequency of different ocurring categories per user. According to the study we conducted, we can conclude (thus answering the research question) that users prefer the smartphone prototype because it follows more their natural way of thinking. As a result, they experience fewer negative feelings and more positive feelings.
                                               <div className="row"> 
                                               <div className="col">
                                               <figure>
                                                    <img class="img-fluid" src={tabletQA} alt="tablet qualitative analysis"  />
                                                    <figcaption>Tablet prototype's categories</figcaption>

                                                </figure>
                                                </div>

                                                <div className="col">

                                                <figure>
                                                    <img class="img-fluid" src={phoneQA} alt="phone qualitative analysis" />
                                                    <figcaption>Smartphone prototype's categories</figcaption>

                                                </figure>
                                                </div>

                                                </div>

                                            </li>
                                           
                                            </ol>
                                                <b style={hStyle} className="portfolio-title pt-5">Validity and overall reliability of the study:</b> 
                                                <h6 style={hStyle}>Reliability: Consistency of a measure (Inter/intra-coder scores and Cohen’s kappa)</h6>

                                            <div className="row">
                                                <div className="col-lg-6 my-auto"><Table style={tableStyle} >
                                                <caption style={hStyle}>Reproducibility and stability values for the coding framework </caption>

                                                <Tr style={tableBorder}>
                                                    <Td style={tableBorder}>Participant</Td>
                                                    <Td style={tableBorder}>Intra-coder#1</Td>
                                                    <Td style={tableBorder}>Intra-coder#2</Td>
                                                    <Td style={tableBorder}>Inter-coder</Td>
                                                    <Td style={tableBorder}>Cohen's Kappa Tablet</Td>
                                                    <Td style={tableBorder}>Cohen's Kappa Phone</Td>

                                                </Tr>
                                                <Tr style={tableBorder} >

                                                <Td style={tableBorder}>User 1 </Td>
                                                    <Td style={tableBorder}>X</Td>
                                                    <Td style={tableBorder}>X</Td>
                                                    <Td style={tableBorder}>X</Td>
                                                    <Td style={tableBorder}>X</Td>
                                                    <Td style={tableBorder}>X</Td>
                                                    </Tr>
                                                    <Tr>
                                                    <Td style={tableBorder}>User 2 </Td>
                                                    <Td style={tableBorder}> 87% </Td>
                                                    <Td style={tableBorder}> 83% </Td>
                                                    <Td style={tableBorder}> 52% </Td>
                                                    <Td style={tableBorder}> 0.46 </Td>
                                                    <Td style={tableBorder}> 0.49 </Td>
                                                    </Tr>

                                              
                                                <Tr style={tableBorder}>

                                                <Td style={tableBorder}>User 3 </Td>
                                                    <Td style={tableBorder}> 93% </Td>
                                                    <Td style={tableBorder}> 81% </Td>
                                                    <Td style={tableBorder}> 55% </Td>
                                                    <Td style={tableBorder}> 0.77 </Td>
                                                    <Td style={tableBorder}> 0.27 </Td>

                                                </Tr>

                                                <Tr style={tableBorder}>

                                                <Td style={tableBorder}>User 4 </Td>
                                                    <Td style={tableBorder}> 79% </Td>
                                                    <Td style={tableBorder}> 76% </Td>
                                                    <Td style={tableBorder}> 41% </Td>
                                                    <Td style={tableBorder}> 0.33 </Td>
                                                    <Td style={tableBorder}> 0.31 </Td>

                                                </Tr>
                                            </Table> </div>
                                                <div className="col-lg-6">
                                                <img src={cohenInt}></img>
                                                    </div>
                                                </div>

                                                



                 <p style={hStyle} className="pt-5">The intra-coder agreement rate values are high with the coders agreeing at a high percentage with their own coding after reviewing the same transcribed interview. Finally, the inter-coder agreement rate is not high enough to suggest a good level of validity of the findings.
                                                    Additionally, the values for Cohen’s Kappa suggest different agreement levels between the coders for the codable text in the interviews regarding the two prototypes. Based on Cohen’s values, the values of Cohen’s Kappa for user 2 for both prototypes suggest a weak level of agreement with 15-35% of the data being reliable. The values also suggest that the two coders coded both parts of the interview with a fair agreement beyond chance. Additionally, the values of Cohen’s Kappa for user 3 differ highly. The value for the tablet suggests a moderate level of agreement with 35-63% of data being reliable and that the coders coded with a good agreement beyond chance. However, the value for the smartphone suggests a minimal level of agreement with 4-15% of the data being reliable and that the coders coded with a poor agreement beyond chance. Finally, the values of Cohen’s Kappa for user 4 for both prototypes suggest a minimal level of agreement with 4-15% of data being reliable. The values also suggest that the two coders coded both parts of the interview with a poor agreement beyond chance.</p>

                                                    <p style={hStyle}><b>Data collection triangulation:</b> We interviewed 4 total participants (2 males and females) from 3 different nationalities (Spain, Italy and Peru). The interviews took place during two separate days in the same exact physical location. 
                                                    <b>Methods triangulation: </b> We utilized observation notes from the interviews, a voice recorder to capture the data for the coding, SUS, and UEQ questionnaires to gather quantitative results about the prototypes and additional
                                                     open questions after the end of each prototype and at the end of the interview. 
                                                    <b> Coder’s triangulation: </b>We calculated the intra-coding and inter-coding agreement rates and Cohen’s Kappa for all participants. The coding categories were established by having all the researchers code the interview 
                                                    of the first user together in order to establish a framework.</p>
                                                

                                            
 <h3 style ={hStyle} className="portfolio-title pt-5" >
  Problems with the prototypes
</h3> 

<div className="row">
    <div className ="col-lg-6" style={hStyle}>
        <h3><b>Problems Tablet</b></h3>
        <ol>
            <li>No dedicated search bar for friends search. Users expected separate search bars: One in the dedicated social section and another one to search books.</li>
            <li>Confusing divided search icon for some users</li>
            <li>Some users could not identify a book only by its cover and expected more information</li>
            <li>Missing "last- read date" when reading or continuing a book</li>
        </ol>
        </div>

    <div className ="col-lg-6" style={hStyle}><h3><b>Problems Smartphone</b></h3>
    <ol>
    
    <li>Users expected a percentage (or another number) to credit their completion when reading a book, instead of only a completion bar</li>
    <li>Users could not view the profile of their friends in this prototype. This difficulted their completion of some tasks</li>
    <li>When reviewing a book the text automatically appeared and some users wanted to edit it but could not.</li>

    </ol>
    
    </div>
    </div>
    <div className="row"><h3 style={hStyle}><b>General considerations</b></h3></div>
    <div className="row" style={hStyle}> There were some technical issues and the usability tests were carried out in a laptop for the phone version. Due to this, the users did not recognize the content to be scrollable at first and struggled with the completion of some tasks.
    Secondly, it appears thatfor both prototypes the user's mental model was not followed as they verbally expressed thei expectation and the prototype was missing some features. Finally, the back button was not implemented and this posed some trouble when 
    users tried to go back in some tasks (as interviewers intervention was necessary).</div>


<h2 style={hStyle} className="portfolio-title pt-5">Final conclusions</h2>
        <p style={hStyle}>Considering the analysis carried out it appears users prefer the smartphone prototype. Some reasons that can explain it are:<ul>
            <li>Fewer technological problems: Due to technical issues, the prototype device had to be changed and some aspects were not functioning as expected. This created frustration among users</li>
            <li>Fewer negative feelings for the tablet prototype. The reasons for this are listed in the "problems" section</li>
            <li>The smartphone prototype appears to follow the user's mental model more closely than the tablet prototype (less data in the "expecation category").</li>
            </ul>Thanks to this project, I understood how powerful qualitative and quantitative analysis really are. Both of these methods helped us answer the research question with rigour and in a scientific way. Secondly, this project made me 
        realize how time-consuming the tasks can be and the importance of properly defining a coding framework from the beginning and agreeing and correctly understanding the individual definitions from the codes. </p>

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
  
export default Bookflix;
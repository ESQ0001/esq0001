import React from "react";
import './style.css';
import card11Pic from '../img/portfolio/foodR-banner.png';
import ScrollToTop from "react-scroll-to-top";
import errorsIM from "../img/Errors_IM.png";
import userFlow from "../img/portfolio/userFlow_IM1.PNG";
import android1 from "../img/FoodRec1.jpg";
import android2 from "../img/FoodRec2.jpg";
import acc from "../img/Acc.png";
import foodTable from "../img/foodMults.PNG";
import dataset from"../img/food_dataset.PNG";
import postman from "../img/postman_FR.jpg";
import architecture from "../img/FR_architecture.PNG";
import code from "../img/pythonPred.PNG";
import pythonPreds from "../img/foodPython.PNG";
import { SocialIcon } from 'react-social-icons';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


const FoodRecognizer = () => {
  const hStyle = { color: 'white' };
  const tableStyle = {border: "1px solid white",width:"100%",color:"white"};
  const tableBorder = {border: "1px solid white"};
  return (
    <div>
      
      <div className="fill">
      <img src={card11Pic}></img>
      </div>
      {/* <h1>Bookflix</h1> */}
      <div className="body">
      <div className="container120">
      <h2 style={hStyle} className="portfolio-title pt-5" >About</h2>
        <p style={hStyle} >This project was done in the “Image Mining” class at UPM for the Human Computer Interction and Design MSc. The code is available on <a href="https://github.com/ESQ0001/ImageMining"
                                         target="_blank">Github</a>. The emphasis of this project was put in the backend side. Therefore, the most challenging part was to understand the machine learning and deep learning aspects. 
                                         <a href="https://esq0001.github.io/IM.pdf" target="_blank"> &nbsp; Read the full paper</a>  </p> 


<h2 style={hStyle} className="portfolio-title pt-5" >Problem Statement</h2>
        <p style={hStyle}>How to classify and return nutritional information of food items with maximum efficiency and minimum time? </p>


<h2 style={hStyle} className="portfolio-title pt-5" >Final users</h2>
        <p style={hStyle} >Even though the app was not tested with real users, we believe this app could have different applications:
                                    <ul>
                                        <li>Informing about possible allergies for ingredients in a product </li>
                                        <li>A guide for people with vision problems</li>
                                        <li>App for calculating stocks in a shop</li>
                                    </ul> 
 </p>

 <h2 style={hStyle} className="portfolio-title pt-5" >Roles and Responsabilities</h2>
 <p style ={hStyle}> I was in charge of building the classifier and the programming of the API REST (with another colleague)  to connect the app with our Python classifier. 
 My other colleagues were in charge of the UI and user flow, which can be seen in the Process section. The last task, when the project had some results to analyze consisted in performing an error analysis to
  discover common patterns between misclassified images to modify our architecture and improve our classifier.</p>

<h2 style={hStyle} className="portfolio-title pt-5" >Work process</h2>

<div className="row">
    <div className="col-lg-6">
        
    <div style={{ textAlign: "left" }}>
<VerticalTimeline contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }} layout={'1-column-left'} lineColor='black'>

<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}

iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Creating a custom dataset with the required information</h4>
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


<h4 className="vertical-timeline-element-title">Vectorizing the images' pixels to run ML models</h4>
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


<h4 className="vertical-timeline-element-title">Try different neural networks architectures on the vectorized images</h4>

</VerticalTimelineElement>


<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(173,216,230)', color: 'black' }}
contentArrowStyle={{ borderRight: '7px solid  black' }}

iconStyle={{ background: 'rgb(173,216,230)', color: '#fff' }}

>


<h4 className="vertical-timeline-element-title">Develop the Android Application</h4>
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


<h4 className="vertical-timeline-element-title">Create an API REST in Python to connect front-end and back-end</h4>
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


<h4 className="vertical-timeline-element-title">Integrate everything into one application</h4>
{/* <h5 className="vertical-timeline-element-subtitle">@Aalto University (Helsinki)</h5>

<p>
Creative Direction, User Experience, Visual Design, SEO, Online Marketing
</p> */}
</VerticalTimelineElement>


</VerticalTimeline>
        </div>
        
        
        </div>


    <div className="col-lg-6">

        <p style={hStyle}>The project was planned according to the timeline on the left. However, the development of the Android application started at the same time as the backend development.</p>
        
        <img className="img-fluid" src={foodTable}></img>

        <div className="row quoteMedium justify-content-center" style={hStyle}>How to use ML models to build a food-classifier Android app ?</div> 

   
        </div>
    
    </div>
    {/* <p style={hStyle}className="p-5"> 
         Parallelly we started building our application, which was simple enough (check the Accuracy and error analysis image) 
         user flow in the next image. 
                                    
                                    <div className = "row">
                                        <div class="col-lg-7">


                                            <figure>
                                                <img className="img-fluid rounded mb-5 " hspace={10}  src={errorsIM} alt="Error Analysis"/>
                                                <figcaption> Error analysis for the "apple-pie" </figcaption>
                                            </figure>
                                        </div>
                                        <div className = "col-lg-5">
                                            <figure>
                                                <img class="img-fluid rounded mb-5 "  src={userFlow} alt="User flow of the app"  />
                                                <figcaption> The application's flow </figcaption>
                                            </figure>

                                        </div>

                                    </div>                            
                                    
                                    </p>*/} 

             <h5 style={hStyle}className="portfolio-title pt-5" >Creation of a custom dataset</h5>
             <p style={hStyle}>
             The first we had to find was nutritional information regarding different types of food. We used the website <a href="url"><u>https://www.nutritionix.com/</u></a> to extract the desired nutritional information. The dataset was created from scartch in this 
             manner and a screenshot of our Excel file can be seen below.
 We created a dataframe with the filename, the type of food and some nutritional information.
                 </p>

             <img className="img-fluid" src={dataset}></img>

             <h5 style={hStyle}className="portfolio-title pt-5" >Python backend</h5>

             <p style = {hStyle}>
             We used Jupyter notebooks to work on the back-end side of the application, which is the responsible part of classifying the food pictures.
             Firstly, we vectorized the images (convert the pictures to pixel values in vector format) and we used the image’s pixels and histogram for classification. We did not obtain great results, so we tried deep learning with a simple CNN architecture. 
            This was not working properly, so we hypothesized something was wrong with our data set. Sure enough, the vectorization was interrupted in the middle of the calculation so some images were missing pixel values.
            We recomputed everything and once we saw some improvement with a simple CNN we tried transfer learning. At the end we ended up having images with their prediction tag once they had been processed by our neural net.

             </p>
<div className="row justify-content-center">
<img className="img-fluid" src={pythonPreds}></img>
    </div>


<h5 style={hStyle}className="portfolio-title pt-5" >Development of the Android application</h5>
            <p style={hStyle}>
            First of all, we had to decide what kind of device would
be best. The most popular types of apps are nowadays web
apps and mobile apps. Considering the
versatility of use cases (by the end-users) mobile devices are the best solution. In this case, a mobile device enables the end-user to take a picture 
wherever they are, making our use cases more flexible. Secondly, if the speed and convenience of usage are considered  we
decided that our solution should be a mobile app, which
may provide the best user experience. Also, worldwide data about the share of used devices shows that mobile
devices are used by 52.1% of the population, compared to
desktop market share of 44.2%.  We chose Android over Swift as we were more comfortbale with it. Also, we took into
consideration international customers' preferences.
Android is the dominant operating system for mobile
devices (72,26% worldwide share) compared to iOS
(27,03%) . We also had to discuss user flows for our
application, which can be seen below, with the overall architecture.

                </p>
            <div className="row justify-content-center">
                <div className="col-lg-5">
                
                <figure>
                                                <img class="img-fluid rounded mb-5 "  src={userFlow} alt="User flow of the app"  />
                                                <figcaption style={hStyle}> The application's flow </figcaption>
                                            </figure>

                        </div>

                        <div className="col-lg-5">
                
                <figure>
                                                <img class="img-fluid rounded mb-5 "  src={architecture} alt="Software architecture"  />
                                                <figcaption style={hStyle}> The architecture of our application with frontend and backend </figcaption>
                                            </figure>

                        </div>    

                
                </div>

            <div className="row">
                <p style={hStyle}>After having an idea of what the flow and the architecture were going to look like we developed the interface for the Android application, which can be seen below.</p>
                </div>
            <div className="row justify-content-center pt-5">

                <div className="col-lg-5">  <img className ="img-fluid rounded mb-5 border" src={android1}></img></div>
              
                <div className="col-lg-5">
                <img className ="img-fluid rounded mb-5 border" src={android2}></img></div>
               
                </div>


                
                        

             <h5 style={hStyle}className="portfolio-title pt-5" >API building and connection to the app</h5>

            <p style={hStyle}> We developed a REST API in Python that could be called
from our Android application. In the API we created a
function that was responsible for loading the model and
running keras’ predict_classes function when it was given
a model and an image in array format. To retrieve the
correct label and nutritional information we simply called
the appropriate row in the dataframe containing the
nutritional information. Since we were using an emulator
to develop our application and we were running this on
our localhost, we had to map the computer’s localhost
address to a global address. To do this we used a tunneling
program known as ngrok. In this step we faced formatting
problems. To solve these problems, we developed an
additional function in our REST API, that formatted the
nutritional values and the label of the food in dictionary
form.
In the Android app, we called our localhost with a POST
request containing the image and we retrieved the
response to populate the corresponding fields dynamically. Below is a screenshot of POSTMAN (the body contains the route of the image) and the Python code response for the prediction.</p>


            <div className="row">
                <div className="col-lg-6"> <img className="img-fluid" src={postman}></img></div>
                <div className="col-lg-6"><img className="img-fluid" src={code}></img></div>
                </div>
            





         


<div>
<h2 style={hStyle} className="portfolio-title pt-5">Evaluation</h2>
        <p style={hStyle}>To evaluate our app a test set was used. The table below summarizes the transfer learning algorithms with two different optimizers and their respective accuracy. As can be seen from the table, we obtained the best accuracy 
        with the <b>ResNet50</b> neural network and the <b>SGD optimizer</b>.
         </p>
<div className="row">
    
    <div className="col-lg-6">
    <div >
                                            <table style={tableStyle} >
                                                <caption style={hStyle}>Table of results with test sets and different neural nets</caption>

                                                <tr style={tableBorder}>
                                                    <td style={tableBorder}></td>
                                                    <td style={tableBorder}>Adam Optimizer</td>
                                                    <td style={tableBorder}>SGD Optimizer</td>

                                                </tr>
                                                <tr style={tableBorder} >
                                                <td style={tableBorder}>ResNet50 Neural Net</td>
                                                    <td style={tableBorder}>69.4%</td>
                                                    <td style={tableBorder}>71.5%</td>

                                                </tr>
                                                <tr style={tableBorder}>
                                                <td style={tableBorder}>VGG16 Neural Net</td>
                                                    <td style={tableBorder}>66.6%</td>
                                                    <td style={tableBorder}>31.9%</td>

                                                </tr>
                                                <tr style={tableBorder}>
                                                <td style={tableBorder}>InceptionV3 Neural Net</td>
                                                    <td style={tableBorder}>68.3%</td>
                                                    <td style={tableBorder}>58.0%</td>

                                                </tr>
                                            </table> 
                                        </div>
        </div>
    
    <div className="col-lg-6">
        <div className="row justify-content-center">
    <img className="img-fluid mb-5 border " src={acc}/>
    </div>
    </div>
    
    </div>
       



    <h2 style={hStyle}>Error analysis</h2>
    <p style={hStyle}>We created the following list, with an explanation for some of the most common errors: </p>
         <ul style={hStyle}>
                                        <li>Non-food images</li>
                                        <li>Too much information in the image</li>
                                        <li> Similar format, which leads to misclassification, due to the pixels' resemblance</li>
                                        <li>More than one food item in the image</li>
                                        <li> Backgrounds too big compared to the food</li>
                                    </ul>

 </div>
<div className="pt-5 pb-5">
<h2 style={hStyle} className="portfolio-title ">Final conclusions and future work</h2>
        <p style={hStyle}>
        As a team, we were happy with the results we obtained, but we think more computational power (something else instead of Google Collab), 
        would have allowed us to perform the calculations faster and maybe even classify more classes. If we had more time image segmentation would have been another 
        approach we could have tried as many images contained information that was not beneficial. Finally, we think we could have tried other transfer learning algorithms.
           </p>

           <p style={hStyle}>
           For future work we suggest
segmenting the images. In that way we would obtain only
the desired section of the image, since one of our problem
was our noisy images.
Other transfer learning algorithms could also be tried, and
transfer learning in itself could be used to extract features
from the images and then training a classifier (SVM,
decision trees, k-nearest-neighbor...etc).
A comparison between different types of classifiers is
interesting for future iterations. Also, once a better
accuracy is reached it could be useful to train a classifier
on food vs non-food objects to prevent it from classifying
pictures that are not food. This is especially useful, if we
want to deploy this application to reduce the amount of
computational power needed, when calling the API on a
remote server.
               </p>
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
  
export default FoodRecognizer;
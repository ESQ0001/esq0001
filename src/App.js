
import './App.css';
import profile from './img/profCircle.png'
import { useState } from 'react';
function App() {
  // useState searchBar
  const [search, setSearch] = useState('')

  
  return (
    <div className="App">


     
        

      <div className= "container">
      
    
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase static-top navbar-shrink" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"></a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" 
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                   
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#work">Work</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>


      <div className ="row">
        <div className = "col-sm-6">
         
          <img  src={profile} alt="profile picture"/>
        </div>

        <div className = "col-sm-6 my-auto" align="left" >

        
          Hi, ZOY <h1>Alejandro Esquivias Cañadas </h1>
          


          
        </div>
      </div>

      <div className = "row">
          <h2>About</h2>
          </div>

          <div className ="row">
        <div className = "col-sm-8">

          {/* START TIMELINE */}
        
          <div className="timeline">

          <div className="container1 left">
            <div className="content1">
              <h2>2020</h2>
              <p>I successfully complete the summer-school in Big Data Analytics at KTH (Stockholm) virtually and I move to Helsinki to finish my MSc at Aalto University </p>
            </div>
        </div>

<div className="container1 right">
    <div className="content1">
        <h2>2019</h2>
        <p>I am awarded a scholarship to complete my degree at the Beijing Institute of technology, where I write my  <a href="http://oa.upm.es/56764/1/TFG_ALEJANDRO_ESQUIVIAS_CA%C3%91ADAS.pdf"target="_blank" style={{color:"black"}}>thesis</a>  on blockchain's consensus algorithms, which concludes my degree. I am admitted and start the MSc in Human Computer interaction at UPM (Madrid). </p>
    </div>
</div>
<div className="container1 left">
    <div className="content1">
        <h2>2015</h2>
        <p>I successfully graduate high-school and I am admitted in the "Mathematics and Computer Science" degree at UPM (Madrid).</p>
    </div>
</div>
<div className="container1 right">
    <div className="content1">
        <h2>2013</h2>
        <p>I move back to Madrid to take the university admission exams</p>
    </div>
</div>
<div className="container1 left">
    <div className="content1">
        <h2>2009</h2>
        <p>My family moves to Melbourne (Australia) and I am enrolled in a bilingual (French-English) highschool.</p>
    </div>
</div>
<div className="container1 right">
    <div className="content1">
        <h2>2004</h2>
        <p>My family moves to Ankara (Turkey) and I continue my French education.</p>
    </div>
</div>
<div className="container1 left">
    <div className="content1">
        <h2>2001</h2>
        <p>I start French school in Istanbul (Turkey). </p>
    </div>
</div>
<div className="container1 right">
    <div className="content1">
        <h2>1997</h2>
        <p>I was born in Madrid (Spain)</p>
    </div>
</div>
</div>

{/* END TIMELINE */}
        </div>

        <div className = "col-sm-4">
          BS Text
        </div>

        </div>
      
    <section id="work">
        <div className = "row">
          <h2>Work</h2>
          </div>

          <div className = "row">
          Search bar to the right
          </div>


          <div className='container'>
          <div className ="row justify-content-center">
        <div className = "col-sm-6">
        <div className="card" style={{width: "18rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Card 11</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


        </div>
        
        <div className = "col-sm-6">
        <div className="card" style={{width: "18rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Card 12</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    </div>

    <div className="row justify-content-center">
        <div className = "col-sm-6">
        <div className="card" style={{width: "18rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Card 21</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div className = "col-sm-6">
        <div className="card" style={{width: "18rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Card 22</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
      </div>
      </div>
          

          </section>
          
     
    </div>
    </div>
  );
}

export default App;

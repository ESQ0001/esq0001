import React from "react";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import { Button } from '@react-md/button';
import { useState } from 'react';
import styles from "./CardModule.css";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import { Routes, Route, Router, NavLink } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";


const Home = () =>{
  return(
  <div>
    <h1>Home</h1>
    </div>
  )
      
    }
const Card = ({ title, likes, order, image, tags, imageOff }) => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(hover =>! hover);
  };

  const onLeave = () => {
    setHover(hover => !hover);
  };

  const handleClick = () =>{

    console.log("Clicked", title)
    

    
    

  }
  const tagSt={textAlign:"center"}
  
  return (



        <div  style={tagSt}>
         
        <Link to={title}>
        <img className="img-fluid" onMouseEnter = {onHover} onMouseLeave = {onLeave} 
          src={hover ? imageOff:image} onClick={()=>handleClick} alt="Case study" />
          </Link>
          

      
          
          <div>{tags.map(elem=><Button key={elem}>{elem}</Button>)}</div>
        
        
        <div className={styles.badgeWrapper}>
          <div

            className={classNames([styles.dangerBadge, styles.badgeAnime])}
          >
           
          </div>
          <div
            className={classNames([
              styles.primaryBadge,
              styles.badgeAnime,
              "group",
            ])}
          >
     
          </div>
        </div>
      
      <div className={styles.textWrapper}>
        
      </div>
      
    </div>
    
   
  );
};

export default Card;
import card11Pic from '../img/portfolio/bookflix.png'
import card11Pic_hovered from '../img/portfolio/bookflix-hovered.png'

import card12Pic from '../img/portfolio/game.png'
import card12Pic_hovered from '../img/portfolio/game-hovered.png'

import card21Pic from '../img/portfolio/cake.png'
import card21Pic_hovered from '../img/portfolio/cake-hovered.png'

import card22Pic from '../img/portfolio/safe.png'
import card22Pic_hovered from '../img/portfolio/safe-hovered.png'



export default [
  
  {
    title: "AR Music",
    likes: Math.floor(Math.random() * (50 - 0) + 0),
    image: card22Pic,
    imageOff: card22Pic_hovered,
    tags: ['#ux','#ui','#usability']
  },
  {
    title: "Pearly",
    likes: Math.floor(Math.random() * (50 - 0) + 0),
    image: card12Pic,
    imageOff: card12Pic_hovered,
    tags: ['#ux','#ui','#usability']
  },
  {
    title: "Bookflix",
    likes: Math.floor(Math.random() * (50 - 0) + 0),
    image: card11Pic,
    imageOff: card11Pic_hovered,
    tags: ['#ux','#qualitative analysis', 'usability test']
  },
  
  {
    title: "Food recognizer",
    likes: Math.floor(Math.random() * (50 - 0) + 0),
    image: card21Pic,
    imageOff: card21Pic_hovered,
    tags: ['#ui','#computer-vision', '#android']
  }
  
];
import './App.css';
import  React, { useState } from 'react'
import samson from './Assets/samson.png'
import picture1 from './Assets/picture1.jpg'
import main1 from './Assets/main1.jpg'
import main2 from './Assets/main2.jpg'
import main3 from './Assets/main3.jpg'
import { useMediaQuery } from 'react-responsive'


 function App () {
//   const button = document.querySelector('text-button');

//   button.addEventListener('click', showMyName);

//   function showMyName(){
//     alert('my name is samson')


//   }
const [name, SetName] = useState('')
const [subject, SetSubject] = useState('')
const [message, SetMessage] = useState('')
const [mHref, SetmHref] = useState('')



const handleEmailMessage = () =>{
  SetmHref(`mailto:anthonysamson@gmail.com?subject=${subject} -${name}&body=${message}`);
}

  return (
    <div className='App'>

      <div className='Header'>
        <nav>
          <div className='logo'>
            <h1>Samson.</h1></div>
          <ul className='ul-items'>
            <li>
            <a href='#'>Home</a>
            </li>
            <li>
            <a href='#'>About</a>
            </li>
            <li>
            <a href='#'>Services</a>
            </li>
            <li>
            <a href='#'>Projects</a>
            </li>
            <li>
            <a href='#'>Blog</a>
            </li>
            <li>
            <a href='#'>Contact</a>
            </li>
            <li>
    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 6.5h12"/><path d="m4.498 10.5h11.997"/><path d="m4.5 14.5h11.995"/></g></svg>
            </li>
             </ul>
        </nav>

      </div>
      <section className='main-section'>
        <div className='container'>
          <div className='texts'>
            <h1>I am</h1>
            <h1 className='anthony'>Anthony Samson</h1>
            <p>Professional Front-End React js Developer with 6 months of experience</p>
            <button className='text-button'>My Work</button>
          </div>
          <div className='image'>
            <img src={samson} alt=''/>
          </div>
        </div>
      </section>
      <section className='section2'>
        <h1 className='about-me'>About Me</h1>

        <div className='container-2'>
          <div className='image-container'>
            <img src={picture1} alt=''></img>
          </div>
          <div className='text-2'>
            <p>Front-End Developer</p>
            <p>React js Developer</p>
            <p>Node Package Management NPM, GitHub repository</p>
            <p>Good Communication</p>
          </div>
        </div>
      </section>
      <section className='section3'>
      <h1 className='freestyle'>Freestyle</h1>

      <div className='container-3'>
          <div className='image-container2'>
            <img src={main1} alt=''></img>
          </div>
          <div className='image-container3'>
          <img src={main2} alt=''></img>
          </div>
          <div className='image-container4'>
          <img src={main3} alt=''></img>
          </div>
        </div>
      </section>
      <section className='section4'>
        <h1 className='contact'>Contact Me</h1>
        <div className='discuss'>
          <h1 className='let'>Let's discuss <p/>your project</h1>
          <div className='register'>
            <h3 className='story'>What's your story? <p/>Get in touch.</h3>
          <input type='text' placeholder='Name' className='password' value={name} onChange={(e)=>SetName(e.target.value)}/><br/>
          <input className='password' type="text" placeholder="Subject"  onChange={(e)=>SetSubject(e.target.value)} /><br/>
        <input className='password' type="text" placeholder="Email"/><br/>
        <input className='message' type="text" placeholder="message"  onChange={(e)=>SetMessage(e.target.value)} /><br/>
        <button className='submit-button' onClick={handleEmailMessage}> <a href={`${mHref}`} target="_blank" >Submit</a></button>
          </div>
        </div>
      </section>
      </div>
    )
  }
export default App;
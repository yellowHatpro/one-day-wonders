import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Footer, Heading, Milestones, Navbar, Prefooter, Services, Testimonials, Timeline, Work} from './sections';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Heading/>
    <Milestones/>
    <Services/>
    <Work/>
    <Timeline/>
    <Testimonials/>
    <Prefooter/>
    <Footer/>
  </React.StrictMode>,
)

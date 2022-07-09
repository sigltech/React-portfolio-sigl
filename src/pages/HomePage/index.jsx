import React from 'react'
import '../../css/nav.css'
import { FrameworksGallery } from '../../components';

export function HomePage() {

  return (
    <>
        <div className="home-flex">
            <div className="left-col">
                
                <h2>Hi, i'm <span id="masthead-name">Richard</span></h2>
                <p>I'm a full-stack web developer (in training) with a passion for creating beautiful, responsive applications. I'm currently developing my skills at <a href="https://cohorts.getfutureproof.co.uk/al-jazari">futureproof</a>.</p>

            </div>
            <FrameworksGallery />

            <div className="right-col">
                
            </div> 
        </div>
    </>
  )
}


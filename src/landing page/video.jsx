import React, { useEffect, useRef } from 'react'
import sampleVideo from '/3195394-uhd_3840_2160_25fps.mp4'
import '../css/landingPage.css'

const Video = () => {

  //function to manually start and pause the video
  const videoCOntrols = (e) => {
    console.log(e.currentTarget)
    const video = e.currentTarget
    const cursor = document.querySelector("#cursor .cursor")
    if (video.paused) {
      video.play();
      cursor.innerHTML = ` <div class=' text-center'>pause</div>`
    } else {
      video.pause();
      cursor.innerHTML = ` <div class=' text-center'>play</div>`
    }
  }

  // function for custom cursor 
  const customCursor = () => {
    const cursor = document.querySelector("#cursor")
    const video = document.querySelector("video")

    video.addEventListener('mousemove', (e) => {
      cursor.classList.remove("hidden")
      cursor.style.transform = `translate(calc(${e.clientX}px - 5rem) , calc(${e.clientY}px - 15rem))`
    })

    video.addEventListener('mouseleave', () => {
      cursor.classList.add("hidden")
    })

  }

  useEffect(() => {
    customCursor()
  }, [])



  return (
    <>
      <div id="video" className=' py-16  w-full h-96  overflow-hidden '>

        <div className='overflow-hidden relative mx-auto w-10/12 bg-slate-500'>
          <div id="cursor" className=" hidden w-16 h-16 rounded-full absolute top-0 left-0  text-black font-[700]  " style={{ boxShadow: "0 0 20px #0707529c" }}>
            <div className="cursor w-full h-full flex items-center rounded-full justify-center ">
              <div className=' text-center'>pause</div>
            </div>
          </div>
          <video className=' w-full h-full object-cover ' src={sampleVideo} loop muted autoPlay onClick={videoCOntrols}></video>
        </div>
      </div>
    </>
  )
}

export default Video
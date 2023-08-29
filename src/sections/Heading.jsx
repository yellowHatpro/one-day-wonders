import React from 'react'
import video from './../../public/637277fcb7cdabdbb0c56a4e_Untitled-transcode.mp4'
const Heading = () => {
  return (
      <div className={"bg-gray-900 p-10"}>
      <div className={"lg:text-8xl md:text-7xl sm:text-6xl xs text-white md:font-normal pt-8"}>
        One of the most important pieces of the great product experience is you.
      </div>
      <div className={"text-white pt-8 text-2xl"}>
        A creative agency that crafting a digital experience.
      </div>
      <div className={'pt-16'}>
        <video
            src={video}
            width={"750"}
            height={"500"}
            controls={false}
            autoPlay={true}
            className={"rounded-3xl "}
        ></video>
      </div>
  </div>
  )
}

export default Heading

import React from 'react'

const Milestones = () => {
  return (
    <div className={"bg-gray-900 text-white"}>
      <h5 className={"px-12 pt-20 text-sm"}>MILESTONES</h5>
      <div className={"text-7xl p-12"}>
        Stand aware of accomplishments, stay awake to achieve more.
      </div>
      <div className={"flex flex-row pr-6"}>
        <MilestoneItem heading={"$699M+"} desc={"Capital raised"} body={"Total amount of capital raised following collaboration with One Week Wonders"} />
        <MilestoneItem heading={"8"} desc={"Unicorn branded"} body={"Unicorn brands that have gained up to $1B valuations post-branding"} />
        <MilestoneItem heading={"300+"} desc={"Acquisitions"} body={"Number of clients who have been acquired following collaboration with One Week Wonders"} />
      </div>
      <div className={"text-4xl p-12"}>
        Our clients are companies, brands, and startups that keep the world going around.
        <div className={"p-4"}/>
        They treat diseases, move parcels, insure cars, process payments, create jobs, rent homes and publish news. They are vast and complex businesses requiring design experiences that are just as people-friendly as they are, robust and scalable.
      </div>
    </div>
  )
}

const MilestoneItem = ({heading, desc, body}) =>{
  return (
      <div className={"flex flex-col pl-12 py-8"}>
      <h1 className={"text-5xl"}>
        {heading}
      </h1>
      <div className={"text-2xl py-4"}>
        {desc}
      </div>
      <div>
        {body}
      </div>
      </div>
  )
}

export default Milestones

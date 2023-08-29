import {serviceData} from "../data/index.js";

const Services = () => {
  return (
    <div className={"bg-gray-900 text-white"}>
      <h5 className={"px-12 pt-20 text-xs"}>SERVICES</h5>
      <div className={"text-6xl p-12"}>
        It’s not about limitations, but this is something about what we focus on.
      </div>
      <div className={"space-y-12 mx-12"}>
        {
          serviceData.map(({logo,title,body,points}, index)=> {
            return <ServiceItem
                key={index}
                icon={logo}
                title={title}
                body={body}
                points={points}
            />
          })
        }
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const ServiceItem = ({icon, title, body, points}) => {
  return (
      <div className={"bg-gray-800 rounded-3xl px-12 pt-8"}>
        <div className={"text-4xl py-4"}>{icon}</div>
        <div className={"text-4xl py-4"}>
          {title}
        </div>
        <div>
          {body}
        </div>
        <ul
            className={"pt-8 pb-12 px-8 list-disc space-y-2"}>
            {/* eslint-disable-next-line react/prop-types */}
          {points.map((point,i)=>{
            return <li key={i}>{point}</li>
          })}
        </ul>
      </div>
  )
}

export default Services

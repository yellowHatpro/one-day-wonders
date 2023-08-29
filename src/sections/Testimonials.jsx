import {testimonials} from "../data/index.js";

const Testimonials = () => {
  return (
    <div className={"bg-gray-900 text-white p-12"}>
      <h5 className={"text-xs"}>TESTIMONIALS</h5>
      <div className={"text-5xl py-4"}>
        What they said about us from the people we shared experiences with.
      </div>
      <div className={"flex flex-row"}>
        {
          testimonials.map(({body,name, designation},i)=>{
            return(
                <Carousel
                    body={body}
                    name={name}
                    designation={designation}
                    key={i} />
            )
          })
        }
      </div>
    </div>
  )
}

const Carousel = ({body, name, designation}) => {
  return(
      <div className={""}>
        <div>
          {body}
        </div>
        <div>
          {name}
        </div>
        <div>
          {designation}
        </div>
      </div>
  )
}

export default Testimonials

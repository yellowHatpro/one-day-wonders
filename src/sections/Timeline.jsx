import timeline1 from '../../public/timeline1.png'
import timeline2 from '../../public/timeline2.png'
const Timeline = () => {
  return (
    <div className={'bg-gray-900 text-white p-12'}>
      <h5 className={"text-xs py-4"}>2020</h5>
      <div className={"text-3xl py-2"}>BunnyCDN</div>
      <div className={"py-4"}>
          BunnyCDN is a fast CDN tool that comes at a fraction of the cost of traditional Content Delivery Networks, it offers features and performance with a fast global network.
      </div>
      <div className={"py-4"}>
        <h5 className={"text-xs"}>FROM</h5>
        <div className={"text-xl py-2"}>
          Thailand
        </div>
      </div>
      <div className={"py-4"}>
        <h5 className={"text-xs"}>TIMEFRAME</h5>
        <div className={"text-xl py-2"}>
          Retainer
        </div>
      </div>
      <div className={"py-4"}>
        <h5 className={"text-xs"}>SERVICES</h5>
        <div className={"text-xl py-2"}>
          Website, Illustration
        </div>
      </div>
     <div className={"bg-gray-800 rounded-3xl flex justify-center"}>
         <img src={timeline1} alt={"Services"} ></img>
     </div>


        <h5 className={"text-xs py-4 pt-20"}>2021</h5>
        <div className={"text-3xl py-2"}>Diabetic BuyBack</div>
        <div className={"py-4"}>
            Get Paid Cash For Your Diabetic Test Strips With Confidence! Help Americans recoup the cost of managing their diabetes by paying them top dollar for their excess supplies.
        </div>
        <div className={"py-4"}>
            <h5 className={"text-xs"}>FROM</h5>
            <div className={"text-xl py-2"}>
                England
            </div>
        </div>
        <div className={"py-4"}>
            <h5 className={"text-xs"}>TIMEFRAME</h5>
            <div className={"text-xl py-2"}>
                2 Weeks
            </div>
        </div>
        <div className={"py-4"}>
            <h5 className={"text-xs"}>SERVICES</h5>
            <div className={"text-xl py-2"}>
                Branding
            </div>
        </div>
        <div className={"bg-gray-800 rounded-3xl flex justify-center"}>
            <img src={timeline2} alt={"Services"} className={"rounded-3xl"} ></img>
        </div>
    </div>
  )
}

export default Timeline

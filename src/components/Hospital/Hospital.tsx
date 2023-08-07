import {useNavigate} from "react-router-dom"

const Hospital = () => {
  const navigate=useNavigate()
  return (
    <section className="px-3 lg:px-[50px] mt-3">
      <div>
        <div className=" lg:h-[650px] bg-cover bg-center bg-[url(hospital/hospitalbg.jpg)] rounded-xl">
          <div className="bg-black/80 h-full left-0 right-0 top-0 bottom-0 rounded-xl p-5">
            <div className=" ">
              <h1 className="text-white font-bold md:text-5xl text-3xl">Hospital With Beds And Basic Facilities</h1>
            </div>
            <div className="flex flex-col lg:flex-row mt-3">
              <div className="mr-0 lg:w-[50%] order-2">
                <div className="rounded-xl h-[350px] w-[90%] border-white border-2 mb-4">
                  <img className="h-full w-full rounded-xl" src="hospital/hospital4.jpg" alt=""/>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="hospital/hospital1.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="hospital/hospital2.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="hospital/hospital3.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                </div>
              </div>
              <div className="order-1 mb-2 lg:w-[50%]">
                <div className='lg:w-[80%]'>
                  <h1 className="text-white text-3xl font-bold">Hospital Services</h1>
                  <p className="text-white font-semibold text-xl">Establishing and supporting health centers in underserved areas can provide basic medical services and preventive care, reducing the need for hospitalization in certain cases.
                   These centers can serve as a first point of contact for medical concerns and help manage health issues before they become severe.
                    Satytadeep foundations starts a intiate to build a hospital for poor peoples. In this hospital will provides basic diagnostics tests. We basically initiate with some more beds with having enough medical staff. 
                    This hospital will give services to poor peoples.  Your financial contribution will directly impact the lives of patients who will benefit from top-tier medical care, preventive services, and life-saving treatments.</p>
                  <div className="flex justify-center mt-5 mb-5">
                    <button onClick={()=>navigate("/payments")} className="text-white cursor-pointer p-2 rounded-lg text-center shadow-xl bg-orange-800 hover:bg-red-900">Join With Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hospital
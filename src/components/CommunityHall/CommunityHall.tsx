import {useNavigate} from "react-router-dom"

const CommunityHall = () => {
  const navigate=useNavigate()
  return (
    <section className="px-3 lg:px-[50px] mt-3">
      <div>
        <div className=" lg:h-[650px] bg-cover bg-center rounded-xl" style={{backgroundImage:"url(community/communitybg.jpg)"}}>
          <div className="bg-black/80 h-full left-0 right-0 top-0 bottom-0 rounded-xl p-5">
            <div className=" ">
              <h1 className="text-white md:text-5xl text-3xl font-lobster">Village Community Hall</h1>
            </div>
            <div className="flex flex-col lg:flex-row mt-3">
              <div className="mr-0 lg:w-[50%] order-2 lg:order-1">
                <div className="rounded-xl h-[350px] w-[90%] border-white border-2 mb-4">
                  <img className="h-full w-full rounded-xl" src="community/community1.jpg" alt=""/>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="community/community2.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="community/community3.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="community/community4.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 mb-2 lg:w-[50%]">
                <div className='p-3'>
                  <h1 className="text-white text-3xl font-bold">Community Hall</h1>
                  <p className="text-white font-semibold text-xl">A village community hall holds significant importance as a central gathering place for residents in a rural setting. It serves as a focal point for social, cultural, and developmental activities, contributing to the overall well-being and progress of the village.
                  A community hall provides a space where villagers can come together, fostering a sense of unity, belonging, and social cohesion. It strengthens relationships among neighbors, enhances community bonding, and reduces social isolation.
                  Community halls can be used for educational purposes, such as conducting workshops, seminars, and training sessions.Satyadeep Foundation hope to will build like these type of community hall in village. At that village poor peoples use for their needs. And it will expands to establish like library. It will helps meet their peoples at on place to share their things.</p>
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

export default CommunityHall
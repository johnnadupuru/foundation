import {useNavigate} from "react-router-dom"

const OldAgeHome = () => {
  const navigate=useNavigate()
  return (
    <section className="px-3 lg:px-[50px] mt-3">
      <div>
        <div className=" lg:h-[650px] bg-cover bg-center rounded-xl" style={{backgroundImage:"url(OldAgeHome/oldagehomebg.webp)"}}>
          <div className="bg-black/80 h-full left-0 right-0 top-0 bottom-0 rounded-xl p-5">
            <div className=" ">
              <h1 className="text-white font-bold md:text-5xl text-3xl">Old Age Home</h1>
            </div>
            <div className="flex flex-col lg:flex-row mt-3">
              <div className="mr-3 lg:w-[50%] order-2 lg:order-1">
                <div className="rounded-xl h-[350px] w-[90%] border-white border-2 mb-4">
                  <img className="h-full w-full rounded-xl" src="OldAgeHome/oldagehome1.webp" alt=""/>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="OldAgeHome/oldagehome2.webp" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="OldAgeHome/oldagehome3.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="OldAgeHome/oldagehome4.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 mb-2 lg:w-[50%]">
                <div>
                  <h1 className="text-white text-3xl font-bold">Old age home</h1>
                  <p className="text-white font-semibold text-xl"> At Satyadeep foundation, we believe that every chapter of life deserves to be lived with dignity, respect, and companionship.
                   Our mission is to create a haven of warmth and care for our cherished senior citizens through the establishment of an old age home that embodies love, compassion, and unwavering support.
                   In a world where fast-paced lifestyles often lead to the neglect of our elder community members, Satyadeep foundations envisions a place where seniors can find solace, engage in meaningful interactions, and experience a sense of belonging. Our old age home will be more than just a facility; it will be a vibrant community that embraces the wisdom, stories, and experiences of our senior residents.
                   We invite you to be a part of our noble endeavor to enrich the lives of our senior citizens. Your support, whether through donations, volunteerism, or spreading awareness, will help us create a haven where laughter resonates, stories are shared, and hearts are filled with gratitude</p>
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

export default OldAgeHome
import {useNavigate} from "react-router-dom"

const Rama = () => {
  const navigate=useNavigate()
  return (
    <section className="px-3 lg:px-[50px] mt-3">
      <div>
        <div className=" lg:h-[650px] bg-cover bg-center rounded-xl" style={{backgroundImage:"url(temple.jpg)"}}>
          <div className="bg-black/80 h-full left-0 right-0 top-0 bottom-0 rounded-xl p-5">
            <div className=" ">
              <h1 className="text-white md:text-5xl text-3xl font-lobster">Initiative Lord Rama Temple</h1>
            </div>
            <div className="flex flex-col lg:flex-row mt-3">
              <div className="mr-3 lg:w-[50%] order-2 lg:order-1">
                <div className="rounded-xl h-[350px] w-[90%] border-white border-2 mb-4">
                  <img className="h-full w-full rounded-xl" src="rama/rama1.jpg" alt=""/>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="rama/rama2.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="rama/rama3.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="rama/rama4.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 mb-2">
                <div>
                  <h1 className="text-white text-3xl font-bold">Rama temple</h1>
                  <p className="text-white font-semibold text-xl">Temples are being part of our living culture. Lord Rama's journey was one of righteousness, courage, and triumph, this temple's construction embodies the spirit of dedication, unity, and harmony.
                   Every pillar is a testament to shared values, and every archway a doorway to spiritual enlightenment.The temple acts as a bridge between generations, allowing elders to share religious knowledge, stories, and traditions with younger members of the community.
                   Your financial contribution, no matter the size, will directly fund the construction, materials, and skilled labor required to bring the temple to life.Your donation will be a cornerstone of this sacred space, where generations to come will find solace, strength, and a connection to their spiritual roots.</p>
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

export default Rama
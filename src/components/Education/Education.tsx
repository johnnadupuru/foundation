import {useNavigate} from "react-router-dom"

const Education = () => {
  const navigate=useNavigate()
  return (
    <section id="#education" className="px-3 lg:px-[50px] mt-3">
      <div>
        <div className=" lg:h-[650px] bg-cover bg-center rounded-xl" style={{backgroundImage:"url(education/educationbg.jpg)"}}>
          <div className="bg-black/80 h-full left-0 right-0 top-0 bottom-0 rounded-xl p-5">
            <div className=" ">
              <h1 className="text-white font-bold md:text-5xl text-3xl">Free Education For Poor Childrens</h1>
            </div>
            <div className="flex flex-col lg:flex-row mt-3">
              <div className="mr-0 lg:w-[50%] order-2">
                <div className="rounded-xl h-[350px] w-[90%] border-white border-2 mb-4">
                  <img className="h-full w-full rounded-xl" src="education/education1.webp" alt=""/>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="education/education2.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="education/education3.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="education/education5.webp" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                </div>
              </div>
              <div className="order-1 mb-2 lg:w-[50%]">
                <div className="lg:w-[80%]">
                  <h1 className="text-white text-3xl font-bold">Free Education</h1>
                  <p className="text-white font-semibold text-xl">Education is one of the most effective ways to break the cycle of poverty. It equips children with knowledge, skills, and opportunities that can lead to better job prospects and improved socio-economic conditions.
                  Access to education can help reduce child labor and protect children from exploitative work conditions, allowing them to focus on their personal growth and development.
                  Satyadeep foundations helps gives Free education for yearly 10 students with providing lodging, food and medical fecilities.Develop a child sponsorship program where individuals or businesses can sponsor a child's education by providing regular financial support.
                   Sponsors can receive updates on the child's progress.</p>
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

export default Education
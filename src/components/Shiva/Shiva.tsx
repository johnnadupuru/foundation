import {useNavigate} from "react-router-dom"

const Shiva = () => {
  const navigate=useNavigate()
  return (
    <section className="px-3 lg:px-[50px] mt-3">
      <div>
        <div className=" lg:h-[650px] bg-cover bg-center bg-[url(shiva/shivabg.jpg)] rounded-xl">
          <div className="bg-black/80 h-full left-0 right-0 top-0 bottom-0 rounded-xl p-5">
            <div className=" ">
              <h1 className="text-white font-bold md:text-5xl text-3xl">Renovation of Lord Shiva Temple</h1>
            </div>
            <div className="flex flex-col lg:flex-row mt-3">
              <div className="mr-0 lg:w-[50%] order-2">
                <div className="rounded-xl h-[350px] w-[90%] border-white border-2 mb-4">
                  <img className="h-full w-full rounded-xl" src="shiva/shiva1.jpg" alt=""/>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="shiva/shiva2.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="shiva/shiva3.JPG" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                  <div className="border-white border-2 h-[200px] md:h-[150px] w-[90%] md:w-[200px] mb-2 md:mb-0 rounded-xl mr-3">
                    <img src="shiva/shiva4.jpg" className="h-full w-full rounded-xl" alt=""/>
                  </div>
                </div>
              </div>
              <div className="order-1 mb-2 lg:w-[50%] ">
                <div className="">
                  <h1 className="text-white text-3xl font-bold">Lord Shiva Temple</h1>
                  <p className="text-white font-semibold text-xl">A Shiva temple holds significant importance in Hinduism and serves as a sacred place of worship and devotion for followers of Lord Shiva. The importance of a Shiva temple goes beyond its architectural and aesthetic aspects, it is deeply rooted in spiritual, cultural, and philosophical significance.
                  Shiva temples are an integral part of the cultural identity of Hindu communities. They preserve and propagate traditional rituals, customs, and practices that have been passed down through generations.
                  Shiva temples are not only places of worship but also symbols of cultural symbolism and religious practices. Renovation ensures that these symbols remain relevant and meaningful.We invite you to be a part of this sacred journey to restore the divine abode of Lord Shiva. Your support will resonate through the ages, leaving a lasting legacy of devotion, culture, and spirituality.
                  Your support, no matter the size, will make a meaningful impact.</p>
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

export default Shiva
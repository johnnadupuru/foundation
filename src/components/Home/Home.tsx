import {useNavigate} from "react-router-dom"

const blogsList=[
    {
        id:1,
        imageUrl:"temple.jpg",
        paragraph:"Initiate Lord Rama Temple"
    },
    {
        id:2,
        imageUrl:"shiva/shivabg.jpg",
        paragraph:"Renovation Of Lord Shiva Temple"
    },
    {
        id:3,
        imageUrl:"community/communitybg.jpg",
        paragraph:"Village Communithy Hall"
    },
    {
        id:4,
        imageUrl:"hospital/hospitalbg.jpg",
        paragraph:"Hospital with beds and basic facilities"
    },
    {
        id:5,
        imageUrl:"OldAgeHome/oldagehomebg.webp",
        paragraph:"Old age home"
    },
    {
        id:6,
        imageUrl:"education/educationbg.jpg",
        paragraph:"Free education for poor childrens"
    },
]

const Home = () => {
    const navigate = useNavigate()
  return (
    <section className="pt-5">
        <div className=" mt-10">
            <div className="p-3 flex flex-col lg:flex-row justify-center rounded-xl items-center h-full ">
                <div className="lg:w-[50%] felx justify-center items-center">
                    <div className="lg:ml-10">
                        <div className="flex text-center mb-5">    
                            <img src="/logo.jpg" className="h-[170px] w-[170px]" alt=""/>
                        </div>
                        <div className="flex">
                            <div className="bg-black p-1">
                                <h1 className="text-white text-7xl ">S</h1>
                            </div>
                            <div>
                                <h1 className="text-5xl font-bold underline decoration-4">SATYADEEP</h1>
                                <span className="text-blue-700 font-bold text-2xl">FOUNDATION</span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-orange-800 font-semibold text-2xl ">This foundation established on 01-03-2020.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%] mt-3 p-2 lg:p-10 bg-orange-600 h-full rounded-xl">
                    <div className="lg:p-5 p-1 rounded-xl bg-white h-full">
                        <h2 className="text-orange-800 font-bold text-xl lg:text-3xl mb-2 text-center">INTRODUCTION OF SATYADEEP FOUNDATION</h2>
                        <p className="mt-3 text-lg font-semibold">The Satyadeep Foundation is a visionary nonprofit organization committed to making a positive and lasting impact on society. Rooted in the principles of compassion, empowerment, and social justice, our foundation is dedicated to driving meaningful change and uplifting the lives of individuals and communities.
                        Founded with a deep sense of purpose, the Satyadeep Foundation draws inspiration from the idea that a single act of kindness can spark a chain reaction of transformation. Our name itself, "Satyadeep," embodies our belief in the power of truth and light to illuminate even the darkest corners of our world.
                        At the heart of our foundation's mission lies a commitment to holistic development. We believe that true progress encompasses not only material well-being but also emotional, mental, and spiritual growth.
                        Guided by a team of passionate individuals and fueled by the generosity of like-minded supporters, the Satyadeep Foundation envisions a world where compassion and empowerment are the driving forces behind every action. Together, we are lighting the way toward a brighter future for all.</p>
                        <p className="text-orange-800 text-xl font-semibold text-right">Your's Faith fully</p>
                        <p className="font-semibold text-xl text-right">Satyadeep foundation & Team...</p>
                    </div>
                </div>
            </div>
            <div className="lg:m-3 m-1 bg-orange-600 rounded-xl p-2 lg:p-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:pl-4">
                    {blogsList.map((list)=><div className='shadow-xl bg-white h-fit md:h-[400px] md:w-[450px] mb-4 lg:mr-5 rounded-xl p-1 '>
                                                <img src={list.imageUrl} className='h-[80%] rounded-t-xl ' alt='' />
                                                <div className=''>
                                                    <p className='text-xl'>{list.paragraph}</p>
                                                    <div className="flex justify-center">
                                                    <button onClick={() => navigate("/about")} className="bg-orange-800 text-white hover:bg-red-500 text-center mr-3 p-2 rounded-lg">Know More</button>
                                                    <button onClick={() => navigate("/payments")} className="bg-orange-800 text-white hover:bg-red-500 text-center p-2 rounded-lg">Donate Us</button>
                                                    </div>
                                                </div>
                                            </div>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
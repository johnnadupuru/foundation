
const Payments = () => {
  return (
    <div className="py-5 pt-12">
        <section className="px-3 pb-3 lg:px-[30px] mt-3">
            <div className=" lg:h-[650px] bg-cover bg-center bg-[url(payments/payment2.jpg)] rounded-xl">
                <div className="bg-black/80 h-full left-0 right-0 top-0 bottom-0 rounded-xl p-5">
                    <div className=" text-center">
                        <h1 className="text-white font-bold md:text-5xl text-3xl">Being a part of with us</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row mt-3 ">
                        <div className="mr-0 lg:w-[60%] h-full flex flex-col lg:flex-row rounded-xl shadow-xl p-4 bg-cover bg-center bg-[url(payments/payment1.jpg)]">
                            <div className="lg:h-[520px] lg:w-[45%] rounded-lg mb-5 lg:mb-0">
                                <img className="h-full w-full rounded-lg" src="payments/payment3.png" alt=""/>
                            </div>
                            <div className="mb-2 lg:w-[50%] flex flex-col justify-around p-4 rounded-xl ml-2 hover:bg-white">
                                <div>
                                    <h3 className="text-orange-800 font-bold text-xl">Make Payment using Bank Account</h3>
                                </div>
                                <div>
                                    <p className="text-lg md:text-xl font-bold mt-5"><span className="bg-orange-800 text-white">BANK NAME :</span>  State Bank of India</p>
                                    <p className="text-lg md:text-xl font-bold mt-5"><span className="bg-orange-800 text-white">Account No :</span>  **** **** ****</p>
                                    <p className="text-lg md:text-xl font-bold mt-5"><span className="bg-orange-800 text-white">IFSC CODE :</span>  SBIN00000</p>
                                    <p className="text-lg md:text-xl font-bold mt-5"><span className="bg-orange-800 text-white">Account Name :</span>  Satyadeep foundation</p>
                                </div>
                                <div>
                                    <p className="text-orange-800 font-bold text-3xl underline decoration-slice text-center">Thank You</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center lg:w-[40%]">
                            <div className="p-5">
                                <p className="text-white font-semibold md:text-lg"> Your compassionate act of offering funds demonstrates your commitment to making a positive impact on the lives of those in need.Every dollar you have donated will be used with utmost care and efficiency to bring about meaningful change. Your belief in our cause inspires us to work tirelessly to bring hope, comfort, and transformation to the lives of those who require it most.
                                If you have any questions, would like to know more about our initiatives, or if there's any way you'd like to get involved further, please do not hesitate to reach out to us </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Payments
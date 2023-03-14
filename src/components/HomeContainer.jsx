import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from '../img/f2.png'

const HomeContainer = () => {
  return <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
  <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
    <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
    <p className="textbase text-orange-500 font-semibold">
      Bike Delivery</p>
    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
      <img src={Delivery} className="w-full h-full object-contain"></img>
    </div>
    </div>
    

    <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
      The Fastest Delivery in 
      <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
    </p>

    <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis odit iusto tempore tempora distinctio, nam maxime repellat dignissimos dolores accusantium fuga earum unde expedita repellendus animi neque voluptates natus provident!
    </p>

    <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>

  </div> 
  <div className="py-2 flex-1 flex items-center relative">
      <img src={HeroBg} className=" ml-auto h-420 w-full lg:w-auto lg:h-650" 
      alt="hero-bg" />

      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4">
        <div className="w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col items-center justify-center">
          <img src={I1} className="w-40 -mt-20" alt="I1" />
          <p className="text-base font-semibold text-textColor">Pineapple</p>

          <p className="text-sm text-gray-500 font-semibold">Price: Rs 100/pc</p>
        </div>
      </div>
  </div>
</section>;

};

export default HomeContainer
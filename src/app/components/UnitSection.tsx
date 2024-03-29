import React from 'react';
import UnitsCard from "./UnitsCard";

const UnitSection = async () => {

  return (

    <div  id='unit-section' className='mt-8 md:mt-0 text-center drop-shadow-2xl'>
     <hr className='w-screen h-0.5 mb-4 bg-white-300' />
      <h1 className='heading1'>Units</h1>
      <div className='w-full flex flex-col md:flex-row flex-grow flex-wrap gap-16 justify-center px-10 text-zinc-900'>
        <UnitsCard unit={{
          type: "5x10",
          description: "The perfect budget friendly choice for a mid-sized storage solution. Whether you need to store furniture during a home renovation, seasonal items, business inventory, or personal belongings, our 5x10 unit provides the versatility you require. It's an excellent option for both short-term and long-term storage needs.",
          image: "/5x10-storage-unit-size.webp",
          price: 70
        }} />
        <UnitsCard unit={{
          type: "10x10",
          description: "Ideal for those seeking a versatile and budget-friendly option for larger items, furniture sets, or business inventory. Whether it's a temporary space for a move or a long-term storage solution, our 10x10 unit provides the flexibility you need for a hassle-free storage experience.",
          image: "/10x10-storage-unit-size.webp",
          price: 120
        }} />
        <UnitsCard unit={{
          type: "10x20",
          description: "the ideal solution for those seeking versatile and secure storage for larger items, furniture sets, or even a vehicle. Whether you're undergoing a major life transition or simply need extra space for your belongings, our 10x20 unit provides the expansive storage you require for both short-term and long-term needs.",
          image: "/10x20-storage-unit-size.webp",
          price: 185
        }} />
      </div>
    </div>);
};

export default UnitSection;
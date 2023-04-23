import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <section className='pt-14 section min-h-screen flex flex-col md:flex-row gap-4 items-center bg-black text-white'>
        <div className='max-w-sm'>
          <h1 className='text-lg md:text-6xl font-bold mb-2'>WORSHIP THE LORD TOGETHER</h1>
          <p className='text-sm mb-3 text-white/80'>PREPARE YOUR HEARTS WITH MUSIC</p>
          <button className='p-2 px-6 whitespace-nowrap bg-gray-200 text-black font-bold text-[10px] rounded-full'>OUR WORSHIP MUSIC</button>
        </div>
        {/* <div className='flex-1'></div> */}
      </section>
      <section className='section flex flex-col md:flex-row py-16 bg-gray-100 lg:gap-12'>
        <div className="flex-1 bg-gray-200"></div>
        <div className="flex-1">
          <p>OUR MISSION IS TO ANSWER</p>
          <h2 className='text-lg md:text-4xl mb-8'>WHAT HAPPENS AFTER WE DIE</h2>
          <p className='text-sm text-black/40 mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis et aliquam vitae illo quae cupiditate fugit perferendis aut repellendus repellat voluptatibus corporis illum facere provident, aperiam, nihil ratione, recusandae fuga!
          </p>
          <button className='p-2 px-6 whitespace-nowrap bg-white text-black font-bold text-[10px] rounded-full'>FIND OUT</button>
        </div>
        <div className="flex-1 bg-gray-200"></div>
      </section>
      <section className='section flex flex-col items-center text-white py-16 bg-gray-400'>
       <p>CURRENT SERMON SERIES</p>
       <h2 className='text-lg md:text-4xl mb-6'>RAISING CHILDREN</h2>
       <p className='mb-4 text-[10px]'>A walk through the book of proverbs on wisdom</p>
       <button className='p-2 px-6 whitespace-nowrap bg-white text-black font-bold text-[10px] rounded-full'>LATEST POSDCAST</button>
      </section>
      <section className='section flex flex-col items-center text-center gap-5 text-black py-16 bg-white'>
       <p>CANT FIND SOMETHING?</p>
       <h2 className='text-lg md:text-4xl'>LOOKING FOR A PLACE TO CONNECT OR GROW?</h2>
       <button className='p-2 px-6 whitespace-nowrap bg-blue-500 text-white font-bold text-[10px] rounded-full'>LET US HELP</button>
      </section>
      <section className='section flex flex-col md:flex-row md:items-center gap-6 text-white py-16 bg-gray-400'>
        <div className="flex-1"></div>
        <div className="flex-1 bg-gray-200 min-h-[500px]"></div>
      </section>
      <section className='section flex flex-col md:flex-row md:items-center gap-6 text-white py-16 bg-gray-400'>
        <div className="flex-1 bg-gray-200 min-h-[500px]"></div>
        <div className="flex-1">
          <p>OUTREACH</p>
          <h2 className='text-lg md:text-4xl mb-8'>WE SERVE</h2>
          <p className='text-sm text-black/40 mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis et aliquam vitae illo quae cupiditate fugit perferendis aut repellendus repellat voluptatibus corporis illum facere provident, aperiam, nihil ratione, recusandae fuga!
          </p>
          <div className="flex items-center gap-6">
            <button className='p-2 px-6 whitespace-nowrap bg-white text-black font-bold text-[10px] rounded-full'>GIVE ONLINE</button>
            <button className='p-2 px-6 whitespace-nowrap bg-white text-black font-bold text-[10px] rounded-full'>BECOME A VOLUNTEER</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}


export default Home;
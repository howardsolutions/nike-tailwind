function Hero() {
  return (
    <header id='home' className='xl:padding-1 wide:padding-r padding-b'>
      <div className='w-full flex flex-col gap-10 xl:flex-row max-container min-h-screen'>
        <div className='relative xl:w-2/5 flex justify-center max-xl:padding-x pt-28 items-start flex-col w-full'>
          <p className='text-xl font-montserrat text-coral-red'>
            Our Summer collections
          </p>

          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              The New Arrival
            </span>
            <br />
            <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;

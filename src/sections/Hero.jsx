import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import { Button } from '../components';
import { shoes, statistics } from '../constants';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';
function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <header
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
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
        <Button iconURL={arrowRight}>Shop Now</Button>
        <div className='flex justify-start items-start gap-16 flex-wrap w-full mt-20'>
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className='text-4xl font-bold font-palanquin'>
                {statistic.value}
              </p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-primary bg-hero'>
        <img
          src={bigShoeImg}
          alt='Shoe Collection'
          width={610}
          height={500}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                shoe={shoe}
                changeShoeImage={(shoeImg) => setBigShoeImg(shoeImg)}
                currentBigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Hero;

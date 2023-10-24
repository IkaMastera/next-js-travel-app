import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map'/>

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image 
        src='/camp.svg'
        alt="camp"
        width={50}
        height={50}
        className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />
        <h1 className='bold-52 pt-20'>Unveil the Wild Beauty of Tusheti: Your Ultimate Camping Experience</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Nestled in the heart of the breathtaking Georgian highlands, 
          Tusheti stands as a testament to nature's grandeur. 
          For the intrepid souls seeking an unparalleled camping adventure, 
          Tusheti beckons with open arms. Imagine yourself under a pristine, 
          star-studded sky, surrounded by lush alpine meadows and the majestic
          peaks of the Greater Caucasus Mountains.
          This is camping in Tusheti an experience like no other.
        </p>

        <div className='my-11 flex flex-wrap gap-5'>
            <div className='flex items-center gap-2'>
              {Array(5).fill(1).map((_, index) => (
                <Image 
                src="/star.svg" 
                key={ index }
                alt= "star"
                width = {24}
                height = {24}
                />
              ))}
            </div>

            <p className='bold-16 lg:bold-20 text-blue-70'>
              389k
              <span className='regular-16 lg:regular-20 ml-1'>
                Excellent Reviews
              </span>
            </p>
        </div>

        <div className='flex w-full flex-col gap-3 sm:flex-row'>
            <Button 
            type="button" 
            title="Download App"
            variant="btn_green"
            />
            <Button 
            type="button" 
            title="Download App"
            icon="/play.svg"
            variant="btn_white_text"
            />
        </div>
      </div>

    <div className='relative flex flex-1 items-start'>
        <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>

            <div className='flex flex-col'>
              <div className='flexBetween'>
                <p className='regular-16 text-gray-20'>Location</p>
                <Image src="/close.svg" alt="close" width={24} height={24}/>
              </div>
              <p className='bold-20 text-white'>Tusheti</p>
            </div>

              <div className='flexBetween'>
                <div className='flex flex-col'>
                  <p className='regular-16 block text-gray-20'>Distance</p>
                  <p className='bold-20 text-white'>173.28 mi</p>
                </div>
                <div className='flex flex-col'>
                  <p className='regular-16 block text-gray-20'>Elevation</p>
                  <p className='bold-20 text-white'>4.8 km</p>
                </div>
              </div>
        </div>
    </div>
    </section>
  )
}

export default Hero

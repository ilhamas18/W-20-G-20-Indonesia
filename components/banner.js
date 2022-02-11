import Image from 'next/image'
import imagebanner from '../public/shutterstock_482050345-min.jpg'

export default function Banner() {
  return (
    <>      
      <div id="home" className='hidden md:block bg-cover bg-center h-screen' style={{ backgroundImage: `url(/shutterstock_482050345-min.jpg)` }}>
          <div className='container mx-auto text-white'>
            <div className='flex flex-col px-4 justify-center h-screen text-5xl font-Roboto-Medium text-bold text-white tracking-widest'>
                {/* <img className='w-52 h-32 md:w-72 md:h-48 mb-8' src="/logo-w20-resize.png">
                </img> */}
                <div className='leading-10'>
                  RECOVER TOGETHER,
                </div>
                <div className='my-4'>
                  EQUALLY
                </div>
            </div>
          </div>
      </div>
      <div className='md:hidden bg-cover bg-center h-screen' style={{ backgroundImage: `url(/w20-banner-mobile.png)` }}>
          <div className='container mx-auto text-white'>
            <div className='flex flex-col px-4 justify-center h-screen text-4xl font-Roboto-Medium text-bold text-white tracking-widest'>
                {/* <img className='w-52 h-32 md:w-72 md:h-48 mb-8' src="/logo-w20-resize.png">
                </img> */}
                <div className='leading-10'>
                  RECOVER TOGETHER,
                </div>
                <div className='my-2'>
                  EQUALLY
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

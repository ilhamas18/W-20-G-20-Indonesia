import Head from 'next/head'
import Image from 'next/image'


function Footer (){
    return (
        <>
            <div id="contactus" className='bg-w20-blue'>
            <div className='container mx-auto px-4 py-8 md:py-14 h-fit'>
              <div className='flex flex-col-reverse md:flex-row text-white'>
                  <div className='flex flex-col w-full md:w-1/2'>
                    <div className='font-Roboto text-bold text-base tracking-widest'>CONTACT US</div>
                    <div className='flex flex-row my-4 items-center'>
                        <div className='mr-4'>
                          <Image
                          src="/Email.png"
                          alt="email-icon"
                          width={24}
                          height={24}
                          />
                        </div>
                        <div className='font-Roboto text-sm tracking-widest'>w20.official@G20-Indonesia.id</div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='mr-4'>
                          <Image
                          src="/facebook.png"
                          alt="email-icon"
                          width={24}
                          height={24}
                          />
                        </div>
                        <div className='mr-4'>
                          <Image
                          src="/instagram.png"
                          alt="email-icon"
                          width={24}
                          height={24}
                          />
                        </div>
                        <div className='mr-4'>
                          <Image
                          src="/youtube.png"
                          alt="email-icon"
                          width={24}
                          height={24}
                          />
                        </div>
                        <div className='mr-4'>
                          <Image
                          src="/linkedin.png"
                          alt="email-icon"
                          width={24}
                          height={24}
                          />
                        </div>
                    </div>
                  </div>

                  <div className='flex flex-col w-full md:w-1/2 md:items-end font-Roboto text-sm tracking-widest leading-normal mb-10'>
                    <div>
                      W20 Indonesia Secretariat 
                    </div>
                    <div>Ministry of Women Empowerment & Child Protection</div>
                    <div>of The Republic of Indonesia</div>
                    <div>Jl. Medan Merdeka Barat No. 15</div>
                    <div>Jakarta 10110 – INDONESIA</div>
                  </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Footer
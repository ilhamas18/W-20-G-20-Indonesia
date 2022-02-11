import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Timeline from '../components/Timeline'
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/router";

export default function Home() {
  const t = useTranslations('Home');
  const { locale, locales, defaultLocale, asPath } = useRouter();
  return (
    <>
      <Layout>
          <Banner></Banner>
          {/* <h1>{t('hello')}</h1> */}

          {/* About W20 */}
          <div id="about" className='container mx-auto px-4 py-8 h-fit'>
            <div className='flex flex-col md:flex-row'>
              <div className='flex flex-col w-full md:w-1/2 justify-center'>
                <div className='flex flex-row mb-6 tracking-wider'>
                  <div> 
                    <Image
                      src="/w20-about-icon.png"
                      alt="About W20"
                      width={66}
                      height={31}
                    />
                  </div>
                  <div className='font-Roboto-Bold text-w20-blue uppercase text-base md:text-3xl ml-6'> { locale == 'en' ? 'About W20 ' : 'Tentang W20'}</div>
                </div>
                <div className='font-Roboto text-black text-sm tracking-wider leading-6 md:pr-10 mb-4'>
                { locale == 'en' ? "The Women 20 (W20) is an official G20 engagement group established during the Turkish presidency in 2015. The objective is to ensure that the gender considerations are mainstreamed into G20 discussions and translate into the G20 Leaders Declaration as policies and commitments that foster gender equality and womens economic empowerment." : "Women20 (W20), merupakan Engagement Group G20 yang membentuk jaringan pemberdayaan perempuan untuk mendorong pengadopsian komitmen G20 dalam isu perempuan. Tujuan utama W20 adalah untuk mempromosikan pemberdayaan ekonomi perempuan sebagai bagian integral dari proses G20. Keanekaragaman dan partisipasi penuh sangat penting untuk mendorong ekonomi dan masyarakat yang tangguh, berkelanjutan dan layak, sedangkan sistem homogen menanggung risiko dan ketidakpastian. Pemberdayaan ekonomi perempuan dengan demikian sangat mendasar bagi dunia yang makmur dan penting untuk pertumbuhan ekonomi, ekonomi yang stabil dan pembangunan sosial"}
                </div>
              </div>
              <div>
                <Image
                  src="/w20-about-image.png"
                  alt="About W20"
                  width={592}
                  height={443}
                />
              </div>
            </div>
          </div>

          {/* Issue */}
          <div id="issues" className='bg-w20-blue'>
            <div className='container mx-auto py-8 px-4 h-fit text-white'>
              <div className='flex flex-row mb-8'>
                  <div className='flex flex-col md:flex-row'>
                      <div className='flex flex-row mb-6 tracking-wider w-9/12'>
                        <div> 
                          <Image
                            src="/w20-issue-logo.png"
                            alt="issue W20"
                            width={66}
                            height={31}
                          />
                        </div>
                        <div className='font-Roboto-Bold text-white uppercase text-base md:text-3xl ml-6'> { locale == 'en' ? 'Issues W20' : 'Issues W20'} </div>
                      </div>
                      <div className='font-Roboto text-white text-sm tracking-wider leading-6 md:pr-10 mb-4'>
                        { locale == 'en' ? 'The Women 20 (W20) is an official G20 engagement group established during the Turkish presidency in 2015. The objective is to ensure that the gender considerations are mainstreamed into G20 discussions and translate into the G20 Leaders Declaration as policies and commitments that foster gender equality and women’s economic empowerment.' : 'Women 20 (W20) adalah kelompok keterlibatan G20 resmi yang dibentuk selama kepresidenan Turki pada tahun 2015. Tujuannya adalah untuk memastikan bahwa pertimbangan gender diarusutamakan ke dalam diskusi G20 dan diterjemahkan ke dalam Deklarasi Pemimpin G20 sebagai kebijakan dan komitmen yang mendorong kesetaraan gender dan pemberdayaan ekonomi perempuan.'}
                        
                      </div>

                  </div>
              </div>
              <div className='grid justify-items-center gap-x-2 md:gap-x-4 gap-y-4 grid-cols-2 md:grid-cols-4'>
                <div className='bg-white w-40 h-44 md:w-72 md:h-52 rounded-lg p-4 md:p-8'>
                    <div>
                      <Image
                        src="/w20-equality-icon.png"
                        alt="About W20"
                        width={46}
                        height={48}
                      />
                    </div>
                    <div className='font-Roboto-Bold text-black text-base tracking-wide md:text-2xl md:tracking-wider mt-8 md:mt-6'>
                      { locale == 'en' ? 'Discrimination and Equality' : 'Diskriminasi dan Kesetaraan'}
                    </div>
                </div>
                <div className='bg-white w-40 h-44 md:w-72 md:h-52 rounded-lg p-4 md:p-8'>
                    <div>
                      <Image
                        src="/w20-economy-icon.png"
                        alt="About W20"
                        width={46}
                        height={48}
                      />
                    </div>
                    <div className='font-Roboto-Bold text-black text-base tracking-wide md:text-2xl md:tracking-wider mt-8 md:mt-6'>
                      { locale == 'en' ? 'Economic Inclusion' : 'Inklusi Ekonomi'}
                    </div>
                </div>
                <div className='bg-white w-40 h-44 md:w-72 md:h-52 rounded-lg p-4 md:p-8'>
                    <div>
                      <Image
                        src="/w20-women-icon.png"
                        alt="About W20"
                        width={46}
                        height={48}
                      />
                    </div>
                    <div className='font-Roboto-Bold text-black text-base tracking-wide md:text-2xl md:tracking-wider mt-8 md:mt-6'>
                      { locale == 'en' ? 'Marginalized Women' : 'Perempuan Terpinggirkan'}
                    </div>
                </div>
                <div className='bg-white w-40 h-44 md:w-72 md:h-52 rounded-lg p-4 md:p-8'>
                    <div>
                      <Image
                        src="/w20-health-icon.png"
                        alt="About W20"
                        width={46}
                        height={48}
                      />
                    </div>
                    <div className='font-Roboto-Bold text-black text-base tracking-wide md:text-2xl md:tracking-wider mt-8 md:mt-6'>
                      { locale == 'en' ? 'Health' : 'Kesehatan'}
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <Timeline />
          </div>

          {/* Committee */}
          <div id="committee" className='bg-w20-red'>
            <div className='container mx-auto px-4 py-8 h-fit'>
              <div className='flex flex-row'>
                  <div className='flex flex-col md:flex-row justify-between w-full'>
                      <div className='flex flex-row mb-6 tracking-wider'>
                          <div> 
                              <Image
                                src="/w20-womencochair-icon.png"
                                alt="issue W20"
                                width={66}
                                height={39}
                              />
                          </div>
                          <div className='font-Roboto-Bold text-w20-blue uppercase text-base md:text-3xl ml-6'>WOMEN20 CO-CHAIR</div>
                      </div>
                      <div className='hidden md:block font-Roboto-Bold text-w20-blue text-base tracking-wider leading-6 mb-4'>
                        <Link href="/W20-Committee.pdf">
                            <a target="_blank">{ locale == 'en' ? 'VIEW ALL COMMITTEE' : 'LIHAT SEMUA KOMITE'}</a>
                        </Link>
                      </div>
                  </div>
              </div>
              <div className='flex overflow-x-scroll'>
                <div className='flex flex-row flex-nowrap space-x-4 md:space-x-8'>
                  <div className='relative bg-cover bg-center w-[218px] h-[300px] md:w-[592px] md:h-[561px]' style={{ backgroundImage: `url(/w20-hardiani-foto.png)` }}>
                      <div className='group absolute bottom-0 left-0 flex flex-col text-white bg-w20-blue h-fit w-full md:w-1/2 rounded-tr-[40px] px-4 md:px-6 py-4 hover:w-full hover:opacity-75 '>
                        <div className='text-sm md:text-xl font-Roboto-Bold tracking-wider'>Hardiani Uli Silalahi</div>
                        <div className='text-xs md:text-sm font-Roboto tracking-wider'>Chairwoman Women20</div>
                        <div className='hidden md:group-hover:block'>Also known as Uli, she is a practitioner in women empowerment with more than 25 years experience. As the Vice President of  Kowani, she is able to reach 87 million Indonesia women with financial, digital, and self-improvement programs. Just last year, 1000 Women MSMEs joined the Kowani Fair Online with digital capacity building agenda in collaboration with Indonesia’s leading e-commerce. She is also passionate about increasing Indonesias literacy by bringing millions of affordable books since 2016 through Big Bad Wolf.</div>
                      </div>
                  </div>
                  <div className='relative bg-cover bg-center w-[218px] h-[300px] md:w-[592px] md:h-[561px]' style={{ backgroundImage: `url(/w20-BuDian-foto.png)` }}>
                      <div className='group absolute bottom-0 left-0 flex flex-col text-white bg-w20-blue h-fit w-full md:w-1/2 rounded-tr-[40px] px-4 md:px-6 py-4 hover:w-full hover:opacity-75 '>
                        <div className='text-sm md:text-xl font-Roboto-Bold tracking-wider'>Dian Siswarini</div>
                        <div className='text-xs md:text-sm font-Roboto tracking-wider'>Co-Chairwoman Women20</div>
                        <div className='hidden md:group-hover:block'>Dian has been at the forefront in promoting gender equality empowerment programs in XL Axiata. As the founder of Sisternet, she contributed to exposing more than 200,000 Indonesian women to digital literacy. For her passion and perseverance in women’s empowerment, Dian was chosen as Indonesia Most Impactful Women Leaders in 2018, Asia`s Power Business Women by Forbes in 2019, CEO of The Year in 2020, and Outstanding Female Leadership by Her Story in 2021.</div>
                      </div>
                  </div>
                </div>
              </div>
              <div className='md:hidden font-Roboto-Bold text-w20-blue text-base tracking-wider leading-6 my-4'>
                  <Link href="/W20-Committee.pdf">
                    <a target="_blank">{ locale == 'en' ? 'VIEW ALL COMMITTEE' : 'LIHAT SEMUA KOMITE'}</a>
                  </Link>
                </div>
            </div>
          </div>

          {/* News */}
          <div id="news" className='container mx-auto px-4 py-8 h-fit'>
              <div className='flex flex-row'>
                  <div className='flex flex-row mb-6 tracking-wider'>
                      <div> 
                        <Image
                          src="/w20-issue-logo.png"
                          alt="issue W20"
                          width={66}
                          height={31}
                          />
                      </div>
                      <div className='font-Roboto-Bold text-w20-blue uppercase text-base md:text-3xl ml-6'>{ locale == 'en' ? 'NEWS' : 'BERITA'}</div>
                  </div>
              </div>
              <div className='flex overflow-x-scroll'>
                <div className='flex flex-row flex-nowrap space-x-4 md:space-x-8'>
                  <Link href="/news/news-details-1">
                    <a>
                      <div className='flex flex-col'>
                        <div className='bg-cover bg-center w-[218px] h-[170px] md:w-[592px] md:h-[390px] mb-4' style={{ backgroundImage: `url(/w20-news-1-banner.png)` }}></div>
                        <div className='font-Roboto text-xs text-w20-blue tracking-widest mb-2'>Jakarta, 29 Januari 2022</div>
                        <div className='font-Roboto-Bold text-base md:text-3xl text-w20-blue tracking-widest'>{ locale == 'en' ? 'Inauguration of W20 & G20 EMPOWER Secretariat' : 'Peresmian Sekretariat W20 & G20 EMPOWER'}</div>
                      </div>
                    </a>
                  </Link>
                  <Link href="/news/news-details-2">
                    <a>
                      <div>
                        <div className='bg-cover bg-center w-[218px] h-[170px] md:w-[592px] md:h-[390px] mb-4' style={{ backgroundImage: `url(/w20-news-2-banner.png)` }}></div>
                        <div className='font-Roboto text-xs text-w20-blue tracking-widest mb-2'>Yogyakarta, 22 Desember 2021</div>
                        <div className='font-Roboto-Bold text-base md:text-3xl text-w20-blue tracking-widest'>{ locale == 'en' ? 'Kick Off W20 & G20 EMPOWER Indonesian Presidency 2022 Officially Begins' : 'Kick Off W20 & G20 EMPOWER Presidensi Indonesia 2022 Resmi Dimulai'}</div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
          </div>
          
      </Layout>

      
    </>
    
  )
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Timeline() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [swiperRef, setSwiperRef] = useState(null);
  
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');

  const showDescriptionText = (condition, desc) => {
    setShowDescription(condition);
    setDescription(desc);
  }

  const timelines = [
    {
      id: 1,
      date_en: '18 Jan',
      date_id: '18 Jan',
      title_en: 'W20 Troika Meeting Virtual',
      title_id: 'Pertemuan Troika W20 Virtual',
      descDate_en: '18 January 2022',
      descDate_id: '18 Januari 2022',
      description_en: ``,
      description_id: ``
    },
    {
      id: 2,
      date_en: '31 Jan',
      date_id: '31 Jan',
      title_en: 'W20 Initial Meeting Virtual',
      title_id: 'Pertemuan Awal Troika W20 Virtual',
      descDate_en: '31 January 2022',
      descDate_id: '31 Januari 2022',
      description_en: ``,
      description_id: ``
    },
    {
      id: 3,
      date_en: '14-16 Jan',
      date_id: '14-16 Jan',
      title_en: 'Side Event Discrimination and Violence against Women',
      title_id: 'Acara Sampingan Diskriminasi dan Kekerasan Terhadap Perempuan',
      descDate_en: '14-16 January 2022',
      descDate_id: '14-16 Januari 2022',
      description_en: `Likupang, North Sulawesi, Hybrid`,
      description_id: `Likupang, Sulawesi Utara, Hybrid`
    },
    {
      id: 4,
      date_en: '22-24 Feb',
      date_id: '22-24 Feb',
      title_en: 'Side Event Financial Inclusion',
      title_id: 'Acara Sampingan Inklusi Keuangan',
      descDate_en: '22-24 February 2022',
      descDate_id: '22-24 Februari 2022',
      description_en: `Batu, East Java, Hybrid`,
      description_id: `Batu, Jawa Timur, Hybrid`
    },
    {
      id: 5,
      date_en: '12-20 Mar',
      date_id: '12-20 Mar',
      title_en: 'CSW66 Side Events (3)',
      title_id: 'Acara Sampingan CSW66',
      descDate_en: '12-20 March 2022',
      descDate_id: '12-20 Maret 2022',
      description_en: `Virtual`,
      description_id: `Virtual`
    },
    {
      id: 6,
      date_en: '23-25 Mar',
      date_id: '23-25 Mar',
      title_en: 'Side Event Health',
      title_id: 'Acara Sampingan Kesehatan',
      descDate_en: '23-25 March 2022',
      descDate_id: '23-25 Maret 2022',
      description_en: `Banjarmasin, South Kalimantan, Hybrid`,
      description_id: `Banjarmasin, Kalimantan Selatan, Hybrid`
    },
    {
      id: 7,
      date_en: '27-29 May',
      date_id: '27-29 Mei',
      title_en: 'Side Event Marginalized Women',
      title_id: 'Acara Sampingan Perempuan Terpinggirkan',
      descDate_en: '27-29 May 2022',
      descDate_id: '27-29 Mei 2022',
      description_en: `West Papua, Hybrid`,
      description_id: `Papua Barat, Hybrid`
    },
    {
      id: 8,
      date_en: '19 Jul',
      date_id: '19 Jul',
      title_en: 'International Side Event',
      title_id: 'Acara Sampingan Internasional',
      descDate_en: '19 July 2022',
      descDate_id: '19 Juli 2022',
      description_en: `Toba Lake, Hybrid`,
      description_id: `Danau Toba, Hybrid`
    },
    {
      id: 9,
      date_en: '19-21 Jul',
      date_id: '19-21 Jul',
      title_en: 'W20 SUMMIT',
      title_id: 'PUNCAK W20',
      descDate_en: '19-21 July 2022',
      descDate_id: '19-21 Juli 2022',
      description_en: `Toba Lake, Hybrid`,
      description_id: `Danau Toba, Hybrid`
    },
    {
      id: 10,
      date_en: '31-2 Sep',
      date_id: '31-2 Sep',
      title_en: `G20 Ministerial Meeting on Women's Empowerment (MoWECP)`,
      title_id: 'Pertemuan Tingkat Kementerian G20 di Bidang Pemberdayaan Wanita.',
      descDate_en: '31-2 September 2022',
      descDate_id: '31-2 September 2022',
      description_en: `Bali, Hybrid`,
      description_id: `Bali, Hybrid`
    },
    {
      id: 11,
      date_en: 'Nov',
      date_id: 'Nov',
      title_en: 'November 2022 (H-5 G20 Summit)',
      title_id: 'November 2022 (H-5 Puncak G20)',
      descDate_en: 'November 2022',
      descDate_id: 'November 2022',
      description_en: `International Cultural Event, Nusa Dua, Bali, Hybrid`,
      description_id: `Pertunjukan Budaya Internasional, Nusa Dua, Bali, Hybrid`
    },
    {
      id: 12,
      date_en: 'Des',
      date_id: 'Des',
      title_en: 'Handover to India',
      title_id: 'Penyerahan kepada India',
      descDate_en: 'Desember 2022',
      descDate_id: 'Desember 2022',
      description_en: ``,
      description_id: ``
    }
  ]

  return (
    <div className='container mx-auto px-4 py-8 h-fit'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-row mb-6 tracking-wider w-6/6'>
            <div> 
              <Image
                src="/w20-issue-logo.png"
                alt="issue W20"
                width={66}
                height={31}
              />
            </div>
            <div className='timeline-title font-Roboto-Bold text-w20-blue uppercase text-base md:text-3xl ml-6 mr-12'> TIMELINE </div>
          </div>
          <div className='font-Roboto text-w20-blue text-sm tracking-wider leading-6 md:pr-10 mb-4'>
            During the Indonesia Presidency, Women20 will host a series of side events with internationally renowned speakers.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full md:w-2/2 justify-center'>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.45": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Scrollbar, Navigation]}
        className="mySwiper"
      >
        <div className='swiper-wrap'>
          {timelines.map((el, index) => (
            <SwiperSlide key={index}>
              <div className="timeline-task">
                <span className="timeline-date font-Roboto-bold text-w20-blue" style={description === `desc${el.id}` ? {color: '#FF032D'} : {color: '#1B1B5E'}}>{locale == 'en' ? el.date_en : el.date_id}</span>
                <div className='long-line'></div>
                <div className='description-wrap'>
                  <div className={`timeline-circle${el.id}`} onClick={() => showDescriptionText(true, `desc${el.id}`)} style={description === `desc${el.id}` ? {backgroundColor: '#FF032D'} : {backgroundColor: '#1B1B5E'}}>
                    <div className='description'>
                      <h4 className='font-Roboto-Bold text-w20-red md:text-0xl'>{locale == 'en' ? el.descDate_en : el.descDate_id}</h4>
                      <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-1xl'>{locale == 'en' ? el.title_en : el.title_id}</h3>
                      <p style={{visibility: 'hidden'}}>{locale == 'en' ? el.description : <></>}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {showDescription ? (
        <>
        {description === 'desc1' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[0].descDate_en : timelines[0].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[0].title_en : timelines[0].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[0].description_en : timelines[0].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc2' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[1].descDate_en : timelines[1].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[1].title_en : timelines[1].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[1].description_en : timelines[1].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc3' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[2].descDate_en : timelines[2].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[2].title_en : timelines[2].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[2].description_en : timelines[2].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc4' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[3].descDate_en : timelines[3].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[3].title_en : timelines[3].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[3].description_en : timelines[3].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc5' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[4].descDate_en : timelines[4].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[4].title_en : timelines[4].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[4].description_en : timelines[4].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc6' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[5].descDate_en : timelines[5].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[5].title_en : timelines[5].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[5].description_en : timelines[5].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc7' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[6].descDate_en : timelines[6].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[6].title_en : timelines[6].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[6].description_en : timelines[6].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc8' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[7].descDate_en : timelines[7].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[7].title_en : timelines[7].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[7].description_en : timelines[7].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc9' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[8].descDate_en : timelines[8].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[8].title_en : timelines[8].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[8].description_en : timelines[8].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc10' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[9].descDate_en : timelines[9].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[9].title_en : timelines[9].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[9].description_en : timelines[9].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc11' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[10].descDate_en : timelines[10].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[10].title_en : timelines[10].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[10].description_en : timelines[10].description_id}</p>
          </div>
        ) : <></>}
        {description === 'desc12' ? (
          <div className='showDescription'>
            <h4 className='font-Roboto-Bold text-w20-red'>{locale == 'en' ? timelines[11].descDate_en : timelines[11].descDate_id}</h4>
            <h3 className='description-title font-Roboto-Bold text-w20-blue text-base md:text-3xl sm:text:3xl'>{locale == 'en' ? timelines[11].title_en : timelines[11].title_id}</h3>
            <p className='font-Roboto'>{locale == 'en' ? timelines[11].description_en : timelines[11].description_id}</p>
          </div>
        ) : <></>}
        </>
      ) : <></>}
      </div>
    </div>
  )
}

export default Timeline;
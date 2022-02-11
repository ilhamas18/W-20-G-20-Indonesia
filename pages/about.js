import Layout from '../components/Layout'
import { useRouter } from "next/router"


const about_res = {
    title_id: "Tentang W20",
    title_en: "About W20",
    desc_id: "Women 20 (W20) adalah kelompok keterlibatan G20 resmi yang didirikan selama kepresidenan Turki pada tahun 2015. Tujuannya adalah untuk memastikan bahwa pertimbangan gender diarusutamakan ke dalam diskusi G20 dan diterjemahkan ke dalam Deklarasi Pemimpin G20 sebagai kebijakan dan komitmen yang mendorong kesetaraan gender dan pemberdayaan ekonomi perempuan.",
    desc_en: "The Women 20 (W20) is an official G20 engagement group established during the Turkish presidency in 2015. The objective is to ensure that the gender considerations are mainstreamed into G20 discussions and translate into the G20 Leaders' Declaration as policies and commitments that foster gender equality and women’s economic empowerment.",
}


function About(){
    const { locale, locales, defaultLocale, asPath } = useRouter();
    return (
        <Layout>
            <div className='container mx-auto px-4 pt-24'>
                <div>{ locale == 'en' ? about_res.title_en : about_res.title_id}</div>
                <div>
                    <p>
                        { locale == 'en' ? about_res.desc_en : about_res.desc_id}
                    </p>
                </div>
            </div>
        </Layout>
        
    )
}

export default About
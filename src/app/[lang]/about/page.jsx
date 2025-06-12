// import Layout from '../Layout/Layout';
'use client';
import { useLanguage } from '@/context/Languagecontext';
import { translations } from '@/Locales/LanguageContent';

const About = () => {
    const { language } = useLanguage();
    // console.log('lang', language);

    return (
        <main>
            <div className="max-w-5xl w-full justify-center pt-[10px]">
                <div className="text-center px-5">
                    <h2 className="text-4xl font-bold gradient-text ">{translations[language].header.about}</h2>
                    <p>{translations[language].about.background.header}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl md:flex md:flex-row mb-8">
                    <div className="mobile:h-64 mobile:min-w-64 md:h-72 md:min-w-72 relative ">
                        <img src="/images/background/ptl.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="">
                        <div className="p-2 md:pl-5">
                            <h3 className="text-xanhduong font-bold text-xl">
                                {translations[language].about.background.apply}
                            </h3>
                            <h3 className="font-bold text-3xl">{translations[language].home.name}</h3>
                            <h3>{translations[language].about.background.address}</h3>
                        </div>
                        <div className="relative">
                            {/* <label htmlFor="BACKGROUND/CAREER OBJECTIVES" className="relative ">
                        {translations[language].about.background.label}
                    </label> */}
                            {translations?.[language]?.about?.background?.content?.map((paragraph, index) => (
                                <p key={index} className="indent-10 text-lg md:pl-5">
                                    {paragraph}
                                </p>
                            ))}
                            {/* {translations[language].about.background.content.map((paragraph, index) => (
                        <p key={index} className="indent-10">
                            {paragraph}
                        </p>
                    ))} */}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w justify-between mb-8">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl ">
                        <label htmlFor="Education" className="uppercase">
                            {translations[language].about.education.label}
                        </label>
                        <div className="border-l-4 border-slate-500 pl-3">
                            <h3 className="">{translations[language].about.education.content}</h3>
                            <p>{translations[language].about.education.time}</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl">
                        <label htmlFor="Work experience" className="uppercase ">
                            {translations[language].about.experience.label}{' '}
                        </label>
                        <div className="space-y-5">
                            {translations[language].about.experience.content.map((data, index) => (
                                <div key={index} className="border-l-4 border-slate-500 pl-3">
                                    <h3 className="font-bold">{data.title}</h3>
                                    <h4>{data.company}</h4>
                                    <h4>{data.time}</h4>
                                    <p>{data.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl space-y-3">
                    <label htmlFor="Education" className="uppercase">
                        {translations[language].about.hobbies.label}
                    </label>
                    <div className="flex flex-wrap gap-5">
                        {translations?.[language]?.about?.hobbies?.content?.map((data, indexx) => (
                            <p
                                className="rounded-xl whitespace-nowrap bg-yellow-200 dark:bg-orange-400 px-1"
                                key={indexx}
                            >
                                {data}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};
export default About;

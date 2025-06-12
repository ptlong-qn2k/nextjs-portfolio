'use client';
import { translations } from '@/locales/languagecontent';
import { useLanguage } from '@/context/languagecontext';
import { FaLink } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

function Projects() {
    const { language } = useLanguage();

    return (
        <main>
            <div className="flex flex-col justify-center">
                <h2 className="gradient-text mt-[10px] px-10 text-center text-2xl font-semibold">
                    {translations[language].projects.title}
                </h2>
                <div className="flex flex-col items-center gap-5 pt-5 md:grid md:grid-cols-2">
                    {translations?.[language]?.projects?.items?.map((data, index) => {
                        // console.log(typeof data.content);
                        return (
                            <div
                                key={index}
                                className="ui1 relative flex w-[365px] flex-col items-center overflow-hidden rounded-[10px] border-2 border-white lg:min-w-[400px] xl:w-[550px]"
                            >
                                {/* <img src={data.URL} alt="" className=" object-cover" /> */}
                                <div
                                    className={`relative ${
                                        data.scroll == 'true' ? 'scroll-preview' : 'h-[250px] w-full'
                                    } `}
                                >
                                    <img src={data.URL} alt={data.title} className="absolute w-full object-cover" />
                                    <div className="relative top-[120px] z-20 mb-[-50px] flex w-full flex-row items-center justify-end gap-3 pr-5 lg:top-[130px] xl:top-[180px]">
                                        {data.image.map((data1, indx) => {
                                            // console.log(data1);
                                            return (
                                                <div key={indx} className="h-full w-14 xl:w-20">
                                                    <img className="" src={data1} alt="" />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="w-full px-5 text-left">
                                    <h2 className="mb-2 whitespace-nowrap text-center text-xl font-bold">
                                        {data.title}
                                    </h2>
                                    <ul className="min-h-[420px] list-disc pl-5 text-base lg:min-h-[380px] xl:min-h-[350px]">
                                        {data.content.map((line, idx) => (
                                            <li key={idx} className="mb-1">
                                                {line}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="min-h-20 text-base">
                                        <span className="whitespace-nowrap font-semibold">
                                            {translations[language].header.techstack}:
                                        </span>
                                        <span className="ml-2 text-sm">{data.techstask}</span>
                                    </p>
                                </div>
                                <div className="flex w-full flex-row items-center justify-between px-5">
                                    <div className="flex flex-row items-center justify-center gap-x-2">
                                        <FaLink className="inline" />
                                        <a
                                            href={data.vercel}
                                            target="_blank"
                                            className="underline decoration-black decoration-1"
                                        >
                                            {translations[language].projects.titlepage}
                                        </a>
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-x-2 py-2">
                                        <FaGithub className="inline" />
                                        <a
                                            href={data.github}
                                            target="_blank"
                                            className="underline decoration-black decoration-1"
                                        >
                                            {translations[language].projects.titlecode}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export default Projects;

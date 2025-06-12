'use client';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from '@/context/Languagecontext';
import { translations } from '@/Locales/LanguageContent';
import { MdCloudDownload } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function Home() {
    const { language } = useLanguage();
    const router = useRouter();
    const gotopage = (page) => {
        router.push(`/${language}/${page}`);
    };
    return (
        <main className="flex flex-col text-lg ">
            <div className="flex flex-col items-center sm:flex-row mx-auto sm:gap-10 sm:px-5 pt-10 font-bold ">
                <img
                    src="/images/background/long.png"
                    className=" min-w-[200px] min-h-[200px] max-w-[250px] max-h-[250px] hieuung1 p-2 bg-image-gradient  overflow-hidden rounded-[50%]"
                />

                <div className="py-2 flex flex-col items-center sm:items-start animate-fade-in">
                    <div className="flex flex-col text-center sm:text-left uppercase sm:mb-2  ">
                        <span className="hidden sm:flex ">{translations[language].home.title}</span>
                        <span className="sm:whitespace-nowrap text-maupurple ">{translations[language].home.name}</span>
                        <span className="text-maucam max-w-[250px] sm:max-w-full min-w-[220px]">
                            {translations[language].home.description}
                        </span>
                    </div>
                    <a
                        className="text-black rounded-xl flex p-1 mb-2 bg-slate-500 justify-center items-center float-start sm:float-start text-sm whitespace-nowrap cursor-pointer animate-fade-in "
                        href="/CV_Pham_Thanh_Long.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdCloudDownload size={20} className="mr-1" />
                        {translations[language].home.buttoncv}
                    </a>
                    <div className="space-x-3 text-sm">
                        <button
                            className="bg-gradient-to-r from-cyan-400 to-blue-800 rounded-lg p-1 card-hover"
                            onClick={() => gotopage('project')}
                        >
                            {translations[language].home.buttonproject}
                        </button>
                        <button
                            className="bg-gradient-to-r from-cyan-400 to-blue-800 rounded-lg p-1 card-hover"
                            onClick={() => gotopage('contact')}
                        >
                            {translations[language].home.buttoncontact}
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-start mx-auto sm:mt-10">
                <div className="flex flex-row items-center mr-2 md:mr-12">
                    <FaPhoneAlt style={{ width: '30px', height: '30px', margin: '0 10px' }} />
                    <span>+84328228798</span>
                </div>
                <div className="flex flex-row items-center">
                    <HiOutlineMail style={{ width: '30px', height: '30px', margin: '0 10px' }} />
                    <span>Thanhlong05.06.2k@gmail.com</span>
                </div>
            </div>
        </main>
    );
}

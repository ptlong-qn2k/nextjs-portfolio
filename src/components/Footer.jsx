'use client';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
// import { useNavigate, useLocation } from 'react-router-dom';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/context/languagecontext';
import { translations } from '@/locales/languagecontent';
const Footer = () => {
    const { language } = useLanguage();
    const pathname = usePathname();
    const router = useRouter();
    const myFb = (url) => {
        window.open(url, '_blank');
    };
    const myGithub = (url) => {
        window.open(url, '_blank');
    };
    const goToPage = (page) => router.push(`/${language}/${page}`);

    return (
        <>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-3 gap-5 mt-5 py-10 border-t-[1px] border-b-[1px] border-gray-600 dark:border-gray-400 ">
                    <div>
                        <h3 className="font-bold">{translations[language].header.about}</h3>
                        <p>{translations[language].home.contentabout}</p>
                    </div>
                    <div className="font-bold">
                        <h3>{translations[language].header.navigation[0]}</h3>
                        <div className="md:flex flex-col justify-center items-start gap-x-5 whitespace-nowrap ">
                            <h3
                                onClick={() => goToPage('')}
                                className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                    pathname === '/' ? 'menu-active' : 'text-maudo'
                                }`}
                            >
                                {translations[language].header.home}
                            </h3>
                            <h3
                                onClick={() => goToPage('about')}
                                className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                    pathname === '/about' ? 'menu-active' : 'text-xanhduong'
                                }`}
                            >
                                {translations[language].header.about}
                            </h3>
                            <h3
                                onClick={() => goToPage('techstack')}
                                className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                    pathname === '/techstack' ? 'menu-active' : 'text-mauvang'
                                }`}
                            >
                                {translations[language].header.techstack}
                            </h3>
                            <h3
                                onClick={() => goToPage('project')}
                                className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                    pathname === '/project' ? 'menu-active' : 'text-maucam'
                                }`}
                            >
                                {translations[language].header.projects}
                            </h3>
                            <h3
                                onClick={() => goToPage('contact')}
                                className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                    pathname === '/contact' ? 'menu-active' : 'text-xanhla'
                                }`}
                            >
                                {translations[language].header.contact}
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">{translations[language].header.navigation[1]}</h3>
                        <div className="cursor-pointer gap-2 flex flex-row justify-start">
                            <FaFacebook
                                onClick={() => myFb('https://www.facebook.com/mrlong2k/')}
                                className="w-8 h-8 card-hover"
                            />
                            <FaGithubSquare
                                onClick={() => myGithub('https://github.com/ptlong-qn2k')}
                                className="w-8 h-8 card-hover"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center pb-5">
                    <div className="flex flex-col md:flex-row">
                        <p>2025 cv @Portfolio</p>
                        <p>Pham Thanh Long</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center sm:gap-3">
                        <p className="whitespace-nowrap flex flex-row">
                            Front-end Developer <span className="hidden md:block pl-2">|</span>{' '}
                        </p>
                        <p className="whitespace-nowrap">Da Nang, Vietnam</p>
                        <img
                            src={'/images/header/vn.png'}
                            className="md:h-6 hidden md:block"
                            alt=""
                            onClick={() =>
                                window.open(
                                    'https://baochinhphu.vn/thu-tuong-nam-2025-du-kien-quy-mo-kinh-te-viet-nam-tren-500-ty-usd-102250505112210409.htm',
                                    'blank'
                                )
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;

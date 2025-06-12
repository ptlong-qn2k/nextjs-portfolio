'use client';
import React, { useState, useEffect, useRef } from 'react';
import { translations } from '@/locales/languagecontent';
import { IoMenu } from 'react-icons/io5';
import { useLanguage } from '@/context/languagecontext';
import { useRouter } from 'next/navigation';
const Menutoogle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const { language } = useLanguage();
    const router = useRouter();
    const goToPage = (path) => router.push(`/${[language]}/${path}`);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // console.log(isOpen);
    };
    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={menuRef} onClick={toggleMenu} className={`md:hidden`}>
            <div>
                <IoMenu size={32} className="cursor-pointer bg-gray-200 dark:bg-gray-700" />
            </div>
            {isOpen && (
                <div className="absolute top-full left-0 right-0 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 z-50">
                    <ul className="flex flex-col text-black dark:text-white">
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => {
                                setIsOpen(false);
                                goToPage('');
                            }}
                        >
                            {translations[language].header.home}
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => {
                                setIsOpen(false);
                                goToPage('about');
                            }}
                        >
                            {translations[language].header.about}
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => {
                                setIsOpen(false);
                                goToPage('techstack');
                            }}
                        >
                            {translations[language].header.techStack}
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => {
                                setIsOpen(false);
                                goToPage('project');
                            }}
                        >
                            {translations[language].header.projects}
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => {
                                setIsOpen(false);
                                goToPage('contact');
                            }}
                        >
                            {translations[language].header.contact}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Menutoogle;

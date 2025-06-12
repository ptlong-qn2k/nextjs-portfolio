import { FaHtml5, FaCss3, FaReact, FaSass, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiVite, SiTailwindcss } from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';

import enHome from './en/home';
import enHeader from './en/header';
import enAbout from './en/about';
import enContact from './en/contact';
import enProject from './en/project';

import viHeader from './vi/header';
import viHome from './vi/home';
import viAbout from './vi/about';
import viContact from './vi/contact';
import viProject from './vi/project';
import enTechstack from './en/techstack';
import viTechstack from './vi/techstack';
export const translations = {
    en: {
        home: enHome,
        header: enHeader,
        about: enAbout,
        projects: enProject,
        contact: enContact,
        techstack: enTechstack,
    },
    vi: {
        home: viHome,
        header: viHeader,
        about: viAbout,
        projects: viProject,
        contact: viContact,
        techstack: viTechstack,
    },
};

export const techstackIcon = [
    { title: 'html', icon: <FaHtml5 />, color: 'text-[#E44F26]', value: '80' },
    { title: 'css', icon: <FaCss3 />, color: 'text-[#1572B6]', value: '80' },
    { title: 'javascript', icon: <SiJavascript />, color: 'text-mauvang bg-black', value: '70' },
    { title: 'react', icon: <FaReact />, color: 'text-xanhduong bg-mauvang', value: '70' },
    { title: 'tailwind', icon: <SiTailwindcss />, color: 'text-[#44A8B3]', value: '80' },
    { title: 'sass', icon: <FaSass />, color: 'text-[#CD6799]', value: '75' },
    { title: 'git', icon: <FaGitAlt />, color: 'text-[#DE4C36]', value: '70' },
    { title: 'visualcode', icon: <BiLogoVisualStudio />, color: 'text-[#1F9CF0]', value: '75' },
    { title: 'github', icon: <FaGithub />, color: 'text-black', value: '60' },
    // { title: 'vite', icon: <img src="/vite.svg" alt="Vite" />, value: '80' },
    { title: 'material-UI', icon: <img src="/images/materialui.svg" alt="mui" />, color: '', value: '55' },
];

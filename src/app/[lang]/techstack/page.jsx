'use client';
import React from 'react';
import { techstackIcon } from '@/locales/languagecontent';
import { CircularProgress, Typography, Box, colors } from '@mui/material';
import { translations } from '@/locales/languagecontent';
import { useLanguage } from '@/context/languagecontext';

const CircularSkill = ({ skill, value }) => {
    return (
        <Box sx={{ textAlign: 'center', m: 2 }}>
            <Typography variant="body1">{skill}</Typography>
            <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={value} size={80} sx={{ color: 'blue' }} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="caption" component="div">{`${value}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

function TechStack() {
    const { language } = useLanguage();
    return (
        <main>
            <div className="px-5 pt-[10px]">
                <div className="mb-4 px-5 text-center">
                    <h2 className="gradient-text mb-1 whitespace-nowrap text-4xl font-bold">
                        {translations[language].techstack.title}
                    </h2>
                    <ul className="max-w-2xl list-decimal text-justify">
                        {translations?.[language]?.techstack?.description?.map((data, index) => {
                            return <li key={index}>{data}</li>;
                        })}
                    </ul>
                </div>
                <h2 className="text-center text-xl font-bold dark:text-pink-800">
                    {translations[language].techstack.content}
                </h2>
                <div className="my-2 flex justify-center">
                    <div className="grid grid-cols-2 gap-5 mobile:grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
                        {techstackIcon.map((data, index) => (
                            <div key={index} className="flex flex-col items-center justify-center">
                                <div className="mb-[-20px] flex h-20 w-20 items-center justify-center">
                                    {React.cloneElement(data.icon, { className: `w-16 h-16 ${data.color}` })}
                                </div>
                                {/* <h3 className="text-xl">{data.title}</h3> */}
                                <CircularSkill skill={data.title} value={data.value} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TechStack;

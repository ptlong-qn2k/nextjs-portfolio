import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { translations } from '@/Locales/LanguageContent'; // Import từ file tập trung

export const useTranslation = (section) => {
    const [translationsData, setTranslationsData] = useState(null);
    const { locale } = useRouter();

    useEffect(() => {
        // Lấy bản dịch từ đối tượng translations dựa vào locale và section
        if (locale && translations[locale] && translations[locale][section]) {
            setTranslationsData(translations[locale][section]);
        }
    }, [locale, section]);

    return translationsData;
};

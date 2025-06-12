'use client';
import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('auto'); // chỉ dùng giá trị mặc định tạm

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'auto';
        setTheme(savedTheme);
    }, []);

    // Áp dụng theme mỗi khi thay đổi
    useEffect(() => {
        const root = window.document.documentElement;

        const applyTheme = (currentTheme) => {
            if (currentTheme === 'dark') {
                root.classList.add('dark');
            } else if (currentTheme === 'light') {
                root.classList.remove('dark');
            } else {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                root.classList.toggle('dark', isDark);
            }
        };

        applyTheme(theme);
        localStorage.setItem('theme', theme);

        // Theo dõi nếu ở chế độ auto
        let mediaQuery;
        if (theme === 'auto') {
            mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handler = (e) => {
                root.classList.toggle('dark', e.matches);
            };
            mediaQuery.addEventListener('change', handler);

            return () => {
                mediaQuery.removeEventListener('change', handler);
            };
        }
    }, [theme]);

    const toggleTheme = () => {
        // Toggle giữa light → dark → auto → light ...
        setTheme((prev) => {
            if (prev === 'light') return 'dark';
            if (prev === 'dark') return 'auto';
            return 'light';
        });
    };

    return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeProvider };

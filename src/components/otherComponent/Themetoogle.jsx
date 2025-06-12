// src/components/ThemeToggle.jsx
import { useContext, useState, useEffect, useRef, useCallback } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        { label: '☀️', value: 'light' },
        { label: '🌙', value: 'dark' },
        { label: '⚙️', value: 'auto' },
    ];

    const handleSelect = useCallback(
        (value) => {
            setTheme(value);
            setOpen(false);
        },
        [setTheme]
    );

    const getLabel = () => {
        const selected = options.find((opt) => opt.value === theme);
        return selected?.label || '⚙️ Auto';
    };
    // 👇 handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="text-lg card-hover relative">
            <button onClick={() => setOpen(!open)} className="px-3 py-[2px] rounded-md bg-gray-200 dark:bg-gray-700">
                {getLabel()}
            </button>
            {open && (
                <div className="absolute mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 z-10">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className={`cursor-pointer px-3 py-0 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                theme === option.value ? 'font-semibold' : ''
                            }`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const supportedLanguages = ['en', 'vi']; // Danh sách các ngôn ngữ được hỗ trợ
const defaultLanguage = 'en'; // Ngôn ngữ mặc định

function LanguageRedirect() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const firstSegment = pathSegments[0];

        // Kiểm tra nếu segment đầu tiên không phải là ngôn ngữ được hỗ trợ
        if (!supportedLanguages.includes(firstSegment)) {
            const newPath = `/${defaultLanguage}${location.pathname.startsWith('/') ? '' : '/'}${location.pathname}`;
            navigate(newPath, { replace: true });
        }
    }, [location.pathname, navigate]);

    return null; // Không render gì cả
}

export default LanguageRedirect;

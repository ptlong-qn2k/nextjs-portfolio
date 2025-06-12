const viProject = {
    label: 'Project',
    title: 'dưới đây là các mẫu dự án mà tôi đã từng làm',
    titlepage: 'Xem trước',
    titlecode: 'xem mã nguồn',
    items: [
        {
            title: 'Tạo trang đăng nhập admin',
            content: [
                'Trang đăng nhập quản trị : Được xây dựng bằng React.js, React Router và Material UI.',
                'Quản lý sản phẩm : Chức năng CRUD (Tạo, Đọc, Cập nhật, Xóa) để quản lý sản phẩm.',
                'Chức năng tìm kiếm : Triển khai chức năng tìm kiếm để lọc sản phẩm dễ dàng.',
                'Tích hợp API : Lấy dữ liệu bằng Axios để giao tiếp với API từ Backend.',
                'Xử lý biểu mẫu : Biểu mẫu đăng nhập của người dùng với React Hook Form và xác thực với Yup .',
                `Triển khai layout linh hoạt, tái sử dụng tốt`,
                'Thiết kế đáp ứng : Đảm bảo ứng dụng hoạt động tốt trên nhiều thiết bị khác nhau.',
            ],
            URL: '/images/projects/admin.png',
            image: [
                '/images/projects/image1.png',
                '/images/projects/image2.png',
                '/images/projects/image3.png',
                '/images/projects/login.png',
            ],
            techstask: 'HTML5, CSS3, Javascript ES6+, React, Tailwind, Material-UI',
            vercel: 'https://project1-responsive-ptl.vercel.app/',
            github: 'https://github.com/ptlong-qn2k/project1-react',
            scroll: 'false',
        },
        {
            title: 'xây dựng langding page',
            content: [
                `Chịu trách nhiệm chính trong việc cắt giao diện từ thiết kế (Figma/ảnh mẫu)`,
                `Đảm bảo đúng yêu cầu về độ tương thích trình duyệt và thiết bị`,
                `Triển khai và kiểm thử hiển thị pixel-perfect`,
            ],
            URL: '/images/projects/Homepage.png',
            image: [],
            techstask: 'HTML5, CSS3, Javascript ES6+, React, Tailwind, Responsive Design (Flexbox/Grid, Media Queries)',
            vercel: 'https://react2done.vercel.app/',
            github: 'https://github.com/ptlong-qn2k/react2done',
            scroll: 'true',
        },
    ],
};
export default viProject;

'use client';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { translations } from '@/Locales/LanguageContent';
import { useLanguage } from '@/context/Languagecontext';
import { Schema } from '@/context/Schema';
import { yupResolver } from '@hookform/resolvers/yup';

function Contact() {
    const { language } = useLanguage();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange', criteriaMode: 'all', resolver: yupResolver(Schema, { abortEarly: false }) });

    const onSubmit = async (data) => {
        data.access_key = '1ccbaca8-59cd-485d-a2b5-77bf9e1bc1d6';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (result.success) {
                Swal.fire({
                    title: '🎉 Message Sent!',
                    text: `${translations[language].contact.content.successMessage}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                });

                reset(); // Xóa dữ liệu form sau khi gửi thành công
            } else {
                Swal.fire({
                    title: '❌ Error!',
                    text: `${translations[language].contact.content.errorMessage}`,
                    icon: 'error',
                    confirmButtonColor: '#d33',
                });
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
    //Hàm hiển thị tất cả các lỗi validate
    const renderFieldErrors = (fieldErrors) => {
        if (!fieldErrors) return null;
        if (fieldErrors.types) {
            return Object.values(fieldErrors.types).map((msg, i) => (
                <p key={i} className="text-sm text-red-500">
                    {msg}
                </p>
            ));
        }
        return <p className="text-sm text-red-500">{fieldErrors.message}</p>;
    };
    return (
        <main>
            <div className="flex max-w-6xl flex-col pt-[10px]">
                <h2 className="gradient-text mx-auto mb-4 text-4xl font-bold capitalize">
                    {translations[language].contact.title}
                </h2>
                <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
                    <div className="space-y-8">
                        <div className="rounded-lg bg-white p-5 shadow-lg shadow-gray-500 dark:bg-gray-800 sm:p-6 md:grid-cols-1 md:grid-rows-1 md:p-8">
                            <h3 className="mb-4 text-2xl font-bold">
                                {translations[language].contact.content.contactInfo}
                            </h3>
                            <div className="flex flex-col justify-start space-y-8">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex rounded-[50%] bg-blue-200 p-2 dark:bg-blue-600 sm:p-3">
                                        <MdOutlineEmail
                                            className="m-auto text-xanhduong dark:text-gray-300"
                                            size={20}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">
                                            {translations[language].contact.contactDetails.emailLabel}
                                        </label>
                                        <a href="mailto:Thanhlong05.06.2k@gmail.com" className="text-sm sm:text-base">
                                            {translations[language].contact.contactDetails.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex rounded-[50%] bg-green-200 p-2 dark:bg-green-600 sm:p-3">
                                        <IoCallOutline className="m-auto text-xanhla dark:text-gray-300" size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">
                                            {translations[language].contact.contactDetails.phoneLabel}
                                        </label>
                                        <a href="tel:+84328228798" className="text-sm sm:text-base">
                                            +84328228798
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex rounded-[50%] bg-orange-200 p-2 dark:bg-orange-600 sm:p-3">
                                        <FaMapMarkerAlt className="m-auto text-maucam dark:text-gray-300" size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">
                                            {translations[language].contact.contactDetails.addressLabel}
                                        </label>
                                        <p className="text-sm sm:text-base">
                                            {translations[language].contact.contactDetails.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 rounded-lg bg-white p-5 shadow-lg shadow-gray-500 dark:bg-gray-800 sm:p-6 md:grid-cols-1 md:grid-rows-2 md:p-8">
                            <h3 className="text-2xl font-bold">{translations[language].contact.content.connect}</h3>
                            <div>
                                <div className="flex cursor-pointer flex-row justify-start gap-2">
                                    <div className="card-hover flex !rounded-[50%] bg-blue-200 p-2 dark:bg-blue-600 sm:p-3">
                                        <FaFacebook
                                            onClick={() =>
                                                (window.location.href = 'https://www.facebook.com/mrlong2k/')
                                            }
                                            className="text-blue-600 dark:text-gray-300"
                                            size={20}
                                        />
                                    </div>
                                    <div className="card-hover flex !rounded-[50%] bg-gray-200 p-2 dark:bg-gray-900 sm:p-3">
                                        <FaGithub
                                            onClick={() => (window.location.href = 'https://github.com/ptlong-qn2k')}
                                            className="text-black dark:text-gray-300"
                                            size={20}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto flex flex-col rounded-lg bg-white p-5 shadow-lg shadow-gray-500 dark:bg-gray-800 sm:p-6 md:p-8">
                        <h2 className="gradient-text mb-4 text-center text-4xl font-bold capitalize">
                            {translations[language].contact.content.form}
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder={translations[language].contact.content.namePlaceholder}
                                {...register('fullName')}
                                className="w-full rounded-lg border bg-white p-3 dark:bg-gray-800 dark:placeholder-white"
                            />
                            {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
                            {/* {renderFieldErrors(errors.fullName)} //hiển thị tất cả các lỗi */}
                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder={translations[language].contact.content.emailPlaceholder}
                                {...register('email')}
                                className="w-full rounded-lg border bg-white p-3 dark:bg-gray-800 dark:placeholder-white"
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            {/* Message Input */}
                            <textarea
                                placeholder={translations[language].contact.content.messagePlaceholder}
                                {...register('contentforme')}
                                className="mb-5 h-32 w-full rounded-lg border bg-white p-3 dark:bg-gray-800 dark:placeholder-white"
                            />
                            {errors.contentforme && <span className="text-red-500">{errors.contentforme.message}</span>}
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="card-hover w-full rounded-lg bg-maucam p-3 text-white hover:bg-orange-600"
                            >
                                {translations[language].contact.content.sendButton}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;

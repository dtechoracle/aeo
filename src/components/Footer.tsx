import React from 'react';

interface FooterProps {
    backgroundImage?: string;
    phone?: string;
    email?: string;
    address?: string;
}

const Footer: React.FC<FooterProps> = ({
    backgroundImage = '/Images/AeoFooter.jpg',
    phone = '+2348127982163',
    email = 'gbemidebe@anendlessocean.com',
    address = 'On the Cross.'
}) => {
    return (
        <footer className="relative font-mono">
            {/* Background image section that stays fixed */}
            <div className="h-96 md:h-[60vh] bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url('${backgroundImage}')` }}>
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Footer content that scrolls over the background */}
            <div className="relative -mt-96 md:-mt-[60vh]">
                {/* Main footer content */}
                <div className="bg-white px-4 sm:px-6 md:px-8 py-12 md:py-16">
                    <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
                        {/* Artist name/brand */}
                        <div className="space-y-3 md:space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                                AnEndlessOcean
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 px-4">
                               Divinely Inspired Gospel Music. Making lives touch the Presence of God.
                            </p>
                        </div>

                        {/* Contact info in clean format */}
                        <div className="space-y-4 text-gray-700">
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-2 md:space-y-0 md:space-x-8 text-base md:text-lg">
                                <span className="break-all sm:break-normal">{phone}</span>
                                <span className="hidden sm:inline md:inline">•</span>
                                <span className="break-all sm:break-normal">{email}</span>
                                <span className="hidden sm:inline md:inline">•</span>
                                <span className="text-center px-2">{address}</span>
                            </div>
                        </div>

                        {/* Social media links */}
                        <div className="flex justify-center space-x-4 sm:space-x-6">
                            <a
                                href="https://facebook.com/anendlessocean"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com/anendlessocean"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.617-6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a
                                href="https://open.spotify.com/artist/anendlessocean"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                                </svg>
                            </a>
                            <a
                                href="https://youtube.com/@anendlessocean"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                        </div>

                        {/* Copyright */}
                        <div className="pt-6 md:pt-8 border-t border-gray-200">
                            <p className="text-gray-500 text-xs sm:text-sm">
                                © 2025 AnEndlessOcean. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
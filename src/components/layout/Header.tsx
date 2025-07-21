"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import DownloadButton from "../button/DowloadButton";
import { useViewport } from "@/contexts/ViewportContext";




export function Header() {
    const { width } = useViewport();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 200 ? 'bg-white' : 'bg-transparent'
            }`}>

            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center transition-all duration-300 ${scrollY > 200 ? 'h-16' : 'h-20'}`}>
                {/* Desktop Layout */}
                {width > 1057 && (
                    <div className="hidden md:flex items-center justify-between w-full">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Image
                                src={"/logo-company.svg"}
                                alt="Logo"
                                width={scrollY > 200 ? 100 : 125}
                                height={scrollY > 200 ? 34 : 43}
                                className="transition-all duration-300"
                            />
                        </div>

                        {/* Navigation Menu */}
                        <nav className="flex space-x-8 font-bold">
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium text-center">
                                Công ty
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium text-center">
                                Khách hàng cá nhân
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium text-center">
                                Khách hàng doanh nghiệp
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium text-center">
                                Tin tức
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium text-center">
                                Hỗ trợ
                            </a>
                        </nav>

                        {/* Right side - Download button and Language */}
                        <div className="flex items-center space-x-4">

                            <DownloadButton text="Tải ngay" href="/" />
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                    src={"/vietnamese.png"}
                                    width={60}
                                    height={60}
                                    alt="US Flag"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>)}

                {/* Mobile Layout */}
                {width < 1058 && (
                    <div className=" w-full">
                        <div className={`flex items-center justify-between transition-all duration-300 ${scrollY > 200 ? 'h-16' : 'h-20'}`}>
                            {/* Mobile menu dropdown */}
                            <div className="relative group">
                                <button className="text-gray-700 hover:text-gray-900 p-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <div className="py-4">
                                        <div className="space-y-1">
                                            {/* Navigation Links */}
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                                Công ty
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                                Khách hàng cá nhân
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                                Khách hàng doanh nghiệp
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                                Tin tức
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm font-medium">
                                                Hỗ trợ
                                            </a>

                                            {/* Divider */}
                                            <div className="border-t border-gray-200 my-2"></div>

                                            {/* Download Button */}
                                            <div className="px-4 py-2">
                                                <button className="relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-3xl group bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-200 ">
                                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-900 rounded-3xl group-hover:bg-transparent group-hover:dark:bg-transparent font-bold">
                                                        Tải ứng dụng ngay
                                                    </span>
                                                </button>
                                            </div>

                                            {/* Language Selector */}
                                            <div className="px-4 py-2">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-6 h-6 rounded-full overflow-hidden">
                                                        <Image
                                                            src={"/english.png"}
                                                            width={32}
                                                            height={32}
                                                            alt="US Flag"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-sm text-gray-700">English</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Centered Logo */}
                            <div className="flex-shrink-0">
                                <Image
                                    src={"/logo-company.svg"}
                                    alt="Logo"
                                    width={scrollY > 200 ? 100 : 125}
                                    height={scrollY > 200 ? 24 : 30}
                                    className="transition-all duration-300"
                                />
                            </div>
                            {/* Empty space to balance the layout */}
                            <div className="w-10"></div>
                        </div>
                    </div>)}
            </div>
        </header>
    );
} 
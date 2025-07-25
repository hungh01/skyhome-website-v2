"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import DownloadButton from "../button/DowloadButton";
import { useViewport } from "@/contexts/ViewportContext";
import Link from "next/link";




export function Header() {
    const { width } = useViewport();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // const [fullUrl, setFullUrl] = useState<string>("");

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         setFullUrl(window.location.href);
    //     }
    // }, []);

    // console.log("Full URL:", fullUrl);

    return (
        <>
            <header className={`shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white`}>

                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center transition-all duration-300 ${scrollY > 200 ? 'h-16' : 'h-20'}`}>
                    {/* Desktop Layout */}
                    {width > 1057 && (
                        <div className="hidden md:flex items-center justify-between w-full">
                            {/* Logo */}
                            <Link href="/" className="flex-shrink-0 cursor-pointer">
                                <Image
                                    src={"/logo-company.svg"}
                                    alt="Logo"
                                    width={scrollY > 200 ? 100 : 125}
                                    height={scrollY > 200 ? 34 : 43}
                                    className="transition-all duration-300 pointer-events-auto"
                                />
                            </Link>

                            {/* Navigation Menu */}
                            <nav className="flex space-x-4 font-bold">
                                <Link href="/about" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900 rounded-sm">
                                    Công ty
                                </Link>
                                <Link href="/customerservice" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900 rounded-sm">
                                    Khách hàng cá nhân
                                </Link>
                                <Link href="#" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900 rounded-sm">
                                    Khách hàng doanh nghiệp
                                </Link>
                                <Link href="#" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900 rounded-sm">
                                    Tin tức
                                </Link>
                                <Link href="#" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900 rounded-sm">
                                    Hỗ trợ
                                </Link>
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
                                                <Link href="/about" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900">
                                                    Công ty
                                                </Link>
                                                <Link href="/customerservice" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900">
                                                    Khách hàng cá nhân
                                                </Link>
                                                <Link href="#" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900">
                                                    Khách hàng doanh nghiệp
                                                </Link>
                                                <Link href="#" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900">
                                                    Tin tức
                                                </Link>
                                                <Link href="#" className="block px-4 py-2 text-gray-700 text-sm font-bold transition-colors hover:bg-yellow-100 hover:text-sky-900">
                                                    Hỗ trợ
                                                </Link>


                                                {/* Divider */}
                                                <div className="border-t border-gray-200 my-2"></div>

                                                {/* Download Button */}
                                                <div className="px-4 py-2">
                                                    <DownloadButton text="Tải ngay" href="/" />
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
                                    <Link href="/" className="flex-shrink-0 cursor-pointer">
                                        <Image
                                            src={"/logo-company.svg"}
                                            alt="Logo"
                                            width={scrollY > 200 ? 100 : 125}
                                            height={scrollY > 200 ? 24 : 30}
                                            className="transition-all duration-300"
                                        />
                                    </Link>
                                </div>
                                {/* Empty space to balance the layout */}
                                <div className="w-10"></div>
                            </div>
                        </div>)}
                </div>
            </header>
            {scrollY > 200 && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full shadow-lg p-3 transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </>
    );
} 
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen w-screen flex items-center">
            <div className="fixed inset-0 w-full h-full bg-[url('/banner-home.png')] bg-cover bg-center opacity-50 -z-1"></div>
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <div className="text-5xl font-dark font-bold">404</div>
                    <p
                        className="text-2xl md:text-3xl font-light leading-normal"
                    >Sorry we couldn&apos;t find this page. </p>
                    <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                    <Link
                        href="/"
                        className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700 cursor-pointer z-11"
                    >
                        Back to homepage
                    </Link>
                </div>
                <div className="max-w-lg">
                </div>
            </div>
        </div>
    );
}

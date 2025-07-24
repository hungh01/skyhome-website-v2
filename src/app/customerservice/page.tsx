import Image from "next/image";

export default function CustomerServicePage() {
    return (
        <main className="min-h-screen pt-20 ">
            <section className={`w-full h-screen relative overflow-hidden`}>

                <Image
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/test.png"
                    alt="Background Image"
                    fill
                    priority
                />
                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 pt-6 lg:py-0">
                        {/* Left Content */}

                    </div>
                </div>
            </section>


        </main>
    );
}
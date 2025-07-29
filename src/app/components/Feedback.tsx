import Image from "next/image";

export default function Feedback() {
    return (

        <section className="snap-start h-screen items-center flex justify-center ">
            <div className="absolute inset-0 w-full h-full bg-[url('/introduce/trongdong.png')] bg-cover bg-center opacity-10 rounded-xl -z-1"></div>
            <div className=" text-black h-screen py-20 w-[80%]">
                <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
                    <div className="flex flex-col w-full lg:w-1/3 p-8">
                        <Image src="/about/whychoose/cat.png"
                            alt="Feedback"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="flex flex-col w-full lg:w-2/3 justify-center">
                        <div className="container w-full px-4">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div
                                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                                        <div className="flex-auto p-5 lg:p-10">
                                            <h4 className="text-2xl mb-4 text-black font-semibold">Góp ý của bạn là vinh hạnh của chúng tôi!!!</h4>
                                            <form id="feedbackForm" action="" method="">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="email">Email</label>
                                                    <input type="email" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                                        style={{ transition: "all 0.15s ease 0s" }} required />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="message">Message</label><textarea maxLength={300} name="feedback" id="feedback" rows={4}
                                                            cols={80}
                                                            className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                                            placeholder="" required></textarea>
                                                </div>
                                                <div className="text-center mt-6">
                                                    <button id="feedbackBtn"
                                                        className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                        type="submit" style={{ transition: "all 0.15s ease 0s" }}>Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
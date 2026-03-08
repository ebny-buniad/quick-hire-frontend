import Image from "next/image";

import dashboardImg from '../../../assets/dashboard.png'

export default function CTASections() {
    return (
        <section className="container [clip-path:polygon(150px_0,100%_0,100%_calc(100%-150px),calc(100%-150px)_100%,0_100%,0_150px)]
         mx-auto relative pt-15  bg-indigo-600 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 grid md:grid-cols-2 items-center gap-10 relative">
                <div className="z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                        Start posting <br /> jobs today
                    </h1>
                    <p className="text-base sm:text-lg mb-8 opacity-90">
                        Start posting jobs for only $10.
                    </p>
                    <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
                        Sign Up For Free
                    </button>
                </div>

                <div className="relative md:absolute md:bottom-0 md:right-0 w-full md:w-[600px] h-auto flex justify-end">
                    <Image
                        src={dashboardImg}
                        alt="dashboard"
                        width={700}
                        height={300}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
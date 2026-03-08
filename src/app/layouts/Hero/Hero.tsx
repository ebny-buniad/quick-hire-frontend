import Image from "next/image";
import hero from '../../../assets/hero.png'
import triangle from '../../../assets/triangle.png'
import pencil from '../../../assets/pencil-art.png'

export default function HeroSection() {
    return (
        <section>

            {/* Hero */}
            <div className="container mx-auto grid lg:grid-cols-2 items-center gap-10 px-4 pt-20">

                {/* Left Content */}
                <div className="">
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-800">
                        Discover <br />
                        more than{" "} <br />
                        <span className="text-sky-500">5000+ Jobs</span>
                    </h1>
                    <Image
                        src={pencil}
                        width={400}
                        height={40}
                        alt="Hero Image"
                    />


                    <p className="text-gray-500 mt-6 max-w-lg">
                        Great platform for the job seeker that searching for new
                        career heights and passionate about startups.
                    </p>

                    {/* Search Box */}
                    <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center mt-8 p-2 gap-2">

                        <input
                            type="text"
                            placeholder="Job title or keyword"
                            className="flex-1 px-4 py-3 outline-none"
                        />

                        <select className="px-4 py-3 outline-none text-gray-600">
                            <option>Florence, Italy</option>
                            <option>London</option>
                            <option>New York</option>
                        </select>

                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md">
                            Search my job
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="hidden lg:block">
                    <div className="flex justify-end">
                        <div className="relative">
                            <Image
                                src={hero}
                                width={500}
                                height={500}
                                alt="Hero Image"
                            />
                            <Image
                                src={triangle}
                                width={300}
                                height={100}
                                alt="Triangle"
                                className="absolute bottom-0 right-0"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
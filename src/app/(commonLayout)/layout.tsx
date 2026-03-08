import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import { getUser } from '../service/user/get.user';
import HeroSection from '../layouts/Hero/Hero';
import Footer from '../components/Footer/Footer';

export default async function commonLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {

    const user = await getUser();
    return (
        <>
            <div className="bg-[url('../assets/hero-bg.png')] bg-no-repeat bg-bottom-left md:bg-top-right bg-contain">
                <Navbar user={user}></Navbar>
                <HeroSection></HeroSection>
            </div>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

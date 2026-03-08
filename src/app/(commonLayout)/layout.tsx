import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import { getUser } from '../service/user/get.user';
import Footer from '../components/Footer/Footer';
import HeroPage from '../layouts/Hero/HeroPage';

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
                <HeroPage></HeroPage>
            </div>
            <main className='min-h-[calc(100vh-474px)] mb-20'>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import { getUser } from '../service/user/get.user';

export default async function commonLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {

    const user = await getUser();
    return (
        <div>
            <Navbar user={user}></Navbar>
            {children}
            
            </div>
    )
}

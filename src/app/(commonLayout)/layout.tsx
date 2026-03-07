import React from 'react'
import Navbar from '../components/Navbar/Navbar';

export default function commonLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            
            </div>
    )
}

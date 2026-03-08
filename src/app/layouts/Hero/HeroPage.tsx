"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import HeroSection from './Hero';

export default function HeroPage() {
    const pathName = usePathname();
  return (
    <div>
        {pathName === '/' && <HeroSection></HeroSection>}
    </div>
  )
}

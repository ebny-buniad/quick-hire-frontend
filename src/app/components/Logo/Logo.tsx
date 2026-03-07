import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <div>
           <Link href={`/`} className=' flex items-center gap-2'>
            <Image
                src="https://www.logoai.com/uploads/icon/2021/08/06/1a1d3293-3959-44ae-b73a-0732225ccbb2.png"
                width={40}
                height={0}
                alt="Logo"
            />

            <h3 className='font-bold text-2xl'>QuickHire</h3>
           </Link>
        </div>
    )
}

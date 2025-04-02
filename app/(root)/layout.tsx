import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className='flex gap-2 items-center'>
                    <Image src="/logo.svg" alt="logo" width={32} height={38} />
                    <h2 className="text-primary-100">Prepwise</h2>
                </Link>
            </nav>
            {children}
        </div>
    )
}

export default RootLayout

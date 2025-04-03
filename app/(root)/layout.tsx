import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) redirect('/sign-in')
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

import { cn, getTechLogos } from '@/lib/utils'
import Image from 'next/image';
import React from 'react'

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
    const techIcons = await getTechLogos(techStack);
    return (
        <div className="flex flex-row">{techIcons.slice(0, 3).map(({ tech, url }, index) => (
            <div key={tech} className={cn("relative group bg-dark-300 rounded-full p-2 flex-center", index === 0 ? "ml-[-10px]" : index === 1 ? "mx-[-10px]" : "mr-[-10px]")}>
                <span className="tech-tooltip">{tech}</span>
                <Image src={url} alt={tech} width={100} height={100} className="size-5" />
            </div>
        ))}</div>
    )
}

export default DisplayTechIcons

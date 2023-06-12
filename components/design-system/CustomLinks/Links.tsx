import Link from 'next/link';
import React from 'react'
import './links.css';

export const ArrowLinks: React.FC<{href:string, className?:string, children?: any}> = ({  href, className, children }) => {
  return (
    <Link href={href} 
      className={`arrow-link flex items-center font-['Space_Grotesk'] ${className ? className :'font-[400] text-[20px] leading-[100%] text-[#D5D5D5]'}`}>
        { children }
        <span className="block arrow ml-2">
            <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#D4D4D4"/>
            </svg>
        </span>
    </Link>
  )
}
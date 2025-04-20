'use client'

import Image from 'next/image'
import ThemeToggler from './ThemeToggler';

const Header = () => {
    return (
        <div className="flex justify-center relative">
            {/* Gradiente e Blur no fundo, com efeito de triângulo */}
            <div className="absolute inset-0 h-96 bg-gradient-to-b from-blue-700 via-transparent to-transparent blur-[120px] z-[-1]" />
            
            <div className='flex p-4 pt-14 sm:pt-16 items-center text-center'>
                <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    priority 
                    alt="Logo"
                />
                <h5 className='pl-4 sm:text-2xl leading-[50px] text-2xl font-semibold'>
                    FALA DEV
                </h5>
            </div>

            <div>
                <ThemeToggler/>
            </div>
        </div>
    );
};

export default Header;

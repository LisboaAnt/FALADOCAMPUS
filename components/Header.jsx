'use client'

import Image from 'next/image'
import ThemeToggler from './ThemeToggler';

const Header = () => {
    return (
        <div className="flex justify-center">
            <div className='flex p-4 pt-6 itens-center text-center'>
                <Image
                    src="/logo.svg"
                    width={25}
                    height={25}
                    priority alt=""
                />
                <h5 className='ml-2 leading-[50px]'>FALA DO CAMPUS</h5>
            </div>

            <div>
                <ThemeToggler/>
            </div>
        </div>
    );
};


export default Header;
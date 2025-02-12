'use client';

//Tema claro ou escuro

import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { useTheme } from "next-themes";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className="fixed right-0">
            <Button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className=" sm:w-[100px] m-5"
            >
                <SunIcon className="absolute h-[1.2rem]  w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </div>
    )
}

export default ThemeToggler
import Link from 'next/link';
import './Footer.css'
import React, { useState } from 'react';

const Footer = () => {
    const text = "Desenvolvido_por_@AntonioLisboa";
    const [animatedLetters, setAnimatedLetters] = useState([]);

    const handleMouseEnter = (index) => {
        // Adiciona o índice da letra ao estado para iniciar a animação
        setAnimatedLetters((prev) => [...prev, index]);

        // Remove o índice após a animação terminar (0.5s = duração da animação)
        setTimeout(() => {
            setAnimatedLetters((prev) => prev.filter((i) => i !== index));
        }, 500); // 500ms = tempo da animação
    };

    return (
        <Link href="https://www.antoniolisboa.site" className="flex justify-center text-black dark:text-white py-6" target="_blank" rel="noopener noreferrer" >
            <div className="flex flex-col items-baseline text-center px-4">
                <h5 className="text-base font-medium">
                    {text.split('').map((char, index) => (
                        <span
                            key={index}
                            className={`hover-letter ${
                                animatedLetters.includes(index) ? 'animate-lift' : ''
                            }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            {char}
                        </span>
                    ))}
                </h5>
            </div>
        </Link>
    );
};

export default Footer;
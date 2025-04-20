import Link from 'next/link';
import './Footer.css'
import React, { useState } from 'react';

const Footer = () => {
    const text = "@AntonioLisboa";
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
        <div className="pt-8 pb-6">
        <div className="flex flex-col items-center text-center px-4 space-y-1 text-gray-600">
            <p className="text-lg font-semibold">Centro Acadêmico Ada Lovelace</p>
            <p className="text-sm">Curso de Ciência da Computação – UFC Campus Russas</p>
            <p className="text-sm">© 2025 Todos os direitos reservados</p>
            <p className="text-sm">
            Contato: <a href="mailto:um.caal2.0@gmail.com" className="text-blue-600 hover:underline">um.caal2.0@gmail.com</a> | 
            Instagram: <a href="https://www.instagram.com/caalufc" target="_blank" className="text-blue-600 hover:underline">@caalufc</a>
            </p>
        </div>
    
        <div className="flex flex-col items-center text-center px-4 mt-4">
            <h5 className="text-sm font-medium text-gray-600">
            {text.split('').map((char, index) => (
                <a
                href="https://www.antoniolisboa.site"
                key={index}
                className={`hover-letter ${
                    animatedLetters.includes(index) ? 'animate-lift' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                target="_blank"
                rel="noopener noreferrer"
                >
                {char}
                </a>

            ))}
            </h5>
        </div>
        </div>
    );
    
};

export default Footer;
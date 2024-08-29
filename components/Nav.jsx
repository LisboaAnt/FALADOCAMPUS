import Link from 'next/link';
import React from 'react';

const links = [
    { path: '/', name: 'home'},
    { path: '/about', name: 'about'},
    { path: '/portfolio', name: 'portfolio'},
    { path: '/pricing', name: 'pricing'},
    { path: '/contact', name: 'contact'},
]

//Next Hooks
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Nav = ({  containerStyles, linkStyles, underlineStyles  }) => {

    const path = usePathname();

  return (
    <div className={`${containerStyles}`}>
      {
        links.map((link, index) => {
            return(
                <Link
                href={link.path}
                key={index}
                className={`capitalize ${linkStyles}`}
                >
                    {link.path === path && (
                        <motion.span
                        initial={{ y: '-100%'}}
                        animate={{ y: 0 }}
                        trabsition={{ type: 'tween' }}
                        layoutId='underline'
                        className={`${underlineStyles}`}
                        />
                    )}
                    {link.name}
                </Link>
            )
        })
      }
    </div>
  )
}

export default Nav

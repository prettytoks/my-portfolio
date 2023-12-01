'use client'

import React, { ReactNode } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'

import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";


const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: ReactNode }) => {

  return (
    <>
 
      <html lang="en">
        <head>
          <title>Cindy Ogidi Portfolio</title>
          <meta
          name="description"
          content={'My portfolio is an online database of information related to my projects. Users can search for projects and learn about my work, as well as the my skills. It also provides information on how to contact me.'}
        />
        </head>

        <body className={inter.className} >

          <ThemeProvider defaultTheme="light" attribute="class">

            <Navbar />
   
            {children}

            <Footer />

          </ThemeProvider>
      
        </body>
      
      </html>

    </>
  
  );
};

export default RootLayout;
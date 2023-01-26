/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import { VscArrowUp } from "react-icons/vsc"



 
export default function Home() {

  
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 '>
      <Head>
        <title>George's Portfolio</title>
      </Head>

    <Header />
    {/* Hero */}
    <section id='hero' className='snap-start'>
      <Hero />
    </section>
    {/* About */}
    <section id='about' className='snap-start'>
      <About />
    </section>

    {/* experience */}
    <section id='experience' className='snap-center'>
      <WorkExperience />       
    </section>
    {/* skills */}
    <section id='skills' className='snap-start'>
      <Skills />
    </section>

    {/* projects */}
    <section id='projects' className='snap-start'>
      <Projects />
    </section>

    {/* contact me */}
    <section id='contact' className='snap-start'>
      <Contact />
    </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-end py-2 px-7'>
            <VscArrowUp
            className='h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

// eslint-disable-next-line @next/next/no-typos


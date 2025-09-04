import {useState} from 'react'

import profile from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6'>
                <img src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Vimal Jaiswal</h1>
                    <p class="text-xl font-bold text-gray-300">Software Development Engineer</p>
                    <p className="text-md font-light text-gray-400 ">Innovative and results-driven Software Engineer with around 4 years of experience spanning full-stack web application development, API design, system integration, and cloud infrastructure. Adept at building scalable, high-performance solutions and crafting seamless user experiences.</p>
                </div>
                <ul className='flex mt-2 gap-12 items-center'>
                   <li>
                        <a href='https://github.com/vimaljais' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://www.linkedin.com/in/vimaljais' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}

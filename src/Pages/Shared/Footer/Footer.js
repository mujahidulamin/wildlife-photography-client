import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-primary-content">
            <div>
                <img className='w-36' src= {logo} alt="" />
                <p className="font-bold">
                   Wildlife Photographer
                </p>
                <p className='font-bold'>Copyright © 2022 - All right reserved</p>
                <p>Developed By <a href="https://mujahidulamin.netlify.app/" target= "blank"><u>Mujahidul Amin</u></a></p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/mujahidul.amin/" target= "blank"><FaFacebook className='text-2xl'></FaFacebook></a>
                    <a href="https://www.linkedin.com/in/mujahidul-amin/" className='text-2xl' target= "blank"><FaLinkedin></FaLinkedin></a>
                    <a href="https://github.com/mujahidulamin" className='text-2xl' target= "blank"><FaGithub></FaGithub></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
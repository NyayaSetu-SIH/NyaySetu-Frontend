// Footer.js

import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-2 pb-2">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-sm">Developed by Team NyaySetu❤️</p>
        <div className="flex mt-2">
          <a
            href="mailto:mayankjohari877@gmail.com"
            className="flex items-center text-sm mr-4"
          >
            <FaEnvelope className="mr-2" />
            Connect via Email
          </a>
          <a
            href="https://github.com/mayankmj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm mr-4"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mayank-johari-52aa05202/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

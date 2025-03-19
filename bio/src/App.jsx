import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  const [active, setActive] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="p-6 flex justify-between items-center bg-gray-800 shadow-md">
        <h1 className="text-4xl font-bold tracking-wide">Zayed Ansari</h1>
        <nav className="space-x-8">
          {['home', 'projects', 'certifications', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`capitalize text-lg transition-colors duration-300 ${active === item ? 'text-blue-400' : 'hover:text-blue-300'}`}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-8">
        {active === 'home' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-5xl font-bold mb-6">Software Development Engineer</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">Building efficient and scalable software solutions using modern web technologies.</p>
            <div className="mt-8 space-x-6">
              <a href="https://github.com/Zayed022" target="_blank" rel="noopener noreferrer">
                <FaGithub className="inline text-4xl hover:text-blue-400" />
              </a>
              <a href="https://linkedin.com/in/zayed-s-ansari-02z" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="inline text-4xl hover:text-blue-400" />
              </a>
              <a href="mailto:zayedans022@gmail.com">
                <FaEnvelope className="inline text-4xl hover:text-blue-400" />
              </a>
            </div>
          </motion.section>
        )}

        {active === 'projects' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-4xl font-semibold mb-8">Projects</h2>
            <p className="text-lg mb-4">• MakeupCraft - Book makeup artists and enroll in courses.</p>
            <p className="text-lg mb-4">• AI Integrated Diet Plan Generator - AI-based personalized diet plans.</p>
            <p className="text-lg mb-4">• AI Powered Study Planner - Smart study schedule generator.</p>
          </motion.section>
        )}

        {active === 'certifications' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-4xl font-semibold mb-8">Certifications</h2>
            <p className="text-lg mb-4">• AWS Certified Cloud Practitioner</p>
            <p className="text-lg mb-4">• Full-Stack Web Development (MERN Stack)</p>
            <p className="text-lg mb-4">• Data Structures and Algorithms in C++</p>
          </motion.section>
        )}

        {active === 'about' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-4xl font-semibold mb-8">About Me</h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed">I am a Software Development Engineer with expertise in the MERN stack, AI-driven solutions, and scalable architectures. I focus on building robust applications to solve real-world problems efficiently.</p>
          </motion.section>
        )}

        {active === 'contact' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>
            <p className="text-lg">Email: <a href="mailto:zayedans022@gmail.com" className="text-blue-400 hover:underline">zayedans022@gmail.com</a></p>
            <p className="text-lg">Phone: +91 7498881947</p>
          </motion.section>
        )}
      </main>

      <footer className="p-6 text-center bg-gray-800 mt-16">
        <p>&copy; {new Date().getFullYear()} Zayed Ansari. All rights reserved.</p>
      </footer>
    </div>
  );
}
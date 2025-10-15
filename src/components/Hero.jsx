import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="min-h-screen flex items-center justify-center relative pt-16">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/10"></div>
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Alif Fadhil Muhamad</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
                >
                    A passionate Frontend Developer specializing in building modern web applications with React and Tailwind CSS.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center space-x-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('projects')}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium"
                    >
                        View My Work
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('contact')}
                        className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                        Contact Me
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        onClick={() => scrollToSection('profile')}
                        className="p-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
                        aria-label="Scroll down"
                    >
                        <ArrowDownIcon className="h-6 w-6 text-gray-400" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
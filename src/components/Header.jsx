import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const Header = ({ darkMode, setDarkMode }) => {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                    >
                        Portfolio
                    </motion.div>

                    <nav className="hidden md:flex space-x-8">
                        {['profile', 'projects', 'certifications', 'contact'].map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item)}
                                className="capitalize text-gray-300 hover:text-white transition-colors"
                            >
                                {item}
                            </motion.button>
                        ))}
                    </nav>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <SunIcon className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <MoonIcon className="h-5 w-5 text-gray-300" />
                        )}
                    </motion.button>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
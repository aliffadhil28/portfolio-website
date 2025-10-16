import { motion } from 'framer-motion'
import { CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon } from '@heroicons/react/24/outline'

const Profile = () => {
    const skills = [
        {
            icon: <CodeBracketIcon className="h-8 w-8" />,
            title: "Web Development",
            description: "Building responsive and modern web applications using React, Blade, Livewire, and other modern frameworks."
        },
        {
            icon: <PaintBrushIcon className="h-8 w-8" />,
            title: "Responsive Design",
            description: "Creating websites that work perfectly on all devices from desktop to mobile."
        },
        {
            icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
            title: "Mobile App Development",
            description: "Developing cross-platform mobile applications using React Native and Flutter."
        }
    ]

    return (
        <section id="profile" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                >
                    Junior Fullstack Developer Profile
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
                >
                    I am a junior fullstack developer with hands-on experience in building web and mobile applications using modern frameworks and tools.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
                        >
                            <div className="text-blue-400 mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                            <p className="text-gray-400">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 bg-gray-800 rounded-2xl p-8 border border-gray-700"
                >
                    <h3 className="text-2xl font-semibold mb-6">About Me</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-300 mb-4">
                                I'm a junior fullstack developer passionate about learning and building user-friendly applications.
                                My journey in web development started recently, and I am eager to grow my skills and contribute to exciting projects.
                            </p>
                            <p className="text-gray-300">
                                Outside of coding, I enjoy exploring new technologies, collaborating with other developers, and improving my craft through practice and study.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-blue-400">1+</div>
                                <div className="text-gray-400">Years Experience</div>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-blue-400">5+</div>
                                <div className="text-gray-400">Projects Completed</div>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-blue-400">5+</div>
                                <div className="text-gray-400">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Profile
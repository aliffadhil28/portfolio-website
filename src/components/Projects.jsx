import { motion } from 'framer-motion'
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const Projects = () => {
    const projects = [
        {
            title: "Laravel Boilerplate",
            description: "A comprehensive boilerplate for Laravel applications with authentication, user roles, and permissions.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            tags: ["React", "Laravel", "MySQL", "Reverb"],
            liveUrl: "#",
            codeUrl: "#"
        },
        {
            title: "Online Classroom",
            description: "A virtual classroom application with real-time video conferencing, chat, and collaborative tools.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1139&q=80",
            tags: ["React", "Laravel", "Filament", "MySQL"],
            liveUrl: "#",
            codeUrl: "#"
        }
    ]

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                >
                    My Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
                >
                    Here are some of my recent projects. Each project represents my skills and passion for web development.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.liveUrl}
                                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <EyeIcon className="h-5 w-5 mr-2" />
                                        Live Demo
                                    </motion.a>

                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.codeUrl}
                                        className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CodeBracketIcon className="h-5 w-5 mr-2" />
                                        View Code
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
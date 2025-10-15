import { motion } from 'framer-motion'
import { DocumentTextIcon, CalendarIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const Certifications = () => {
    const certifications = [
        {
            title: "Problem Solving Basic",
            issuer: "HackerRank",
            date: "February 2024",
            credential: "Credential ID: 00674ea8de65",
            icon: <AcademicCapIcon className="h-8 w-8" />
        },
        {
            title: "Junior Web Developer",
            issuer: "BNSP",
            date: "July 2023",
            credential: "Credential ID: 1565 19776 2023ID",
            icon: <DocumentTextIcon className="h-8 w-8" />
        },
        {
            title: "Programming With Kotlin",
            issuer: "Dicoding",
            date: "August 2022",
            credential: "Credential ID: 1RXYM3E81XVM",
            icon: <AcademicCapIcon className="h-8 w-8" />
        },
        {
            title: "Learning Android Development for Beginners",
            issuer: "Dicoding",
            date: "March 2022",
            credential: "Credential ID: L4PQ3DJLOPO1",
            icon: <DocumentTextIcon className="h-8 w-8" />
        }
    ]

    return (
        <section id="certifications" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                >
                    Certifications
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
                >
                    I believe in continuous learning and keeping my skills up to date. Here are some of my certifications.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors"
                        >
                            <div className="flex items-start">
                                <div className="text-purple-400 mr-4 mt-1">
                                    {cert.icon}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                                    <div className="text-gray-300 mb-1">{cert.issuer}</div>

                                    <div className="flex items-center text-gray-400 text-sm mb-2">
                                        <CalendarIcon className="h-4 w-4 mr-1" />
                                        {cert.date}
                                    </div>

                                    <div className="text-gray-400 text-sm">{cert.credential}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
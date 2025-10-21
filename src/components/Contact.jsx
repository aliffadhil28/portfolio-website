import { motion } from 'framer-motion'
import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'


const Contact = () => {
    const socials = [
        {
            'name': 'GitHub',
            'link': 'https://github.com/aliffadhil28'
        },
        {
            'name': 'Instagram',
            'link': 'https://instagram.com/alif.fadhil08'
        },
        {
            'name': 'LinkedIn',
            'link': 'https://linkedin.com/in/aliffadhil28'
        },
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_ACCESS_KEY_WEB3,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    redirect: "https://web3forms.com/success", // opsional
                }),
            });

            const result = await response.json();
            if (result.success) {
                alert("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("❌ Failed to send message. Please try again.");
                console.error(result);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("⚠️ Something went wrong. Please try again later.");
        }
    };


    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
                >
                    Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="text-blue-400 mr-4 mt-1">
                                    <EnvelopeIcon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium mb-1">Email</h4>
                                    <p className="text-gray-400">alif70662@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-blue-400 mr-4 mt-1">
                                    <PhoneIcon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                                    <p className="text-gray-400">+62 812-4008-1512</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-blue-400 mr-4 mt-1">
                                    <MapPinIcon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium mb-1">Location</h4>
                                    <p className="text-gray-400">Tangerang Regency, Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socials.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                                    >
                                        {social.name}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium flex items-center justify-center"
                            >
                                Send Message
                                <PaperAirplaneIcon className="h-5 w-5 ml-2" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
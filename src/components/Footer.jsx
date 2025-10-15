const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Alif Fadhil Muhamad. All rights reserved.
                    </div>

                    <div className="flex space-x-6">
                        {['Terms', 'Privacy', 'Cookies'].map((item, index) => (
                            <a key={index} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto'>
        <div className="flex flex-col md:flex-row justify-between items-center 
        border-t-1 py-4">
            <div className="flex space-x-6 mb-2">
                <a href="https://www.facebook.com" target='_blank'
                rel='nopener noreferrer' aria-label='Visit Facebook'>
                    <FaFacebook/>
                </a>
                <a href="https://www.instagram.com" target='_blank'
                rel='nopener noreferrer' aria-label='Visit instagram'>
                    <FaInstagram/>
                </a>
                <a href="https://www.twitter.com" target='_blank'
                rel='nopener noreferrer' aria-label='Visit Facebook'>
                    <FaXTwitter/>
                </a>
            </div>
            <p className="text-sm">&copy; 2025 VastuSpace Company Inc.</p>
        </div>
    </footer>
  )
}

export default Footer
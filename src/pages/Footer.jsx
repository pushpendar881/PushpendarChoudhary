import { Github, Linkedin, Twitter, Instagram, Gamepad } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-4 text-center bg-slate-950">
      <div className="flex justify-center space-x-4">
        {/* GitHub Icon */}
        <a href="https://github.com/pushpendar881" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-6 h-6 text-white hover:text-gray-400" />
        </a>
        
        {/* LinkedIn Icon */}
        <a href="https://linkedin.com/in/pushpendar-choudhary-55b86b288" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6 text-white hover:text-blue-500" />
        </a>
        
        {/* LeetCode Icon */}
        <a href="https://leetcode.com/pushpendarchoudhary" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
          <Gamepad className="w-6 h-6 text-white hover:text-green-500" />
        </a>

        {/* Instagram Icon */}
        <a href="https://instagram.com/pushpendar_881" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="w-6 h-6 text-white hover:text-pink-500" />
        </a>
      </div>
      <p className="mt-2 text-white">
        © {new Date().getFullYear()} Pushpendar Choudhary. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer


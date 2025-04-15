'use client'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-12 shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <p className="text-2xl font-bold tracking-tight text-secondary">
          Rohit Pottavathini
        </p>

        <p className="text-sm sm:text-base text-gray-400">
          📞 +91 9372766055 &nbsp;|&nbsp; 📧 rowork30@gmail.com
        </p>

        <div className="w-full h-px bg-white/10 my-2 sm:my-4" />

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} <span className="font-medium text-white">Roonity</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

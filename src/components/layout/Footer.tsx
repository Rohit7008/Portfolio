'use client'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 shadow-inner">
      <div className="container mx-auto px-4 text-center flex flex-col items-center space-y-4">
        <p className="text-xl font-bold">Rohit Pottavathini</p>
        <p className="text-sm text-gray-400">
          +91 9372766055 | rowork30@gmail.com
        </p>
        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} <span className="font-medium">Roonity</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

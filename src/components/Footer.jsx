import React from 'react';

const Footer = () => {
    return (
       <div className='w-full max-w-11/12 mx-auto'>
        {/*  */}
             <footer className="  px-6 md:px-16 py-16 mt-20 ">
      <div>
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-forground">
             Idea <span className='text-green-500'>Vault</span> 
          </h1>
          <p className="mt-4 max-w-xl">
            Your gateway to extraordinary ennovation around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {/* Newsletter */}
          <div >
            <h3 className=" mb-3 tracking-wide text-forgroud">NEWSLETTER</h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive  deals and inspiration.
            </p>

            <div className="flex items-center  px-4 py-3">
              <input
                type="email"
                placeholder="Enter email"
                className=" outline-none flex-1 text-sm"
              />
              <span className=" text-lg">↗</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" mb-3 tracking-wide text-forgroud">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="hover: cursor-pointer">Home</li>
              <li className="hover:cursor-pointer">Ideas</li>
              <li className="hover: cursor-pointer">My Idea</li>
              <li className="hover: cursor-pointer">My Profile</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className=" mb-3 tracking-wide text-forgroud">SUPPORT</h3>
            <ul className="space-y-2">
              <li className="hover:cursor-pointer">Help Center</li>
              <li className="hover: cursor-pointer">
                Terms of Service
              </li>
              <li className="hover: cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className=" mb-3 tracking-wide text-forgroud">CONTACT US</h3>
            <ul className="space-y-2">
              <li>786 901 1622</li>
              <li>info@Idea_vault.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2026 Idea_vault. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-green-500 text-lg">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      </div>
    </footer>
        </div>)
};

export default Footer;




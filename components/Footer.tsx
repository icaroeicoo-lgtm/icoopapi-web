
import React from 'react';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1 mb-8 lg:mb-0">
            <a href="/" className="font-brand-mono text-3xl font-black tracking-tighter">
              icoopapi
            </a>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white hover:underline">Men's</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Women's</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Kids'</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Footwear</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-sm">Help</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white hover:underline">Live Chat</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Order Status</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Returns</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-sm">About</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Careers</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Press</a></li>
            </ul>
          </div>
          
          <div className="space-y-4 col-span-2 md:col-span-1">
             <h4 className="font-bold uppercase tracking-wider text-sm">Follow Us</h4>
             <div className="flex space-x-4">
                {/* Social icons */}
                <a href="https://www.facebook.com/share/1SMnogffkR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg className="h-6 w-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg></a>
                <a href="https://www.facebook.com/share/1SMnogffkR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg className="h-6 w-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.441-.645 1.441-1.44s-.646-1.44-1.441-1.44z"/></svg></a>
                <a href="https://www.tiktok.com/@icaro.006?_r=1&_t=ZS-939Q2UtNW4O" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg className="h-6 w-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.59v3.01c-1.56.04-3.1-.43-4.3-1.59-1.24-1.2-1.87-2.82-1.88-4.41a.23.23 0 0 1 .02-.19c-1.31.02-2.61.01-3.91.02v10.59a3.8 3.8 0 0 1-3.74 3.73 3.8 3.8 0 0 1-3.8-3.73 3.8 3.8 0 0 1 3.8-3.74c.43 0 .86.07 1.28.21v-3.01c-.4-.13-.8-.2-1.28-.2-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 2.1 0 3.8-1.7 3.8-3.8v-10.59c-.01 0-.01.01 0 0z"/></svg></a>
             </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} icoopapi Corporation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

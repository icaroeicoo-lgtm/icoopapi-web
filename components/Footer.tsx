
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
                {/* Placeholder social icons */}
                <a href="#" aria-label="Facebook"><svg className="h-6 w-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg></a>
                <a href="#" aria-label="Instagram"><svg className="h-6 w-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.441-.645 1.441-1.44s-.646-1.44-1.441-1.44z"/></svg></a>
                <a href="#" aria-label="Twitter"><svg className="h-6 w-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.22 3.804 4.661-.622.17-1.282.216-1.946.216-.305 0-.6-.028-.891-.083.609 1.884 2.373 3.268 4.465 3.306-1.796 1.407-4.066 2.245-6.53 2.245-.425 0-.845-.025-1.258-.074 2.321 1.494 5.076 2.368 8.04 2.368 9.633 0 14.904-7.98 14.904-14.904 0-.227-.005-.453-.014-.678.98-.713 1.83-1.606 2.514-2.6z"/></svg></a>
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

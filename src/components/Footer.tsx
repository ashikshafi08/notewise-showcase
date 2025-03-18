"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold tracking-tighter relative">
                <span className="font-light">Note</span>
                <span className="font-bold text-primary">Wise</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A beautiful note-taking desktop application enhanced with powerful AI capabilities.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Features</Link></li>
              <li><Link href="#ai-features" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">AI Features</Link></li>
              <li><Link href="#showcase" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Showcase</Link></li>
              <li><Link href="#download" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Download</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Documentation</a></li>
              <li><Link href="/learn-more" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Development Progress</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Releases</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Discord</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Email</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Feedback</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {new Date().getFullYear()} NoteWise. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

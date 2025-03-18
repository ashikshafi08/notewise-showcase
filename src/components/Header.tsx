"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';
import { ChangelogModal } from '@/components/ChangelogModal';

export function Header() {
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-background/80 border-b"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold tracking-tighter relative">
              <span className="font-light">Note</span>
              <span className="font-bold text-primary">Wise</span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.div>
          
          <motion.nav 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#ai-features" className="hover:text-primary transition-colors">AI Features</Link>
            <Link href="#showcase" className="hover:text-primary transition-colors">Showcase</Link>
            <Link href="#download" className="hover:text-primary transition-colors">Download</Link>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
              onClick={() => setIsChangelogOpen(true)}
            >
              <ClipboardList className="h-4 w-4" />
              <span>Changelog</span>
            </Button>
          </motion.nav>
          
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              variant="outline" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsChangelogOpen(true)}
            >
              <ClipboardList className="h-4 w-4" />
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
              Download Now
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Changelog Modal */}
      <ChangelogModal 
        isOpen={isChangelogOpen} 
        onClose={() => setIsChangelogOpen(false)} 
      />
    </>
  );
}

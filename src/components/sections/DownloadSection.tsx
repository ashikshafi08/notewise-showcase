"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Construction, Calendar, ArrowDown } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function DownloadSection() {
  return (
    <section id="download" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Download NoteWise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Experience the future of note-taking on your desktop.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <Card className="w-full max-w-3xl border-2 border-yellow-400 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 overflow-hidden">
            <CardContent className="p-6 flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Construction className="h-8 w-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg mb-1">Work in Progress</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  NoteWise is currently under active development by a solo developer who's working hard to bring you the best note-taking experience with powerful AI features. Stay tuned for the official release!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <Card className="w-full max-w-3xl border-2 border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 overflow-hidden">
            <CardContent className="p-6 flex items-center gap-4">
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg mb-1">Coming Soon: Journal Assistant</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm excited to announce that a Journal Assistant feature is in the works! This will help you maintain consistent journaling habits, provide prompts for reflection, and analyze your entries for patterns and insights.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-bold mb-6">Join the Early Access Program</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Want to be among the first to try NoteWise? Fill out the form and I'll personally send you access to the latest build as soon as it's ready for testing.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Windows</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Compatible with Windows 10 and above.</p>
                    <Button disabled className="mt-auto">Coming Soon</Button>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">macOS</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Compatible with macOS 11 (Big Sur) and above.</p>
                    <Button disabled className="mt-auto">Coming Soon</Button>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Linux</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Compatible with major Linux distributions.</p>
                    <Button disabled className="mt-auto">Coming Soon</Button>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="text-primary"
                >
                  <ArrowDown className="h-8 w-8" />
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={0.3}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

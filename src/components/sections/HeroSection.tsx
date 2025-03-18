"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

// Define static positions for particles to prevent hydration errors
const particlePositions = [
  { top: '10%', left: '20%' },
  { top: '15%', left: '80%' },
  { top: '25%', left: '40%' },
  { top: '30%', left: '70%' },
  { top: '40%', left: '10%' },
  { top: '45%', left: '60%' },
  { top: '55%', left: '30%' },
  { top: '60%', left: '90%' },
  { top: '70%', left: '50%' },
  { top: '75%', left: '20%' },
  { top: '80%', left: '70%' },
  { top: '85%', left: '40%' },
  { top: '90%', left: '10%' },
  { top: '95%', left: '60%' },
  { top: '5%', left: '50%' },
  { top: '35%', left: '85%' },
  { top: '50%', left: '15%' },
  { top: '65%', left: '35%' },
  { top: '20%', left: '95%' },
  { top: '88%', left: '75%' },
];

export function HeroSection() {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Floating particles with static positions */}
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              top: position.top,
              left: position.left,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 text-sm font-medium"
          >
            <Sparkles className="h-4 w-4" />
            <span>Revolutionizing Note-Taking</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            NoteWise
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              AI-Powered Note-Taking for the Modern Mind
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Capture your thoughts, organize your knowledge, and unlock insights with our intelligent note-taking application.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#download">
              <Button size="lg" className="gap-2 group">
                Get Early Access
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.div>
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg" className="gap-2">
                <Zap className="h-4 w-4" />
                Explore Features
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative rounded-xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5" />
            
            {/* Mockup header */}
            <div className="bg-gray-800 p-4 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-gray-400 mx-auto pr-6">NoteWise</div>
            </div>
            
            {/* App mockup content */}
            <div className="bg-gray-100 dark:bg-gray-900 aspect-video flex">
              {/* Sidebar */}
              <div className="w-1/4 bg-gray-200 dark:bg-gray-800 p-4">
                <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className={`h-6 rounded ${i === 2 ? 'bg-primary/30' : 'bg-gray-300 dark:bg-gray-700'}`} 
                    />
                  ))}
                </div>
              </div>
              
              {/* Main content */}
              <div className="w-3/4 p-6">
                <div className="flex justify-between mb-6">
                  <motion.div 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded"
                  />
                  <motion.div 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="h-8 w-20 bg-primary/50 rounded"
                  />
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 + (i * 0.1) }}
                      className="h-4 bg-gray-300 dark:bg-gray-700 rounded" 
                      style={{ width: `${85 - (i * 5)}%` }}
                    />
                  ))}
                </div>
                
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.6, type: "spring" }}
                  className="mt-8 p-4 border border-primary/30 rounded-lg bg-white/50 dark:bg-gray-800/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-4/6" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
            className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
            className="absolute -right-8 top-1/3 -translate-y-1/2 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

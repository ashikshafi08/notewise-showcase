"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '../animations/ScrollReveal';
import { 
  PenLine, 
  FolderKanban, 
  Search, 
  Sparkles, 
  Lightbulb, 
  Zap, 
  Clock, 
  Palette 
} from 'lucide-react';

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Core Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Powerful tools designed to enhance your note-taking experience
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ScrollReveal>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <PenLine className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Rich Text Editor</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Write with style using our powerful editor with markdown support, formatting options, and more.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FolderKanban className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Organization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  NoteWise combines powerful note-taking capabilities with an elegant, 
                  intuitive organization system that adapts to your workflow.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Powerful Search</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Find anything instantly with our lightning-fast search that understands context and content.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Beautiful Themes</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Customize your experience with light and dark modes, plus additional theme options.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Idea Generation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Never stare at a blank page again. Get smart suggestions to spark your creativity.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={0.5}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Keyboard Shortcuts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Work efficiently with customizable keyboard shortcuts for all common actions.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Designed for Focus</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Every aspect of NoteWise is designed to help you focus on what matters most - your ideas. 
                The clean interface eliminates distractions while powerful features remain accessible when you need them.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Distraction-free writing mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <Palette className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Customizable workspace layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Focus highlighting for active content</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg aspect-video"></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

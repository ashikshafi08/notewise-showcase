"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { 
  CheckCircle2, 
  Clock, 
  Code, 
  Cpu, 
  PenLine, 
  Calendar, 
  BrainCircuit,
  Layers,
  Sparkles,
  FileText,
  BookOpen,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The NoteWise Journey
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A look at what's been built so far and the exciting features planned for the future.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Developer Section */}
          <ScrollReveal>
            <Card className="mb-16 overflow-hidden border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Solo Developer Project</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      NoteWise is being built by a single passionate developer who's dedicated to creating the ultimate note-taking experience. Every line of code, every design decision, and every feature is crafted with care and attention to detail.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      I'm working hard to bring you a tool that not only helps you take notes but transforms how you think, write, and organize your ideas. Your feedback and suggestions are always welcome as we build this journey together.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          {/* Completed Features */}
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">What's Been Built</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <CardTitle>Core Note-Taking Experience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rich text editor with markdown support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Folder and note organization system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Dark and light theme support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Local storage with automatic saving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Basic search functionality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <CardTitle>Initial AI Features</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Smart text completion suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Basic document analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Grammar and spelling corrections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Simple idea expansion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Content summarization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <CardTitle>User Interface</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Clean, minimal design focused on content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Responsive layout for different screen sizes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Customizable sidebar and workspace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Keyboard shortcuts for power users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Smooth animations and transitions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <CardTitle>Technical Foundation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Electron-based desktop application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>React and TypeScript for robust frontend</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Optimized performance for large documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Secure local data storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Modular architecture for extensibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
          
          {/* In Development Features */}
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">Currently In Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <Card className="h-full border-2 border-blue-400 dark:border-blue-600">
                <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-6 w-6 text-blue-500" />
                    <CardTitle>Contextual Research Assistant</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    The Research Assistant is currently being developed to help you find relevant information as you write, without disrupting your flow.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Cpu className="h-5 w-5 text-blue-500" />
                      </motion.div>
                      <span>Automatic research suggestions based on your content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Cpu className="h-5 w-5 text-blue-500" />
                      </motion.div>
                      <span>Information gap detection in your research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Cpu className="h-5 w-5 text-blue-500" />
                      </motion.div>
                      <span>Dynamic bibliography creation and citation management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Cpu className="h-5 w-5 text-blue-500" />
                      </motion.div>
                      <span>Source quality assessment for reliable information</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full border-2 border-purple-400 dark:border-purple-600">
                <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-6 w-6 text-purple-500" />
                    <CardTitle>Automated Writer Companion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    The Writer Companion is being built to help you write more effectively, with AI-powered assistance that adapts to your style.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <PenLine className="h-5 w-5 text-purple-500" />
                      </motion.div>
                      <span>Intelligent writing suggestions beyond basic grammar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <PenLine className="h-5 w-5 text-purple-500" />
                      </motion.div>
                      <span>Iterative refinement for progressive improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <PenLine className="h-5 w-5 text-purple-500" />
                      </motion.div>
                      <span>Web research integration for informed writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <PenLine className="h-5 w-5 text-purple-500" />
                      </motion.div>
                      <span>Smart content templates for different writing needs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
          
          {/* Coming Soon Features */}
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    <CardTitle>Journal Assistant</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A dedicated journaling tool that helps you maintain consistent habits and gain insights from your entries.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span>Daily prompts for reflection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span>Mood and habit tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span>Pattern recognition in journal entries</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                    <CardTitle>Knowledge Graph</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Visualize connections between your notes and ideas with an interactive knowledge graph.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span>Automatic connection mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span>Concept extraction and organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span>Semantic search capabilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="h-6 w-6 text-primary" />
                    <CardTitle>Multi-Platform Sync</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Access your notes across all your devices with secure cloud synchronization.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span>End-to-end encrypted sync</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span>Mobile apps for iOS and Android</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Sparkles className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span>Web access for quick edits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
          
          {/* Call to Action */}
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Want to be part of the journey?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                NoteWise is constantly evolving. Sign up for early access to be among the first to experience these exciting features as they're released.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#download">Get Early Access</Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <Link href="#">
                    <Mail className="h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '../animations/ScrollReveal';
import { FloatingIcons } from '../animations/FloatingIcons';
import { 
  Brain, 
  Search, 
  Sparkles, 
  BookOpen, 
  PenTool, 
  RefreshCw, 
  Globe, 
  FileText,
  Lightbulb,
  BookMarked,
  BarChart,
  FileCheck,
  Edit,
  RotateCw,
  Globe2,
  FileCode,
  Bot,
  Zap,
  MessageSquare,
  Wand2
} from 'lucide-react';

// Animation for feature icons
const iconAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  }
};

// Animation for feature cards
const cardAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export function AIFeaturesSection() {
  const [activeTab, setActiveTab] = useState('smart-suggestions');
  const iconSize = "h-5 w-5 text-primary/70";
  const floatingIcons = [
    <Brain key="brain" className="h-6 w-6 text-primary/40" />,
    <Sparkles key="sparkles" className="h-4 w-4 text-blue-400/40" />,
    <Lightbulb key="lightbulb" className="h-5 w-5 text-yellow-400/40" />,
    <Search key="search" className="h-4 w-4 text-purple-400/40" />,
    <Bot key="bot" className="h-5 w-5 text-green-400/40" />,
    <Zap key="zap" className="h-4 w-4 text-orange-400/40" />,
    <MessageSquare key="message" className="h-5 w-5 text-pink-400/40" />,
    <Wand2 key="wand" className="h-4 w-4 text-indigo-400/40" />,
  ];

  return (
    <section id="ai-features" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
      />
      
      {/* Floating icons background */}
      <FloatingIcons icons={floatingIcons} className="absolute inset-0 opacity-30" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 text-sm font-medium"
          >
            <Brain className="h-4 w-4" />
            <span>AI-Powered Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Supercharge Your Notes with AI
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            NoteWise leverages cutting-edge AI to enhance your note-taking experience, helping you write better, think clearer, and organize your thoughts effortlessly.
          </motion.p>
        </div>
        
        <Tabs defaultValue="smart-suggestions" onValueChange={setActiveTab} className="w-full">
          <ScrollReveal>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="smart-suggestions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Smart Suggestions
              </TabsTrigger>
              <TabsTrigger value="research-assistant" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Research Assistant
              </TabsTrigger>
              <TabsTrigger value="writer-companion" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Writer Companion
              </TabsTrigger>
              <TabsTrigger value="knowledge-graph" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Knowledge Graph
              </TabsTrigger>
            </TabsList>
          </ScrollReveal>
          
          {/* Smart Suggestions Tab */}
          <TabsContent value="smart-suggestions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                custom={0}
                initial="hidden"
                animate={activeTab === 'smart-suggestions' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Contextual Recommendations</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get intelligent suggestions based on your current notes and writing patterns.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={1}
                initial="hidden"
                animate={activeTab === 'smart-suggestions' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Idea Expansion</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Transform brief thoughts into comprehensive concepts.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={2}
                initial="hidden"
                animate={activeTab === 'smart-suggestions' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Insight Generation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Discover patterns and connections across your notes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={3}
                initial="hidden"
                animate={activeTab === 'smart-suggestions' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Learning Patterns</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Personalized suggestions that improve over time.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Research Assistant Tab */}
          <TabsContent value="research-assistant" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                custom={0}
                initial="hidden"
                animate={activeTab === 'research-assistant' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Automatic Research Suggestions</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get relevant research materials as you write.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={1}
                initial="hidden"
                animate={activeTab === 'research-assistant' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <FileCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Information Gap Detection</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Identify missing information in your research.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={2}
                initial="hidden"
                animate={activeTab === 'research-assistant' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <BookMarked className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Dynamic Bibliography Creation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Automatically generate and format citations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={3}
                initial="hidden"
                animate={activeTab === 'research-assistant' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Source Quality Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Evaluate the reliability of information sources.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Writer Companion Tab */}
          <TabsContent value="writer-companion" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                custom={0}
                initial="hidden"
                animate={activeTab === 'writer-companion' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Edit className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Intelligent Writing Assistant</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get real-time suggestions to improve your writing.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={1}
                initial="hidden"
                animate={activeTab === 'writer-companion' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <RotateCw className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Iterative Refinement</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Progressively improve your content through AI-guided iterations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={2}
                initial="hidden"
                animate={activeTab === 'writer-companion' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Globe2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Web Research Integration</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Seamlessly incorporate web research into your writing.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={3}
                initial="hidden"
                animate={activeTab === 'writer-companion' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <FileCode className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Content Templates</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Start with intelligent templates tailored to your needs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Knowledge Graph Tab */}
          <TabsContent value="knowledge-graph" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                custom={0}
                initial="hidden"
                animate={activeTab === 'knowledge-graph' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Automatic Connection Mapping</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Visualize relationships between your notes and ideas.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={1}
                initial="hidden"
                animate={activeTab === 'knowledge-graph' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <PenTool className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Concept Extraction</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Automatically identify key concepts in your notes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={2}
                initial="hidden"
                animate={activeTab === 'knowledge-graph' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <RefreshCw className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Dynamic Organization</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your notes reorganize themselves based on context and relationships.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                custom={3}
                initial="hidden"
                animate={activeTab === 'knowledge-graph' ? "visible" : "hidden"}
                variants={cardAnimation}
              >
                <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Semantic Search</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Find what you're looking for, even if you don't remember the exact words.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto border-2 border-yellow-400 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </motion.div>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg mb-1">Coming Soon: Journal Assistant</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our upcoming Journal Assistant will help you maintain consistent journaling habits, provide prompts for reflection, and analyze your entries for patterns and insights.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

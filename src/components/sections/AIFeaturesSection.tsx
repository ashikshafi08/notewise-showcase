"use client";

import { motion } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  Lightbulb, 
} from 'lucide-react';
import { FloatingIcons } from '@/components/animations/FloatingIcons';

export function AIFeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "Smart Knowledge Organization",
      description: "Our AI automatically categorizes and links your notes, creating a knowledge graph that helps you see connections between ideas."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-500" />,
      title: "Context-Aware Suggestions",
      description: "As you write, our AI suggests relevant information from your existing notes, helping you build on your knowledge."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      title: "Insight Generation",
      description: "Discover patterns and insights in your notes that you might have missed, helping you generate new ideas."
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="ai-features" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background/80 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcons 
          className="absolute inset-0"
          icons={[
            <Brain key="brain1" className="h-6 w-6 text-blue-500/20" />,
            <Sparkles key="sparkles1" className="h-8 w-8 text-purple-500/20" />,
            <Lightbulb key="lightbulb1" className="h-7 w-7 text-amber-500/20" />,
            <Brain key="brain2" className="h-5 w-5 text-blue-500/20" />,
            <Sparkles key="sparkles2" className="h-6 w-6 text-purple-500/20" />,
            <Lightbulb key="lightbulb2" className="h-8 w-8 text-amber-500/20" />,
            <Brain key="brain3" className="h-7 w-7 text-blue-500/20" />,
            <Sparkles key="sparkles3" className="h-5 w-5 text-purple-500/20" />,
          ]}
        />
      </div>
      
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
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Enhance Your Note-Taking with AI
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            NoteWise leverages cutting-edge AI to transform how you capture, organize, and utilize your notes.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Experience the Future of Note-Taking</h3>
              <p className="mb-6">
                Our AI doesn't just store your notes - it understands them, connects them, and helps you get more value from your knowledge. It's like having a research assistant that knows everything you've ever written.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Natural language processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span>Semantic search</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <span>Personalized learning</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-card rounded-xl p-6 border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <div className="text-sm font-medium">NoteWise AI Assistant</div>
                </div>
                <div className="pl-8 border-l-2 border-primary/30 py-2">
                  <div className="bg-primary/5 rounded-lg p-3 text-sm">
                    I notice you're writing about machine learning algorithms. Would you like me to link this to your previous notes on neural networks?
                  </div>
                </div>
                <div className="pl-8 border-l-2 border-gray-300/30 py-2">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-sm">
                    Yes, please connect these notes and suggest any relevant research papers I've highlighted.
                  </div>
                </div>
                <div className="pl-8 border-l-2 border-primary/30 py-2">
                  <div className="bg-primary/5 rounded-lg p-3 text-sm">
                    I've linked your notes and found 3 research papers you've highlighted on convolutional neural networks that might be relevant to your current topic.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

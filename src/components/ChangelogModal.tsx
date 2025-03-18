"use client";

import { useState, useEffect } from 'react';
import { X, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ChangelogItem {
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
}

interface ChangelogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const changelogItems: ChangelogItem[] = [
  {
    title: "Website Launch",
    description: "Initial launch of the NoteWise landing page with responsive design and modern UI.",
    date: "March 15, 2025",
    status: "completed"
  },
  {
    title: "Hero Section Enhancement",
    description: "Added animated elements and improved visual appeal of the hero section.",
    date: "March 16, 2025",
    status: "completed"
  },
  {
    title: "AI Features Section",
    description: "Implemented the AI features showcase with animations and interactive elements.",
    date: "March 17, 2025",
    status: "completed"
  },
  {
    title: "Contact Form Integration",
    description: "Added a contact form that allows users to send messages directly to the team.",
    date: "March 18, 2025",
    status: "completed"
  },
  {
    title: "Floating Animations",
    description: "Created reusable animation components for a more dynamic user experience.",
    date: "March 18, 2025",
    status: "completed"
  },
  {
    title: "User Authentication",
    description: "Implementing secure login and registration functionality for users.",
    date: "March 25, 2025",
    status: "planned"
  },
  {
    title: "Note Taking Core Features",
    description: "Building the core note-taking functionality with real-time sync.",
    date: "April 1, 2025",
    status: "planned"
  },
  {
    title: "AI Assistant Integration",
    description: "Integrating AI capabilities for smart note suggestions and organization.",
    date: "April 10, 2025",
    status: "planned"
  }
];

export function ChangelogModal({ isOpen, onClose }: ChangelogModalProps) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const getStatusIcon = (status: ChangelogItem['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'planned':
        return <Sparkles className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] bg-background border border-border rounded-xl shadow-xl z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold">Project Changelog</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-4rem)]">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Completed
                    </h3>
                    <div className="space-y-4">
                      {changelogItems
                        .filter(item => item.status === 'completed')
                        .map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 rounded-lg border bg-card"
                          >
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            <div className="text-xs text-muted-foreground mt-2">{item.date}</div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-blue-500" />
                      Coming Soon
                    </h3>
                    <div className="space-y-4">
                      {changelogItems
                        .filter(item => item.status === 'planned' || item.status === 'in-progress')
                        .map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="p-4 rounded-lg border bg-card/50"
                          >
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{item.title}</h4>
                              {getStatusIcon(item.status)}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            <div className="text-xs text-muted-foreground mt-2">{item.date}</div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

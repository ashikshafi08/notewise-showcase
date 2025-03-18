"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See NoteWise in Action</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience how NoteWise transforms your note-taking and thinking process.
          </p>
        </motion.div>
        
        <Tabs defaultValue="editor" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="editor">Rich Editor</TabsTrigger>
            <TabsTrigger value="analysis">Document Analysis</TabsTrigger>
            <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[500px] bg-gray-200 dark:bg-gray-800">
                  {/* This would be a real screenshot in production */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Mock app header */}
                    <div className="h-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <div className="flex-1"></div>
                      <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                    
                    {/* Mock app content */}
                    <div className="flex-1 flex">
                      {/* Sidebar */}
                      <div className="w-48 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
                        <div className="w-full h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-5/6 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="w-2/3 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      </div>
                      
                      {/* Editor */}
                      <div className="flex-1 bg-white dark:bg-gray-900 p-6">
                        <div className="w-3/4 h-8 bg-gray-100 dark:bg-gray-800 rounded mb-6"></div>
                        <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                        <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                        <div className="w-2/3 h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                        <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                        <div className="w-5/6 h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                        <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                        <div className="w-4/5 h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                        
                        {/* Animated cursor */}
                        <motion.div 
                          className="w-0.5 h-4 bg-blue-500"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    {/* Toolbar */}
                    <div className="h-10 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex items-center justify-center gap-4 px-4">
                      <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
              <p>The rich text editor provides a clean, distraction-free writing environment with powerful formatting tools.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="analysis">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[500px] bg-gray-200 dark:bg-gray-800">
                  {/* This would be a real screenshot in production */}
                  <div className="absolute inset-0 flex">
                    {/* Editor with sidebar */}
                    <div className="w-1/2 bg-white dark:bg-gray-900 p-6 border-r border-gray-200 dark:border-gray-700">
                      <div className="w-3/4 h-8 bg-gray-100 dark:bg-gray-800 rounded mb-6"></div>
                      <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                      <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                      <div className="w-2/3 h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                      <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                      <div className="w-5/6 h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                    </div>
                    
                    {/* Analysis panel */}
                    <div className="w-1/2 bg-gray-50 dark:bg-gray-800 p-6">
                      <div className="w-full h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-6 flex items-center justify-center">
                        <div className="w-32 h-4 bg-purple-200 dark:bg-purple-800 rounded"></div>
                      </div>
                      
                      {/* Charts and analysis */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="aspect-square bg-white dark:bg-gray-700 rounded-lg p-3">
                          <div className="w-full h-4 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                          <div className="w-full h-full flex items-end justify-around pt-4">
                            <motion.div 
                              className="w-4 bg-blue-400 dark:bg-blue-500 rounded-t"
                              initial={{ height: 0 }}
                              whileInView={{ height: '60%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 }}
                            ></motion.div>
                            <motion.div 
                              className="w-4 bg-blue-400 dark:bg-blue-500 rounded-t"
                              initial={{ height: 0 }}
                              whileInView={{ height: '80%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            ></motion.div>
                            <motion.div 
                              className="w-4 bg-blue-400 dark:bg-blue-500 rounded-t"
                              initial={{ height: 0 }}
                              whileInView={{ height: '40%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 }}
                            ></motion.div>
                            <motion.div 
                              className="w-4 bg-blue-400 dark:bg-blue-500 rounded-t"
                              initial={{ height: 0 }}
                              whileInView={{ height: '70%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.4 }}
                            ></motion.div>
                          </div>
                        </div>
                        
                        <div className="aspect-square bg-white dark:bg-gray-700 rounded-lg p-3">
                          <div className="w-full h-4 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                          <div className="w-full h-full flex items-center justify-center">
                            <motion.div 
                              className="w-24 h-24 rounded-full border-8 border-purple-400 dark:border-purple-500"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full h-24 bg-white dark:bg-gray-700 rounded-lg p-3">
                        <div className="w-full h-4 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                        <div className="w-full h-4 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                        <div className="w-3/4 h-4 bg-gray-100 dark:bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
              <p>Get comprehensive document analysis including readability metrics, tone analysis, and style evaluation.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="assistant">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[500px] bg-gray-200 dark:bg-gray-800">
                  {/* This would be a real screenshot in production */}
                  <div className="absolute inset-0 flex">
                    {/* Editor */}
                    <div className="w-2/3 bg-white dark:bg-gray-900 p-6">
                      <div className="w-3/4 h-8 bg-gray-100 dark:bg-gray-800 rounded mb-6"></div>
                      <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                      <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                      <div className="w-2/3 h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                      <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                      <div className="w-5/6 h-4 bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                    </div>
                    
                    {/* AI Assistant panel */}
                    <div className="w-1/3 bg-gray-50 dark:bg-gray-800 p-4 border-l border-gray-200 dark:border-gray-700">
                      <div className="w-full h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 flex items-center justify-center">
                        <div className="w-32 h-4 bg-blue-200 dark:bg-blue-800 rounded"></div>
                      </div>
                      
                      {/* Chat messages */}
                      <div className="space-y-4">
                        <div className="w-4/5 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg p-3 ml-auto">
                          <div className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                          <div className="w-5/6 h-3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                          <div className="w-2/3 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                        
                        <motion.div 
                          className="w-5/6 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <div className="w-full h-3 bg-blue-200 dark:bg-blue-800 rounded mb-2"></div>
                          <div className="w-full h-3 bg-blue-200 dark:bg-blue-800 rounded mb-2"></div>
                          <div className="w-5/6 h-3 bg-blue-200 dark:bg-blue-800 rounded mb-2"></div>
                          <div className="w-4/6 h-3 bg-blue-200 dark:bg-blue-800 rounded"></div>
                        </motion.div>
                        
                        <div className="w-4/5 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg p-3 ml-auto">
                          <div className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                          <div className="w-3/4 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Input field */}
                      <div className="absolute bottom-4 left-2/3 right-4 transform -translate-x-2">
                        <div className="w-full h-10 bg-white dark:bg-gray-700 rounded-full flex items-center px-4">
                          <div className="w-full h-3 bg-gray-100 dark:bg-gray-600 rounded"></div>
                          <div className="w-6 h-6 rounded-full bg-blue-500 ml-2 flex-shrink-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
              <p>Get help with your writing through a conversational AI assistant that understands your content.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

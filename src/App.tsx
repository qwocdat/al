/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-sm p-12 max-w-lg w-full text-center border border-black/5"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
            <Sparkles size={32} />
          </div>
        </div>
        
        <h1 className="text-5xl font-light tracking-tight text-zinc-900 mb-4">
          Hello, World
        </h1>
        
        <p className="text-zinc-500 text-lg font-normal leading-relaxed mb-8">
          Welcome to your new AI-crafted application. 
          Built with React, Tailwind CSS, and precision.
        </p>
        
        <div className="h-px bg-zinc-100 w-full mb-8" />
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-zinc-400 font-semibold px-2">
            <span>Environment</span>
            <span className="text-emerald-500">Ready</span>
          </div>
          <div className="grid grid-cols-10 gap-1 h-2">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1, repeat: Infinity, repeatType: "reverse", duration: 1 }}
                className="h-full bg-emerald-500/20 rounded-full"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

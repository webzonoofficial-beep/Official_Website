'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  trigger: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        
        return (
          <div
            key={item.id}
            className="glass rounded-xl overflow-hidden border border-card-border transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center p-5 text-left font-outfit text-base md:text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span>{item.trigger}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="text-text-muted flex-shrink-0"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 text-sm md:text-base text-text-muted leading-relaxed border-t border-card-border/50 pt-3">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

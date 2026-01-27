import { motion } from 'framer-motion';
import { Code, Globe, Smartphone } from 'lucide-react';

const CodeAnimation = () => {
  const codeLines = [
    '<div class="chatbot">',
    '  <Bot response="intelligent" />',
    '  <AI learning={true} />',
    '</div>',
  ];

  return (
    <div className="relative">
      {/* Floating devices */}
      <motion.div
        className="absolute -top-8 -right-4 text-primary-foreground/40"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Globe size={40} />
      </motion.div>
      <motion.div
        className="absolute -bottom-4 -left-4 text-primary-foreground/40"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <Smartphone size={36} />
      </motion.div>

      {/* Code window */}
      <div className="bg-foreground/90 rounded-xl overflow-hidden shadow-2xl">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-foreground/80">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-xs text-background/50 font-mono">chatbot.tsx</span>
        </div>

        {/* Code content */}
        <div className="p-4 font-mono text-sm">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className="text-primary-foreground/80"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <span className="text-muted-foreground/50 select-none mr-4">
                {index + 1}
              </span>
              <span className="text-primary">{line}</span>
            </motion.div>
          ))}
          <motion.span
            className="inline-block w-2 h-5 bg-primary ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeAnimation;

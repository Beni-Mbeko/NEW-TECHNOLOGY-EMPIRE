import { motion } from 'framer-motion';
import { Bot, MessageCircle, MessageSquare, Zap } from 'lucide-react';

const FloatingChatbots = () => {
  const chatbots = [
    { icon: Bot, x: '10%', y: '20%', delay: 0, size: 32 },
    { icon: MessageCircle, x: '85%', y: '30%', delay: 0.5, size: 28 },
    { icon: MessageSquare, x: '75%', y: '70%', delay: 1, size: 24 },
    { icon: Zap, x: '15%', y: '65%', delay: 1.5, size: 26 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {chatbots.map((bot, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-foreground/30"
          style={{ left: bot.x, top: bot.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            delay: bot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <bot.icon size={bot.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingChatbots;

import { motion } from 'framer-motion';

const AnimatedChatBubbles = () => {
  const bubbles = [
    { text: 'Bonjour! 👋', fromBot: true, delay: 0 },
    { text: 'Comment puis-je vous aider?', fromBot: true, delay: 0.8 },
    { text: 'Je cherche des infos', fromBot: false, delay: 1.6 },
    { text: 'Bien sûr! 🤖', fromBot: true, delay: 2.4 },
  ];

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-4 space-y-3">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className={`flex ${bubble.fromBot ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, x: bubble.fromBot ? -20 : 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: bubble.delay,
              duration: 0.4,
              type: 'spring',
              stiffness: 200,
            }}
          >
            <div
              className={`px-4 py-2 rounded-2xl text-sm ${
                bubble.fromBot
                  ? 'bg-primary-foreground text-primary rounded-bl-sm'
                  : 'bg-primary/30 text-primary-foreground rounded-br-sm'
              }`}
            >
              {bubble.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedChatBubbles;

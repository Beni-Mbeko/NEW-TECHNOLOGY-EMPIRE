import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
}

const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  // Parse the numeric part from the value
  const numericMatch = value.match(/^([\d.]+)/);
  const numericPart = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = value.replace(/^[\d.]+/, '');

  useEffect(() => {
    if (isInView && numericPart > 0) {
      const duration = 2;
      const steps = 60;
      const stepDuration = (duration * 1000) / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const currentValue = Math.round(numericPart * eased * 10) / 10;
        
        // Format without decimal if it's a whole number
        const formatted = currentValue % 1 === 0 
          ? currentValue.toString() 
          : currentValue.toFixed(1);
        
        setDisplayValue(formatted);

        if (currentStep >= steps) {
          clearInterval(interval);
          setDisplayValue(numericPart % 1 === 0 ? numericPart.toString() : numericPart.toFixed(1));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isInView, numericPart]);

  return (
    <motion.div
      ref={ref}
      className="bg-muted rounded-2xl p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;

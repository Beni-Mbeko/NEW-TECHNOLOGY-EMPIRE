import { motion } from 'framer-motion';

const NetworkNodes = () => {
  const nodes = [
    { x: 50, y: 50 },
    { x: 150, y: 30 },
    { x: 100, y: 120 },
    { x: 200, y: 80 },
    { x: 180, y: 150 },
  ];

  const connections = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 4],
    [1, 2],
  ];

  return (
    <svg className="w-64 h-48 text-primary" viewBox="0 0 250 180">
      {/* Connection lines */}
      {connections.map(([from, to], index) => (
        <motion.line
          key={`line-${index}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      ))}

      {/* Data pulses on connections */}
      {connections.map(([from, to], index) => (
        <motion.circle
          key={`pulse-${index}`}
          r="3"
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={{
            cx: [nodes[from].x, nodes[to].x],
            cy: [nodes[from].y, nodes[to].y],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: index * 0.5,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.g key={index}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="12"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
          />
        </motion.g>
      ))}
    </svg>
  );
};

export default NetworkNodes;

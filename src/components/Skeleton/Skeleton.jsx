import { motion } from 'framer-motion';

export function ImageSkeleton({ className, aspectRatio = 'aspect-video' }) {
  return (
    <div className={`${aspectRatio} ${className}`}>
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
        <motion.div
          className="h-full w-full"
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: `linear-gradient(90deg, 
              rgba(229, 231, 235, 0) 0%, 
              rgba(229, 231, 235, 0.5) 50%, 
              rgba(229, 231, 235, 0) 100%)`,
            backgroundSize: '200% 100%',
          }}
        />
      </div>
    </div>
  );
}

export function CardSkeleton({ className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md ${className}`}>
      <div className="animate-pulse space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
        <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
}

export function TextSkeleton({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-200 dark:bg-gray-700 rounded"
          style={{ width: `${80 - i * 15}%` }}
        />
      ))}
    </div>
  );
}

export function ButtonSkeleton({ className = '' }) {
  return (
    <div className={`h-10 bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`} />
  );
}
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="text-[8rem] md:text-[12rem] font-black leading-none
                     text-gradient-teal"
        >
          404
        </motion.h1>

        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Page not found</h2>
        <p className="text-ink-soft mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Back Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline"
          >
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
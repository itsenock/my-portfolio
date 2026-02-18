import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

// Service card component
const ServiceCard: React.FC<{
  service: typeof services[0];
  index: number;
}> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="clay-card group cursor-pointer"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-violet-500/20 p-3 mb-4 group-hover:from-primary-500/30 group-hover:to-violet-500/30 transition-colors">
        <img
          src={service.icon}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Hover indicator */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        className="h-0.5 bg-gradient-to-r from-primary-500 to-violet-500 mt-4 rounded-full"
      />
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Services I Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional services tailored to bring your ideas to life with cutting-edge technology
            and creative solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
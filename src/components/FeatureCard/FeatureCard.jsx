import { motion } from "framer-motion";

import {PropoTypes} from "prop-types";
const FeatureCard = ({ feature, index }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-secondaryYellow"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div 
          className="mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="inline-block p-4 rounded-lg bg-gray-50 group-hover:bg-secondaryYellow/10 transition-colors duration-300">
            <feature.icon 
              className={`h-8 w-8 ${feature.color} group-hover:text-accentGreen transition-colors duration-300`} 
            />
          </div>
        </motion.div>
  
        <h3 className="text-xl font-bold mb-3 group-hover:text-accentGreen transition-colors duration-300">
          {feature.title}
        </h3>
  
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>
  
        <motion.div 
          className="mt-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#" className="text-accentGreen text-sm font-semibold hover:text-secondaryYellow transition-colors duration-300">
            Saber más →
          </a>
        </motion.div>
      </motion.div>
    );
  };

  export default FeatureCard

  import PropTypes from "prop-types";

  // Define las PropTypes
  FeatureCard.propTypes = {
    feature: PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      color: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };
  
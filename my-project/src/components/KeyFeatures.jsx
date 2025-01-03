import { KEY_FEATURES_CONTENT } from "../constants";
import { motion } from "framer-motion";

function KeyFeatures() {
  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 mt-20">
        {/* Section Title and Description */}
        <div className="text-center mb-12 border-t border-neutral-800">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {KEY_FEATURES_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400">
            {KEY_FEATURES_CONTENT.sectionDescription}
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex flex-wrap justify-between"
        >
          {KEY_FEATURES_CONTENT.features.map((feature, index) => (
            <motion.div
              key={feature.id} // Unique key for each feature
              className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-6"
              variants={featureVariants}
            >
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default KeyFeatures;

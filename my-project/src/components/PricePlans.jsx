import { PLANS_CONTENT } from "../constants";
import { motion } from "framer-motion";

function PricePlans() {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2, // Corrected delay multiplier
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400">
            {PLANS_CONTENT.sectionDescription}
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              key={plan.id} // Unique key for each plan
              custom={index}
              variants={childVariants}
              className={`bg-neutral-950 p-6 rounded-xl shadow-lg ${
                plan.popular ? "border border-blue-900/50" : "border border-neutral-800"

              }`}
            >
                {plan.popular &&(
                    <div className="text-center mb-4">
                        <span className="bg-blue-600 text-white text-xs py-1 px-3 rounded-full uppercase">
                            {PLANS_CONTENT.popularBadge}
                        </span>
                    </div>
                )}

              <h3 className="text-lg lg:text-xl tracking-tighter uppercase font-semibold mb-4">{plan.title}</h3>
              <p className="text-neutral-400 mb-6">{plan.description}</p>
                <div className="text-2xl lg:text-3xl font-medium mb-6">{plan.price}</div>
                <ul className="mb-8 space-y-2 text-neutral-400">
                    {plan.features.map((features,i)=>
                    <li key={i} className="flex items-center "><span className="inline-block w-2 h-2 bg-neutral-600 rounded-full mr-2"></span>{features}</li>)}
                </ul>
              <button className="bg-blue-600 w-full hover:bg-blue-500 text-white py-3 px-4 rounded-lg">
                {PLANS_CONTENT.ctaText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PricePlans;

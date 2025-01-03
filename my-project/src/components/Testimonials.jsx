import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS_CONTENT } from "../constants";

const TestimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Testimonials() {
  return (
    <section id="testimonial" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent"
            aria-label="What our clients say"
          >
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            {TESTIMONIALS_CONTENT.sectionDescription}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        {TESTIMONIALS_CONTENT.reviews.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={TestimonialVariants}
                className="mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-900/20 border border-neutral-900 p-10"
              >
                <p className="mb-6 text-neutral-200">{review.review}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={review.image}
                    alt={review.alt}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500">{review.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-neutral-400 text-center">
            No testimonials available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}

export default Testimonials;

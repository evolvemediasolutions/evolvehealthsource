import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Evolve Medical transformed our revenue cycle. We saw a 15% increase in total revenue within the first six months, and our denial rate dropped significantly. Their team is exceptionally professional.",
    name: "Dr. Sarah Jenkins",
    title: "Chief Medical Officer",
    company: "Westside Healthcare Partners"
  },
  {
    quote: "Partnering with Evolve was the best financial decision our hospital made this year. Their technology-driven approach and transparency gave us the confidence we needed.",
    name: "James Wilson",
    title: "CFO",
    company: "Metro General Hospital"
  },
  {
    quote: "The credentialing and coding services are top-tier. They handled our complex multi-specialty billing with ease, allowing our providers to focus entirely on patient care.",
    name: "Elena Rodriguez",
    title: "Operations Director",
    company: "Summit Multi-Specialty Clinic"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary-300 text-sm font-semibold mb-6">
            Client Success
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Trusted by Healthcare Leaders
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-[32px] p-8 md:p-14 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-colors duration-300">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-slate-200 dark:text-white/5 pointer-events-none" />
            
            <div className="relative z-10 min-h-[220px] flex items-center justify-center text-center px-4 md:px-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="flex justify-center gap-1.5 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 font-light leading-relaxed mb-8 italic">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-base tracking-wide">{testimonials[activeIndex].name}</div>
                    <div className="text-xs text-slate-500 font-semibold mt-1">
                      {testimonials[activeIndex].title} — <span className="text-secondary">{testimonials[activeIndex].company}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Left and Right Nav Buttons */}
            <div className="flex justify-between items-center mt-12 border-t border-slate-200 dark:border-white/5 pt-8">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-2.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-primary w-8' : 'bg-slate-200 dark:bg-slate-800 w-2 hover:bg-slate-350 dark:hover:bg-slate-705'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

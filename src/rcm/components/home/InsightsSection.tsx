import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: 'Navigating the New ICD-10 Coding Updates for 2024',
    category: 'Medical Coding',
    desc: 'An in-depth look at the latest changes in ICD-10 coding and how they impact your practice\'s reimbursement rates.',
    date: 'Oct 15, 2023',
    author: 'Sarah Jenkins',
    slug: 'navigating-icd-10-updates-2024',
    gradient: 'from-blue-600/30 to-indigo-600/30',
    badgeStyle: 'text-blue-300 bg-blue-950/80 border-blue-500/25'
  },
  {
    title: 'Strategies to Reduce Claim Denials in Multi-Specialty Clinics',
    category: 'Denial Management',
    desc: 'Discover proven workflows and technologies to significantly lower your denial rates and improve cash flow.',
    date: 'Oct 02, 2023',
    author: 'Dr. Michael Chen',
    slug: 'strategies-reduce-claim-denials',
    gradient: 'from-purple-600/30 to-pink-600/30',
    badgeStyle: 'text-purple-300 bg-purple-950/80 border-purple-500/25'
  },
  {
    title: 'The Role of AI in Modern Accounts Receivable Management',
    category: 'Technology',
    desc: 'How artificial intelligence and machine learning are revolutionizing the way healthcare organizations manage AR.',
    date: 'Sep 28, 2023',
    author: 'Elena Rodriguez',
    slug: 'ai-in-modern-ar-management',
    gradient: 'from-cyan-600/30 to-teal-600/30',
    badgeStyle: 'text-cyan-300 bg-cyan-950/80 border-cyan-500/25'
  }
];

export default function InsightsSection() {
  return (
    <section className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/20 text-[#0D9488] text-sm font-semibold mb-6">
              Industry Insights
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Latest from Our Experts
            </h2>
          </div>
          <div>
            <Link to="/rcm/insights" className="inline-flex items-center gap-2 text-[#0D9488] hover:text-teal-300 font-bold transition-colors group">
              View All Insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group h-full flex flex-col bg-slate-900/40 rounded-[28px] overflow-hidden border border-white/5 hover:border-[#0D9488]/20 hover:bg-slate-900/60 transition-all duration-300 shadow-lg hover:shadow-black/20"
            >
              {/* Cover Artwork Container */}
              <div className={`h-48 bg-gradient-to-br ${blog.gradient} relative overflow-hidden flex items-center justify-center p-6 border-b border-white/5`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
                <div className="text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Evolve Resource</div>
                  <div className="text-sm font-black text-white/50 tracking-tight leading-none group-hover:text-white/80 transition-colors">{blog.category} Overview</div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 backdrop-blur-md border text-xs font-semibold rounded-full ${blog.badgeStyle}`}>
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#0D9488]" /> {blog.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#0D9488]" /> {blog.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors line-clamp-2 leading-snug">
                    <Link to={`/rcm/insights/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                    {blog.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link to={`/rcm/insights/${blog.slug}`} className="inline-flex items-center text-[#0D9488] hover:text-teal-300 font-bold transition-colors text-sm group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

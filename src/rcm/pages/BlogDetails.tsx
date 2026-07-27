import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ShieldAlert,
  ChevronRight,
  Send
} from 'lucide-react';

interface ArticleContent {
  title: string;
  category: string;
  date: string;
  author: string;
  authorTitle: string;
  authorBio: string;
  authorImage: string;
  readTime: string;
  gradient: string;
  badgeStyle: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];
  quote: string;
  takeaways: string[];
}

const blogsConfig: Record<string, ArticleContent> = {
  'navigating-icd-10-updates-2026': {
    title: 'Navigating the New ICD-10 Coding Updates for 2026',
    category: 'Medical Coding',
    date: 'Jul 15, 2026',
    author: 'Deborah Reed',
    authorTitle: 'CPC, Lead Auditor',
    authorBio: 'Deborah Reed has over 14 years of auditing experience, specializing in diagnostic compliance and ICD-10 modifier validations.',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    readTime: '6 min read',
    gradient: 'from-blue-600/30 to-indigo-600/30',
    badgeStyle: 'text-blue-400 bg-blue-950/80 border-blue-500/25',
    intro: 'Annual ICD-10 updates represent a critical compliance milestone. For fiscal year 2026, CMS has introduced over 395 diagnostic code changes, including additions, deletions, and major modifier revisions. Failing to align clinical workflows will lead to immediate claims denials and delayed payments.',
    sections: [
      {
        heading: '1. Major Focus Areas of the 2026 Update',
        paragraphs: [
          'The 2026 updates prioritize social determinants of health (SDoH), pediatric diagnostics, and complex neurological diseases. Specifically, SDoH reporting code updates (Z55-Z65) have been expanded to include more details regarding patient housing status, economic barriers, and literacy levels.',
          'Additionally, neurology practices will see refined diagnostic mappings for Parkinson’s disease and dementia, requiring coders to identify specific sub-types and secondary manifestations within the documentation before choosing a code.'
        ],
        list: [
          'Z59.12 - Severe housing instability and insecurity',
          'G40.A1 - Absence epileptic syndrome, intractable, with status epilepticus',
          'G31.86 - Dementia with Lewy bodies, presenting with secondary Parkinsonism'
        ]
      },
      {
        heading: '2. The Financial Risk of Improper Mapping',
        paragraphs: [
          'Claim scrubbers at the commercial payer level review Modifier and CPT code combinations instantly. An incorrect ICD-10 diagnosis mapped to a specialty procedure is flagged as "Not Medically Necessary", causing immediate rejections.',
          'Our internal auditing reports show that modifier errors and code specificity issues account for nearly 18% of delayed payer payouts in outpatient clinics.'
        ]
      },
      {
        heading: '3. Action Plan for Practice Leaders',
        paragraphs: [
          'To maintain billing pipeline integrity, practice administrators must update EHR catalogs, coordinate clinical training workshops, and pre-test clearinghouse scrubbers using historical chart databases. Continuous education is the single most effective way to eliminate billing friction.'
        ]
      }
    ],
    quote: 'Accurate clinical coding is not just about compliance—it directly dictates your first-pass claims rate and overall contract reimbursement health.',
    takeaways: [
      'Implement real-time SDoH screening forms at front desks.',
      'Audit the top 10 billed specialty codes against new guidelines.',
      'Train providers on specificity requirements for Lewy body dementia.'
    ]
  },
  'strategies-reduce-claim-denials': {
    title: 'Strategies to Reduce Claim Denials in Multi-Specialty Clinics',
    category: 'Denial Management',
    date: 'Jul 02, 2026',
    author: 'Dr. Robert Harris',
    authorTitle: 'MD, MBA, CMO',
    authorBio: 'Dr. Harris bridges clinical compliance with operations at Evolve, helping practices implement clean billing pipelines.',
    authorImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200',
    readTime: '8 min read',
    gradient: 'from-purple-600/30 to-pink-600/30',
    badgeStyle: 'text-purple-400 bg-purple-950/80 border-purple-500/25',
    intro: 'Claim denials delay cash flow and add administrative stress, costing clinics an average of $25 in staff overhead per appealed claim. In multi-specialty practices, managing complex payer policies is a significant operational challenge. We outline a systematic framework to locate denial roots, automate front-office validation, and build successful appeal pipelines.',
    sections: [
      {
        heading: '1. Root Causes of Multi-Specialty Denials',
        paragraphs: [
          'Analysis of over $50M in claims reveals three primary root causes of payer denials: eligibility status mismatches, missing or expired prior authorizations, and modifier diagnostic mismatch errors.',
          'Eligibility issues occur when a patient’s insurance policy has changed or lapsed but was not verified at check-in. Gaps in prior authorizations occur when scheduled outpatient therapies are executed without obtaining digital validation keys beforehand.'
        ],
        list: [
          'Eligibility Verification Failures (35% of all denials)',
          'Prior Authorization Gaps (25% of all denials)',
          'Coding Modifier Errors (15% of all denials)'
        ]
      },
      {
        heading: '2. Preventative Action: Real-Time Eligibility Checks',
        paragraphs: [
          'The most cost-effective way to manage a denial is to prevent it from ever happening. Implementing real-time eligibility (RTE) validation software integrated into scheduling queues ensures active coverage is verified 48 hours before the patient walks in.',
          'Additionally, automating the authorization tracker inside the EHR ensures staff are alerted before executing high-value diagnostic procedures.'
        ]
      },
      {
        heading: '3. Establishing a Dedicated Appeals Team',
        paragraphs: [
          'For claims that are denied, timely appeals are crucial. Practices should organize specialized denial follow-up teams by payer category, tracking filing deadlines and attaching detailed clinical notes to accelerate reimbursement.'
        ]
      }
    ],
    quote: 'Over 60% of payer denials are completely preventable if addressed during front-desk intake or through pre-submission claim scrubbing.',
    takeaways: [
      'Activate real-time eligibility checks 48 hours before appointment.',
      'Track prior authorizations digitally inside clinical schedules.',
      'Organize denial review meetings weekly to map error patterns.'
    ]
  },
  'ai-in-modern-ar-management': {
    title: 'The Role of AI in Modern Accounts Receivable Management',
    category: 'Technology',
    date: 'Jun 28, 2026',
    author: 'Marcus Vance',
    authorTitle: 'Director of Integration',
    authorBio: 'Marcus specializes in designing predictive analytics models and smart task-queuing workflows for billing networks.',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
    readTime: '7 min read',
    gradient: 'from-cyan-600/30 to-teal-600/30',
    badgeStyle: 'text-cyan-400 bg-cyan-950/80 border-cyan-500/25',
    intro: 'Traditional accounts receivable (AR) management relies on manually checking spreadsheets of aging claims, which is slow and prone to errors. Today, AI-powered systems are revolutionizing AR by using predictive algorithms, automated follow-up workflows, and payment likelihood scoring to speed up collections and reduce aging balances.',
    sections: [
      {
        heading: '1. Machine Learning for Predictive Payer Timelines',
        paragraphs: [
          'Payer policies vary, with some commercial payers processing claims in 14 days, while others take 45. AI engines analyze historic payer response times to predict the exact date a claim will settle.',
          'If a claim remains unpaid past its predicted date, the AI automatically triggers a follow-up task before the claim falls into the 60 or 90-day aging bucket.'
        ]
      },
      {
        heading: '2. Intelligent AR Worklist Prioritization',
        paragraphs: [
          'Instead of sorting lists by balance size, machine learning scoring engines sort tasks by recovery probability and timely filing deadlines.',
          'This allows AR specialists to focus on high-value, high-probability claims first, preventing timely filing expiration and maximizing collections.'
        ]
      },
      {
        heading: '3. Automated Payer Portal Auditing',
        paragraphs: [
          'AI bots log into payer portals to check claim status, scrape updates, and paste details directly into billing software, reducing manual keystrokes and allowing staff to focus on complex appeals.'
        ]
      }
    ],
    quote: 'AI-driven AR workflows reduce average days in AR by 25% while increasing team collection productivity by more than 300%.',
    takeaways: [
      'Sort aging worklists by recovery likelihood, not just balance size.',
      'Automate claim status scraping on payer portals via secure APIs.',
      'Set trigger warnings 10 days before timely filing windows expire.'
    ]
  }
};

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [commentsList, setCommentsList] = useState<{ name: string; date: string; text: string }[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !blogsConfig[slug]) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center pt-24 px-4">
        <div className="text-center max-w-md">
          <ShieldAlert className="w-16 h-16 text-teal-600 mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The blog article you are looking for does not exist or has been moved.</p>
          <Link to="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0F9D8A] hover:bg-[#0D8A79] text-white font-bold transition-all shadow-md">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const article = blogsConfig[slug];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !name.trim()) return;
    const newComment = {
      name,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      text: comment
    };
    setCommentsList([...commentsList, newComment]);
    setComment('');
    setName('');
  };

  const relatedArticles = Object.entries(blogsConfig)
    .filter(([key]) => key !== slug)
    .map(([key, value]) => ({ slug: key, ...value }));

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Article Hero Section */}
      <section className="bg-slate-950 text-white pt-36 pb-24 relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/2 -right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-teal-450 hover:text-teal-300 font-semibold mb-8 text-sm group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider backdrop-blur-md ${article.badgeStyle}`}>
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-8 max-w-4xl">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 border-t border-white/10 pt-6">
            <img 
              src={article.authorImage} 
              alt={article.author} 
              className="w-12 h-12 rounded-full border border-teal-500 object-cover shadow-md"
            />
            <div>
              <div className="font-bold text-white text-base">{article.author}</div>
              <div className="text-xs text-slate-400 font-medium">{article.authorTitle}</div>
            </div>
            <div className="ml-auto flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-teal-400" /> {article.date}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Text Content Column */}
            <article className="lg:col-span-8 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="prose max-w-none text-slate-700">
                <p className="text-lg font-normal leading-relaxed text-slate-850 mb-8 border-l-4 border-teal-500 pl-6 py-1 bg-teal-50/30 rounded-r-xl">
                  {article.intro}
                </p>

                {article.sections.map((section, idx) => (
                  <div key={idx} className="mb-10 last:mb-0">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                      {section.heading}
                    </h2>
                    
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="font-light leading-relaxed text-sm sm:text-base mb-4 last:mb-0">
                        {p}
                      </p>
                    ))}

                    {section.list && (
                      <ul className="mt-4 space-y-2.5">
                        {section.list.map((li, liIdx) => (
                          <li key={liIdx} className="flex items-start gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-slate-800 font-semibold text-xs sm:text-sm">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Pull Quote Callout Box */}
                <div className="my-10 bg-slate-950 text-white rounded-2xl p-8 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
                  <blockquote className="relative z-10 text-lg sm:text-xl font-bold italic leading-relaxed text-slate-100 mb-4">
                    “{article.quote}”
                  </blockquote>
                  <cite className="relative z-10 block text-xs text-teal-400 font-bold uppercase tracking-widest">— {article.author}</cite>
                </div>
              </div>

              {/* Add comment Form */}
              <div className="mt-16 border-t border-slate-100 pt-12">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">Leave a Reply</h3>
                
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="comment-name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                      <input 
                        id="comment-name"
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="comment-text" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Comment</label>
                    <textarea 
                      id="comment-text"
                      rows={5} 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                      placeholder="Write your comment here..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="inline-flex items-center px-6 py-3 rounded-full bg-[#0F9D8A] hover:bg-[#0D8A79] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
                  >
                    Post Comment <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>

                {/* Render Comments */}
                {commentsList.length > 0 && (
                  <div className="mt-10 space-y-6">
                    <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2">{commentsList.length} Comment{commentsList.length > 1 ? 's' : ''}</h4>
                    {commentsList.map((c, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-slate-900 text-sm">{c.name}</span>
                          <span className="text-xs text-slate-400">{c.date}</span>
                        </div>
                        <p className="text-slate-700 text-sm font-light leading-relaxed">{c.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Key Takeaways Card */}
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-teal-600" /> Key Takeaways
                </h3>
                <ul className="space-y-3.5">
                  {article.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm text-slate-700 font-light leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author Info Card */}
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm text-center">
                <img 
                  src={article.authorImage} 
                  alt={article.author} 
                  className="w-24 h-24 rounded-full mx-auto border-4 border-slate-100 object-cover shadow-sm mb-4"
                />
                <h3 className="font-extrabold text-lg text-slate-900">{article.author}</h3>
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-3">{article.authorTitle}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed px-2">
                  {article.authorBio}
                </p>
              </div>

              {/* CTA Consultation Card */}
              <div className="bg-gradient-to-tr from-slate-950 to-slate-900 text-white rounded-3xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">Free Revenue Audit</h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-6 relative z-10">
                  Discover billing bottlenecks, credentialing gaps, and diagnostic modifier leaks inside your practice.
                </p>
                <Link 
                  to="/rcm/contact" 
                  className="block w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-[#0F9D8A] text-white font-bold text-sm shadow-md shadow-teal-500/15 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 relative z-10"
                >
                  Schedule Free Audit
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Related/Other Articles Section */}
      <section className="py-20 border-t border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-12 text-center sm:text-left">
            Related Insights & Updates
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {relatedArticles.map((rel, index) => (
              <div 
                key={index}
                className="group flex flex-col bg-slate-50 border border-slate-200/50 rounded-2xl overflow-hidden hover:border-teal-500/20 hover:bg-slate-50/80 transition-all duration-300 shadow-sm"
              >
                <div className={`h-40 bg-gradient-to-br ${rel.gradient} relative overflow-hidden flex items-center justify-center p-4 border-b border-slate-200/50`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="text-center">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Evolve Resource</div>
                    <div className="text-xs font-black text-slate-855 tracking-tight leading-none">{rel.category} Overview</div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 backdrop-blur-md border text-[10px] font-semibold rounded-full ${rel.badgeStyle}`}>
                      {rel.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                      <Link to={`/rcm/insights/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-4 line-clamp-2">{rel.intro}</p>
                  </div>
                  
                  <Link to={`/rcm/insights/${rel.slug}`} className="inline-flex items-center text-teal-600 hover:text-teal-500 font-bold text-sm group/btn">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

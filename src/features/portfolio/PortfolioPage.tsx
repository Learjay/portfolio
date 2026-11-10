import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  FolderGit2,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoonStar,
  Sparkles,
  SunMedium,
  X,
} from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading';
import { useTheme } from '../../hooks/useTheme';
import { copyTextToClipboard } from '../../services/clipboard';
import {
  EmailDeliveryConfigurationError,
  sendContactEmail,
} from '../../services/contactEmail';
import type { ContactFormState } from '../../types/portfolio';
import { getSectionHref } from '../../utils/navigation';
import { navItems, projects, services, skillGroups } from './portfolioContent';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function PortfolioPage() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [portraitState, setPortraitState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [emailCopyStatus, setEmailCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const currentYear = new Date().getFullYear();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, subject, message } = formState;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setSubmitStatus('error');
      setSubmitMessage('Please complete all fields before sending your message.');
      return;
    }

    setSubmitStatus('sending');
    setSubmitMessage('Sending your message...');

    try {
      await sendContactEmail(formState);
      setSubmitStatus('success');
      setSubmitMessage('Your message was sent successfully. Thank you for reaching out.');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof EmailDeliveryConfigurationError
          ? 'The contact form needs email setup before it can send. Please email ljayencina@gmail.com directly for now.'
          : 'We could not send your message. Please try again or email ljayencina@gmail.com directly.',
      );
    }
  };

  const copyEmail = async () => {
    const email = 'ljayencina@gmail.com';
    try {
      await copyTextToClipboard(email);
      setEmailCopyStatus('success');
    } catch {
      setEmailCopyStatus('error');
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 transition-colors duration-300 dark:bg-slate-50 dark:text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl dark:border-slate-200/80 dark:bg-slate-50/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Home">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.25)] dark:border-cyan-500/40 dark:bg-cyan-500/10 dark:text-cyan-700">
              LE
            </div>
            <span className="flex min-w-0 flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200 dark:text-slate-700">
                Learjay Encina
              </span>
              <span className="mt-0.5 hidden text-xs leading-tight text-slate-400 lg:block dark:text-slate-600">
                Software Developer | Aspiring Full-Stack Engineer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={getSectionHref(item)}
                className="group relative py-2 text-sm text-slate-300 transition-colors duration-200 hover:text-cyan-300 focus-visible:text-cyan-300 focus-visible:outline-none dark:text-slate-600 dark:hover:text-cyan-700 dark:focus-visible:text-cyan-700"
              >
                {item}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-cyan-300 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 dark:bg-cyan-700"
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle color theme"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-300 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-700"
            >
              {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 md:hidden dark:border-slate-300 dark:bg-slate-100 dark:text-slate-700"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          className={`${menuOpen ? 'block' : 'hidden'} border-t border-white/10 bg-slate-950/95 md:hidden dark:border-slate-200/70 dark:bg-slate-50/95`}
        >
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={getSectionHref(item)}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-3 text-sm text-slate-300 transition-[padding,color] duration-200 hover:pl-2 hover:text-cyan-300 focus-visible:pl-2 focus-visible:text-cyan-300 focus-visible:outline-none last:border-b-0 dark:border-slate-200/80 dark:text-slate-700 dark:hover:text-cyan-700 dark:focus-visible:text-cyan-700"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="min-w-0 space-y-6 sm:space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300 dark:border-cyan-600/30 dark:bg-cyan-500/10 dark:text-cyan-700">
                <Sparkles size={14} />
                Available for opportunities
              </div>

              <div className="space-y-5">
                <p className="text-base font-medium uppercase tracking-[0.18em] text-slate-400 sm:tracking-[0.28em] dark:text-slate-600">
                  Hi, I'm Learjay.
                </p>
                <h1 className="max-w-xl text-[clamp(2.25rem,8vw,3rem)] font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl dark:text-slate-900">
                  Building Digital Solutions Through Code.
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg dark:text-slate-700">
                  I’m a software developer and aspiring full-stack engineer focused on building practical,
                  scalable, and user-friendly digital experiences that solve real-world problems.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300 sm:px-6"
                >
                  View My Projects
                  <ArrowRight size={18} />
                </a>
                <a
                  href="/resume/Encina_Learjay_Resume.pdf"
                  download="Encina_Learjay_Resume.pdf"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-300 sm:px-6 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-700"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
                <a
                  href="https://github.com/Learjay"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-700"
                >
                  <Github size={16} />
                  Learjay
                </a>
                <a
                  href="https://www.linkedin.com/in/learjayencina"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-700"
                >
                  <Linkedin size={16} />
                  learjayencina
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative min-w-0"
            >
              <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.45)] dark:border-slate-200/80 dark:bg-slate-100">
                  <div
                    className="relative overflow-hidden rounded-[1.5rem] bg-slate-800 dark:bg-slate-200"
                    aria-busy={portraitState === 'loading'}
                  >
                    {portraitState === 'loading' && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 dark:from-slate-200 dark:via-slate-300 dark:to-slate-200"
                      />
                    )}
                    {portraitState === 'error' ? (
                      <div
                        role="status"
                        className="flex aspect-[4/3] items-center justify-center px-6 text-center text-sm text-slate-300 sm:aspect-square lg:aspect-[4/5] dark:text-slate-600"
                      >
                        Profile portrait is unavailable.
                      </div>
                    ) : (
                      <img
                        src="/images/image%201.png"
                        alt="Portrait of Learjay Lubuguin Encina"
                        className={`aspect-[4/3] w-full object-cover transition-opacity duration-300 sm:aspect-square lg:aspect-[4/5] ${
                          portraitState === 'loaded' ? 'opacity-100' : 'opacity-0'
                        }`}
                        fetchPriority="high"
                        onLoad={() => setPortraitState('loaded')}
                        onError={() => setPortraitState('error')}
                      />
                    )}
                    <span className="sr-only" role="status">
                      {portraitState === 'loading' ? 'Loading profile portrait.' : ''}
                    </span>
                    {portraitState === 'loaded' && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent px-6 pb-6 pt-16">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                          Software Developer
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-white">Learjay Encina</p>
                        <p className="mt-1 text-sm text-slate-200">Philippines</p>
                      </div>
                    )}
                  </div>
                </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="About me" title="A developer with a problem-solving mindset." />

          <div className="grid min-w-0 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <div className="min-w-0 rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 sm:p-6 dark:border-slate-200/80 dark:bg-slate-100">
              <div className="mb-5 flex items-center gap-3 text-cyan-300 dark:text-cyan-700">
                <GraduationCap size={20} />
                <span className="font-medium uppercase tracking-[0.2em] text-xs">Education</span>
              </div>
              <div className="space-y-4 text-slate-300 dark:text-slate-700">
                <p className="break-words text-lg font-semibold text-slate-100 sm:text-xl dark:text-slate-900">Bachelor of Science in Information Technology</p>
                <p className="text-lg">Polytechnic University of the Philippines - Lopez</p>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Philippines</span>
                </div>
              </div>
            </div>

            <div className="min-w-0 space-y-5 text-slate-300 dark:text-slate-700 sm:space-y-6">
              <p>
                I’m a IT graduate with a strong interest in building practical, scalable, and
                user-friendly solutions for real business and user needs. My journey in software
                development has helped me grow across frontend, backend, database work, and solution
                debugging.
              </p>
              <p>
                Through my internship at One CoreDev IT Inc., I contributed to internal systems that
                supported business automation and digitization. I worked on both backend and frontend
                development, improved application modules, and applied Clean Architecture and SOLID/DRY
                practices using C#/.NET.
              </p>
              <p>
                I enjoy learning new tools, exploring modern development practices, and translating
                technical requirements into thoughtful, maintainable software. I’m especially drawn to
                full-stack work where I can connect user experience with solid system design.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-white/10 bg-slate-900/60 py-12 sm:py-16 dark:border-slate-200/80 dark:bg-slate-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Technical skills" title="Capabilities built for modern development." />

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="min-w-0 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 sm:p-6 dark:border-slate-300 dark:bg-slate-50">
                  <h3 className="mb-4 text-base font-semibold text-white sm:text-lg dark:text-slate-900">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-200 dark:border-cyan-600/30 dark:bg-cyan-500/10 dark:text-cyan-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="Experience" title="Professional experience." />

          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 dark:border-slate-200/80 dark:bg-slate-100 sm:rounded-[2rem] sm:p-6 lg:p-8">
            <div className="mb-4 flex flex-col gap-3 border-b border-white/10 pb-6 dark:border-slate-300">
              <div className="flex items-center gap-3 text-cyan-300 dark:text-cyan-700">
                <BriefcaseBusiness size={18} />
                <span className="text-sm font-medium uppercase tracking-[0.2em]">One CoreDev IT Inc.</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-slate-100 sm:text-2xl dark:text-slate-900">System Developer Intern</h3>
                <span className="text-sm text-slate-400 dark:text-slate-600">February 2026 – May 2026</span>
              </div>
            </div>

            <div className="grid min-w-0 gap-6 lg:grid-cols-2">
              <div className="min-w-0 space-y-4 text-slate-300 dark:text-slate-700">
                <p>Contributed to internal systems supporting business-process automation and digitization.</p>
                <ul className="space-y-2 pl-5 text-base text-slate-300 dark:text-slate-700">
                  <li>Worked on backend and frontend development of application modules.</li>
                  <li>Performed testing, debugging, and support for system features.</li>
                  <li>Applied Clean Architecture concepts and SOLID/DRY principles in C#/.NET.</li>
                  <li>Collaborated with developers using Git-based workflows.</li>
                </ul>
              </div>

              <div className="min-w-0 rounded-[1.5rem] border border-cyan-500/20 bg-cyan-500/10 p-5 dark:border-cyan-600/30 dark:bg-cyan-500/10">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300 dark:text-cyan-700">Technologies used</p>
                <div className="flex flex-wrap gap-2">
                  {['C#', '.NET', 'ASP.NET Core', 'MySQL', 'Git', 'Frontend development', 'System integration'].map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-500/30 bg-slate-950/60 px-3 py-1.5 text-sm text-cyan-100 dark:border-cyan-600/30 dark:bg-slate-100 dark:text-cyan-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-white/10 bg-slate-900/60 py-12 sm:py-16 dark:border-slate-200/80 dark:bg-slate-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Featured projects" title="Project work that reflects real-world thinking." />

            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80 dark:border-slate-300 dark:bg-slate-50 sm:rounded-[2rem]"
              >
                <div className="min-w-0 p-5 sm:p-8">
                    <div className="mb-4 flex items-center gap-3 text-cyan-300 dark:text-cyan-700">
                      <FolderGit2 size={18} />
                      <span className="text-sm font-medium uppercase tracking-[0.2em]">Featured project</span>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">Technologies</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-200 dark:border-cyan-600/30 dark:bg-cyan-500/10 dark:text-cyan-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold text-white sm:text-3xl dark:text-slate-900">{project.title}</h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-600">
                        {project.role}
                      </span>
                    </div>
                    <p className="mt-4 max-w-4xl text-slate-300 dark:text-slate-700">{project.summary}</p>

                    <div className="mt-6">
                      <div>
                        <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">Problem</p>
                        <p className="text-slate-300 dark:text-slate-700">{project.problem}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">Key features</p>
                      <ul className="grid gap-2 text-slate-300 md:grid-cols-2 dark:text-slate-700">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300 dark:bg-cyan-700" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <SectionHeading eyebrow="What I do" title="Where I can contribute." />

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 sm:p-6 dark:border-slate-200/80 dark:bg-slate-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-700">
                  <Layers3 size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-100 dark:text-slate-900">{service}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-slate-900/70 py-12 sm:py-16 dark:border-slate-200/80 dark:bg-slate-100">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-8">
            <div>
              <SectionHeading eyebrow="Contact" title="Let’s build something meaningful." />

              <div className="mt-8 space-y-4 text-slate-300 dark:text-slate-700">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-cyan-300 dark:text-cyan-700" />
                  <button type="button" onClick={copyEmail} className="text-left hover:text-cyan-300 dark:hover:text-cyan-700">
                    ljayencina@gmail.com
                  </button>
                </div>
                {emailCopyStatus === 'success' && (
                  <p className="text-sm text-emerald-400" role="status">Email address copied to clipboard.</p>
                )}
                {emailCopyStatus === 'error' && (
                  <p className="text-sm text-rose-400" role="status">Could not copy the email address. Please copy it manually.</p>
                )}
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-cyan-300 dark:text-cyan-700" />
                  <a href="https://www.linkedin.com/in/learjayencina" target="_blank" rel="noreferrer" className="hover:text-cyan-300 dark:hover:text-cyan-700">
                    learjayencina
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-cyan-300 dark:text-cyan-700" />
                  <a href="https://github.com/Learjay" target="_blank" rel="noreferrer" className="hover:text-cyan-300 dark:hover:text-cyan-700">
                    Learjay
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 dark:border-slate-300 dark:bg-slate-50 sm:rounded-[2rem] sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="min-w-0 space-y-2 text-sm text-slate-300 dark:text-slate-700">
                  <span>Name</span>
                  <input
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="min-w-0 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-cyan-400/40 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-900"
                    placeholder="Your name"
                  />
                </label>
                <label className="min-w-0 space-y-2 text-sm text-slate-300 dark:text-slate-700">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="min-w-0 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-cyan-400/40 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-900"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-5 block min-w-0 space-y-2 text-sm text-slate-300 dark:text-slate-700">
                <span>Subject</span>
                <input
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="min-w-0 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-cyan-400/40 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-900"
                  placeholder="Project inquiry"
                />
              </label>

              <label className="mt-5 block min-w-0 space-y-2 text-sm text-slate-300 dark:text-slate-700">
                <span>Message</span>
                <textarea
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleInputChange}
                  className="min-h-32 min-w-0 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-cyan-400/40 dark:border-slate-300 dark:bg-slate-100 dark:text-slate-900"
                  placeholder="Tell me about your project or opportunity..."
                />
              </label>

              {submitMessage && (
                <p
                  className={`mt-4 text-sm ${
                    submitStatus === 'success'
                      ? 'text-emerald-400'
                      : submitStatus === 'error'
                        ? 'text-rose-400'
                        : 'text-slate-400 dark:text-slate-600'
                  }`}
                  role={submitStatus === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                >
                  {submitMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
              >
                {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                {submitStatus !== 'sending' && <ArrowRight size={18} />}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 dark:border-slate-200/80 dark:bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-slate-600">
            <p>© {currentYear} Learjay Lubuguin Encina. All rights reserved.</p>
            <p>Building practical solutions through code.</p>
        </div>
      </footer>
    </div>
  );
}

export default PortfolioPage;

import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  FileText,
  Menu,
  Search,
  Target
} from 'lucide-react';

const OnboardingApp = () => {
  const [currentView, setCurrentView] = useState<'journey' | 'wiki'>('journey');
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const onboardingSteps = [
    {
      id: 'welcome',
      title: 'Bun venit la TechFlow!',
      subtitle: 'Suntem încântați să te avem în echipă',
      content: (
        <div className="space-y-6">
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-lg shadow-indigo-100/50">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Despre TechFlow</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Fondată în 2018, TechFlow este o companie inovatoare care dezvoltă soluții software pentru peste 200 de clienți din România și Europa.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cu o echipă de 150+ profesioniști pasionați, construim produse care transformă industrii întregi și îmbunătățesc viața utilizatorilor.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Angajați', value: '150+', accent: 'text-indigo-600' },
              { label: 'Clienți', value: '200+', accent: 'text-purple-600' },
              { label: 'Proiecte', value: '50+', accent: 'text-pink-600' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/80 bg-white/90 p-6 text-center shadow">
                <div className={`mb-2 text-3xl font-bold ${stat.accent}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'objectives',
      title: 'Obiectivele Noastre',
      subtitle: 'Misiunea și viziunea companiei',
      content: (
        <div className="space-y-4">
          <div className="rounded-2xl border border-blue-100/60 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 shadow">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-500 p-3 text-white shadow-inner">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">Misiune</h4>
                <p className="text-gray-700">
                  Să oferim soluții tehnologice inovatoare care simplifică procesele complexe și creează valoare reală pentru clienți.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-purple-100/60 bg-gradient-to-r from-purple-50 to-pink-50 p-6 shadow">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-purple-500 p-3 text-white shadow-inner">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">Viziune</h4>
                <p className="text-gray-700">Să devenim liderul regional în dezvoltarea de software enterprise până în 2028.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
            <h4 className="mb-3 font-semibold text-gray-900">Valori Fundamentale</h4>
            <div className="grid grid-cols-2 gap-3">
              {['Inovație', 'Colaborare', 'Excelență', 'Integritate'].map((value) => (
                <div key={value} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'departments',
      title: 'Departamentele Noastre',
      subtitle: 'Structura organizațională',
      content: (
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Engineering', icon: '💻', team: '45 membri', color: 'from-blue-500 to-cyan-500' },
            { name: 'Product & Design', icon: '🎨', team: '20 membri', color: 'from-purple-500 to-pink-500' },
            { name: 'Sales & Marketing', icon: '📈', team: '30 membri', color: 'from-orange-500 to-red-500' },
            { name: 'HR & Operations', icon: '👥', team: '15 membri', color: 'from-green-500 to-emerald-500' },
            { name: 'Customer Success', icon: '🎯', team: '25 membri', color: 'from-indigo-500 to-purple-500' },
            { name: 'Finance', icon: '💰', team: '15 membri', color: 'from-yellow-500 to-orange-500' }
          ].map((dept) => (
            <div
              key={dept.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${dept.color} text-2xl`}>
                {dept.icon}
              </div>
              <h4 className="mb-1 font-semibold text-gray-900">{dept.name}</h4>
              <p className="text-sm text-gray-600">{dept.team}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'role',
      title: 'Rolul Tău',
      subtitle: 'Ce vei face aici',
      content: (
        <div className="space-y-4">
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-indigo-500 p-3 text-white shadow-inner">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Senior Frontend Developer</h3>
                <p className="text-gray-600">Engineering Department</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">Responsabilități Principale:</h4>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Dezvoltarea de interfețe moderne și responsive',
                    'Colaborarea cu echipele de design și backend',
                    'Mentoratul dezvoltatorilor juniori'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-5 w-5 text-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-inner">
                <h4 className="mb-2 font-semibold text-gray-900">Echipa Ta:</h4>
                <p className="text-gray-700">Vei face parte din Product Team Alpha - 8 dezvoltatori, 2 designeri, 1 product manager</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const wikiSections = [
    {
      id: 'structure',
      title: 'Structura Organizațională',
      icon: Building2,
      items: [
        { name: 'Organigrama Companiei', desc: 'Structura completă a departamentelor' },
        { name: 'Leadership Team', desc: 'Echipa de management' },
        { name: 'Contacte Departamente', desc: 'Liste de contacte' }
      ]
    },
    {
      id: 'policies',
      title: 'Politici & Proceduri',
      icon: FileText,
      items: [
        { name: 'Codul de Conduită', desc: 'Standarde și comportament' },
        { name: 'Politica de Lucru Remote', desc: 'Ghid pentru work from home' },
        { name: 'Politica de Concedii', desc: 'Zile libere și proceduri' }
      ]
    },
    {
      id: 'tools',
      title: 'Unelte & Sisteme',
      icon: Briefcase,
      items: [
        { name: 'Platforme de Dezvoltare', desc: 'GitHub, Jira, Confluence' },
        { name: 'Comunicare', desc: 'Slack, Email, Zoom' },
        { name: 'HR Portal', desc: 'Pontaj, concedii, beneficii' }
      ]
    },
    {
      id: 'benefits',
      title: 'Beneficii & Facilități',
      icon: Award,
      items: [
        { name: 'Pachet Salarial', desc: 'Detalii compensații' },
        { name: 'Asigurare Medicală', desc: 'Private healthcare' },
        { name: 'Dezvoltare Profesională', desc: 'Cursuri și conferințe' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'HR Portal', icon: '👤' },
    { name: 'GitHub', icon: '💻' },
    { name: 'Slack', icon: '💬' },
    { name: 'Jira', icon: '📊' },
    { name: 'Calendar', icon: '📅' },
    { name: 'Drive', icon: '📁' }
  ];

  const renderBackdrop = () => (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.4),_transparent)]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-pink-500/25 blur-3xl" />
    </>
  );

  const handleCompleteOnboarding = () => {
    setCurrentView('wiki');
  };

  const nextStep = () => {
    if (onboardingStep < onboardingSteps.length - 1) {
      setCompletedSteps((prev) => (prev.includes(onboardingStep) ? prev : [...prev, onboardingStep]));
      setOnboardingStep((prev) => prev + 1);
    } else {
      setCompletedSteps((prev) => (prev.includes(onboardingStep) ? prev : [...prev, onboardingStep]));
      handleCompleteOnboarding();
    }
  };

  const prevStep = () => {
    setOnboardingStep((prev) => Math.max(prev - 1, 0));
  };

  const currentStepData = onboardingSteps[onboardingStep];

  if (currentView === 'wiki') {
    return (
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        {renderBackdrop()}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 space-y-10">
          <header className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-3 shadow-lg shadow-indigo-500/30">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Knowledge Hub</p>
                  <h1 className="text-3xl font-semibold text-white">TechFlow Wiki</h1>
                  <p className="text-sm text-slate-300">Internal Knowledge Base</p>
                </div>
              </div>
              <button className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-indigo-300 hover:text-indigo-100">
                <Menu className="h-4 w-4" />
              </button>
            </div>
            <div className="relative mt-6">
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Caută în wiki... (departamente, politici, unelte)"
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-base text-white placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/40 to-purple-600/30 p-6 shadow-2xl shadow-indigo-500/30 lg:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-indigo-100">Bun venit! 👋</p>
                  <p className="text-sm text-indigo-100">Aici găsești toate informațiile de care ai nevoie pentru munca ta zilnică.</p>
                </div>
                <span className="rounded-2xl border border-white/20 px-4 py-2 text-sm text-white/80">Actualizat azi</span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {wikiSections.map((section) => (
                  <div key={section.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-xl bg-white/10 p-2">
                        <section.icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="font-semibold text-white">{section.title}</p>
                    </div>
                    <button className="text-sm text-indigo-100 hover:text-white">Deschide</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Link-uri Rapide</p>
              <div className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-left transition hover:border-indigo-300"
                  >
                    <div className="text-white">
                      <p className="font-medium">{link.name}</p>
                    </div>
                    <span className="text-2xl">{link.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {wikiSections.map((section) => (
              <div key={section.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/10 p-3 text-indigo-200">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Colecție</p>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {section.items.map((item, idx) => (
                    <button
                      key={idx}
                      className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-left transition hover:border-indigo-300"
                    >
                      <div>
                        <p className="font-medium text-white">{item.name}</p>
                        <p className="text-sm text-slate-300">{item.desc}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {renderBackdrop()}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 space-y-8">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">{onboardingSteps[0].subtitle}</p>
            <h1 className="text-3xl font-semibold text-white">{onboardingSteps[0].title}</h1>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              {onboardingSteps.map((step, idx) => {
                const active = idx === onboardingStep;
                const done = completedSteps.includes(idx);
                return (
                  <div key={step.id} className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-semibold transition ${
                        active
                          ? 'border-white bg-white/20 text-white shadow-lg shadow-indigo-500/30'
                          : done
                          ? 'border-emerald-400 bg-emerald-400/20 text-emerald-100'
                          : 'border-white/30 bg-white/10 text-slate-300'
                      }`}
                    >
                      {done ? <CheckCircle2 className="h-5 w-5" /> : idx + 1}
                    </div>
                    {idx < onboardingSteps.length - 1 && (
                      <span className={`h-px w-12 rounded-full ${done ? 'bg-emerald-400' : 'bg-white/20'}`} />
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-indigo-100">
              Pasul {onboardingStep + 1} din {onboardingSteps.length}
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-900 shadow-2xl shadow-indigo-500/30">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-10 text-white">
            <h2 className="text-3xl font-bold">{currentStepData.title}</h2>
            <p className="text-indigo-100 text-lg">{currentStepData.subtitle}</p>
          </div>
          <div className="px-8 py-10 text-slate-900">{currentStepData.content}</div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 bg-gray-50 px-8 py-6">
            <button
              onClick={prevStep}
              disabled={onboardingStep === 0}
              className="rounded-2xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-300 hover:border-indigo-200 hover:text-indigo-600"
            >
              Înapoi
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:translate-y-0.5"
            >
              {onboardingStep === onboardingSteps.length - 1 ? (
                <>
                  Finalizează Onboarding
                  <CheckCircle2 className="h-5 w-5" />
                </>
              ) : (
                <>
                  Continuă
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </section>

        <div className="text-center">
          <button
            onClick={handleCompleteOnboarding}
            className="text-sm font-medium text-indigo-200 transition hover:text-white"
          >
            Sari peste onboarding →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingApp;
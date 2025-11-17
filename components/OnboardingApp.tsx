import React, { useState } from 'react';
import { ChevronRight, Users, Target, Building2, BookOpen, Search, Menu, Home, FileText, Briefcase, Award, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const OnboardingApp = () => {
  const [currentView, setCurrentView] = useState('welcome');
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const onboardingSteps = [
    {
      id: 'welcome',
      title: 'Bun venit la TechFlow!',
      subtitle: 'Suntem încântați să te avem în echipă',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Despre TechFlow</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fondată în 2018, TechFlow este o companie inovatoare care dezvoltă soluții software pentru peste 200 de clienți din România și Europa.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cu o echipă de 150+ profesioniști pasionați, construim produse care transformă industrii întregi și îmbunătățesc viața utilizatorilor.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Angajați</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Clienți</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Proiecte</div>
            </div>
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
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-lg p-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Misiune</h4>
                <p className="text-gray-700">Să oferim soluții tehnologice inovatoare care simplifică procesele complexe și creează valoare reală pentru clienți.</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 rounded-lg p-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Viziune</h4>
                <p className="text-gray-700">Să devenim liderul regional în dezvoltarea de software enterprise până în 2028.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Valori Fundamentale</h4>
            <div className="grid grid-cols-2 gap-3">
              {['Inovație', 'Colaborare', 'Excelență', 'Integritate'].map((value) => (
                <div key={value} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
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
            <div key={dept.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center text-2xl mb-3`}>
                {dept.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{dept.name}</h4>
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
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-500 rounded-lg p-3">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Senior Frontend Developer</h3>
                <p className="text-gray-600">Engineering Department</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Responsabilități Principale:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span>Dezvoltarea de interfețe moderne și responsive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span>Colaborarea cu echipele de design și backend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span>Mentoratul dezvoltatorilor juniori</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Echipa Ta:</h4>
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

  const handleCompleteOnboarding = () => {
    setCurrentView('wiki');
  };

  const nextStep = () => {
    if (onboardingStep < onboardingSteps.length - 1) {
      setCompletedSteps([...completedSteps, onboardingStep]);
      setOnboardingStep(onboardingStep + 1);
    } else {
      setCompletedSteps([...completedSteps, onboardingStep]);
      handleCompleteOnboarding();
    }
  };

  const prevStep = () => {
    if (onboardingStep > 0) {
      setOnboardingStep(onboardingStep - 1);
    }
  };

  if (currentView === 'wiki') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">TechFlow Wiki</h1>
                  <p className="text-sm text-gray-600">Internal Knowledge Base</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Caută în wiki... (departamente, politici, unelte)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Welcome Back Section */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Bine ai revenit! 👋</h2>
            <p className="text-indigo-100">Aici găsești toate informațiile de care ai nevoie pentru munca ta zilnică.</p>
          </div>

          {/* Wiki Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wikiSections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <section.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">{item.name}</div>
                            <div className="text-sm text-gray-600 mt-1">{item.desc}</div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Link-uri Rapide</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'HR Portal', icon: '👤' },
                { name: 'GitHub', icon: '💻' },
                { name: 'Slack', icon: '💬' },
                { name: 'Jira', icon: '📊' },
                { name: 'Calendar', icon: '📅' },
                { name: 'Drive', icon: '📁' }
              ].map((link) => (
                <button
                  key={link.name}
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-medium text-gray-900">{link.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Onboarding View
  const currentStepData = onboardingSteps[onboardingStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {onboardingSteps.map((step, idx) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  idx === onboardingStep 
                    ? 'bg-indigo-600 border-indigo-600 text-white' 
                    : completedSteps.includes(idx)
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  {completedSteps.includes(idx) ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{idx + 1}</span>
                  )}
                </div>
                {idx < onboardingSteps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 rounded-full transition-all ${
                    completedSteps.includes(idx) ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Pasul {onboardingStep + 1} din {onboardingSteps.length}
            </p>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-10 text-white">
            <h1 className="text-3xl font-bold mb-2">{currentStepData.title}</h1>
            <p className="text-indigo-100 text-lg">{currentStepData.subtitle}</p>
          </div>
          
          <div className="px-8 py-10">
            {currentStepData.content}
          </div>

          {/* Navigation */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={onboardingStep === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                onboardingStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Înapoi
            </button>
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
            >
              {onboardingStep === onboardingSteps.length - 1 ? (
                <>
                  Finalizează Onboarding
                  <CheckCircle2 className="w-5 h-5" />
                </>
              ) : (
                <>
                  Continuă
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Skip Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleCompleteOnboarding}
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            Sari peste onboarding →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingApp;
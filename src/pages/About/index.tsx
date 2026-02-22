import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CTAButton } from '../../components/CTAButton';
import { FeatureCard } from '../../components/FeatureCard';

// Additional icons for "What We Do" section
const DigitalTransformationIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const AutomationIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
  </svg>
);

const SoftwareHardwareIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const BusinessGrowthIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 12l4-4 4 4 6-6" />
  </svg>
);

const MultiplatformIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
  </svg>
);

const SmartOperationsIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const whatWeDoFeatures = [
  {
    icon: <DigitalTransformationIcon />,
    title: 'Digital Transformation',
    description: 'Modernize your restaurant operations with cutting-edge digital solutions that streamline workflows and enhance customer experiences.',
  },
  {
    icon: <AutomationIcon />,
    title: 'End-to-end Automation',
    description: 'Automate every aspect of your business from order taking to inventory management, reducing manual errors and saving time.',
  },
  {
    icon: <SoftwareHardwareIcon />,
    title: 'Software + Hardware',
    description: 'Complete solutions combining powerful software with reliable hardware designed specifically for the hospitality industry.',
  },
  {
    icon: <BusinessGrowthIcon />,
    title: 'Business Growth',
    description: 'Scale your operations efficiently with tools that grow with your business, from single locations to multi-site enterprises.',
  },
  {
    icon: <MultiplatformIcon />,
    title: 'Multiplatform Integration',
    description: 'Seamlessly connect with delivery platforms, payment processors, and other essential tools through our unified platform.',
  },
  {
    icon: <SmartOperationsIcon />,
    title: 'Smart Operations',
    description: 'Leverage AI-powered insights and real-time analytics to optimize your operations and maximize profitability.',
  },
];

const trustedCompanies = [
  { name: 'TASTY CO.', icon: '🍔' },
  { name: 'BEAMBREW', icon: '☕' },
  { name: 'CLOUDCHEFS', icon: '👨‍🍳' },
  { name: 'BURGERHUB', icon: '🍟' },
  { name: 'PIZZA LAB', icon: '🍕' },
];

export default function About() {
  return (
    <div id="about" className="min-h-screen flex flex-col bg-[#FBF8F2]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#FBF8F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded mb-6">
                  OUR STORY
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D2B44] leading-tight mb-6">
                  About{' '}
                  <span className="text-primary">Norcross Tech</span>
                </h1>
                <p className="text-gray-700 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                  Pioneering the future of food service through innovative digital solutions that bridge the gap between technology and hospitality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton href="#products" showArrow>
                    Explore Solutions
                  </CTAButton>
                  <CTAButton href="#products" variant="secondary">
                    View Products
                  </CTAButton>
                </div>
              </div>
              {/* Hero Image Section */}
              <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative bg-[#3E6056] rounded-2xl p-6 md:p-8 h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-between overflow-hidden">
                  {/* Desktop Setup */}
                  <div className="flex-1 flex items-end justify-center pb-4 md:pb-8">
                    <div className="relative">
                      {/* Laptop */}
                      <div className="w-32 h-20 md:w-40 md:h-28 lg:w-48 lg:h-32 bg-gray-900 rounded-lg shadow-2xl relative">
                        <div className="absolute inset-2 bg-gray-800 rounded"></div>
                        <div className="absolute top-2 md:top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full"></div>
                      </div>
                      {/* Desk Surface */}
                      <div className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-48 md:w-56 lg:w-64 h-1.5 md:h-2 bg-amber-100 rounded"></div>
                      {/* Plant */}
                      <div className="absolute -top-6 md:-top-8 -right-6 md:-right-8">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="absolute top-1.5 md:top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-green-400 rounded-full"></div>
                      </div>
                      {/* Lemons */}
                      <div className="absolute -bottom-1 md:-bottom-2 -left-8 md:-left-12 flex gap-1.5 md:gap-2">
                        <div className="w-4 h-4 md:w-6 md:h-6 bg-yellow-300 rounded-full"></div>
                        <div className="w-3.5 h-3.5 md:w-5 md:h-5 bg-yellow-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="bg-white/95 rounded-lg p-3 md:p-4 shadow-lg">
                    <h3 className="font-bold text-gray-900 text-xs md:text-sm mb-1">Norcross One</h3>
                    <p className="text-gray-600 text-[10px] md:text-xs">Hardware & POS Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-20 bg-[#FBF8F2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
              <div className="h-px bg-primary w-8 sm:w-12 md:w-16"></div>
              <span className="text-gray-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">OUR MISSION</span>
              <div className="h-px bg-primary w-8 sm:w-12 md:w-16"></div>
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold italic text-gray-800 leading-relaxed px-2">
              "To digitize the restaurant industry by providing seamless, integrated technology that empowers owners and delights customers."
            </blockquote>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 md:py-24 bg-[#FBF8F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D2B44] mb-4">
                What We Do
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">
                We combine software intelligence with hardware reliability to scale your food business.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {whatWeDoFeatures.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Built for Modern Hospitality Section */}
        <section className="py-16 md:py-24 bg-[#1D2B44]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Built for Modern Hospitality
                </h2>
                <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed">
                  Our proprietary dashboard gives you 360-degree visibility into your entire operation, from multiple locations to gross vs. net tracking.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white text-sm sm:text-base">Unified reporting across all channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white text-sm sm:text-base">Real-time kitchen food monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white text-sm sm:text-base">Contactless loyalty program management</span>
                  </li>
                </ul>
              </div>
              {/* Dashboard Image Placeholder */}
              <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="bg-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm">
                  <div className="space-y-3 md:space-y-4">
                    <div className="h-3 md:h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-3 md:h-4 bg-white/20 rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
                      <div className="h-16 md:h-20 lg:h-24 bg-white/10 rounded"></div>
                      <div className="h-16 md:h-20 lg:h-24 bg-white/10 rounded"></div>
                      <div className="h-16 md:h-20 lg:h-24 bg-white/10 rounded"></div>
                    </div>
                    <div className="h-24 md:h-28 lg:h-32 bg-white/10 rounded mt-3 md:mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 md:py-24 bg-[#FBF8F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-6">
                <div className="h-px bg-primary w-8 sm:w-12 md:w-16"></div>
                <span className="text-gray-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">THE INDUSTRY STANDARD</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D2B44] mb-6 md:mb-8 px-2">
                Trusted by restaurants, cafés, cloud kitchens & food brands
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              {trustedCompanies.map((company) => (
                <div key={company.name} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl" aria-hidden>
                    {company.icon}
                  </div>
                  <span className="text-gray-700 font-semibold text-xs sm:text-sm">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-[#2563EB] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Join over 5,000+ food businesses that have digitized their operations with Norcross Tech.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors bg-white text-[#1D2B44] hover:bg-gray-100 px-5 py-2.5 sm:px-6 sm:py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-sm sm:text-base"
                >
                  Request a Demo
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors bg-transparent text-white border-2 border-white hover:bg-white/10 px-5 py-2.5 sm:px-6 sm:py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-sm sm:text-base"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

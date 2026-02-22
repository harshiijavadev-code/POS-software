import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CTAButton } from '../../components/CTAButton';
import { ProductCard } from '../../components/ProductCard';
import { ContactForm } from '../../components/ContactForm';
import {
  CloudIcon,
  QRIcon,
  IntegrationsIcon,
  TableIcon,
  ReservationIcon,
  MergeIcon,
  KioskIcon,
  AnalyticsIcon,
  CRMIcon,
} from '../../components/icons';

const products = [
  {
    icon: <CloudIcon />,
    title: 'Cloud POS',
    description:
      'Run your restaurant from anywhere with our cloud-based point of sale. Real-time sync, offline mode, and automatic updates.',
  },
  {
    icon: <QRIcon />,
    title: 'QR Dine-In',
    description:
      'Let guests order and pay at the table with QR codes. Reduce wait times and increase turnover without extra staff.',
  },
  {
    icon: <IntegrationsIcon />,
    title: 'Integrations Hub',
    description:
      'Connect your favorite tools—delivery apps, accounting, loyalty—through one unified integrations platform.',
  },
  {
    icon: <TableIcon />,
    title: 'Table Management',
    description:
      'Optimize floor plans, track table status in real time, and streamline seating with smart table management.',
  },
  {
    icon: <ReservationIcon />,
    title: 'Reservation System',
    description:
      'Accept and manage reservations online. Reduce no-shows with reminders and waitlist automation.',
  },
  {
    icon: <MergeIcon />,
    title: 'Merge Engine',
    description:
      'Consolidate orders from all channels into one kitchen display. One workflow, fewer errors.',
  },
  {
    icon: <KioskIcon />,
    title: 'Self-Ordering Kiosk',
    description:
      'Speed up service and boost add-ons with customizable self-service kiosks for dine-in and takeout.',
  },
  {
    icon: <AnalyticsIcon />,
    title: 'Business Analytics',
    description:
      'Make data-driven decisions with dashboards, sales reports, and insights tailored to hospitality.',
  },
  {
    icon: <CRMIcon />,
    title: 'Advanced CRM',
    description:
      'Know your guests. Track preferences, visit history, and campaigns to grow repeat business.',
  },
];

const benefits = [
  'Free personalized demo',
  '24/7 service support',
  'Flexible hardware financing',
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded mb-6">
                  Meet Norcross Tech
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Powering Restaurants with{' '}
                  <span className="text-primary">Smart Technology</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                  Revolutionize your operations with our Integrated POS, QR ordering, and seamless
                  third-party integrations designed for the modern hospitality era.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton href="#contact" showArrow>
                    Get Started
                  </CTAButton>
                  <CTAButton href="#products" variant="secondary">
                    View Products
                  </CTAButton>
                </div>
              </div>
              {/* Hero graphics placeholder */}
              <div className="relative hidden lg:block">
                <div className="flex gap-4 items-start justify-end">
                  <div className="w-48 h-56 rounded-xl bg-amber-100/80 shadow-lg -rotate-3 transform" />
                  <div className="w-56 h-64 rounded-xl bg-navy shadow-xl mt-8 rotate-2 transform flex items-center justify-center p-4">
                    <div className="w-full h-24 rounded bg-blue-500/30" />
                    <div className="absolute bottom-8 left-8 right-8 h-1 bg-gray-600 rounded" />
                  </div>
                  <div className="w-44 h-52 rounded-xl bg-amber-50 shadow-lg mt-16 -rotate-2 transform border border-gray-100 p-3">
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4" />
                      <div className="h-2 bg-gray-200 rounded w-1/2" />
                      <div className="h-2 bg-gray-200 rounded w-5/6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product cards */}
        <section id="products" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                A Unified Operating System
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Everything you need to run, grow, and optimize your restaurant from a single pane
                of glass.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.title}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA form */}
        <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-white flex flex-col lg:flex-row">
              <div className="bg-primary p-8 md:p-10 lg:p-12 flex-shrink-0 lg:w-2/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to transform your business?
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                  Join 2,000+ restaurants that run on Norcross Tech. Fill out the form and our
                  team will be in touch within 24 hours.
                </p>
                <ul className="space-y-3">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <svg
                        className="w-5 h-5 text-green-300 shrink-0"
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
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

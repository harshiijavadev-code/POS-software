import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ProductCard } from '../../components/ProductCard';
import { CTAButton } from '../../components/CTAButton';
const iconClass = 'w-5 h-5';

// Product-specific icons (yellow square with white pictogram style)
const POSIcon = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  </span>
);

const SOKIcon = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  </span>
);

const OnlineOrderingIcon = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  </span>
);

const DeliverySyncIcon = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  </span>
);

const PaymentGatewayIcon = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  </span>
);

const InventoryIcon = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  </span>
);

const MenuManagementIcon = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v20M16 2v20" />
      <path d="M8 4h8M8 8h8M8 12h8M8 16h8M8 20h8" />
      <path d="M12 2l-2 4 2 4 2-4-2-4z" />
      <path d="M12 18l-2 4 2 4 2-4-2-4z" />
    </svg>
  </span>
);

const ReportingIcon = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  </span>
);

// White-stroke icon versions for yellow boxes
const MergeIconWhite = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </span>
);

const TableIconWhite = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 10h18M3 14h18M8 5v14M16 5v14" />
    </svg>
  </span>
);

const ReservationIconWhite = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </span>
);

const IntegrationsIconWhite = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  </span>
);

const QRIconWhite = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="4" height="4" rx="1" />
      <rect x="9" y="14" width="4" height="4" rx="1" />
      <path d="M14 14h1M17 17h2M20 14h1" />
    </svg>
  </span>
);

const CRMIconWhite = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  </span>
);

const CloudIconWhite = () => (
  <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  </span>
);

const products = [
  {
    icon: <POSIcon />,
    title: 'POS System',
    description: 'Full-stack enterprise point of sale',
  },
  {
    icon: <MergeIconWhite />,
    title: 'Merge',
    description: 'Multi-platform order manager',
  },
  {
    icon: <SOKIcon />,
    title: 'SOK',
    description: 'Smart order kitchen automation',
  },
  {
    icon: <TableIconWhite />,
    title: 'Table Management',
    description: 'Floor plan and seating optimization',
  },
  {
    icon: <ReservationIconWhite />,
    title: 'Reservations',
    description: 'Online reservations and waitlist',
  },
  {
    icon: <IntegrationsIconWhite />,
    title: 'Integrations Hub',
    description: 'Connect apps and delivery platforms',
  },
  {
    icon: <QRIconWhite />,
    title: 'QR Dine-In',
    description: 'Order and pay at the table with QR',
  },
  {
    icon: <OnlineOrderingIcon />,
    title: 'Online Ordering',
    description: 'Web and app ordering for your brand',
  },
  {
    icon: <DeliverySyncIcon />,
    title: 'Delivery Sync',
    description: 'Unified delivery and dispatch',
  },
  {
    icon: <PaymentGatewayIcon />,
    title: 'Payment Gateway',
    description: 'Secure payments and reconciliation',
  },
  {
    icon: <CRMIconWhite />,
    title: 'CRM & Analytics',
    description: 'Guest data and business insights',
  },
  {
    icon: <InventoryIcon />,
    title: 'Inventory',
    description: 'Stock, costing, and purchase orders',
  },
  {
    icon: <MenuManagementIcon />,
    title: 'Menu Management',
    description: 'Menus, modifiers, and items',
  },
  {
    icon: <CloudIconWhite />,
    title: 'Cloud Kitchen',
    description: 'Virtual brands and cloud locations',
  },
  {
    icon: <ReportingIcon />,
    title: 'Reporting',
    description: 'Dashboards and custom reports',
  },
];

export default function Product() {
  const [search, setSearch] = useState('');

  const filteredProducts = search.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <div id="products" className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Optional: Search bar - matches image layout when Header supports it */}
        <section className="border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                aria-label="Search products"
              />
            </div>
          </div>
        </section>

        {/* Product cards grid */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.title}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  centered
                />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <p className="text-center text-gray-500 py-12">No products match your search.</p>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  Ready to transform your business?
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Join 50,000+ hospitality leaders worldwide.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <CTAButton href="#products" variant="secondary" className="w-full sm:w-auto justify-center">
                  View All Features
                </CTAButton>
                <CTAButton href="#contact" className="w-full sm:w-auto justify-center">
                  Schedule a Demo
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

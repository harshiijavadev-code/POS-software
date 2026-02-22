import type { ReactNode } from 'react';

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export function ProductCard({ icon, title, description, href = '#products' }: ProductCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 h-full flex flex-col">
      <div className="mb-4 w-10 h-10 flex items-center justify-center text-2xl" aria-hidden>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
      <a
        href={href}
        className="mt-4 inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary-dark group"
      >
        Explore
        <svg
          className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </article>
  );
}

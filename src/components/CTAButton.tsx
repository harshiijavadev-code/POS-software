import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  showArrow?: boolean;
  className?: string;
}

export function CTAButton({
  children,
  variant = 'primary',
  href,
  showArrow = false,
  className = '',
  ...props
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50';
  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark px-5 py-2.5 md:px-6 md:py-3',
    secondary:
      'bg-white text-gray-800 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 px-5 py-2.5 md:px-6 md:py-3',
  };
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      {children}
      {showArrow && (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}

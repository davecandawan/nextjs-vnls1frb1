import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface CallToActionButtonProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  className = '',
  children = 'Give Me My Laser Strike System + FREE Range Bag!',
  href = 'https://secure.vnsh.com/vnls1frb1/checkout',
}) => {
  const searchParams = useSearchParams();

  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };

  const buttonClass = `
    bg-[#28a745] text-white font-bold py-3 text-[20px] leading-tight
    sm:text-xl md:text-2xl lg:text-[32px]
    transition-all duration-300 animate-custom-pulse hover:opacity-90 hover:scale-[1.02] hover:text-white
    min-h-[4rem] flex items-center justify-center mx-auto text-center
    w-[95%] max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] xl:max-w-[950px] 2xl:max-w-[1000px] rounded-lg
    whitespace-normal lg:whitespace-nowrap
    px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24
    @media (orientation: landscape) and (max-width: 1024px) {
      width: 90%;
      max-width: 550px;
      padding: 0.75rem 1.5rem;
      white-space: normal;
      line-height: 1.3;
    }
    ${className}
  `;

  const url = getCheckoutUrl(href);
  return (
    <Link href={url} className={buttonClass}>
      {children}
    </Link>
  );
};

export default CallToActionButton;

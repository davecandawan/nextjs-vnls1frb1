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
    bg-[#28a745] text-white font-bold py-4 text-[22px]
    sm:text-2xl md:text-[28px] lg:text-[32px]
    transition-all duration-300 animate-custom-pulse hover:opacity-90 hover:scale-[1.02] hover:text-white
    min-h-[4.5rem] flex items-center justify-center mx-auto text-center
    w-[95%] max-w-[400px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1100px] rounded-lg
    whitespace-normal lg:whitespace-nowrap
    px-10 sm:px-14 md:px-20 lg:px-28 xl:px-32
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

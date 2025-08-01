import React, { useState } from 'react';
import Image from 'next/image';
import FooterModal from './FooterModal';

interface FooterColumnProps {
  imgUrl: string;
  title: string;
  text: string;
  imgWidth?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ imgUrl, title, text }) => {
  // Define image dimensions based on the image type
  const imageConfig = {
    'MoneyBack.avif': { width: 240, height: 144 }, // Further reduced size
    'USFlag.avif': { width: 240, height: 144 }, // Further reduced size
    'vnsh_secure_payment_footer.webp': { width: 400, height: 120 }, // Kept original size
  };

  // Find the matching config or use defaults
  const imageKey = Object.keys(imageConfig).find(key => imgUrl.includes(key));
  const { width, height } = imageKey
    ? imageConfig[imageKey as keyof typeof imageConfig]
    : { width: 400, height: 240 };

  return (
    <div className="flex-1 min-w-[250px] max-w-[400px] p-4 text-center flex flex-col">
      <div className="flex flex-col items-center" style={{ minHeight: '160px' }}>
        <div className="relative w-full" style={{ height: `${height}px` }}>
          <div
            className="relative w-full h-full"
            style={{ maxWidth: `${width}px`, margin: '0 auto' }}
          >
            <Image
              src={imgUrl}
              alt={title}
              width={width}
              height={height}
              className="object-contain w-full h-full mx-auto"
              quality={100}
              priority
              style={{
                objectFit: 'contain',
                imageRendering: 'crisp-edges',
                width: '100%',
                height: 'auto',
                maxHeight: '100%',
              }}
              sizes="(max-width: 768px) 90vw, 33vw"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 flex-1 flex flex-col">
        <h3 className="text-lg font-extrabold mb-2 text-black whitespace-nowrap">{title}</h3>
        <p className="text-black !text-[16px] !leading-[1.2] font-normal tracking-normal">{text}</p>
      </div>
    </div>
  );
};

interface FooterLinkProps {
  label: string;
  id: string;
  onClick: (id: string) => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, id, onClick }) => (
  <a
    className="text-black cursor-pointer hover:text-black transition-colors duration-300 mx-2"
    onClick={e => {
      e.preventDefault();
      onClick(id);
    }}
  >
    {label}
  </a>
);

const FooterLinks: React.FC<{ loadInfo: (id: string) => void }> = ({ loadInfo }) => (
  <div className="w-full text-lg text-center flex flex-wrap justify-center items-center space-x-4">
    <FooterLink label="Terms & Disclaimer" id="terms-pop-modal" onClick={loadInfo} />
    <FooterLink label="Privacy Policy" id="privacy-policy-modal" onClick={loadInfo} />
    <FooterLink label="Shipping Policy" id="shipping-policy-modal" onClick={loadInfo} />
    <FooterLink label="Return Policy" id="return-policy-modal" onClick={loadInfo} />
  </div>
);

const Footer: React.FC = () => {
  const [modalId, setModalId] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const loadInfo = (id: string) => {
    setModalId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalId('');
  };

  return (
    <footer className="w-full mt-2 bg-white">
      <div className="pb-[34px] text-black bg-white">
        <div className="py-4">
          <div className="box-border min-w-[250px] max-w-6xl mx-auto px-4 flex flex-wrap justify-around gap-6">
            <FooterColumn
              imgUrl="/contentimages/MoneyBack.avif"
              title="60-Day Money Back Guarantee"
              text="No question asked 60 day refund or replacement guaranteed. If you are unhappy for any reason, get your money back. Rock solid guarantee..."
            />
            <FooterColumn
              imgUrl="/contentimages/USFlag.avif"
              title="Thank You!"
              text="Your purchase supports the second amendment community and increases our ability to defend ourselves and remain free."
            />
            <FooterColumn
              imgUrl="/contentimages/vnsh_secure_payment_footer.webp"
              title="100% Secure Payment"
              text="All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy..."
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-lg text-center text-black mb-0 sm:-mb-2">
            © {new Date().getFullYear()} VNSH.com All Rights Reserved.
          </div>
          <div className="mt-2 sm:mt-0">
            <FooterLinks loadInfo={loadInfo} />
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-start justify-center transition-all duration-300 ease-in-out ${
          showModal ? 'bg-black/50' : 'pointer-events-none bg-black/0'
        }`}
        style={{
          paddingTop: '5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
        onClick={closeModal}
      >
        <div
          className={`bg-white rounded-lg max-w-6xl w-full max-h-[100vh] overflow-y-auto relative p-2 transform transition-all duration-300 ease-in-out ${
            showModal ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-black hover:text-black bg-transparent border-none hover:bg-transparent"
            onClick={closeModal}
            aria-label="Close modal"
          >
            &times;
          </button>
          <FooterModal modalId={modalId} closeModal={closeModal} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

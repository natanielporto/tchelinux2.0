import React from 'react';
import Image from 'next/image';
import tux from '../../public/Tuxgaucho.svg';

const MidSection = () => (
  <>
    <div className="flex-1 w-9/12 mt-12 align-middle relative">
      <div className="text-live text-right text-tche-dark-gray absolute -top-8 right-0">
        Live
        <strong>2021</strong>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-liveIconTop right-liveIconRight text-tche-dark-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
      <div className="text-9xl text-right font-bold text-transparent bg-clip-text bg-gradient-to-br from-tche-red to-tche-less-red">Tchelinux</div>
    </div>

    <div>
      olá
      <Image src={tux} height={300} width={300} alt="Tux Gaúcho" />
    </div>
  </>
);

export default MidSection;

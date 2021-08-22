import React, { useState } from 'react';

const NavBar = () => {
  const [language, setLanguage] = useState<boolean>(true);

  const links = [
    { ref: 'https://wiki.tchelinux.org/#!sobre.md', text: 'Sobre o Tchelinux' },
    { ref: 'https://wiki.tchelinux.org/#!onde.md', text: 'Onde estamos?' },
    { ref: 'https://wiki.tchelinux.org/#!como_participar.md', text: 'Como participar?' },
    { ref: 'https://wiki.tchelinux.org/#!como_ajudar.md', text: 'Como ajudar?' },
    { ref: 'https://live.tchelinux.org/', text: 'Calendário de eventos' },
    { ref: 'https://certificados.tchelinux.org/', text: 'Certificados' },
    { ref: 'https://wiki.tchelinux.org/#!index.md', text: 'Wiki' },
  ];

  return (
    <div className="flex justify-end">
      {links.map((el, index) => (
        <a key={String(el.text + index)} href={el.ref} target="_blank" className="m-5 pb-2 transition duration-150 border-b-4 border-transparent hover:border-red-500" rel="noreferrer">{el.text}</a>
      ))}
      <button type="button" onClick={() => setLanguage(!language)}>
        <img
          src={language ? 'https://lipis.github.io/flag-icon-css/flags/4x3/br.svg' : 'https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg'}
          alt={language ? 'Trocar linguagem para Inglês' : 'Change language to brazilian Portuguese'}
          className="ml-5 mr-0 pb-2 w-8"
        />
      </button>
    </div>
  );
};

export default NavBar;

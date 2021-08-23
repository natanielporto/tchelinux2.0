import React, { useState } from 'react';
import styles from '../../styles/components/NavBar.module.css';

const NavBar = () => {
  const [language, setLanguage] = useState<boolean>(true);

  const links = [
    { ref: 'https://wiki.tchelinux.org/#!sobre.md', text: 'Sobre' },
    { ref: 'https://forms.gle/ugDGs3oTTnkfhL7J7', text: 'Chamada de Trabalhos' },
    { ref: 'https://wiki.tchelinux.org/#!como_participar.md', text: 'Como participar?' },
    { ref: 'https://wiki.tchelinux.org/#!como_ajudar.md', text: 'Como ajudar?' },
    { ref: 'https://live.tchelinux.org/', text: 'Calendário' },
    { ref: ' https://conduta.tchelinux.org/', text: 'Código de Conduta' },
  ];

  return (
    <div className={styles.align}>
      {links.map((el, index) => (
        <a key={String(el.text + index)} href={el.ref} target="_blank" className={styles.link} rel="noreferrer">{el.text}</a>
      ))}
      <button type="button" onClick={() => setLanguage(!language)}>
        <img
          src={language ? 'https://lipis.github.io/flag-icon-css/flags/4x3/br.svg' : 'https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg'}
          alt={language ? 'Trocar linguagem para Inglês' : 'Change language to brazilian Portuguese'}
          className={styles.image}
        />
      </button>
    </div>
  );
};

export default NavBar;

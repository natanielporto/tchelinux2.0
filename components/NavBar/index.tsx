import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/NavBar.module.css';

const NavBar = () => {
  const [language, setLanguage] = useState<boolean>(true);
  const teaser = true;

  const commonLinks = [
    { ref: 'https://wiki.tchelinux.org/#!sobre.md', text: 'Sobre' },
    { ref: 'https://forms.gle/ugDGs3oTTnkfhL7J7', text: 'Chamada de Trabalhos' },
    { ref: 'https://wiki.tchelinux.org/#!como_participar.md', text: 'Como participar?' },
    { ref: 'https://wiki.tchelinux.org/#!como_ajudar.md', text: 'Como ajudar?' },
    { ref: 'https://live.tchelinux.org/', text: 'Calendário' },
    { ref: 'https://conduta.tchelinux.org/', text: 'Código de Conduta' },
  ];

  const teaserLinks = [
    { ref: '#sobre', text: 'Sobre' },
    { ref: '#chamada', text: 'Chamada de Trabalhos' },
    { ref: '#participar', text: 'Como participar?' },
    { ref: '#ajudar', text: 'Como ajudar?' },
    { ref: '#calendario', text: 'Calendário' },
    { ref: '#duvidas', text: 'Dúvidas' },
  ];

  return (
    <nav>
      <ul className={styles.align}>
        {teaser ? (teaserLinks.map((el, index) => (
          <li key={String(el.text + index)} className={styles.link}>
            <Link href={el.ref} passHref>
              <a href={`#${el.ref}`} rel="noreferrer">{el.text}</a>
            </Link>
          </li>
        ))) : (
          commonLinks.map((el, index) => (
            <li key={String(el.text + index)} className={styles.link}>
              <Link href={el.ref} passHref>
                <a target="_blank" href={el.ref} rel="noreferrer">{el.text}</a>
              </Link>
            </li>
          )))}
        <button type="button" onClick={() => setLanguage(!language)}>
          <img
            src={language ? 'https://lipis.github.io/flag-icon-css/flags/4x3/br.svg' : 'https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg'}
            alt={language ? 'Trocar linguagem para Inglês' : 'Change language to brazilian Portuguese'}
            className={styles.image}
          />
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;

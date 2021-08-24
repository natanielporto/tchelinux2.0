import React, { useState, useEffect } from 'react';
import data from '../../pages/data.json';
import styles from '../../styles/components/TeaserPageSection.module.css';

interface Sections {
  id: string;
  hash: string;
  title: string;
  description: Array<string|string[]>;
}

interface ListElement {
  text: string;
  date: string;
}

const TeaserPageSection = () => {
  const [sectionsToShow, setSectionsToShow] = useState<Sections[]>([]);

  useEffect(() => {
    try {
      const pageSections = JSON.parse(JSON.stringify(data));
      setSectionsToShow(pageSections.sections);
    } catch (e) {
      console.log('Error', e);
    }
  }, []);

  return (
    <>
      {sectionsToShow.map((section) => (
        <div key={section.id} className={styles.container} id={section.hash}>
          <h2 className={styles.title}>{section.title}</h2>
          {section.description.length === 7
            ? (
              <ul className={styles.description}>
                {section && section.description.map(
                  (el) => (
                    <li className={styles.list}>
                      <span className="pr-2">{el.text}</span>
                      <strong>{el.date}</strong>
                    </li>
                  ),
                )}
              </ul>
            )
            : (<p className={styles.description}>{section.description}</p>)}
        </div>
      ))}
    </>
  );
};

export default TeaserPageSection;

// <>
// {sectionsToShow.length > 0 ? (sectionsToShow.map((section) => (
//   <div key={section.id} className={styles.container}>
//     <h2 className={styles.title}>{section.title}</h2>
//     {section.description.length > 1
//       ? (
//         <ul>
//           {section.description.map(
//             (el) => (<li className={styles.description}>{el}</li>),
//           )}
//         </ul>
//       )
//       : (<p className={styles.description}>{section.description}</p>)}
//   </div>
// ))) : <div />}
// </>

import { useState} from 'react';
import classNames from 'classnames';
import Establishment from '../public/img/svg/establishment.svg';
import Philosophy from '../public/img/svg/philosophy.svg';
import Vision from '../public/img/svg/vision.svg';
import styles from '../styles/components/TabbedIcons.module.scss';


const TabbedIcons = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const drawIcon = key => {
    const imgClass = classNames({
      button__icon: true,
      button__icon__active: activeTab === key
    });
    switch (key) {
      case 'establishment':
        return <Establishment className={imgClass} />;
      case 'philosophy':
        return <Philosophy className={imgClass} />;
      case 'vision':
        return <Vision className={imgClass} />;
    }
  }
  const selectTab = e => {
    const { id } = e.target;
    if (id !== activeTab) setActiveTab(id);
  };
  return (
    <>
      <div className={styles.tab}>
        { tabs.map((tab) => {
          return (<button type="button" id={tab.key} key={tab.key} className={styles.tab__links} onClick={selectTab}>
            { drawIcon(tab.key) }
          </button>)
        })}
      </div>

      { tabs.map((tab) => {
        const tabClass = classNames({
          tab__inactive: activeTab !== tab.key,
          tab__active: activeTab === tab.key
        });
        console.log('tabClass:', tabClass);
        return (
          <div key={tab.key} className={styles[tabClass]}>
            <h3 className={styles.tab__title}>{tab.title}</h3>
            <p>{tab.description}</p>
          </div>);
      })}
    </>
  )
}

export default TabbedIcons;

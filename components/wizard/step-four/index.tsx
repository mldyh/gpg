import {
  findIconDefinition,
  IconDefinition,
  IconLookup,  IconName} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { IStep, SOCIAL_LINKS } from '../helper';
import styles from './styles.module.css';

const StepFour = ({ data, onChange, onContinue }: IStep) => {
  
  const handleClick = () => {
    onContinue();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, sl: string) => {
    const value = e.target.value;
    const nextData = {...data, socials: {...data.socials, [sl]: value}}
    onChange(nextData)
  }

  return (
    <>
      <h2>Let People Know <br />Where You are</h2>
      <div className={styles.stepfour__wrapper}>
        <div className={styles.stepfour__list}>
          {
            Object.keys(SOCIAL_LINKS).map((sl) => {
              const iconLookup: IconLookup = { prefix: 'fab', iconName: sl.toLowerCase().split(' ').join('-') as IconName }
              const iconDefinition: IconDefinition = findIconDefinition(iconLookup)
              return (
                <div key={sl} className={styles.stepfour__list__item}>
                  <input placeholder={`${sl} username`} className="gpg-input-small" value={data.socials?.[sl] ?? ''} onChange={(e) => handleChange(e, sl)} />
                  <div>
                    <FontAwesomeIcon icon={iconDefinition} />
                  </div>
                </div>
              )
            })
          }
        </div>
        <button className='gpg-button gpg-button-small' onClick={handleClick}>Continue</button>
      </div>
    </>
)};

export default StepFour;

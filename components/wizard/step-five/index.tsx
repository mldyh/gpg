import {
  findIconDefinition,
  IconDefinition,
  IconLookup,  IconName} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { DONATION_LINKS, IStep } from '../helper';
import styles from '../step-four/styles.module.css';

const StepFive = ({ data, onChange, onContinue }: IStep) => {
  
  const handleClick = () => {
    onContinue();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, dl: string) => {
    const value = e.target.value;
    const nextData = {
      ...data, 
      donations: {
        ...data.donations, 
        [dl]: {
          ...data.donations?.[dl], 
          username: value
        }
      }
    }
    onChange(nextData)
  }

  return (
    <>
      <h2>Let People <br />Support Your Project</h2>
      <div className={styles.stepfour__wrapper}>
        <div className={styles.stepfour__list}>
          {
            Object.keys(DONATION_LINKS).map((dl) => {
              return (
                <div key={dl} className={styles.stepfour__list__item}>
                  <input placeholder={`${dl} username`} className="gpg-input-small" value={data.donations?.[dl]?.username ?? ''} onChange={(e) => handleChange(e, dl)} />
                  <div>
                    <img src={DONATION_LINKS[dl].imageURL} />
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

export default StepFive;

import React, { useState } from 'react';

import { IData, StepContent, STEPS } from './helper';
import styles from './styles.module.css';

const Wizard = () => {
  const [data, setData] = useState<IData>({} as IData)
  const [step, setStep]  = useState(STEPS.USERNAME);
  const ContentComponent = StepContent(step);

  const handleStepChange = () => {
    const newStep = step + 1;
    setStep(newStep)
  }

  return (
  <div className={styles.wizard}>
    <div className={styles.wizard__ilustration}>
      <img src={`./${step}.png`} />
    </div>
    <div className={styles.wizard__content}>
      <div className={styles.wizard__content__body}>
        <ContentComponent data={data} onChange={setData} onContinue={handleStepChange}  />
      </div>
      <div className={styles.wizard__content__footer}>
        <div className={styles.wizard__content__footer_link}>
          <a href='https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme' target='_blank' className='gpg-button gpg-button-link gpg-button-small' rel="noreferrer">
            Create Github Profile
          </a>
          <a href='https://github.com/maulidiyah-nur/gpg' target='_blank'  className='gpg-button gpg-button-link gpg-button-small' rel="noreferrer">
            Open Source
          </a>
        </div>
      </div>
    </div>
  </div>
)};

export default Wizard;

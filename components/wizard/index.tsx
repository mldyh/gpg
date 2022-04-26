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
          <a href='/create-your-github-profile' className='gpg-button gpg-button-link gpg-button-small'>
            Create Github Profile
          </a>
          <a href='https://github.com' className='gpg-button gpg-button-link gpg-button-small'>
            Open Source
          </a>
          <a href='https://github.com' className='gpg-button gpg-button-primary gpg-button-small'>
            Donate Us
          </a>
        </div>
      </div>
    </div>
  </div>
)};

export default Wizard;

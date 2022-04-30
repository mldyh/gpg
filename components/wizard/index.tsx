import React, { useState } from 'react';

import { StepContent, STEPS } from '../../constants/steps';
import { IData } from '../../interfaces/data';
import styles from './styles.module.css';

const Wizard = () => {
  const [data, setData] = useState<IData>({
    greetings: `Hi There 👋`,
    bio: `I'm Jane Doe, a passionate Front End Developer from Indonesia.

🔭 I’m currently working on

👯 I’m looking to collaborate on

🤝 I’m looking for help with

🌱 I’m currently learning

💬 Ask me about

⚡ Fun fact I've never been in space cause I'm using tab`,
socials: {},
donations: {},
skills: []
  } as IData)
  const [step, setStep]  = useState(STEPS.USERNAME);
  const ContentComponent = StepContent(step);

  const handleStepChange = () => {
    let nextStep = step + 1;
    if (nextStep > STEPS.DONE) nextStep = STEPS.USERNAME;
    setStep(nextStep);
  }

  return (
  <div className={styles.wizard}>
    <div className={styles.wizard__ilustration}>
      <img src={`./${step}.png`} />
    </div>
    <div className={styles.wizard__content}>
      <div className={styles.wizard__content__header}>
        <div>
          <h2>GITHUB <br/><span className='text-grey'>PROFILE</span> <br />GENERATOR</h2>
        </div>
        <div>
          <a href='https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme' target='_blank' className='gpg-button gpg-button-link gpg-button-small' rel="noreferrer">
            Create Github Profile
          </a>
          <a href='https://github.com/maulidiyah-nur/gpg' target='_blank'  className='gpg-button gpg-button-link gpg-button-small' rel="noreferrer">
            Open Source
          </a>
        </div>
      </div>
      <div className={styles.wizard__content__body}>
        <ContentComponent data={data} onChange={setData} onContinue={handleStepChange}  />
      </div>
    </div>
  </div>
)};

export default Wizard;

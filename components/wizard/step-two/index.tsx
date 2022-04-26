import React from 'react';

import { IStep } from '../helper';
import styles from './styles.module.css';

const StepTwo = ({ data, onChange, onContinue }: IStep) => {
  
  const handleClick = () => {
    onContinue();
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
    const value = e.target.value;
    onChange({...data, bio: value})
  }

  const placeholder = `🔭 I’m currently working on
👯 I’m looking to collaborate on
🤝 I’m looking for help with
🌱 I’m currently learning
💬 Ask me about
⚡ Fun fact I've never been in space cause I'm using tab`

  return (
    <>
      <h2>Introduce <br />Yourself</h2>
      <div className={styles.steptwo__form}>
        <textarea 
          className='gpg-input-small' 
          rows={7} 
          value={data.bio ?? ''} 
          onChange={handleChange}
          placeholder={placeholder}
          />
        <button className='gpg-button gpg-button-small' onClick={handleClick}>Continue</button>
      </div>
    </>
)};

export default StepTwo;

import React from 'react';

import { IStep } from '../helper';
import styles from './styles.module.css';

const StepOne = ({ data, onChange, onContinue }: IStep) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (data.username?.trim().length > 0) {
      onContinue();
    } else e.preventDefault();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const value = e.target.value;
    onChange({...data, username: value})
  }

  return (
    <>
      <h2>GITHUB <br/><span className='text-grey'>PROFILE</span> <br />GENERATOR</h2>
      <div className={styles.stepone__form}>
        <input autoFocus placeholder='Enter you Github username' value={data.username ?? ''} onChange={handleChange}/>
        <button className='gpg-button gpg-button-primary' onClick={handleClick}>Go</button>
      </div>
    </>
)};

export default StepOne;

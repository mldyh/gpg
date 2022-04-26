import React from 'react';

import { IStep } from '../helper';

const StepThree = ({ data, onChange, onContinue }: IStep) => {
  
  const handleClick = () => {
    onContinue();
  }

  // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
  //   const value = e.target.value;
  //   onChange({...data, bio: value})
  // }

  return (
    <>
      <h2>Show off <br />Your Stack</h2>
      <div>
        <button className='gpg-button gpg-button-small' onClick={handleClick}>Continue</button>
      </div>
    </>
)};

export default StepThree;

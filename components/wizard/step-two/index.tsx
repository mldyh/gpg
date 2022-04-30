import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { IStep } from '../../../interfaces/steps';
import { TranslateToMarkDown } from '../../../utils/translator';

const StepTwo = ({ data, onContinue }: IStep) => {
  const [showMarkdown, setShowMarkdown] = useState(false);

  const handleCopy = () => {
    const textArea = document.getElementById("translated-content") as HTMLTextAreaElement;
    textArea?.select();
    navigator.clipboard.writeText(textArea?.value);
    alert("Copied the text: " + textArea?.value);
  }
  return (
    <>
      <div className="row">
        <div className="col">
          <button className='gpg-button gpg-button-small' onClick={onContinue}>EDIT</button>
        </div>
        {
          showMarkdown ? (
          <div className="col align-end">
            <button className='gpg-button gpg-button-small' onClick={() => setShowMarkdown(!showMarkdown)}>MARKDOWN</button>
          </div>
          ) : (
            <>
              <div className="col align-center">
                <button className='gpg-button gpg-button-small' onClick={handleCopy}>COPY</button>
              </div>
              <div className="col align-end">
                <button className='gpg-button gpg-button-small' onClick={() => setShowMarkdown(!showMarkdown)}>PREVIEW</button>
              </div>
            </>
          )
        }
        
      </div>
      {
        showMarkdown ? (
        <ReactMarkdown className='gpg-card'>
          {TranslateToMarkDown(data)}
        </ReactMarkdown>) : (
          <div className="row">
            <div className="col">
              <textarea 
                id="translated-content" 
                className='gpg-input' 
                value={TranslateToMarkDown(data)} 
                disabled rows={30} />
            </div>
        </div>
          )
      }
          
        
    </>
)};

export default StepTwo;

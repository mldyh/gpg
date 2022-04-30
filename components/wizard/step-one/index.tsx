import React from 'react';

import { CATEGORIZED_SKILLS } from '../../../constants/skills';
import { SOCIAL_LINKS } from '../../../constants/socials';
import { SUPPORT_LINKS } from '../../../constants/support';
import { IStep } from '../../../interfaces/steps';

const StepOne = ({ data, onChange, onContinue }: IStep) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (data.greetings?.trim().length > 0) {
      onContinue();
    } else e.preventDefault();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: React.ChangeEvent<any>, fieldname: string, subfield?: string ) => {
    const value = e.target.value;
    const nextData = {
      ...data, 
      [fieldname]: subfield ? {
        ...data?.[fieldname],
        [subfield]: value
      } : value
    }
    onChange(nextData)
  }

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, val: string) => {
    const value = e.target.checked;
    const nextData = {
      ...data, 
      skills: value ? [...(data.skills ?? []), val] : data.skills?.filter((s) => s !== val)
    }
    onChange(nextData)
  }
  return (
    <>
      <div className="row">
        <div className="col">
          <input 
            autoFocus 
            value={data.greetings ?? ''} 
            onChange={(e) => handleChange(e, 'greetings')}
            />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <textarea 
            rows={9} 
            value={data.bio ?? ''} 
            onChange={(e) => handleChange(e, 'bio')}
            />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>SKILLS</h3>
        </div>
      </div>
        {CATEGORIZED_SKILLS.map((cs) => (
          <React.Fragment key={cs.title}>
            <div className="row">
              <div className="col">
                <h4>{cs.title.toUpperCase()}</h4>
              </div>
            </div>
            <div className="row">
              {cs.skills.map((s) => (
                <div key={s} className="col">
                  <label className="gpg-checkbox">
                    <input 
                      type="checkbox" 
                      checked={data.skills?.includes(s) ? true : false}
                      onChange={(e) => handleChecked(e, s)} />
                    <span className='gpg-checkbox-marker' />
                    <img src={`https://img.shields.io/badge/${s}-000000?style=for-the-badge&logo=${s}&logoColor=white`} />
                  </label>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      <div className="row">
        <div className="col">
          <h3>SOCIAL NETWORK</h3>
        </div>
      </div>
      <div className="row">
        {
         SOCIAL_LINKS.map((sl) => {
            return (
              <div key={sl} className="col">
                <img src={`https://img.shields.io/badge/${sl}-000000?style=for-the-badge&logo=${sl}&logoColor=white`} />
                <input 
                  placeholder={`username`} 
                  className="gpg-input-small" 
                  value={data.socials?.[sl] ?? ''} 
                  onChange={(e) => handleChange(e, 'socials', sl as string)} />
              </div>
            )
          })
        }
      </div>
      <div className="row">
        <div className="col">
          <h3>SUPPORT</h3>
        </div>
      </div>
      <div className="row">
        {
          SUPPORT_LINKS.map((dl) => {
            return (
              <div key={dl} className="col">
                <img src={`https://img.shields.io/badge/${dl}-000000?style=for-the-badge&logo=${dl}&logoColor=white`} />
                <input 
                  placeholder={`username`} 
                  className="gpg-input-small" 
                  value={data.donations?.[dl] ?? ''} 
                  onChange={(e) => handleChange(e, "donations", dl as string)} />
              </div>
            )
          })
        }
      </div>
      <div className="row">
        <div className="col align-center">
          <button className='gpg-button' onClick={handleClick}>
            GENERATE CODE
          </button>
        </div>
      </div>
    </>
)};

export default StepOne;

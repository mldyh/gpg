import React from 'react';

import { CATEGORIZED_SKILLS } from '../../../constants/skills';
import { SOCIAL_LINKS } from '../../../constants/socials';
import { SUPPORT_LINKS } from '../../../constants/support';
import { IStep } from '../helper';
import styles from './styles.module.css';


const StepOne = ({ data, onChange, onContinue }: IStep) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (data.username?.trim().length > 0) {
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
        [subfield]: {
          ...data?.[fieldname]?.[subfield],
          username: value
        }
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

  const placeholder = `🔭 I’m currently working on
👯 I’m looking to collaborate on
🤝 I’m looking for help with
🌱 I’m currently learning
💬 Ask me about
⚡ Fun fact I've never been in space cause I'm using tab`

  return (
    <>
      <div className={styles.stepone__row}>
        <div className={styles.stepone__col}>
          <input 
            autoFocus 
            placeholder={`Hi 👋, I'm Jane Doe from Indonesia`} 
            value={data.username ?? ''} 
            onChange={(e) => handleChange(e, 'username')}
            />
        </div>
      </div>
      <div className={styles.stepone__row}>
        <div className={styles.stepone__col}>
          <h3>WORKS</h3>
        </div>
      </div>
      <div className={styles.stepone__row}>
        <div className={styles.stepone__col}>
          <textarea 
            rows={9} 
            value={data.bio ?? ''} 
            onChange={(e) => handleChange(e, 'bio')}
            placeholder={placeholder}
            />
        </div>
      </div>
      <div className={styles.stepone__row}>
        <div className={styles.stepone__col}>
          <h3>SKILLS</h3>
        </div>
      </div>
        {CATEGORIZED_SKILLS.map((cs) => (
          <React.Fragment key={cs.title}>
            <div className={styles.stepone__row}>
              <div className={styles.stepone__col}>
                <h4>{cs.title.toUpperCase()}</h4>
              </div>
            </div>
            <div className={styles.stepone__row}>
              {cs.skills.map((s) => (
                <div key={s} className={styles.stepone__col}>
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
      <div className={styles.stepone__row}>
        <div className={styles.stepone__col}>
          <h3>SOCIAL NETWORK</h3>
        </div>
      </div>
      <div className={styles.stepone__row}>
        {
         SOCIAL_LINKS.map((sl) => {
            return (
              <div key={sl} className={styles.stepone__col}>
                <img src={`https://img.shields.io/badge/${sl}-000000?style=for-the-badge&logo=${sl}&logoColor=white`} />
                <input 
                  placeholder={`username`} 
                  className="gpg-input-small" 
                  value={data.socials?.[sl]?.username ?? ''} 
                  onChange={(e) => handleChange(e, 'socials', sl as string)} />
              </div>
            )
          })
        }
      </div>
      <div className={styles.stepone__row}>
        <div className={styles.stepone__col}>
          <h3>SUPPORT</h3>
        </div>
      </div>
      <div className={styles.stepone__row}>
        {
          SUPPORT_LINKS.map((dl) => {
            return (
              <div key={dl} className={styles.stepone__col}>
                <img src={`https://img.shields.io/badge/${dl}-000000?style=for-the-badge&logo=${dl}&logoColor=white`} />
                <input 
                  placeholder={`username`} 
                  className="gpg-input-small" 
                  value={data.donations?.[dl]?.username ?? ''} 
                  onChange={(e) => handleChange(e, "donations", dl as string)} />
              </div>
            )
          })
        }
      </div>
      <div className={styles.stepone__row}>
        <div className={`${styles.stepone__col} ${styles.stepone__aligncenter}`}>
          <button className='gpg-button' onClick={handleClick}>
            GENERATE CODE
          </button>
        </div>
      </div>
    </>
)};

export default StepOne;

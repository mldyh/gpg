import { CATEGORIZED_SKILLS } from "../constants/skills";
import { WEBSITES } from "../constants/websites";
import { IData } from "../interfaces/data";

export const TranslateToMarkDown = (data:IData): string => {
    let result = `
## ${data.greetings}
    `;

    if (data.bio.length > 0) {
        result += `

${data.bio}

`;
    }

    let skillresults = '';
    CATEGORIZED_SKILLS.forEach((cs) => {
        const included = cs.skills.filter((s) => data.skills.includes(s))
        if (included.length > 0) {
            skillresults += `
#### ${cs.title.toUpperCase()}`;

            included.forEach((i) => {
                skillresults += `
![${i}](https://img.shields.io/badge/${i}-000000?style=for-the-badge&logo=${i}&logoColor=white)`
            })
        }
    })

    if (skillresults.length > 0) {
        result += `
        
## LANGUAGES and TOOLS

${skillresults}`
    }

    if (Object.keys(data.socials).length > 0) {
        result += `
## SOCIAL NETWORK`;
        Object.keys(data.socials).forEach((s) => {
            result += `
[![${s}](https://img.shields.io/badge/${s}-000000?style=for-the-badge&logo=${s}&logoColor=white)](${WEBSITES[s]}/${data.socials[s]})`
        })
    }

    if (Object.keys(data.donations).length > 0) {
        result += `

## SUPPORT`;
        Object.keys(data.donations).forEach((d) => {
            result += `
[![${d}](https://img.shields.io/badge/${d}-000000?style=for-the-badge&logo=${d}&logoColor=white)](${WEBSITES[d]}/${data.donations[d]})`
        })
    }

    return result
}
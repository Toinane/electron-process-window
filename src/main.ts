import './style.css'
import typescriptLogo from './typescript.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${typescriptLogo}" alt="TypeScript" />
    Hello here.
  </div>
`
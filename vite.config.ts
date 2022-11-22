import electron from 'vite-electron-plugin'
import { customStart } from 'vite-electron-plugin/plugin'

export default {
  plugins: [
    electron({
      include: [
        'electron',
      ],
      plugins: [
        customStart(args => args?.startup(['dist/app.js']))
      ],
      outDir: 'dist'
    }),
  ],
}
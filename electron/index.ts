import { BrowserWindow } from 'electron'
import path from 'path'

export class ProcessManager {
  init() {
    const win = new BrowserWindow()
    if (process.env.VITE_DEV_SERVER_URL) {
      win.loadURL(process.env.VITE_DEV_SERVER_URL)
    } else {
      win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'))
    }
  }
}
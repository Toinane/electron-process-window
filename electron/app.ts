import { app } from 'electron'
import { ProcessManager } from "./index"

app.on('ready', () => {
  const processManager = new ProcessManager();

  processManager.init()
})


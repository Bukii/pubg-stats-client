const electron = require('electron')
const fs = require('fs')
const pubg = require('./lib')
const { app, BrowserWindow } = electron

// Load basic settings from a json file
let utils = JSON.parse(fs.readFileSync('./lib/utils/utils.json'))
const token = utils.token
// set API token to query data
pubg.setToken(token)

// Create new window and load site from file
function createWindow () {
  // Create browser window
  let win = new BrowserWindow({
    width: 1300,
    height: 800,
    backgroundColor: '#212326',
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app
  win.loadFile('public/index.html')
}

// add customized title bar
// new customTitlebar.Titlebar({
// 	backgroundColor: customTitlebar.Color.fromHex('#292D34')
// })

app.on('ready', createWindow)

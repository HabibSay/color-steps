const {app, BrowserWindow} = require('electron');
const url = require('url');

let win = null;

function boot() {

    win = new BrowserWindow({
    	webPreferences: {
            nodeIntegration: true
        },
        width:766,
        height:463,
        frame: false,
        resizable: false
    });
    win.loadURL(`file://${__dirname}/index.html`);

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', boot);

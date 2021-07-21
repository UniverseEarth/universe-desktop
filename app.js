// Auto Updater
require('update-electron-app')()
//

const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");

let appWindow

// SQLite3
const sqlite3 = require('sqlite3');
var db = new sqlite3.Database('src/persistence/test.db');
/*
db.serialize(function () {
    db.run("CREATE TABLE Products (name, barcode, quantity)");
    db.run("INSERT INTO Products VALUES (?, ?, ?)", ['product001', 'xxxxx', 20]);
    db.run("INSERT INTO Products VALUES (?, ?, ?)", ['product002', 'xxxxx', 40]);
    db.run("INSERT INTO Products VALUES (?, ?, ?)", ['product003', 'xxxxx', 60]);
    db.each("SELECT * FROM Products", function (err, row) {
        console.log("Result",row);
    });
});
db.close();
*/
//////

function initWindow() {
    appWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // Electron Build Path
    appWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    // Initialize the DevTools.
    //appWindow.webContents.openDevTools()

    appWindow.on('closed', function () {
        appWindow = null
    })
}

app.on('ready', initWindow)

// Close when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (appWindow === null) {
        initWindow()
    }
})
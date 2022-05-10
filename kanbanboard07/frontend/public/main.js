const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: true,
      preload: __dirname + "/preload.js",
    },
  });

  // win.loadFile("../backend/src/main/resources/templates/index.html");
  // win.loadFile("indexCopy.html");
  win.loadURL("http://localhost:9090");

  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

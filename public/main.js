const { app, BrowserWindow } = require("electron");

const path = require("path");
const isDevs = require("electron-is-dev");
const contextMenu = require("electron-context-menu");

require("@electron/remote/main").initialize();

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1500,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  win.loadURL(
    isDevs
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

contextMenu({
  prepend: (params, browserWindow) => [
    {
      label: "DevTools",
      click(item, focusedWindow) {
        focusedWindow.toggleDevTools();
      },
    },
    {
      label: "Reload",
      click() {
        mainWindow.reload();
      },
      // },
      // {  label: 'Quit',  click:  function(){
      //    mainWindow.destroy();
      //     mainWindow.quit();
      // }
    },
  ],
});

const env = process.env.NODE_ENV || "development";
// console.log(env);

// If development environment
if (env === "dev") {
  try {
    require("electron-reloader")(module, {
      debug: true,
      watchRenderer: true,
    });
  } catch (_) {
    console.log("Error");
  }
}

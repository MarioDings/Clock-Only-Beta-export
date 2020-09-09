import { me } from "appbit";
import clock from "clock";
import { display } from "display";
import document from "document";
import * as fs from "fs";
import * as messaging from "messaging";
import { inbox } from "file-transfer";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { today } from "user-activity";
import * as monotype from "../common/monotype";

const SETTINGS_FILE = "settings.cbor";
const SETTINGS_TYPE = "cbor";
const imageBackground = document.getElementById("imageBackground");

let settings = loadSettings();
applySettings(imageBackground.image);
applyTheme(settings.font, settings.icon);
me.onunload = saveSettings;

clock.granularity = "seconds";

let elTime = document.getElementById("time");
let elampm = document.getElementById("ampm");
let elDay = document.getElementById("day");
let elDate = document.getElementById("date");

function updateClock() {

  let dtDate = new Date();
  let iHours = dtDate.getHours();
  let iMins = util.zeroPad(dtDate.getMinutes());
  let ampm = " am";
  
  if (preferences.clockDisplay == "12h"){
  if (iHours > 12){
    ampm = " pm";
    iHours -= 12;
    iHours = (iHours);
  } else if (iHours == 12){
    ampm = " pm"
  } else if (iHours == 0 && ampm == " am"){
    iHours += 12;
  }
  } else {
    ampm = ""
  }
  
  elTime.text = `${monotype.monoDigits(iHours)}:${monotype.monoDigits(iMins)}`;
  elampm.text = `${ampm}`;
  elDay.text = `${util.getDay3(dtDate.getDay())}, `;
  elDate.text = `${util.getMonth3(dtDate.getMonth())} ${dtDate.getDate()}, ${dtDate.getFullYear()} `;

}

clock.ontick = () => updateClock();


// Apply theme colors to elements
function applyTheme(font, icon) {
  let items = document.getElementsByClassName("font, icon");
  items.forEach(function(item) {
    item.style.fill = font;
    item.style.fill = icon;
  });
  settings.font = font;
  settings.icon = icon;
  
}



// Listen for the onmessage event

messaging.peerSocket.onmessage = evt => {
if (evt.data.key === "font") {
applyTheme(evt.data.font)}
if (evt.data.key === "icon") {
applyTheme(evt.data.icon)}
}

// Register for the unload event



inbox.onnewfile = () => {
  let fileName;
  do {
    fileName = inbox.nextFile();
    if (fileName) {
      if (settings.bg && settings.bg !== "") {
        fs.unlinkSync(settings.bg);
      }
      settings.bg = `/private/data/${fileName}`;
      applySettings();
    }
  } while (fileName);
};

function loadSettings() {
  try {
    return fs.readFileSync(SETTINGS_FILE, SETTINGS_TYPE);
  } catch (ex) {
    return {
      settings = {},
      font: "#FFDEAD",
      icon: "#FFFFFF",
     
    }

  }
 
  applySettings();
}

function saveSettings() {
  fs.writeFileSync(SETTINGS_FILE, settings, SETTINGS_TYPE);
}

function applySettings() {
  if (settings.bg) {
    imageBackground.image = settings.bg;
  }
  display.on = true;
}

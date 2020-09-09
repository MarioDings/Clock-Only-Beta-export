import { outbox } from "file-transfer";
import { Image } from "image";
import { device } from "peer";
import { settingsStorage } from "settings";
import * as messaging from "messaging";
import * as fs from "fs";

settingsStorage.setItem("screenWidth", device.screen.width);
settingsStorage.setItem("screenHeight", device.screen.height);

settingsStorage.onchange = function(evt) {
  if (evt.key === "background-image") {
    compressAndTransferImage(evt.newValue);
  }
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
      if (evt.key === "font") {
      let data = JSON.parse(evt.newValue);
        console.log(evt.data.value, evt.data.key);
      messaging.peerSocket.send(data["values"][0].value);
      }
      if (evt.key === "icon") {
      let data = JSON.parse(evt.newValue);
        console.log(evt.data.value, evt.data.key);
      messaging.peerSocket.send(data["values"][0].value);
    }
    }

}



function compressAndTransferImage(settingsValue) {
  const imageData = JSON.parse(settingsValue);
  Image.from(imageData.imageUri)
    .then(image =>
      image.export("image/jpeg", {
        background: "#FFFFFF",
        quality: 40
      })
    )
    .then(buffer => outbox.enqueue(`${Date.now()}.jpg`, buffer))
    .then(fileTransfer => {
      console.log(`Enqueued ${fileTransfer.name}`);
    });
}
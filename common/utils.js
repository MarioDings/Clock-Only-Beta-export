// Add zero in front of numbers < 10
export function zeroHour(i) {
  if (i > 0) if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
  
}export function getDay3(index) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[index];
}

export function getMonth3(index) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[index];

}
// Ellenőrizze, hogy a böngésző támogatja-e a szükséges szenzor API-kat
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (event) => {
    document.getElementById('gyro-x').textContent = `X: ${event.alpha}`;
    document.getElementById('gyro-y').textContent = `Y: ${event.beta}`;
    document.getElementById('gyro-z').textContent = `Z: ${event.gamma}`;
  });
} else {
  console.log("DeviceOrientationEvent nem támogatott a böngészőben.");
}

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', (event) => {
    document.getElementById('acc-x').textContent = `X: ${event.acceleration.x}`;
    document.getElementById('acc-y').textContent = `Y: ${event.acceleration.y}`;
    document.getElementById('acc-z').textContent = `Z: ${event.acceleration.z}`;
  });
} else {
  console.log("DeviceMotionEvent nem támogatott a böngészőben.");
}

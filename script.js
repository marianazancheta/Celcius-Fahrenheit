function converter() {
  var temperaturaCel = parseFloat(document.getElementById("ImputCelcius").value);
  var temperaturaFar = ((temperaturaCel * 9/5) + 32).toFixed(1)
  document.getElementById("farAqui").innerText = temperaturaFar;
}
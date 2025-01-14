function updateTime() {
  let tubingenElement = document.querySelector("#tubingen");
  if (tubingenElement) {
    let tubingenDateElement = tubingenElement.querySelector(".date");
    let tubingenTimeElement = tubingenElement.querySelector(".time");
    let tubingenTime = moment().tz("Europe/Berlin");

    tubingenDateElement.innerHTML = tubingenTime.format("MMMM Do YYYY");
    tubingenTimeElement.innerHTML = tubingenTime.format(
      "h:mm ss [<small>]A[</small>]"
    );
  }

  let eufalaElement = document.querySelector("#eufala");
  if (eufalaElement) {
    let eufalaDateElement = eufalaElement.querySelector(".date");
    let eufalaTimeElement = eufalaElement.querySelector(".time");
    let eufalaTime = moment().tz("America/North_Dakota/New_Salem");

    eufalaDateElement.innerHTML = eufalaTime.format("MMMM Do YYYY");
    eufalaTimeElement.innerHTML = eufalaTime.format(
      "h:mm ss[<small>]A[</small>]"
    );
  }

  let eastlakeElement = document.querySelector("#eastlake");
  if (eastlakeElement) {
    let eastlakeDateElement = eastlakeElement.querySelector(".date");
    let eastlakeTimeElement = eastlakeElement.querySelector(".time");
    let eastlakeTime = moment().tz("America/Denver");

    eastlakeDateElement.innerHTML = eastlakeTime.format("MMMM Do YYYY");
    eastlakeTimeElement.innerHTML = eastlakeTime.format(
      "h:mm ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
  `;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

function updateTime() {
  let tubingenElement = document.querySelector("#tubingen");
  let tubingenDateElement = tubingenElement.querySelector(".date");
  let tubingenTimeElement = tubingenElement.querySelector(".time");
  let tubingenTime = moment().tz("Europe/Berlin");

  tubingenDateElement.innerHTML = tubingenTime.format("MMMM Do YYYY");
  tubingenTimeElement.innerHTML = tubingenTime.format(
    "h:mm ss [<small>]A[</small>]"
  );

  let eufalaElement = document.querySelector("#eufala");
  let eufalaDateElement = eufalaElement.querySelector(".date");
  let eufalaTimeElement = eufalaElement.querySelector(".time");
  let eufalaTime = moment().tz("America/North_Dakota/New_Salem");

  eufalaDateElement.innerHTML = eufalaTime.format("MMMM Do YYYY");
  eufalaTimeElement.innerHTML = eufalaTime.format(
    "h:mm ss[<small>]A[</small>]"
  );

  let eastlakeElement = document.querySelector("#eastlake");
  let eastlakeDateElement = eastlakeElement.querySelector(".date");
  let eastlakeTimeElement = eastlakeElement.querySelector(".time");
  let eastlakeTime = moment().tz("America/Denver");

  eastlakeDateElement.innerHTML = eastlakeTime.format("MMMM Do YYYY");
  eastlakeTimeElement.innerHTML = eastlakeTime.format(
    "h:mm ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);

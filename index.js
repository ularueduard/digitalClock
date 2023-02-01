function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var day = date.getDate();
  var monthnumber = date.getMonth();
  var year = date.getFullYear();
  var meridian = " AM";
  var monthsoftheyear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    meridian = " PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  month = monthsoftheyear[monthnumber];

  var time = h + ":" + m + ":" + s + meridian;
  var date = day + " / " + month + " / " + year;
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;

  setTimeout(showTime, 100);
}
showTime();

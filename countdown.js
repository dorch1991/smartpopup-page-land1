// Set the date 10 days from now
let countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 10);

countDownDate = countDownDate.getTime();

// Update the countdown every 1 second
let countdownFunction = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("timer").innerHTML = "Launched!";
  }
}, 1000);
const countdown = () => {
  const launchDate = new Date("May 5, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = launchDate - now;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("timer").innerText = `${d}d ${h}h ${m}m ${s}s`;
};

setInterval(countdown, 1000);
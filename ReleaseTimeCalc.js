
// Release Reference
const nzReleaseDate = new Date("2026-11-19T00:00:00+13:00"); 
const istReleaseDate = new Date("2026-11-19T00:00:00+05:30"); 


function getTimeRemaining(targetDate, regionName) {
  const now = new Date();
  const diffMs = targetDate - now;

  if (diffMs <= 0) {
    return { released: true, message: `GTA 6 is out in ${regionName}!` };
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / 1000 / 60) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  return { released: false, days, hours, minutes, seconds };
}

function timeRemainingForIndiaRelease(){
  return getTimeRemaining(istReleaseDate, "India");
}

function timeRemainingForNewZelandRelease(){
  return getTimeRemaining(nzReleaseDate, "New Zealand");
}

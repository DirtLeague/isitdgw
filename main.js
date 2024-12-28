const isDGW = (date = new Date()) => {
  // Create a new date object set to the current date
  const givenDate = new Date(date);
  
  // Get the year from the given date
  const year = givenDate.getFullYear();
  
  // Find the last day of May
  const lastDayOfMay = new Date(year, 4, 31); // Month is 0-indexed (4 = May)
  
  // Find the day of the week for the last day of May (0 = Sunday, ..., 6 = Saturday)
  const lastDayOfMayDayOfWeek = lastDayOfMay.getDay();
  
  // Calculate the date of Memorial Day (last Monday of May)
  const memorialDay = new Date(lastDayOfMay);
  memorialDay.setDate(lastDayOfMay.getDate() - ((lastDayOfMayDayOfWeek + 6) % 7));
  
  // Calculate the start (Thursday) and end (Monday) of the expanded Memorial Day weekend
  const startOfWeekend = new Date(memorialDay);
  startOfWeekend.setDate(memorialDay.getDate() - 4); // 4 days before Monday
  
  const endOfWeekend = new Date(memorialDay); // Memorial Day (Monday)
  
  // Check if the given date falls within the range (inclusive)
  return givenDate >= startOfWeekend && givenDate <= endOfWeekend;
};

const result = isDGW();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("result").textContent = result ? 'yes' : 'no';

  setInterval(() => {
    document.querySelector('.flip-box').classList.toggle('flipped');
  }, 2500);
});

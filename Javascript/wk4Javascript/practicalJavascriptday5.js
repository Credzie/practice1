let outputDate = document.getElementById('date');
outputDate.innerHTML += `Dates</br>`;
const date3 = new Date();
outputDate.innerHTML += `date3 = ${date3}`;

date3.setMonth(5);
const date4 = date3.getMonth
outputDate.innerHTML += `</br>New date3 = ${date3}`;

const pastHistory = new Date(124, 5, 6);
outputDate.innerHTML += `</br>pastHistory = ${pastHistory}`;

const birthDate = new Date(90, 5, 6);
outputDate.innerHTML += `</br> birthDate = ${birthDate}`;

const totalDate = date3.toLocaleString('default', {day:"2-digit", month:"short", year:"numeric",
hour:"2-digit", minute:"2-digit", second:"2-digit", hourCycle:"h24"});

const totalmonth = date3.toLocaleString('default', { month:'long'}); // Aug
const totalyear = date3.getFullYear();

outputDate.innerHTML += `</br></br>Task: New Timeline`;

outputDate.innerHTML += `</br>Date = ${date}`;
outputDate.innerHTML += `</br>Month = ${month}`;
outputDate.innerHTML += `</br>Year = ${year}`;
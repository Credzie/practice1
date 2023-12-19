// Task 1: Create an array of your favourite films / TV shows, up to 5 items.
//Use an array method to add 2 more items to your array.
//Use a loop to cycle through the array and log each item to the console/ browser.
let favWatch = ["Marvel","Sci-fi", "Action", "Comedy", "Anime"]
favWatch.push("Cartoon","Sports")

document.write(`</br> favourite films / TV shows ${favWatch}} `);

for (let items in favWatch){
    document.write(`</br>List of Favourite watch ${favWatch[items]}`)
};

// Task 2: Generate 10 random numbers between 1-100 and log them to the console/browser.

let randomNum = [];

for (let i = 0; i < 100; i++){
    let randomNumber = Math.floor(Math.random()*100) + 1;
    randomNum.push(randomNumber);
}
document.write(`</br> RandomNumber generated ${randomNum}`);

// Task 3: Create a loop that counts backwards from 20-0.
for(let a = 20; a >= 0; a--){
    document.write(`</br> ${a}`)
};


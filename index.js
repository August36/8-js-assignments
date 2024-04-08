// op1

const age = 45;
const email = "jofh@kea.dk";
 
// *** løsning ***
// let isEven;
// if (age % 2 === 0) {
//   isEven = true;
// } else {
//   isEven = false;
// }

// *** løsning ***
// let isEven = age % 2 === 0;

// *** løsning ***
// let role = "visitor";
// if (email === "jofh@kea.dk") {
//   if (age > 40) {
//     role = "admin";
//   }
// }
//can be done in 1 line, if you merge the two if's

// *** løsning ***
// let role = email === "jofh@kea.dk" && age > 40 ? "admin" : "visitor";

// opg2

// Re-write the following to arrow functions
// function setTitle(title) {
//   document.title = title;
// }

// *** løsning ***
// const setTitle = (title) => {
//     document.title = title;
// }
 
// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// *** løsning ***
// const isEven = (number) => {
//     return number % 2 === 0 ? true : false;
// };
 
// function getRandBetween1and10() {
//   return Math.floor(Math.random() * 10) + 1;
// }

// *** løsning ***
// const getRandBetween1and10 = () => Math.floor(Math.random() * 10) + 1;

// op3

// Re-write the following to arrow functions
// const movies = [
//   {
//     name: "Hard Boiled",
//     genre: "Hong Kong Action",
//   },
//   {
//     name: "LOTR",
//     genre: "Fantasy",
//   },
// ];

// function showMovie(movie) {
//   console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);
// }

// *** løsning ***
// const showMovie = (movie) => {
//     console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);
// };

// *** løsning ***
// movies.forEach((movie) => {
//     showMovie(movie);
// });

// opg4

// Re-write the following to use map Can you do implicit returns?
// const searchengines = [
//   { target: "https://google.com", name: "Google" },
//   { target: "https://bing.com", name: "Bing" },
// ];

// let links = [];

// *** løsning ***
// searchengines.forEach((link) => {
//     links.push(`<a href="${link.target}">${link.name}</a>`);
// });

// *** løsning ***
// const links = searchengines.map((link) => 
//     `<a href="${link.target}">${link.name}</a>`
// );

// opg5

// Follow the instructions
const names = ["Jonas", "Dannie", "Peter", "Klaus"];
/* start by making a "bad" copy of this array 
by writing something like const myBadCopy = names;
then modify either array by changing one name
then console log both, what happened
*/

// *** løsning ***
// const badCopy = names;

// names[0] = "Hans"

// console.log(names);
// console.log(badCopy);


// første objekt i arrayet ændres i begge arrays
// badCopy er blot en reference til names-arrayet
 
/* Then create a copy using the ... spread operator
modify either array and console log them, what happens now?
*/

// *** løsning ***

// const goodCopy = [...names];

// goodCopy[0] = "Larsen"

// console.log(goodCopy);
// console.log(names);

// Der skabes rent faktisk en kopi af name-arrayet
// Og ændringen sker kun i goodCopy

// opg6

// Follow the instructions
// const me = {
//   name: "Jonas",
//   age: 45,
//   kids: 3,
// };
 
// start by making a bad copy (reference) with something like
// const myCopy = me;
// change something, see what happens

// ***løsning***
// myCopy = me;

// me.name = "Sofine";

// console.log(myCopy);
// console.log(me);
 
// Then make a new copy using the spead operator, 
// change something and see what happens

// ***løsning***
// const goodCopy2 = {...me};

// me.name = "Benny"

// console.log(goodCopy2);
// console.log(me);

// Follow the instructions
/* this function receives an object with stuff it does not need
make it easier for the next developer by destructuring out the 
parts we need 
Then clean up the function by removing "person.x". */
 
// function personCard(person) {
//   return `<div class="person">
//         <h2>${person.name}</h2>
//         <ul>
//             <li><a href="tel:+${person.phone}">Call</a></li>
//             <li><a href="mailto:${person.email}">E-mail</a></li>
//         </ul>
//     </div>`;
// }
const myPerson = {
  name: "Clark Kent",
  marriage: null,
  glasses: true,
  phone: 911,
  street: "secret",
  email: "clark@dailyplanet.com",
};
// personCard(myPerson);

// *** løsning ***

// function personCard({ name, phone, email }) {
//     return `<div class="person">
//           <h2>${name}</h2>
//           <ul>
//               <li><a href="tel:+${phone}">Call</a></li>
//               <li><a href="mailto:${email}">E-mail</a></li>
//           </ul>
//       </div>`;
//   }

//med arrow function og implicit return
const personCard = ({name, phone, email}) => 
    `<div class="person">
        <h2>${name}</h2>
        <ul>
            <li><a href="tel:+${phone}">Call</a></li>
            <li><a href="mailto:${email}">E-mail</a></li>
        </ul>
    </div>`;

personCard(myPerson);

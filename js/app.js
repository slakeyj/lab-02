'use strict';

// Question 1: Siblings
var siblings = prompt('Do you think Sharina have siblings?');
siblings = siblings.toLowerCase();
if (siblings === 'yes' || siblings === 'y') {
  alert('Oooh, that\'s correct! Sharina has a sister!');
} else {
  alert('Awww, nice try. Sharina actually does have siblings');
}
console.log('Answer 1: Yes, Sharina has siblings');

// Question 2: Space Needle
var spaceNeedle = prompt('Do you think Sharina visited the top of the Space Needle?');
spaceNeedle = spaceNeedle.toLowerCase();
if (spaceNeedle === 'no' || spaceNeedle === 'n') {
  alert('Great guess! You are absolutely correct: Sharina has never been to the top of the Space Needle.');
} else {
  alert('Awww, nice try. Sharina actually does have siblings');
}
console.log('Answer 2: No, Sharina has not visited the top of the Space Needle.');

// Question 3: Australia
var visitAustralia = prompt('Question 3: Would you guess that Sharina has been to Australia?');
visitAustralia = visitAustralia.toLowerCase();
if (visitAustralia === 'yes' || visitAustralia === 'y') {
  alert('Yes, is the correct answer! Sharina has been to Sydney, Australia... twice!');
} else {
  alert('Sorry, that\'s not correct. Sharina actually has been to Australia!');
}
console.log('Answer 3: Yes, Sharina has been to Australia');


// When each yes is chosen, add 1 to a counter array. At end, check length of counter array and report points as document.write()
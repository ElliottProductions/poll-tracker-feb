// import functions and grab DOM elements
const aVoteUp = document.getElementById('option-a-add');
const bVoteUp = document.getElementById('option-b-add');
const aVoteDown = document.getElementById('option-a-sub');
const bVoteDown = document.getElementById('option-b-sub');
const endPoll = document.getElementById('end-poll');

const questionInput = document.querySelector('.question-area');
const option1Input = document.querySelector('.question-1');
const option2Input = document.querySelector('.question-2');

const option1Label = document.getElementById('option-1-label');
const option1Votes = document.getElementById('option-1-votes');
const option2Label = document.getElementById('option-2-label');
const option2Votes = document.getElementById('option-2-votes');


// let state
let aVotes = 0;
let bVotes = 0;
// set event listeners
aVoteUp.addEventListener('click', () => {
    aVotes++;
});

bVoteUp.addEventListener('click', () => {
    bVotes++;
});

aVoteDown.addEventListener('click', () => {
    aVotes--;
});

bVoteDown.addEventListener('click', () => {
    bVotes--;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

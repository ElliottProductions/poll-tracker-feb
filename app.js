// import functions and grab DOM elements

import { renderPastPoll } from './render.js';
const aVoteUp = document.getElementById('option-a-add');
const bVoteUp = document.getElementById('option-b-add');
const aVoteDown = document.getElementById('option-a-sub');
const bVoteDown = document.getElementById('option-b-sub');
const endPoll = document.getElementById('end-poll');

//const questionInput = document.querySelector('.question-area');
//const option1Input = document.querySelector('.question-1');
//const option2Input = document.querySelector('.question-2');

const questionLabel = document.getElementById('question-label');

const option1Label = document.getElementById('option-1-label');
const option1Votes = document.getElementById('option-1-votes');
const option2Label = document.getElementById('option-2-label');
const option2Votes = document.getElementById('option-2-votes');
const form = document.querySelector('form');
const pastPolls = document.querySelector('.past-polls');


// let state
let question = '';
let aVotes = 0;
let bVotes = 0;
let aTitle = '';
let bTitle = '';

const pastPollsArray = [];

// set event listeners
aVoteUp.addEventListener('click', () => {
    aVotes++;
    displayCurrentPoll();
});

bVoteUp.addEventListener('click', () => {
    bVotes++;
    option2Votes.textContent = bVotes;
});

aVoteDown.addEventListener('click', () => {
    aVotes--;
    displayCurrentPoll();
});

bVoteDown.addEventListener('click', () => {
    bVotes--;
    displayCurrentPoll();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    question = data.get('question-area');
    aTitle = data.get('question-1');
    bTitle = data.get('question-2');

    displayCurrentPoll();

});

endPoll.addEventListener('click', () => {
    form.reset();

    const poll = makePoll();

    pastPollsArray.push(poll);

    resetState();

    displayCurrentPoll();

    displayList();
});

function displayCurrentPoll() {
    questionLabel.textContent = question;
    option1Label.textContent = aTitle;
    option2Label.textContent = bTitle;
    option1Votes.textContent = aVotes;
    option2Votes.textContent = bVotes;
}

function makePoll(){
    return {
        question: question,
        option1Label: aTitle,
        option2Label: bTitle,
        option1Votes: aVotes,
        option2Votes: bVotes,



    };
}

function resetState() {
    question = '';
    aVotes = 0;
    bVotes = 0;
    aTitle = '';
    bTitle = '';

}

function displayList() {
    pastPolls.innerHTML = '';

    for (let pastPoll of pastPollsArray) {
        const container = renderPastPoll(pastPoll);

        pastPolls.append(container);
    }

}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

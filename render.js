export function renderPastPoll(pastPoll) {
    const container = document.createElement('div');
    const pQuestion = document.createElement('p');
    const pTitleA = document.createElement('p');
    const pTitleB = document.createElement('p');
    const pVotesA = document.createElement('p');
    const pVotesB = document.createElement('p');

    container.classList.add('past-polls');

    pQuestion.textContent = pastPoll.question;
    pTitleA.textContent = pastPoll.option1Label;
    pTitleB.textContent = pastPoll.option2Label;
    pVotesA.textContent = pastPoll.option1Votes;
    pVotesB.textContent = pastPoll.option2Votes;

    container.append(pQuestion, pTitleA, pVotesA, pTitleB, pVotesB);


    return container;



}
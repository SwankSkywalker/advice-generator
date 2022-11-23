async function genNewAdvice() {
    const requestURL = 'https://api.adviceslip.com/advice';
    const request = new Request(requestURL);

    const adviceSlip = await fetch(request);
    const advice = await adviceSlip.json();

    console.log(advice);
    newAdviceContent(advice);
}

function newAdviceContent(advice) {
    const id = document.querySelector('.adv-num');
    const quote = document.querySelector('.quote');   

    id.textContent = `ADVICE #${advice.slip.id}`;
    quote.innerHTML = `"${advice.slip.advice}"`;
}

genNewAdvice();

document.getElementById("dice").addEventListener("click", genNewAdvice);
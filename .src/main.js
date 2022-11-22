// const apiUrl = 'https://api.adviceslip.com'
// async function fetchAdvice() {
//     try {
//         const adviceSlip = await fetch(`${apiUrl}/advice`);

//         if (!adviceSlip.ok) {
//             throw new Error(`Failed to fetch advice: ${adviceSlip.status}`);
//         }

//         return adviceSlip.json();
//     } catch (e) {
//         console.log(e);
//     }
// }

// function displayAdvice(adviceQuoteId) {
//     const adviceQuote = document.getElementById('adviceQuote');

//     if (!adviceQuote) {
//         return;
//     }
//     fetchAdvice()
//         .then((slips) => {})
//         .catch((e) =>{
//             console.log(e);
//         });
// }

// function showAdvice(slip) {
//     const quoteElement = document.querySelector('.quote');
//     quoteElement.textContent = `${apiUrl}/advice/${slip.advice}`
// }

// const adviceQuote = document.getElementById('adviceQuote');
// const slipNum = document.querySelector('.adv-num');

// const fetchAdvice = fetch('https://api.adviceslip.com/advice');

// fetchAdvice
//     .then((Response) => {
    //         if (!Response.ok) {
        //             throw new Error(`HTTP error: ${Response.status}`);
        //         }
        //         return Response.json();
        //     })
        //     .then((data) => {
            //         console.log(data)
            //     });
            
const rollDice = document.querySelector('.dice');
            
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

    console.log(advice.slip);    

    id.textContent = `ADVICE #${advice.slip.id}`;
    quote.innerHTML = `"${advice.slip.advice}"`;
}

rollDice.addEventListener('click', genNewAdvice());
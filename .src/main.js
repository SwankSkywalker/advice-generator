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

// const rollDice = document.querySelector('.dice');
// const adviceQuote = document.getElementById('adviceQuote');
// const slipNum = document.querySelector('.adv-num');

const fetchAdvice = fetch('https://api.adviceslip.com/advice');

fetchAdvice
    .then((Response) => {
        if (!Response.ok) {
            throw new Error(`HTTP error: ${Response.status}`);
        }
        return Response.json();
    })
    .then((data) => {
        console.log(data)
    });
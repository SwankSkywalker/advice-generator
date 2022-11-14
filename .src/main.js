fetch('https://api.adviceslip.com/advice')
    .then(advice => advice.json())
    .then(data => console.log(data));
const howMuch = document.getElementById('original-currency-amount');
const firstSelection = document.getElementById('original-currency');
const secondSelection = document.getElementById('to');
let rate = document.getElementById('exchange-rate');
const outputText = document.getElementById('output-text');


const conversionRateURL =
  'https://v6.exchangerate-api.com/v6/0fbbe8b4b729033518b84a56/latest/USD';

async function currencyStart() { 
   try {
     const res = await fetch(conversionRateURL);
    const data = await res.json();
    if (data.result == "success") {
       const rateObjects = data.conversion_rates;
     
    const rateArray = Object.keys(rateObjects);
    for (let i = 0; i < rateArray.length; i++) {
    const option = document.createElement('option');
    option.value = rateArray[i];
    console.log(option)
     console.log(option.value)
    option.innerText = rateArray[i];
    firstSelection.appendChild(option);}
    } else {
    throw new Error ("Error in status")
    
  }

    } catch(error){
        console.log(error.message)
    }
    }


async function currencyEnd() { 
   try {
       const res = await fetch(conversionRateURL);
       const data = await res.json();
       if (data.result == "success") {
       const rateObjects = data.conversion_rates;
       const rateArray = Object.keys(rateObjects).sort(() => Math.random() - 0.5);
       for (let i = 0; i < rateArray.length; i++) {
       const option = document.createElement('option');
       option.value = rateArray[i];
       option.innerText = rateArray[i];
       secondSelection.appendChild(option);}
  } else {
    throw new Error ("Error in status")
    
  }
  } catch(error){
        console.log(error.message)
    }
    
};

async function currencyconverted() { 
  let amount = howMuch.value;
  let from = firstSelection.value;
  let to = secondSelection.value;

  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/0fbbe8b4b729033518b84a56/latest/${from}`
  );
  const data = await res.json();
  const rateFrom = await data.conversion_rates[to];

  outputText.textContent = `Your ${amount}${from} will currently buy you ${(
    rateFrom * amount
  ).toFixed(2)}${to}`;
  rate.innerText = `${rateFrom}${to}`;
};

currencyStart();
currencyEnd();
const btn = document.getElementById('btn');
btn.addEventListener('click', currencyconverted);

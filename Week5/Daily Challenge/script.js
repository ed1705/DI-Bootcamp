const btn = document.getElementById('btn');
const amountInput = document.getElementById('original-currency-amount');
const selectOne = document.getElementById('original-currency');
const selectTwo = document.getElementById('to');
let rate = document.getElementById('exchange-rate');
const outputText = document.getElementById('output-text');


const conversionRateURL =
  'https://v6.exchangerate-api.com/v6/0fbbe8b4b729033518b84a56/latest/USD';
 

async function from_currency() { 
   try {
     const res = await fetch(conversionRateURL);
    const data = await res.json();
    if (data.result == "success") {
       const rateObjects = data.conversion_rates;
      // console.log(data)
    const rateArray = Object.keys(rateObjects);
      console.log(rateArray)
    for (let i = 0; i < rateArray.length; i++) {
    const option = document.createElement('option');
    option.value = rateArray[i];
    option.innerText = rateArray[i];
    selectOne.appendChild(option);}
    } else {
    throw new Error ("Error in status")
    
  }

    } catch(error){
        console.log(error.message)
    }
    }



async function to_currency() {
  const res = await fetch(conversionRateURL);
  const data = await res.json();
  const rateObjects = data.conversion_rates;
  const rateArray = Object.keys(rateObjects).sort(() => Math.random() - 0.5);
  for (let i = 0; i < rateArray.length; i++) {
    const option = document.createElement('option');
    option.value = rateArray[i];
    option.innerText = rateArray[i];
    selectTwo.appendChild(option);
  }
};

const convertCurrency = async () => {
  let amount = amountInput.value;
  let from = selectOne.value;
  let to = selectTwo.value;

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

from_currency();
to_currency();
btn.addEventListener('click', convertCurrency);

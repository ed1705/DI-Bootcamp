// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
// The output should be:
// output

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

   const value = Object.fromEntries(data.entries());

    console.log({ value });
      let stringQuiz = JSON.stringify(value, null, 2)
  console.log(stringQuiz)
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);



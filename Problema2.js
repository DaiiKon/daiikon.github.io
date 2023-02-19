const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  
  event.preventDefault();

  const problemType = document.querySelector('#problem_type').value;

  const problemDescription = document.querySelector('#description').value;

  console.log(`Problem type: ${problemType}`);
  console.log(`Problem description: ${problemDescription}`);
});

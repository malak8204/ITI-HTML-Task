
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const jobInput = document.querySelector('#job');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', function () {
  const nameValue = nameInput.value;
  const ageValue = ageInput.value;
  const jobValue = jobInput.value;

  if (nameValue === '' || ageValue === '' || jobValue === '') {
    console.log('Please fill all fields');
    
  } else {
    console.log('Name: ' + nameValue);
    console.log('Age: ' + ageValue);
    console.log('Job: ' + jobValue);
    if (ageValue < 18) {
     console.log('You are under age');
     
    } else {
      console.log('Registration Completed');
      
    }
  }
});

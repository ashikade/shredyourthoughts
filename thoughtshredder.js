function shredText() {
    const textArea = document.getElementById('thoughts');
    const shredderSound = document.getElementById('shredder-sound');
    const shreddedText = document.getElementById('shredded-text');
  
    const text = textArea.value;
    if (text) {
      // Set the animation properties first
      textArea.style.animation = "moveContent 1s forwards";
      shreddedText.style.animation = "shredAnimation 3s linear forwards";
    
      // Then, add the class to trigger the animation
      textArea.classList.add('moveContent');
      shreddedText.classList.add('shredAnimation');
      5000
    }


      setTimeout(() => {
        textArea.style.animation = "";
        textArea.classList.remove('moveContent');
      }, 5000); // 3 seconds total (1s delay + 2s animation)

      setTimeout(() => {
        textArea.value = "";
        textArea.value.remove('moveContent');
      }, 5000); // 3 seconds total (1s delay + 2s animation)
  
      setTimeout(() => {
        shredderSound.play();
    }, 500); 

    setTimeout(() => {
     shreddedText.style.animation = "";
      shreddedText.classList.remove('shredAnimation');
    }, 5000); // 3 seconds total (1s delay + 2s animation)
  
        }
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', shredText);

let submissionCount = 0;

// Function to update and display the counter
function updateSubmissionCount() {
    submissionCount++;
    document.getElementById('submissionCount').textContent = submissionCount;
}

// Add a click event listener to the submit button
document.getElementById('submit').addEventListener('click', function() {
    // Update and display the submission count
    updateSubmissionCount();
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to get advice from the API
    function getAdvice() {
         fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                // Display the advice in the message box
                document.getElementById('messageText').textContent = 'Legal Advice: ' + data.slip.advice;
                document.getElementById('messageBox').classList.remove('hidden');

                // Optional: Hide the advice after seconds 
                setTimeout(function() {
                    document.getElementById('messageBox').classList.add('hidden');
                }, 2000);
            })
            .catch(error => {
                console.error('Error fetching advice:', error);
            });
    }

    //click to get advice
    document.getElementById('getAdviceBtn').addEventListener('click', function() {
        getAdvice();
    });
});
function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    alert("Signup Successful!\nUsername: " + username + "\nEmail: " + email);
}
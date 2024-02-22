document.getElementById('shortenBtn').addEventListener('click', function() {
    var userInput = document.getElementById('urlInput').value;
    
    // Checking if the input is "source one"
    if(userInput.toLowerCase() === "source one") {
        // Redirect to a specific page on the website
        window.location.href = "https://www.yoursite.com/specific-page";
    } else {
        // Optionally handle incorrect input
        document.getElementById('result').textContent = "Please enter a valid command.";
    }
});

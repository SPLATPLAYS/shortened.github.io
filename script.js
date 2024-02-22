document.getElementById('shortenBtn').addEventListener('click', function() {
    var userInput = document.getElementById('urlInput').value;
    
    // Checking if the input is "source one"
    if(userInput.toLowerCase() === "source1") {
        // Redirect to a specific page on the website
        window.location.href = "https://minister.infrastructure.gov.au/c-king/media-release/securing-australias-120-billion-nation-building-infrastructure-pipeline";
    } else {
        // Optionally handle incorrect input
        document.getElementById('result').textContent = "Please enter a valid command.";
    }
});

document.getElementById('shortenBtn').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    if (isValidUrl(url)) {
        shortenUrl(url);
    } else {
        alert('Please enter a valid URL.');
    }
});

function isValidUrl(url) {
    // Simple URL validation
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
}

function shortenUrl(url) {
    const shortId = generateShortId();
    const shortUrl = window.location.href + 'short/' + shortId;

    // Save mapping in the 'short' folder
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'short/' + shortId, true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(url);

    document.getElementById('result').textContent = `Shortened URL: ${shortUrl}`;
}

function generateShortId() {
    // Implement a function to generate a unique short identifier
    // This can be as simple as a random string or a hash function
    // Example: return Math.random().toString(36).substr(2, 8);
}

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

async function shortenUrl(url) {
    // Placeholder for backend call to shorten URL
    // This example assumes you have a serverless function endpoint ready
    const response = await fetch('https://your-serverless-function-url/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    });
    const data = await response.json();
    if (response.ok) {
        document.getElementById('result').textContent = `Shortened URL: ${data.shortUrl}`;
    } else {
        alert('Error shortening URL');
    }
}

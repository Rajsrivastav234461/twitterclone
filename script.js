let tweetsData = [];

function createProfile() {
    const username = document.getElementById('username').value;
    if (username) {
        alert(`Welcome, ${username}!`);
        document.getElementById('username').disabled = true;
    } else {
        alert('Please enter a username.');
    }
}

function postTweet() {
    const tweetText = document.getElementById('tweetText').value;
    if (tweetText) {
        const tweet = {
            username: document.getElementById('username').value,
            tweetText,
            timestamp: new Date().toLocaleString()
        };
        tweetsData.push(tweet);
        displayTweets();
        document.getElementById('tweetText').value = '';
    } else {
        alert('Please enter your tweet.');
    }
}

function displayTweets() {
    const tweetsContainer = document.getElementById('tweets');
    tweetsContainer.innerHTML = '';
    tweetsData.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.innerHTML = `
            <strong>${tweet.username}</strong> - ${tweet.timestamp}<br>
            ${tweet.tweetText}
        `;
        tweetsContainer.appendChild(tweetElement);
    });
}

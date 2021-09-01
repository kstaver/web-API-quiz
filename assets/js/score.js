function displayHighScores(){

    
    var highScores = JSON.parse(windows.localStorage.getItem("highScores")) || [];

    // Sort the high scores from highest to lowest.
    highScores.sort(function(a, b){

        return b.score - a.score;
    });

    // Assign a tag to each score and display those scores
    highScores.forEach(function(score){

        // Tag assignment
        var highScoresListTag = document.createElement("highScoresList");
        highScoresListTag.textContent = score.initials + " - " + score.score;

        // Display tags
        var displayHighScoresEl = document.getElementById("highScores");
        displayHighScoresEl.appendChild(highScoresListTag);
    });
}

// Remove all high scores from the list of high scores
function clearHighScores(){

    window.localStorage.removeItem("highScores");
    window.location.reloard();
}

printHighScores();

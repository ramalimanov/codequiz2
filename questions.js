function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    new Question("Which city is capital of Azerbaijan Repablic?", ["Istanbul", "Moscow","London", "Baku"], "C"),
    new Question("Which country not border in Azerbaijan", ["Georgia", "Turkey", "China", "Russia"], "China"),
    new Question("Which language Azerbaijan use?", ["Arabic", "English","Russian", "Azeri"], "Azeri"),
    new Question("Which fruit does.t have in Azerbaijan?", ["Pinapple", "Apple", "Banana", "All"], "All"),
    new Question("Which color doesn't has Azerbaijan flag?", ["Green", "Red", "Yellow", "All"], "Yellow")
];

var quiz = new Quiz(questions);


populate();







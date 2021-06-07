p1 = localStorage.getItem("Player1")
p2 = localStorage.getItem("Player2")
p1_score = 0
p2_score = 0
document.getElementById("P1_name").innerHTML = p1 + " : "
document.getElementById("P2_name").innerHTML = p2 + " : "
document.getElementById("P1_score").innerHTML = p1_score
document.getElementById("P2_score").innerHTML = p2_score
document.getElementById("player_question").innerHTML = "Question turn is " + p1 + "'s"
document.getElementById("player_answer").innerHTML = "Answer turn is " + p2 + "'s"

function Send() {
    getWord = document.getElementById("word").value
    W = getWord.toUpperCase()
    C1 = W.charAt(1)
    mid = Math.floor(W.length / 2)
    C2 = W.charAt(mid)
    last = W.length - 1
    C3 = W.charAt(last)
    New1 = W.replace(C1, "_")
    New2 = New1.replace(C2, "_")
    New3 = New2.replace(C3, "_")
    console.log(New3)
    question_word = "<h4 id='word_display'>" + New3 + "</h4>";
    input_box = "<br><br><input id='i_box' type='text' placeholder='Response Here'>"
    btn = "<br><br><button class='btn btn-danger' onclick='Check()'>Check</button>"
    row = question_word + input_box + btn;
    document.getElementById("output").innerHTML = row
}
question_turn = "p1"
answer_turn = "p2"

function Check() {
    get_answer = document.getElementById("i_box").value
    ans = get_answer.toUpperCase()
    document.getElementById("word_display").innerHTML=ans
    if (ans == W) {
        if (question_turn == "p1") {
            p1_score = p1_score + 1
            document.getElementById("P1_score").innerHTML = p1_score
        } else {
            p2_score = p2_score + 1
            document.getElementById("P2_score").innerHTML = p2_score
        }
    }
    if (question_turn == "p1") {
        question_turn = "p2"
        document.getElementById("player_question").innerHTML = "Question turn is " + p2 + "'s"
    } else {
        question_turn = "p1"
        document.getElementById("player_question").innerHTML = "Question turn is " + p1 + "'s"
    }
    if (answer_turn == "p1") {
        answer_turn = "p2"
        document.getElementById("player_answer").innerHTML = "Answer turn is " + p2 + "'s"
    } else {
        answer_turn = "p1"
        document.getElementById("player_answer").innerHTML = "Answer turn is " + p1 + "'s"
    }
}
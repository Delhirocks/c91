plyer1_name=localStorage.getItem("player1_name")
plyer2_name=localStorage.getItem("player2_name")

plyer1_score =0;
playre2_score=0;

document.getElementById("player1_name").innerHTML = plyer1_name = plyer1_name;
document.getElementById("player2_name").innerHTML = plyer2_name = plyer2_name;

document.getElementById("player1_score").innerHTML = plyer1_score= plyer1_score;
document.getElementById("player2_score").innerHTML = playre2_score = playre2_score;

document.getElementById("player1_question").innerHTML = plyer1_turn = plyer1_name;
document.getElementById("player2_answer").innerHTML = plyer2_turn = plyer2_name;
function send(){
    number1= document.getElementById("number1").Value;
    number2= document.getElementById("number2").Value;
    actual_answer = parseInt(number1)* parseInt(number2);
    question_word = "<h4 id='word_display'>"+number1+"X"+number2+"</h4>";
    input_box= "<br>Answer: <input type='text' id='input_checkbox'>";
    check_button ="<br><br><button onclick='check()' class='btn btn-info'>check</button";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").Value = "";
    document.getElementById("number_2").Value = "";
}
var answer;
$.ajax({
    url: 
    "https://raw.githubusercontent.com/attainu-nightingale/nightingale-course-module/master/assignments/data/quiz.json",
   datatype: "json",
   success: function(data){
       data = JSON.parse(data);
       var index = Math.floor(Math.random() * data.length);
       $("#question").html(data[index].question);
       answer= data[index].answer;
   }
});

function checkAnswer(){
    if(
        $("#answer")
        .val() .toLowerCase()== answer.toLowerCase())
        {
            alert("correct answer");
            clearInterval(interval);
        }else {
            alert("wrong answer");
        }
}
$("#submitBtn").on("click", checkAnswer);
var counter = 30;
var interval = setInterval(function(){
    counter--;
    if(counter >=0){
        $("#timer").html(counter);
    }
    if(counter === 0) {
        alert("Time is Over")
     $("#submitBtn").attr("disabled", true);
     clearInterval(interval);
    }
}, 1000);
function nextQues(){
    location.reload();
}
$("#next").on("click", nextQues);
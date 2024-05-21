// event listsener
document.getElementById("btn-out").addEventListener("click", submit);
//  function
function submit() {
  // variables
  let q1 = document.getElementById("first").value.toLowerCase();
  let q2 = document.getElementById("second").value.toLowerCase();
  let q3 = document.getElementById("third").value.toLowerCase();
  let q4 = document.getElementById("fourth").value.toLowerCase();
  let grade = 0;
  let statement = document.getElementById("statement");
  // if statements
  if (q1 == "minecraft") {
    document.getElementById("num1").innerHTML = "1";
    document.getElementById("clr1").style.color = "green";
    grade = grade + 1;
  } else {
    document.getElementById("num1").innerHTML = "0";
    document.getElementById("clr1").style.color = "red";
  }
  if (q2 == "tennis for two") {
    document.getElementById("num2").innerHTML = "1";
    document.getElementById("clr2").style.color = "green";
    grade = grade + 1;
  } else {
    document.getElementById("num2").innerHTML = "0";
    document.getElementById("clr2").style.color = "red";
  }
  if (q3 == "microsoft" || q3 == "sony") {
    document.getElementById("num3").innerHTML = "1";
    document.getElementById("clr3").style.color = "green";
    grade = grade + 1;
  } else {
    document.getElementById("num3").innerHTML = "0";
    document.getElementById("clr3").style.color = "red";
  }
  if (q4 == "yoshi") {
    document.getElementById("num4").innerHTML = "1";
    document.getElementById("clr4").style.color = "green";
    grade = grade + 1;
  } else {
    document.getElementById("num4").innerHTML = "0";
    document.getElementById("clr4").style.color = "red";
  }

  let gradeOut = (document.getElementById("grade").innerHTML = grade);
  let precentage = Math.round((grade / 4) * 100);
  document.getElementById("precent").innerHTML = precentage += "%";
  if (grade == 4) {
    statement.innerHTML = "GOOD JOB!!! ";
  } else if (grade == 3) {
    statement.innerHTML = "ur not a failure ";
  } else if (grade == 2) {
    statement.innerHTML = "wow you suck";
  } else if (grade == 1) {
    statement.innerHTML = "dissapointing";
  } else {
    statement.innerHTML = "what?";
  }
}

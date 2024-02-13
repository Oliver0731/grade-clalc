//Jvava alert cs 10 grade calctator

//INPUT
document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  let ClientScript1 = document.getElementById("Client-side1").value;
  let structeredProgramming1 = document.getElementById("StructP1").value;
  let structuredprogramming2 = document.getElementById("StructP2").value;
  let ClientScript2 = document.getElementById("Client-side2").value;
  let progectA = document.getElementById("ProA").value;

  //PROCESS
  let CSTotal =
    (+ClientScript1 +
      +structeredProgramming1 +
      +structuredprogramming2 +
      +ClientScript2 +
      +progectA) /
    5;
   

  document.getElementById("foot").innerHTML = `Final CS10 Grades:${CSTotal}%`;
}

function getLetterGrade(percentGrade){
if  (percentGrade >= 90) {
  return "A";
} else if (percentGrade >= 75 && percentGrade < 90){
return "B";
} else if (percentGrade >= 60 && percentGrade < 75){
  return "C";
} else if (percentGrade >= 50 && percentGrade < 60){
  return "D";
} else if ( percentGrade >= 0 && percentGrade < 50){
  return "F";
}
}




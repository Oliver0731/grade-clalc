//Jvava alert cs 10 grade calctator

//INPUT
document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  let ClientScript1 = document.getElementById("Client-side1").value;
  let structeredProgramming1 = document.getElementById("StructP1").value;
  let structuredprogramming2 = document.getElementById("StructP2").value;
  let ClientScript2 = document.getElementById("Client-side2").value;
  let progectA = document.getElementById("ProA").value;
  //idivdual grade:
  document.getElementById("clientOut1").innerHTML =
    getLetterGrade(ClientScript1);
  document.getElementById("struckOut1").innerHTML = getLetterGrade(
    structeredProgramming1
  );
  document.getElementById("structOut2").innerHTML = getLetterGrade(
    structuredprogramming2
  );
  document.getElementById("ClientOut2").innerHTML =
    getLetterGrade(ClientScript2);
  document.getElementById("proOutA").innerHTML = getLetterGrade(progectA);
  //total grade
  let CSTotal =
    (+ClientScript1 +
      +structeredProgramming1 +
      +structuredprogramming2 +
      +ClientScript2 +
      +progectA) /
    5;
  //change html
  let Letter = getLetterGrade(CSTotal);
  document.getElementById("foot").innerHTML = `Final CS10 Grade: ${CSTotal}%`;
}
// claculate letter
function getLetterGrade(percentGrade) {
  if (percentGrade >= 90) {
    return "A";
  } else if (percentGrade >= 75 && percentGrade < 90) {
    return "B";
  } else if (percentGrade >= 60 && percentGrade < 75) {
    return "C";
  } else if (percentGrade >= 50 && percentGrade < 60) {
    return "D";
  } else if (percentGrade >= 0 && percentGrade < 50) {
    return "F";
  }
}

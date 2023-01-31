$("#btnSend").addEvenListener("click", function ()){
    print("Grade received will be " + $("#gradescore").value)
}

//Assign the inputs to the variables and make sure they are inputted as integer values rounded
let Assignments = (parseFloat(document.querySelector("#Assignments").Value)) * 50; //after parsing the integer, I multiply it by the weight value
let GroupProject = (parse.Float(document.querySelector("#GP").Value)) *10;
let Quizzes = (parse.Float(document.querySelector("#Q").Value))*10;
let MidtermExam = (parse.Float(document.querySelector("#ME").Value))*10;
let FinalExam = (parse.Float(document.querySelector("#FE").Value))*10;
let Intex = (parse.Float(document.querySelector("#I").Value))*10;

let assignedGrade = ""

let finalGrade = (Assignments + GroupProject + Quizzes + MidtermExam + FinalExam + Intex)/100

if (finalGrade <= 100 && finalGrade >= 94) {
    assignedGrade = "A"
} else if (finalGrade < 94 && finalGrade >= 90) {
    assignedGrade = "A-"
} else if (finalGrade < 90 && finalGrade >= 87) {
    assignedGrade = "B+"
} else if (finalGrade < 87 && finalGrade >= 84) {
    assignedGrade = "B"
} else if (finalGrade < 84 && finalGrade >= 80) {
    assignedGrade = "B-"
} else if (finalGrade < 80 && finalGrade >= 77) {
    assignedGrade = "C+"
} else if (finalGrade < 77 && finalGrade >= 74) {
    assignedGrade = "C"
} else if (finalGrade < 74 && finalGrade >= 70) {
    assignedGrade = "C-"
} else if (finalGrade < 70 && finalGrade >= 67) {
    assignedGrade = "D+"
} else if (finalGrade < 67 && finalGrade >= 64) {
    assignedGrade = "D"
} else if (finalGrade < 64 && finalGrade >=60) {
    assignedGrade = "D-"
} else if (finalGrade < 60){
    assignedGrade = "E"
}


document.querySelector("#result").innerHTML = ("Grade received will be ${ assignedGrade }.")
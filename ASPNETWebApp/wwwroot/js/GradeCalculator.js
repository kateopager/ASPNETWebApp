
$("#calculate").click(function () {

    //Assign the inputs to the variables and make sure they are inputted as integer values rounded
    let Assignments = (parseFloat($("#Assignments").val()) * 50); //after parsing the integer, I multiply it by the weight value
    let GroupProject = (parseFloat($("#GP").val()) * 10);
    let Quizzes = (parseFloat($("#Q").val()) * 10);
    let MidtermExam = (parseFloat($("#ME").val()) * 10);
    let FinalExam = (parseFloat($("#FE").val()) * 10);
    let Intex = (parseFloat($("#I").val()) * 10);

    let assignedGrade = ""; //declared the variable so that it could be assigned a letter grade later

    let finalGrade = (Assignments + GroupProject + Quizzes + MidtermExam + FinalExam + Intex) / 100; //tried to calculate overall weighted grade, not sure if this is correct

    if (finalGrade <= 100){
        //used an if statement to go through all the possibilities for different grades
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
        } else if (finalGrade < 64 && finalGrade >= 60) {
            assignedGrade = "D-"
        } else if (finalGrade < 60) {
            assignedGrade = "E"
        };
        /*    after running through the if statement above, the assigned grade value would be displayed below back on the index page by using an id in a div tag on the index page
 to push the result statement back into*/
        $("#result").html("Grade received will be " + assignedGrade + " with a " + finalGrade + "% final score.");
    }else {
        alert("Invalid number. Please confirm all inputs are between 0-100.");
    }
});
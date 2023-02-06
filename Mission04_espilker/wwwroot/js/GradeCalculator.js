$("#btnFinal").click(function () {

    // Assign values from html page into variables
    let iAssignment = parseFloat($("#txtAssignment").val());
    let iProject = parseFloat($("#txtProject").val());
    let iQuiz = parseFloat($("#txtQuiz").val());
    let iMidterm = parseFloat($("#txtMidterm").val());
    let iFinal = parseFloat($("#txtFinal").val());
    let iIntex = parseFloat($("#txtIntex").val());
    let ltrFinal = "A";

    //calculate the total grade from the values
    let PctFinalGrade = iAssignment + iProject + iQuiz + iMidterm + iFinal + iIntex;

    //big if statement to determine what letter grade corresponds with the number grade
    if (PctFinalGrade >= 94) {
        ltrFinal = "A";
    }else if (PctFinalGrade >= 90) {
        ltrFinal = "A-"
    }else if (PctFinalGrade >= 87) {
        ltrFinal = "B+"
    } else if (PctFinalGrade >= 84) {
        ltrFinal = "B"
    } else if (PctFinalGrade >= 80) {
        ltrFinal = "B-"
    } else if (PctFinalGrade >= 77) {
        ltrFinal = "C+"
    } else if (PctFinalGrade >= 74) {
        ltrFinal = "C"
    } else if (PctFinalGrade >= 70) {
        ltrFinal = "C-"
    } else if (PctFinalGrade >= 67) {
        ltrFinal = "D+"
    } else if (PctFinalGrade >= 64) {
        ltrFinal = "D"
    } else if (PctFinalGrade >= 60) {
        ltrFinal = "D-"
    } else if (PctFinalGrade < 60) {
        ltrFinal = "E"
    }

    //Creates an alert to show the total grade
    alert("Grade: " + ltrFinal + "    " + PctFinalGrade + "%");
   
});



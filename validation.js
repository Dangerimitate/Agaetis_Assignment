function validateForm() {
    let valid = true;
    const errorMsgs = document.querySelectorAll('.error');
    errorMsgs.forEach(msg => msg.innerHTML = "");

    const studentId = document.forms["entryForm"]["student_id"].value;
    if (isNaN(studentId) || studentId.trim() === "") {
        document.getElementById("studentIdError").innerHTML = "Student ID is required and must be numeric.";
        valid = false;
    }

    const firstName = document.forms["entryForm"]["first_name"].value;
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById("firstNameError").innerHTML = "First name is required and must contain only alphabets.";
        valid = false;
    }

    const lastName = document.forms["entryForm"]["last_name"].value;
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        document.getElementById("lastNameError").innerHTML = "Last name is required and must contain only alphabets.";
        valid = false;
    }

    const batchClass = document.forms["entryForm"]["batch_class"].value;
    if (batchClass.trim() === "") {
        document.getElementById("batchClassError").innerHTML = "Batch/Class is required.";
        valid = false;
    }

    const email = document.forms["entryForm"]["email"].value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Valid email address is required.";
        valid = false;
    }

    const subjects = ["english", "hindi", "math", "science", "history", "geography"];
    subjects.forEach(subject => {
        const score = document.forms["entryForm"][subject].value;
        if (isNaN(score) || score.trim() === "" || score <= 0 || score >= 100) {
            document.getElementById(subject + "Error").innerHTML = "Valid score for " + subject + " is required (0-100).";
            valid = false;
        }
    });

    const remarks = document.forms["entryForm"]["remarks"].value;
    if (remarks.length > 150) {
        document.getElementById("remarksError").innerHTML = "Remarks must be less than 150 characters.";
        valid = false;
    }

    return valid;
}

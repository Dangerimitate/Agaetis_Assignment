<!DOCTYPE html>
<html>
<head>
    <title>Student Report</title>
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $student_id = $_POST['student_id'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $batch_class = $_POST['batch_class'];
    $email = $_POST['email'];
    $english = $_POST['english'];
    $hindi = $_POST['hindi'];
    $math = $_POST['math'];
    $science = $_POST['science'];
    $history = $_POST['history'];
    $geography = $_POST['geography'];
    $remarks = $_POST['remarks'];

    $total = $english + $hindi + $math + $science + $history + $geography;
    $percentage = $total / 6;

    if ($percentage >= 90) {
        $grade = "A";
    } elseif ($percentage >= 80) {
        $grade = "B";
    } elseif ($percentage >= 70) {
        $grade = "C";
    } elseif ($percentage >= 60) {
        $grade = "D";
    } else {
        $grade = "F";
    }

    echo "<h2>Student Report</h2>";
    echo "Student ID: $student_id<br>";
    echo "Name: $first_name $last_name<br>";
    echo "Batch/Class: $batch_class<br>";
    echo "Email: $email<br>";
    echo "English: $english<br>";
    echo "Hindi: $hindi<br>";
    echo "Math: $math<br>";
    echo "Science: $science<br>";
    echo "History: $history<br>";
    echo "Geography: $geography<br>";
    echo "Total Score: $total<br>";
    echo "Percentage: $percentage%<br>";
    echo "Grade: $grade<br>";
    echo "Remarks: $remarks<br>";
} else {
    echo "Invalid request.";
}
?>
</body>
</html>

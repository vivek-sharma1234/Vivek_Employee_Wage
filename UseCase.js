// Use case 1 for Attendance Check
function checkAttendance() {
    // Generate the random number
    let employee = Math.random();
    // Check whether the employee is present or not
    if (employee < 0.5) {
      console.log("Absent");
      //return "Absent";
    } else {
      console.log("Present");
      //return "Present";
    }
  }
  checkAttendance();
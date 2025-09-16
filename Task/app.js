


const stdObj = [
  {
    name: "Muhammad Hamza",
    class: "10",
    rollNo: "01",
    marks: {
      Math: 80,
      Computer: 75,
      Physics: 60,
      Urdu: 60
    }
  },
  {
    name: "Rizwan",
    class: "9",
    rollNo: "02",
    marks: {
      Math: 95,
      Computer: 90,
      Physics: 55,
      Urdu: 60
    }
  },
  {
    name: "Kashan",
    class: "12",
    rollNo: "03",
    marks: {
      Math: 75,
      Computer: 80,
      Physics: 40,
      Urdu: 60
    }
  }
];





function searchResult() {

  let userName = document.getElementById('name').value
  let stdClass = document.getElementById('class').value
  let rollNo = document.getElementById('rollNo').value
  let result = document.getElementById('showResult')
  let btn = document.getElementById("searchBtn")


  if (!userName || !stdClass || !rollNo) {
    result.innerHTML = "<p style='color:red;'>Please fill Name, Class and Roll No!</p>";
    return
  }



  let filtered = stdObj.filter(value => {
    return (
      (!userName || value.name === userName) &&
      (!stdClass || value.class === stdClass) &&
      (!rollNo || value.rollNo === rollNo)
    );
  });

  if (filtered.length > 0) {
    let student = filtered[0];
    let total = Object.values(student.marks).reduce((sum, val) => sum + val, 0);
    let percentage = (total / (Object.keys(student.marks).length * 100) * 100).toFixed(2);


    function getGrade() {
      return percentage >= 90 ? " A+" :
        percentage >= 80 ? "A" :
          percentage >= 70 ? " B" :
            percentage >= 60 ? "C" :
              percentage >= 50 ? " D" :
                "Fail"

               
    }
    let grade = getGrade()


    result.innerHTML = `
      <h3>Marksheet</h3>
      <table border ="1">
        <tr><th>Name</th><td>${student.name}</td></tr> <tr><th>
        <tr><th>Roll No</th><td>${student.rollNo}</td></tr>
        <tr><th>Class</th><td>${student.class}</td></tr>
         </table>

          <table border ="1">
        <tr><th>Subject</th><th>Marks</th></tr>
${Object.entries(student.marks).map(([subject, marks]) => 
      `  <tr><td>${subject}</td><td>${marks}</td></tr>`
    ).join("")}
 <tr><th>Total</th><td>${total}</td></tr>
      <tr><th>Percentage</th><td>${percentage}%</td></tr>
      <tr><th>Grade</th><td>${grade}</td></tr>
      </table>
    `;

    document.getElementById('name').value = "";
    document.getElementById('class').value = "";
    document.getElementById('rollNo').value = "";

    btn.disabled = true;
  } else {
    result.innerHTML = "<p>No student found!</p>";
  }


const inputs = document.querySelectorAll("#name, #class, #rollNo");
inputs.forEach(input => {
  input.addEventListener("input", () => {
    document.getElementById("searchBtn").disabled = false;
  });
});

}


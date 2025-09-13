const { use } = require("react");

let userName = document.getElementById('name')
let stdClass = document.getElementById('class')
let rollNo = document.getElementById('rollNo')
let result = document.getElementById('showResult')

const stdObj = [
    std1 = {
        name: "Muhammad Hamza",
        class: "matric",
        rollNo: "01",
         marks : {
            math : 80,
            computer : 75,
            physics : 60,
            urdu : 60,
            
        }
        ,obtainedMarks : 100
    }
    , std2 ={
        name: "Rizwan",
        class: 9,
        rollNo: "02",
         marks : {
            math : 95,
            computer : 90,
            physics : 55,
            urdu : 60,
            
        }
        ,obtainedMarks : 100
    },
    std3 = {
        name: "Kashan",
        class: 12,
        rollNo: "03",
        marks : {
            math : 75,
            computer : 80,
            physics : 40,
            urdu : 60,
            
        }
        ,obtainedMarks : 100
        
    }


];


function searchResult( ){
userName.vlaue = stdObj.name
stdClass.value = stdObj.class
rollNo.value = stdObj.rollNo
result = stdObj.forEach(result => {
    result.class
} )


}


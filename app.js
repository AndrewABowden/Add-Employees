
var config = {
    apiKey: "AIzaSyAAx2O_HtPFVe9vkie1YaIbaoPIQ0cYvBY",
    authDomain: "coltonssuperawesomeproject.firebaseapp.com",
    databaseURL: "https://coltonssuperawesomeproject.firebaseio.com",
    projectId: "coltonssuperawesomeproject",
    storageBucket: "coltonssuperawesomeproject.appspot.com",
    messagingSenderId: "222819130488"
};
firebase.initializeApp(config);

var employed = {};
var db = firebase.database()
var employees = db.ref("/employees")

$("#my-form").on("submit", function (e) {
    e.preventDefault();
    console.log($('#start-Year').val().trim())
    var myName = $('#add-Name').val().trim()
    var myRole = $('#add-Role').val().trim()
   // var myStartDate = $('#start-Year').val().trim()
    console.log($('#monthly-Rate').val())
    var myMonthlyRate = parseInt($('#monthly-Rate').val())
    if (parseInt(myMonthlyRate) != NaN) {
        employees.push({
            name: myName,
            role: myRole,
            monthlyRate: myMonthlyRate
        })
    } else {
        alert("Monthly Rate must be a number (no $)!!!")
    }
})

// function monthDiff(d1, d2) {
//     var months;
//     months = (d2.getFullYear() - d1.getFullYear()) * 12;
//     months -= d1.getMonth() + 1;
//     months += d2.getMonth();
//     return months <= 0 ? 0 : months;
// }

employees.on("child_added", function (s, prevChildKey) {
    //this will fire for every child when we open the window and any child added afterwords
    var sv = s.val()
    var tr = $("<tr>")
    //put in the name from the database
    var name = $("<td>").text(sv.name)
    var role = $("<td>").text(sv.role)
    //var startDate = $("<td>").text(sv.startDate)
    //this needs to be calculated
    //console.log(monthDiff(new Date(sv.startDate), new Date))
    //var monthsWorked = $("<td>").text(monthDiff(new Date(sv.startDate), new Date))
    var monthly = $("<td>").text(sv.monthlyRate)
    //this needs to be calculated 
    //var total = $("<td>").text(monthDiff(sv.startDate, new Date) * sv.monthlyRate);

    tr.append(name, role, /*startDate monthsWorked*/ monthly);
    $("#results-display").append(tr);
})

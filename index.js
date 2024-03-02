// function calculateGrade(score) {
//   if (score >= 90 && score <= 100) {
//     return "Grade A";
//   } else if (score >= 70 && score < 80) {
//     return "Grade B";
//   } else if (score >= 50 && score < 60) {
//     return "Grade C";
//   } else if (score < 50 && score >= 0) {
//     return "Grade F";
//   } else if (score > 100) {
//     return "Unknown Grade";
//   } else {
//     return "Invalid Score";
//   }
// }

// // Prompt the user for input
// const userScore = prompt("Enter your score:");

// // Parse the input as a number
// const score = parseFloat(userScore);

// // Check if the input is a valid number
// if (!isNaN(score)) {
//   const grade = calculateGrade(score);
//   document.write(`Score: ${score}, Grade: ${grade}`);
// } else {
//   console.log("Invalid input. Please enter a valid number.");
// }

 


// let age1 = prompt("enter age")
// let age2 = prompt("enter year")


// let sub = age1-age2 

// if(sub % 2 == 0) {
//   document.write("The Age is even. ");
// }

// // if the number is odd
// else {
//   document.write("The Age is odd. ");
// }

// document.write(sub)


let user = prompt("Enter Email")
let password = prompt("Ente Password")



if(user == "abdi" && password == 1234){
  document.write("Welcome")
}else{
  document.write("valid user and password")
}


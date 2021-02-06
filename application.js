document.getElementById('results').style.display = 'none';

submit.addEventListener('click', function(e) {  // Runs getValues when form's submit button is clicked.
  e.preventDefault();

  getValues();
})

getValues = () => {  // Converts values from form fields into integers, then assigns these integers to variables.
const age = parseInt(document.getElementById("age").value);
const gender = document.getElementsByName("gender");
const heightFeet = parseInt(document.getElementById("feet").value);
const heightInches = parseInt(document.getElementById("inches").value);
const weightStone = parseInt(document.getElementById("stone").value);
const weightLbs = parseInt(document.getElementById("lbs").value);

x = calculateAge(age); // calls the calculateAge function below, passes 'age' as an argument, assigns return value to x.
y = calculateWeight(weightStone, weightLbs); // calls the calculateWeight function below, passes 'weightStone' & 'weightLbs' as args, assigns return value to y.
z = calculateHeight(heightFeet, heightInches); // calls the calculateHeight function below, passes 'heightFeet' & 'heightWeight' as args, assigns return value to z.
finalResult(x, y, z, gender); // calls finalResult function below, passes return values of above 3 functions as args. 
}


calculateAge = age => { //checks gender, performs appropriate calculation, returns result as finalAge.
  finalAge = age * 5;
  //console.log(finalAge);
  return finalAge;
}

calculateWeight = (weightStone, weightLbs) => {
  kilogramWeight = ((weightStone * 14) + weightLbs) * 0.453;
  finalWeight = kilogramWeight * 10;
  //console.log(finalWeight);
  return finalWeight;
}

calculateHeight = (heightFeet, heightInches) => {
  centimeterHeight = ((heightFeet * 12) + heightInches) * 2.54;
  finalHeight = centimeterHeight * 6.25;
  //console.log(finalHeight);
  return finalHeight;
}

finalResult = (x, y, z, gender) => {
  result = z + y - x;
  for(i = 0; i < gender.length; i++) {
    if(gender[i].checked) {
      finalResult = result + 5;
      break;
    } else {
      finalResult = result - 161;
      break;
    }
  }
 
  revealResult(finalResult);

  return finalResult;
}

revealResult = finalResult => {
  finalResult = Math.floor(finalResult);
  let finalBmi = finalResult.toString()
  
  document.getElementById('results').style.display = 'block';
  const calories = document.getElementById("bmi-result");
  calories.classList.add("finalNumberStyling")
  calories.innerText = finalBmi + ' calories per day';
}




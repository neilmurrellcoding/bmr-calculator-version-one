# bmr-calculator-version-one

A simple HTML/CSS/Vanilla JS BMR calorie calculator.

## Description.

This project is a simple web-based application designed to tell users their BMR, or Basal Metabolic Rate.  This is a measurement of how many calories a person burns in 24 hours, minus the number of calories burned through exertion.  In other words, your BMR is how many calories you would burn if you spent 24 hours in bed and didn't move a muscle.

There are several formulas for working out one's BMR, and they all give roughly similar results.  The formula I chose for this project was the Harris-Benedict formula, which appears to be the most widely used.  The Harris-Benedict formula is:

* For men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5

* For women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161

My app asks the user for the following information:

* Their sex.
* Their age in years.
* Their height in feet and inches.
* Their weight in stone and pounds.

While the formula uses metric measurements, I chose to use imperial measurements for two reasons; I wanted to experiment with simple formulas for converting imperial measurements to their metric equivalents, and I assumed my likely users would be more familiar with imperial measurements.

When the user clicks 'submit' an Event Listener fires off a function called getValues() to acquire all the necessary information.  The getValues() function then fires off four other functions.  The first, calculateWeight(), converts the user's weight in stone and pounds into kilograms and then multiplies that figure by 10.  The second, calculateHeight(), converts the user's height in feet and inches into centimeters and then multiplies that figure by 6.25.  The third, calculateAge() multiplies the user's age by 5.

The fourth function, finalResult(), takes the return values of the first three functions, as well as the user's gender, as parameters.  It performs the requisite additions and subtractions specified in the Harris-Benedict formula to arrive at a figure called finalResult.  It then checks to see if the user has specified whether they're male or female.  If they're male, the function adds 5 to finalResult.  If they're female, the function subtracts 161 from finalResult.  After that, it runs a further function called revealResult() and passes it the finalResult figure as an argument.

The revealResult() function uses Math.floor to turn finalResult into a whole number.  It then converts that number into a string.  The program displays the user's BMI in a second section of the form, but when the program initially loads that section is hidden.  The revealResult() function uncovers it and inserts the user's BMI into the inner text of a paragraph element in that section.

Finally, a second Event Listener is attached to a 'reset' button in the previously hidden section.  Clicking that completely resets the app for the next user.

/* Wassce result calculator script.js */

const englishGrade = document.getElementById("englishgrade");
const mathematicsGrade = document.getElementById("mathematicsgrade");
const integratedScienceGrade = document.getElementById("integratedsciencegrade");
const socialStudiesGrade = document.getElementById("socialstudiesgrade");

const courseSelection = document.getElementById("course-selection");
const checkButton = document.getElementById("calcButton");

const electiveContainer = document.getElementById("elective-subjects-container");



courseSelection.addEventListener("click",function(){

if (courseSelection.value === "general-science") {
  electiveContainer.innerHTML = `
    <label for="elective1">Physics:</label>
    <select id="elective1" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective2">Chemistry:</label>
    <select id="elective2" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective3">Biology:</label>
    <select id="elective3" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective4">Elective Mathematics:</label>
    <select id="elective4" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
  `;
}

else if (courseSelection.value === "visual-arts") {
  electiveContainer.innerHTML = `
    <label for="elective1">Graphic Design:</label>
    <select id="elective1" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective2">Picture Making:</label>
    <select id="elective2" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective3">Sculpture:</label>
    <select id="elective3" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective4">General Knowledge in Art:</label>
    <select id="elective4" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
  `;
}

else if (courseSelection.value === "home-economics") {
  electiveContainer.innerHTML = `
    <label for="elective1">Food and Nutrition:</label>
    <select id="elective1" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective2">Management in Living:</label>
    <select id="elective2" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective3">Clothing and Textiles:</label>
    <select id="elective3" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective4">General Knowledge in Art:</label>
    <select id="elective4" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
  `;
}

else if (courseSelection.value === "business") {
  electiveContainer.innerHTML = `
    <label for="elective1">Financial Accounting:</label>
    <select id="elective1" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective2">Cost Accounting:</label>
    <select id="elective2" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective3">Business Management:</label>
    <select id="elective3" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective4">Economics:</label>
    <select id="elective4" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
  `;
}

else if (courseSelection.value === "general-arts") {
  electiveContainer.innerHTML = `
    <label for="elective1">Literature in English:</label>
    <select id="elective1" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective2">Government:</label>
    <select id="elective2" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective3">Economics:</label>
    <select id="elective3" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    <label for="elective4">History:</label>
    <select id="elective4" name="grade" required>
      <option value="">Select Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
  `;
}

else if (
  courseSelection.value === "electrical-technology" ||
  courseSelection.value === "electronics-technology" ||
  courseSelection.value === "building-technology"
) {
  electiveContainer.innerHTML = `<p>TVET courses are currently unavailable on this platform.</p>`;
}

/*else {
  electiveContainer.innerHTML = ""; // clears electives when "Select Course" is chosen
}*/
})

checkButton.addEventListener("click", function(){
let bests=[];
  if (
    englishGrade.value === "" ||
    mathematicsGrade.value === "" ||
    integratedScienceGrade.value === "" ||
    socialStudiesGrade.value === ""
  ) {
    alert("Please select a grade for every subject before calculating.");
    return; // stops the function here — nothing below this runs
  }
bests.push(
{
    subject:" Mathematics",
    best:Number(mathematicsGrade.value)

},
{
    subject:"English",
    best:Number(englishGrade.value)
},
{
    subject:"integratedScience",
    best:Number(integratedScienceGrade.value)
},
{
    subject:"Social",
    best:Number(socialStudiesGrade.value)
}

)
console.log(bests)
});
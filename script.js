const english = document.getElementById("english-grade");
const mathematics = document.getElementById("mathematics-grade");
const integratedScience = document.getElementById("integrated-science-grade");
const socialStudies = document.getElementById("social-studies-grade");
const computing = document.getElementById("computing-grade");
const careerTechnology = document.getElementById("career-tech-grade");
const creativeArts = document.getElementById("creative-arts-grade");
const religiousMoralEducation = document.getElementById("religions-grade");
const physicalHealthEducation = document.getElementById("pe-grade");
const ghanaianLanguage = document.getElementById("ghanaianlang-grade");
const french = document.getElementById("french-grade");
const totalGrade = document.getElementById("total-grade");

const doneButton=document.getElementById("checkButton");

let bestOne;
let bestTwo;
let finalTotal;
let total;

doneButton.addEventListener("click",function(){
let grades=[];
  if (
    english.value === "" ||
    mathematics.value === "" ||
    integratedScience.value === "" ||
    socialStudies.value === ""
  ) {
    /*alert("Please select a grade for every subject before calculating.");*/
    return; // stops the function here — nothing below this runs
  }
  grades.push(
       {
        subject: "English Language",
        grade: Number(english.value)
    },
       {
        subject: " Mathematics",
        grade:  Number(mathematics.value),
    },
  {
    subject: "Integrated Science",
    grade: Number(integratedScience.value)
},
{
    subject: "Social Studies",
    grade: Number(socialStudies.value)
},
{
    subject: "Career Technology",
    grade: Number(careerTechnology.value)
},
{
    subject: "Creative Arts and Design",
    grade: Number(creativeArts.value)
},
{
    subject: "Religious and Moral Education",
    grade: Number(religiousMoralEducation.value)
},
{
    subject: "Physical and Health Education",
    grade: Number(physicalHealthEducation.value)
},
{
    subject: "Ghanaian Language",
    grade: Number(ghanaianLanguage.value)
},
{
    subject: "French",
    grade: Number(french.value)
},
{
    subject: "Computing",
    grade: Number(computing.value)
}

);

let bestSix = [];

bestSix.push(
    grades[0],
    grades[1],
    grades[2],
    grades[3]
); 
let otherSubjects = [];

for (let i = 4; i < grades.length; i++) {
    otherSubjects.push(grades[i]);
}
otherSubjects = otherSubjects.filter(function(subject) {
    return subject.grade !== 0;
});
otherSubjects.sort(function(a, b) {
    return a.grade - b.grade;
}); 

bestOne = otherSubjects[0];
 bestTwo = otherSubjects[1];

/*console.log(bestSix);*/
bestSix.push(bestOne, bestTwo);
/*console.log(otherSubjects);*/
total = 0;

for (let i = 0; i < bestSix.length; i++) {
    total += bestSix[i].grade;
}


totalGrade.textContent = total;

/*console.log(otherSubjects);*/
});

const downloadPDF = document.getElementById("downloadPDF");

downloadPDF.addEventListener("click", function () {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    pdf.text("BECE Result", 20, 20);
 pdf.text("BECE Result", 20, 20);

pdf.text("Subject", 20, 40);
pdf.text("Grade", 160, 40);

pdf.text("English Language", 20, 55);
pdf.text(english.value, 160, 55);

pdf.text("Integrated Science", 20, 70);
pdf.text(integratedScience.value, 160, 70);

pdf.text("Mathematics", 20, 85);
pdf.text(mathematics.value, 160, 85);

pdf.text("Social Studies", 20, 100);
pdf.text(socialStudies.value, 160, 100);

pdf.text(bestOne.subject, 20, 120);
pdf.text(String(bestOne.grade), 160, 120);

pdf.text(bestTwo.subject, 20, 135);
pdf.text(String(bestTwo.grade), 160, 135);

pdf.text(`Final Aggregate: ${totalGrade.textContent}`, 20, 160);

    pdf.setFontSize(35);
pdf.setTextColor(200, 200, 200);

pdf.text("VINCENT BECE CALCULATOR", 105, 150, {
    align: "center",
    angle: 45
});
pdf.text("NOT OFFICIAL", 115, 150, {
    align: "center",
    angle: 45
});

    pdf.save("BECE-Result.pdf");
   /* console.log(bestOne);
console.log(bestTwo);*/


});

const schoolQualify=document.getElementById('schoolQuaification');
const schoolCont=document.getElementById("school-qualify-container");

schoolQualify.addEventListener("click",function(){
if (total >= 6 && total <= 9) {
    schoolCont.innerHTML = `
        <h3>Schools to Consider</h3>

        <p>Achimota School</p>
        <p>Presbyterian Boys' Secondary School (PRESEC)</p>
        <p>Prempeh College</p>
        <p>Opoku Ware School</p>
        <p>Wesley Girls' High School</p>
        <p>Mfantsipim School</p>
        <p>St. Augustine's College</p>
        <p>Holy Child School</p>
        <p>Adisadel College</p>
        <p>Accra Academy</p>
        <p>St. Peter's Senior High School</p>
        <p>St. Louis Senior High School</p>
        <p>Aburi Girls' Senior High School</p>
        <p>Yaa Asantewaa Girls' Senior High School</p>
        <p>Archbishop Porter Girls' Senior High School</p>
    `;
}

else if (total >= 10 && total <= 14) {
    schoolCont.innerHTML = `
        <h3>Possible Schools to Consider</h3>

        <p>Accra High School</p>
        <p>Kaneshie Senior High School</p>
        <p>Odorgonno Senior High School</p>
        <p>West Africa Senior High School</p>
        <p>Presbyterian Boys' Secondary School (PRESEC)</p>
        <p>St. Thomas Aquinas Senior High School</p>
        <p>Ghana National College</p>
        <p>Swedru Senior High School</p>
        <p>Fosu Senior High Technical School</p>
        <p>Osei Tutu Senior High School</p>
        <p>Konongo Odumase Senior High School</p>
        <p>Kumasi High School</p>
        <p>Asanteman Senior High School</p>
        <p>Ejisuman Senior High School</p>
        <p>Obuasi Senior High Technical School</p>
        <p>Aduman Senior High School</p>
        <p>Dompoase Senior High School</p>
        <p>Twene Amanfo Senior High Technical School</p>
        <p>Sunyani Senior High School</p>
        <p>Odomaseman Senior High School</p>
        <p>Berekum Presby Senior High School</p>
        <p>Notre Dame Girls' Senior High School</p>
        <p>St. James Seminary Senior High School</p>
        <p>Bolgatanga Senior High School</p>
        <p>Tamale Senior High School</p>
    `;
}
else if (total >= 15 && total <= 20) {
    schoolCont.innerHTML = `
        <h3>Possible Schools to Consider</h3>

        <p>Accra High School</p>
        <p>Kaneshie Senior High School</p>
        <p>Odorgonno Senior High School</p>
        <p>West Africa Senior High School</p>
        <p>Accra Girls' Senior High School</p>
        <p>Labone Senior High School</p>
        <p>Presbyterian Boys' Secondary School (PRESEC)</p>
        <p>St. Thomas Aquinas Senior High School</p>
        <p>Fosu Senior High Technical School</p>
        <p>Swedru Senior High School</p>
        <p>Kumasi High School</p>
        <p>Asanteman Senior High School</p>
        <p>Osei Tutu Senior High School</p>
        <p>Konongo Odumase Senior High School</p>
        <p>Obuasi Senior High Technical School</p>
        <p>Sunyani Senior High School</p>
        <p>Odomaseman Senior High School</p>
        <p>Berekum Senior High School</p>
        <p>Tamale Senior High School</p>
        <p>Bolgatanga Senior High School</p>
        <p>Wa Senior High School</p>
        <p>Navrongo Senior High School</p>
        <p>St. Francis Girls' Senior High School</p>
        <p>Notre Dame Girls' Senior High School</p>
        <p>Archbishop Porter Girls' Senior High School</p>
    `;
}
else {
    schoolCont.innerHTML = `
        <h3>Other Schools to Consider</h3>

        <p>Accra High School</p>
        <p>Kaneshie Senior High School</p>
        <p>Odorgonno Senior High School</p>
        <p>West Africa Senior High School</p>
        <p>Labone Senior High School</p>
        <p>Accra Girls' Senior High School</p>

        <p>Fosu Senior High Technical School</p>
        <p>Swedru Senior High School</p>
        <p>Apam Senior High School</p>
        <p>Mfantsiman Girls' Senior High School</p>
        <p>Saltpond Methodist Senior High School</p>

        <p>Kumasi High School</p>
        <p>Asanteman Senior High School</p>
        <p>Osei Tutu Senior High School</p>
        <p>Konongo Odumase Senior High School</p>
        <p>Obuasi Senior High Technical School</p>
        <p>Aduman Senior High School</p>
        <p>Juaben Senior High School</p>
        <p>Ejisuman Senior High School</p>

        <p>Sunyani Senior High School</p>
        <p>Odomaseman Senior High School</p>
        <p>Berekum Senior High School</p>
        <p>Notre Dame Girls' Senior High School</p>
        <p>St. James Seminary Senior High School</p>

        <p>Tamale Senior High School</p>
        <p>Ghana Senior High School</p>
        <p>Business Senior High School</p>
        <p>Kalpohin Senior High School</p>

        <p>Bolgatanga Senior High School</p>
        <p>Navrongo Senior High School</p>
        <p>Sandema Senior High School</p>

        <p>Wa Senior High School</p>
        <p>Tumu Senior High School</p>
        <p>Nandom Senior High School</p>

        <p>Ho Senior High School</p>
        <p>Kpando Senior High School</p>
        <p>OLA Girls' Senior High School</p>

        <p>Keta Senior High Technical School</p>
        <p>Accra Wesley Girls' Senior High School</p>
        <p>St. Paul's Senior High School</p>

        <br>

        <small>
            These are possible schools to consider. 
            Actual CSSPS placement depends on the current year's
            placement rules, school choices, programme and available spaces.
        </small>
    `;
}
});
/*GENERATING OPTIONS FOR  SELECTECT ELEMENT  */ 


const optionsGenerator=(subject)=>{
    for(let optionToGenerate=1; optionToGenerate<=9; optionToGenerate++){

        let optionToGenerateElement=document.createElement("option");

        optionToGenerateElement.value=optionToGenerate;

            optionToGenerateElement.textContent=optionToGenerate;

            subject.appendChild(optionToGenerateElement)
    }

}

/*Calling fubctiong for each select subject*/
optionsGenerator(english);
optionsGenerator(mathematics);
optionsGenerator(integratedScience);
optionsGenerator(socialStudies);
optionsGenerator(computing);
optionsGenerator(careerTechnology);
optionsGenerator(creativeArts);
optionsGenerator(religiousMoralEducation);
optionsGenerator(physicalHealthEducation);
optionsGenerator(ghanaianLanguage);
optionsGenerator(french);




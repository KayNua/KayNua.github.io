


//Move these variables to the top
var factList = [
  "According to the Learning Policy Institute, almost 20% of teachers leave the profession because of low pay. ", 
  "Nationally, teachers earn 19% less than similarly skilled and educated professionals. This teaching penalty has increased significantly over the 20 plus years, from 6% in 1996 to 19% in 2019.", 
  " Inflation has eroded most of teachers’ salary increases: over the past decade, the average classroom teacher salary has increased 14.1%. But, after adjusting for inflation, the average salary has actually decreased by $1,122, or 1.7%.", 
  "Teachers spend summers working second jobs, teaching summer school, or taking classes (that they pay for) to advance their careers.", 
  "Because of low pay, new teachers often cannot pay off their student loans or buy homes in the communities where they teach.", 
  "In one study, a 10% increase in teacher pay was estimated to produce a 5 to 10% increase in student performance."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

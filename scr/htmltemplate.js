// function generating html card for manager
// take in an object and inject data from object into a template - return html card
function generateManager(manager) {
    return `

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">ID: ${manager.id}</p>
    <p class="card-text">Email: ${manager.email}</p>
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
    <p class="card-text">${manager.getRole()}</p>
  </div>
</div>`}

// function generating html card for engineer
// take in an object and inject data from object into a template - return html card
function generateEngineer(engineer) {
    return `

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">ID: ${engineer.id}</p>
    <p class="card-text">Email: ${engineer.email}</p>
    <p class="card-text">GitHub: ${engineer.getGithub()}</p>
    <p class="card-text">${engineer.getRole()}</p>
  </div>
</div>`}

// function generating html card for intern
// take in an object and inject data from object into a template - return html card

function generateIntern(intern) {
    return `

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">ID: ${intern.id}</p>
    <p class="card-text">Email: ${intern.email}</p>
    <p class="card-text">School: ${intern.school}</p>
    <p class="card-text">${intern.getRole()}</p>
  </div>
</div>`}

//function to push total html template
//take in array of employees [{m} {e} ]
//split employees into manager array, engineer array and intern array (look into array methods)
//for each separate array create card for each object (look at creating individual cards)
//inject all of the cards into the html body
//return final html string
cd ..cd
function generateFinalHtml(employees) {

}

module.exports = generateFinalHtml();
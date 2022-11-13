// create the team
const generateTeam = (team) => {

// function generating html card for manager
function generateManager(manager) {
return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.getRole()}</p>
    <p class="card-text">ID: ${manager.id}</p>
    <p class="card-text">Email: ${manager.email}</p>
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
  </div>
</div>
  `;
}

// function generating html card for engineer
function generateEngineer(engineer) {
return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">${engineer.getRole()}</p>
    <p class="card-text">ID: ${engineer.id}</p>
    <p class="card-text">Email: ${engineer.email}</p>
    <p class="card-text">GitHub: ${engineer.getGithub()}</p>
  </div>
</div>
  `;
}

// function generating html card for intern
function generateIntern(intern) {
return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text">${intern.getRole()}</p>
      <p class="card-text">ID: ${intern.id}</p>
      <p class="card-text">Email: ${intern.email}</p>
      <p class="card-text">School: ${intern.school}</p>
    </div>
  </div>
  `;
}


const html = [];

html.push(
  team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => generateManager(manager))
);
html.push(
  team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => generateEngineer(engineer))
    .join("")
);
html.push(
  team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => generateIntern(intern))
    .join("")
);

return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
              ${generateTeam(team)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
};
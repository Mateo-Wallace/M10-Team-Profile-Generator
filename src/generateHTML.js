// TODO: Create a function to generate HTML
function generateHTML(data) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${data.employeeId}</h1>
</body>
</html>
  `;
  }
  
  module.exports = generateHTML;
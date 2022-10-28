function generateHTML(teamMembers) {
    const header = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font awesome Link -->
    <script src="https://kit.fontawesome.com/b84e779c40.js" crossorigin="anonymous"></script>
    <!-- Tailwind Link -->
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Team Boy</title>
</head>

<body class="flex flex-col h-screen justify-between">

    <!-- Header Title -->
    <header class="p-8 bg-rose-700 mb-6">
        <h1 class="text-white text-center text-5xl"><a href="./test.html"
                class="hover:text-slate-300 ease-in-out duration-300"><i class="fa-solid fa-people-group"></i></a> Team Boy
        </h1>
    </header>

    <main>
        <section id="aside-top" class="flex flex-wrap m-2 gap-auto justify-around">

    `;
    const footer = `

        </section>
    </main>

    <!-- Nav Bar Footer -->
    <footer class="bg-rose-700 grid grid-cols-1 justify-items-center mt-6 pb-1">
        <nav class="grid grid-cols-3 justify-items-center max-w-7xl w-10/12">
            <div class="py-3 text-center">
                <a href="https://github.com/Mateo-Wallace" target="_blank" rel="noopener noreferrer"
                    class="ease-in-out duration-300 text-white hover:text-slate-300 px-2 py-2 rounded-md text-sm font-medium">GitHub</a>
            </div>
            <div class="py-3 text-center">
                <a href="https://www.linkedin.com/in/mateo-wallace/" target="_blank" rel="noopener noreferrer"
                    class="ease-in-out duration-300 text-white hover:text-slate-300 px-2 py-2 rounded-md text-sm font-medium">LinkedIn</a>
            </div>
            <div class="py-3 text-center">
                <a href="https://mateo-wallace.github.io/M2-Challenge-Portfolio/" target="_blank"
                    rel="noopener noreferrer"
                    class="ease-in-out duration-300 text-white hover:text-slate-300 px-2 py-2 rounded-md text-sm font-medium">Portfolio</a>
            </div>

        </nav>
    </footer>

</body>

</html>
    `;

    cards = [];
    for (i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === "Manager") {
            const managerCard = generateManager(teamMembers[i]);
            cards.push(managerCard);
        }
        if (teamMembers[i].getRole() === "Engineer") {
            const engineerCard = generateEngineer(teamMembers[i]);
            cards.push(engineerCard);
        }
        if (teamMembers[i].getRole() === "Intern") {
            const internCard = generateIntern(teamMembers[i]);
            cards.push(internCard);
        }
    }

    employeeCards = cards.join(" ");

    return header + employeeCards + footer;
}

// create the manager html
const generateManager = manager => {
    return `
        
        `;
};

// create the html for engineers
const generateEngineer = engineer => {
    return `

        `;
};

// create the html for interns
const generateIntern = intern => {
    return `

        `;
};


module.exports = generateHTML;
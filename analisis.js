
function lookForPerson(person) {
    return salarios.find(p => p.name == person);
}



function medianByPerson(person) {
    const jobs = lookForPerson(person).trabajos;

    const salaries = jobs.map((e) =>{
        return e.salario;
    });

    const medianSalaries = PlatziMath.calculateMedian(salaries);

    return medianSalaries

}

function forecastByPerson(person) {
    const jobs = lookForPerson(person).trabajos;

    let percentagesIncrease = [];

    for (let i = 1; i < jobs.length; i++){
        const currentSalary = jobs[i].salario;
        const previousSalary = jobs[i - 1].salario;
        const increase = currentSalary - previousSalary;
        const percentageIncrease = increase/previousSalary;
        percentagesIncrease.push(percentageIncrease);
        
    }

    const medianPercentageIncrese = PlatziMath.calculateMedian(percentagesIncrease)

    const currentSalary = jobs[jobs.length-1].salario;

    const nextSalary = currentSalary  + (currentSalary * medianPercentageIncrese)


    console.log({nextSalary});
}

// Analysis by company
const companies = {}

for(persona of salarios){
    for(job of persona.trabajos){
        if(!companies[job.empresa]){
            companies[job.empresa] = {};
        }

        if(!companies[job.empresa][job.year]){
            companies[job.empresa][job.year] = [];
        }
        companies[job.empresa][job.year].push(job.salario);
    }
}



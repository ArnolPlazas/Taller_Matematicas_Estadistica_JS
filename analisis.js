
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


function medianCompanyYear(name, year){
    if(!companies[name]){
        console.warn('this company does not exist');
    } else if(!companies[name][year]){
        console.warn('this company does not pay a salary this year ');
    } else{
        return PlatziMath.calculateMedian(companies[name][year]);

    }

}

function forecastByCompany(name) {
    if(!companies[name]){
        console.warn('this company does not exist');
    } else{
        const conmpanyYears = Object.keys(companies[name]);
        const listMedianYears = conmpanyYears.map((year) =>{
            return medianCompanyYear(name, year)
        });
        let percentagesIncrease = [];

        for (let i = 1; i < listMedianYears.length; i++){
            const currentSalary = listMedianYears[i];
            const previousSalary = listMedianYears[i - 1];
            const increase = currentSalary - previousSalary;
            const percentageIncrease = increase/previousSalary;
            percentagesIncrease.push(percentageIncrease);
            
        }

        const medianPercentageIncrese = PlatziMath.calculateMedian(percentagesIncrease)

        const lastMedianSalary = listMedianYears[listMedianYears.length-1];

        const nextMedianSalary = lastMedianSalary  + (lastMedianSalary * medianPercentageIncrese)


        console.log({nextMedianSalary});
    }
}
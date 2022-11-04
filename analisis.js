
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

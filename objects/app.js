const employee1 = {id: 123, name: "Vasya", birthYear: 2000, 
salary: 15000, address: {city: "Lod", country: "Israel"}};
const employee2 = {id: 123, name: "Vasya", birthYear: 2000, 
salary: 15000, address: {city: "Lod", country: "Israel"}};
console.log(`employee1==employee2 is ${employee1 == employee2}`)
const employee3 = employee1;
console.log(`employee3==employee1 is ${employee3 == employee1}`)
employee3.salary = 20000;
console.log(`employee1 salary = ${employee1.salary} `)
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]
//const index = employees.indexOf(createEmployee(126, "Abraham", 1990, 13000, "London", "UK"))
const index = employees.findIndex(function(empl) {
    return empl.id === 126;
})
const employee = employees.find(function(empl) {
    return empl.id === 126;
})
//HW #18
function getEmployee(employees, id) {
    let employeesValue=employees.filter(b=>b.id==id);
return employeesValue[0];
    //returns reference to an Employee object with a given id value
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    //returns array of Employee objects that have salary in [salaryFrom, salaryTo]
    let employeeSalary=employees.filter(p=>p.salary>salaryFrom&&p.salary<salaryTo);
    return employeeSalary;
}
function getEmployeesByCity(employees, city) {
    //returns array of Employee objects from a given city
    let employeesCity=employees.filter(p=>p.address.city==city);
    return employeesCity;
}
function getEmployeeNames(employees) {
    //returns array of all Employee names
    let employeesName=employees.reduce(function (a,b,c,d) {
        a.push(b.name);
        return a;
    },[] )
    return employeesName;
}
function sortEmployeesByAge(employees) {
    //returns array of Employee objects sorted by age in ascending order
    let yearToday=2023;
    let sortEmployeesByAge=employees.sort(function (a,b) {
      return -(yearToday-a.birthYear-(yearToday-b.birthYear));  
    });
    return sortEmployeesByAge;
}
function computeSalaryBudget(employees) {
    //computes and returns total salary for all Employee objects
    let salarySum=employees.reduce(function (a,b,c,d) {
      a+=b.salary;
      return a; 
    },0)
    return salarySum;
}
console.log(getEmployee(employees,124));
console.log(getEmployeesBySalary(employees,10000,20000));
console.log(getEmployeesByCity(employees,"London"));
console.log(getEmployeeNames(employees));
console.log(sortEmployeesByAge(employees));
console.log(computeSalaryBudget(employees));
// let arr=[1,2,3,4,5,6];
// let arr1=arr.filter(p=>p>2);
// console.log(arr1);
// let mas=["papa","mama","draniki"];
// let mas1=mas.map(p=>p.length);
// console.log(mas1);
// let mas2=[1,2,3,4,5,6,7,8,9];
// let mas3=mas2.map(p=>p*3);
// console.log(mas3);
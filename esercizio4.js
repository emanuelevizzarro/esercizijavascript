// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
    if (role === 'ceo') {
        return 2200;
    } else if (role === 'manager' || role === 'cto') {
        return 1800;
    } else if (role === 'developer') {
        return 1500;
    }
    return 1000;
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary); // 2200
console.log(managerSalary); // 1800
console.log(ctoSalary); // 1800
console.log(developerSalary); // 1500
console.log(otherSalary); // 1000
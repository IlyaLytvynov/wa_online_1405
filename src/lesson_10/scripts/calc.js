export function calc(employeeList) {
  let total = 0;

  for (let key in employeeList) {
    const salaryAmount = Number(employeeList[key]);
    if (!isNaN(salaryAmount)) {
      total = total + salaryAmount;
    } else {
      console.warn('Salary amount is NaN', key, employeeList[key])
    }
  }

  return total;
}
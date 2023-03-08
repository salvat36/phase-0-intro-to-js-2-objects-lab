// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: "",
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    return {...object, [key] : value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key, value) {
    const newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key,) {
    delete employee[key];
    return employee;
}
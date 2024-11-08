const hello = (req, res) => res.send("Hello")

const Employee = require("../models/employee.js")

const employeeCtrl = {};
employeeCtrl.Get = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}
employeeCtrl.GetById = async (req, res) =>{
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
}
employeeCtrl.Create = async (req, res) =>{
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.send("Employee created successfully");

}
employeeCtrl.Update = async (req, res) =>{
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Employee updated successfully'});
}
employeeCtrl.Delete = async (req, res) =>{
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee deleted successfully'});
}

module.exports = employeeCtrl;
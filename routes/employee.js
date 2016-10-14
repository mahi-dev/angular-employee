var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:mahi123@ds057066.mlab.com:57066/employeelist_mahi', ['employee']);

// Get All Employee
router.get('/Employees', function(req, res, next){
    db.employee.find(function(err, employees){
        if(err){
            res.send(err);
        }
        res.json(employees);
    });
});

// Get Single Employee
router.get('/Employee/:id', function(req, res, next){
    db.employee.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, employee){
        if(err){
            res.send(err);
        }
        res.json(employee);
    });
});

//Save Employee
router.post('/Employee', function(req, res, next){
    var employee = req.body;
    if(!employee.name || !employee.job_title || !employee.age  || !employee.nickname || !employee.year ){

        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.employee.save(employee, function(err, employee){
            if(err){
                res.send(err);
            }
            res.json(employee);
        });
    }
});

// Delete Employee
router.delete('/Employee/:id', function(req, res, next){
    db.employee.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, employee){
        if(err){
            res.send(err);
        }
        res.json(employee);
    });
});

// Update Employee
router.put('/Employee/:id', function(req, res, next){
    var employee = req.body;
    var updEmployee = {};
    
    if(employee.name){
        updEmployee.name = employee.name;
    }
    if(employee.job_title){
        updEmployee.job_title = employee.job_title;
    }
    if(employee.age){
        updEmployee.age = employee.age;
    }
    if(employee.nickname){
        updEmployee.nickname = employee.nickname;
    }
    if(employee.year){
        updEmployee.year = employee.year;
    }
    if(employee.Employee){
        updEmployee.Employee = employee.Employee;
    }
    if(!updEmployee){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.employee.update({_id: mongojs.ObjectId(req.params.id)},updEmployee, {}, function(err, employee){
        if(err){
            res.send(err);
        }
        res.json(employee);
    });
    }
});

module.exports = router;
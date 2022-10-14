const reveal = (function() {
    let counter = 0
   const  add=function(){
        counter=counter+1;
    };
   const  reset=function(){
        counter=0;
    }
    return {
        add:add,
        reset:reset
    }
})();

var add = (function(){
    var counter = 0;
    return function(){
        return counter+=1;
    }
})();

var make_adder = function(inc){
    let hs = 0 ;
    return function(){
        return hs+=inc;
    }
};

const employeeFactory = (function(){
let name;
let age;
let salary;
const getName = function(){
    return name;
};
const getAge = function(){
    return this.age;
}

const getSalary= function(){
    return salary;
}
const setName = function(name){
    debugger;
    console.log("----"+this.name);
    console.log("----"+this);
    this.name = name;
}
const setAge = function(age){
    this.age = age;
}

const setSalary = function(salary){
    this.salary = salary;
}
const increaseSalary = function (percentage){
   setSalary(getSalary()*(100+percentage)/100);
}
const incrementAge = function(){
    setAge(getAge()+1);
}

return {
    setName:setName,
    setAge:setAge,
    setSalary:setSalary,
    increaseSalary:increaseSalary,
    incrementAge:incrementAge
}
})();


employeeFactory.address = '';
employeeFactory.getAddress = function () { return employeeFactory.address; };
employeeFactory.setAddress = function (newAddress) { employeeFactory.address = newAddress; };


var me = {
  first: 'Josh',
  last: 'Splinter',
  getFullName: function() {
    return this.first + ' ' + this.last;
  }
};

var you = {
  first: 'William',
  last: 'Smith'
};

console.log(me.getFullName.call(you));

console.log(me.getFullName.bind(you)());

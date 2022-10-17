String.prototype.filter=function(...banned){
    let replaceRes = this;
     for(let a of banned){
        console.log(a);
        replaceRes = replaceRes.replaceAll(a,"");
     }
     return replaceRes;
}

Array.prototype.bubbleSort = function(){
    var len = this.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (this[j] > this[j+1]) {        // 相邻元素两两对比
                    var temp = this[j+1];        // 元素交换
                    this[j+1] = this[j];
                    this[j] = temp;
                }
            }
        }
    return this;
}
var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}


const Teacher = function(){}

Teacher.prototype = new Person();
Teacher.prototype.teaching=function(subject){
    console.log(this.name + "  is now teaching " + subject);
}
var me = new Teacher();
me.initialize("meijuan long", 26);
me.teaching("WAP");

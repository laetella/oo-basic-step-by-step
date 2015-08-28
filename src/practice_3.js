function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function (name,age){
    return "My name is "+this.name+". I am "+this.age+" years old.";
}

function Student(name, age, classId) {
    Person.apply(this,arguments);
}
Student.prototype.introduce = function(name,age,classId) {
    return "I am a Student. I am at Class "+classId+".";
}
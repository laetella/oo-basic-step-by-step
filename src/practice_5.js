function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function (name,age){
    return "My name is "+this.name+". I am "+this.age+" years old.";
}

function Student(name, age, classId) {
    Person.apply(this,arguments);
    this.classId = classId;
}
Student.prototype.introduce = function(name,age,classId) {
    var string = Person.introduce.apply(this,arguments);

    return string + "I am a Student. I am at Class "+classId+".";
}

function Worker(name, age) {
    Person.apply(this,arguments);
}
Worker.prototype.introduce = function(name,age) {
    var string = Person.introduce.apply(this,arguments);

    return string + "I am a Worker. I have a job.";
}

module.exports = {
    Person : Person,
    Student : Student,
    Worker : Worker
};

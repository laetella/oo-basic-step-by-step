"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("OO入门", function(){
    var Person = require("../../src/practice_5").Person;
    var Person = new Person('Tom',21);
    var student = new Student('Tom',21,2);
    var worker = new Worker('Tom',21);

    it("覆盖同时复用父类的方法", function(){

    });

    it("test Student extend Person",function() {
        var expectString = "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        expect(student.introduce('Tom',21,2)).equal(expectString);
    });

    it("test Worker extend Person", function() {
        var expectString = "My name is Tom. I am 21 years old. I am a Worker. I have a job.";
        expect(worker.introduce()).equal(expectString);
    });
});
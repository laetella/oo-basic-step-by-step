"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("OO入门", function(){
    var Person = require("../../src/practice_3").Person;
    var Student = require("../../src/practice_3").Student;

    var person = new Person('Tom',21);
    var student = new Student('Tom',21,2);

    it("should have name and age and class attributes", function() {
        expect(student.name).equal('Tom');
        expect(student.age).equal(21);
        expect(student.klass).equal(2);
    });

    it("should have introduce,return a correct string", function() {
        var expectString = 'I am a Student. I am at Class 2.';
        expect(student.introduce()).equal(expectString);
    })
});
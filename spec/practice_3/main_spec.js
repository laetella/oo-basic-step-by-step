"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("OO入门", function(){
    var student = new Student('Tom',21,2);
    var name = 'Tom';
    var age = '21';
    var classId = 2;

    require("../../src/practice_3");
    it("覆盖父类的方法-1", function(){
        var exceptString = 'My name is Tom. I am 21 years old.'
        expect(student.introduce()).toEqual(expectString);
    });

    it("should have name and age and class attributes", function() {
        expect(student.name).toEqual(name);
        expect(student.age).toEqual(age);
        expect(student.class).toEqual(classId);
    })

    it("should have introduce,return a correct string", function() {
        var expectString = 'I am a Student. I am at Class 2.';
        expect(studen.introduce(classId)).toEqual(expectString);
    })
});
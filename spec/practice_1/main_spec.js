"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("OO入门", function(){
    var Person = require("../../src/practice_1");
    var person = new Person('Tom',21);

    it("should have name and age attributes", function(){
        expect(person.name).equal('Tom');
        expect(person.age).equal(21);
    });

    it("should have introduce method", function() {
        var expect_string = 'My name is Tom. I am 21 years old.'
        expect(person.introduce()).equal(expect_string);
    })
});

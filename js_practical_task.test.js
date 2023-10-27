"use strict";

const secondsToDate = require("./secondsToDate");

describe("secondsToDate tests", () => {

    test("Return type Date", () => {
        expect(secondsToDate(31536000)).toBeInstanceOf(Date);
    });
    test("31536000 -> 01.06.2021", () => {
        expect(secondsToDate(31536000).toLocaleDateString()).toBe("6/1/2021");
    });
    test("86400 ->  02.06.2020", () => {
        expect(secondsToDate(86400).toLocaleDateString()).toBe("6/2/2020");
    });
    test("0 -> 01.06.2020", () => {
        expect(secondsToDate(0).toLocaleDateString()).toBe("6/1/2020");
    });
})



const toBase2Converter = require("./toBase2Converter");

describe("toBase2Converter tests", () => {
    test("5 -> 101", () => {
        expect(toBase2Converter(5)).toBe("101");
    });
    test("10 ->  1010", () => {
        expect(toBase2Converter(10)).toBe("1010");
    });
    test("1023 -> 1111111111", () => {
        expect(toBase2Converter(1023)).toBe("1111111111");
    });
})



const substringOccurrencesCounter = require("./substringOccurrencesCounter");

describe("substringOccurrencesCounter tests", () => {
    test("\"a\", \"test it\" -> 0", () => {
        expect(substringOccurrencesCounter("a", "test it")).toBe(0);
    });
    test("\"t\", \"test it\" -> 2", () => {
        expect(substringOccurrencesCounter("t", "test it")).toBe(2);
    });
    test("\"T\", \"test it\" -> 2", () => {
        expect(substringOccurrencesCounter("T", "test it")).toBe(2);
    });
})


const repeatingLetters = require("./repeatingLetters");

describe("repeatingLetters tests", () => {
    test("Hello -> HHeelloo", () => {
        expect(repeatingLetters("Hello")).toBe("HHeelloo");
    });
    test("Hello world -> HHeello  wworrldd", () => {
        expect(repeatingLetters("Hello world")).toBe("HHeello  wworrldd");
    });
    test("Javascript - suck -> JJavvascrriipptt -- suuckk", () => {
        expect(repeatingLetters("Javascript - suck")).toBe("JJavvascrriipptt -- suuckk");
    });
})

const redundant = require("./redundant");

describe("redundant tests", () => {
    test("f() return Function", () => {
        expect(redundant("apple")).toBeInstanceOf(Function);
    });
    test("f1() ➞ apple", () => {
        var f1=redundant("apple");
        expect(f1()).toBe("apple");
    });
    test("f2() ➞ pear", () => {
        var f2=redundant("pear");
        expect(f2()).toBe("pear");
    });
    test("f3() ➞ \"\"", () => {
        var f3=redundant("");
        expect(f3()).toBe("");
    });
})


const towerHanoi = require("./towerHanoi");

describe("towerHanoi tests", () => {
    test("3 disks -> 7 turns", () => {
        expect(towerHanoi(3)).toBe(7);
    });
    test("5 disks -> 31 turns", () => {
        expect(towerHanoi(5)).toBe(31);
    });
    test("26 disks -> 67108863 turns", () => {
        expect(towerHanoi(26)).toBe(67108863);
    });
})


const matrixMultiplication = require("./matrixMultiplication");

describe("matrixMultiplication tests", () => {
    test("m1[[-1,2,-5],[3,4,1],[0,1,2]]"+
     "* m2[[-1,2,-5],[3,4,1],[0,1,2]"+
     " = [[7,1,-3],[9,23,-9],[3,6,5]]", () => {

        let m1=[[-1,2,-5],[3,4,1],[0,1,2]];
        let m2=[[-1,2,-5],[3,4,1],[0,1,2]];
        let m3=[[7,1,-3], [9,23,-9],[3,6,5]]
        expect(matrixMultiplication(m1,m2)).toStrictEqual(m3);
    });
    test("m1[[1,2,1],[4,2,2],[0,1,7]]"+
    "* m2[[7,5,1],[2,1,2],[4,3,4]]"+
    " = [[15,10,9],[40,28,16],[30,22,30]]", () => {

       let m1=[[1,2,1],[4,2,2],[0,1,7]];
       let m2=[[7,5,1],[2,1,2],[4,3,4]];
       let m3=[[15,10,9],[40,28,16],[30,22,30]];
       expect(matrixMultiplication(m1,m2)).toStrictEqual(m3);
   });
   test("m1[[1,0,0],[0,1,0],[0,0,1]]"+
   "* m2[[-1,2,-5],[3,4,1],[0,1,2]]"+
   " = [[-1,2,-5],[3,4,1],[0,1,2]]", () => {

      let m1=[[1,0,0],[0,1,0],[0,0,1]];
      let m2=[[-1,2,-5],[3,4,1],[0,1,2]];
      let m3=[[-1,2,-5],[3,4,1],[0,1,2]];
      expect(matrixMultiplication(m1,m2)).toStrictEqual(m3);
  });
})

const gather = require("./gather");

describe("gather tests", () => {
    test("gather(\"a\")(\"b\")(\"c\").order(0)(1)(2).get() ➞ abc", () => {
        const g1=gather("a")("b")("c").order(0)(1)(2).get();
        expect(g1).toBe("abc");
    });
    test("gather(\"a\")(\"b\")(\"c\").order(2)(1)(0).get() ➞ cba", () => {
        const g2=gather("a")("b")("c").order(2)(1)(0).get();
        expect(g2).toBe("cba");
    });
    test("gather(\"e\")(\"l\")(\"o\")(\"l\")(\"!\")(\"h\").order(5)(0)(1)(3)(2)(4).get() ➞ hello!", () => {
        const g3=gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get();
        expect(g3).toBe("hello!");
    });
})

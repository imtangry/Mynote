// var person = {
//     name: "h",
//     friends:[1,2]
// }
//
// function o(o) {
//     function F() {
//
//     }
//
//     F.prototype = o;
//     return new F();
// }
//
// var p1 = o(person);
// p1.name = "s";
// p1.friends.push(3);
// console.log(person.name);
// console.log(person.friends);
// console.log(p1.friends);
// console.log(p1.name);

// var str =`aaa`;
// var b =Object.create({a:1});
// console.log(typeof str.__proto__);
// console.log(str.__proto__);
// // console.log(b.prototype.a);
// console.log(Object.getPrototypeOf(str));
// function a() {
//     this.p = 1
// }
// a.prototype.getp=function () {
//     return this.p
// }
// function b() {
//     this.q = 2
// }
// b.prototype = new a();
// b.prototype.getq=function () {
//     return this.q;
// }
// var i = new b()
// console.log(i.getp());


async function test() {
    await new Promise((resolve => {
        setTimeout(function () {
            console.log(1);
        }, 1000)
    }));
    await new Promise((resolve => {
        setTimeout(function () {
            console.log(2);
        }, 1000)
    }));
    await new Promise((resolve => {
        setTimeout(function () {
            console.log(3);
        }, 1000)
    }));
    console.log(4);
}

test().then().then().then()
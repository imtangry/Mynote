var person = {
    name: "h",
    friends:[1,2]
}

function o(o) {
    function F() {

    }

    F.prototype = o;
    return new F();
}

var p1 = o(person);
p1.name = "s";
p1.friends.push(3);
console.log(person.name);
console.log(person.friends);
console.log(p1.friends);
console.log(p1.name);
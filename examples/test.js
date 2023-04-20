var a;
var b;
var c;
var d;
// unknown & never & tuple
var logData = function (data) {
    var data2 = data;
    console.log(data);
    console.log(data2);
    throw new Error("Bad !");
};
console.log("TouplePremissions");
// interfaces types and unions
console.log("Premissions");
var user = {
    name: "Kobi",
    surename: "Kuzi",
    age: 26,
    isAdmin: true,
    account: 100,
    premissions: ["admin", "manager"],
};
console.log("FullUser <BasicUser, AdvanceUser> : ".concat(user));
var userArray = [user, user, user];
// "template" function which returns the first element in any type of array
function getFirst(arr) {
    return arr[0];
}
getFirst(userArray);
var mul = function (a, b) { return a * b; };
var add = function (a, b) { return a + b; };

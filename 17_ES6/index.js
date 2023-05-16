// ========== 1. Khai báo biến (var, let, const) ==========

// var cho phép khai báo lại một biến đã được khai báo
var a = 1;
setTimeout(() => {
  console.log(a);
}, 1000);
var a = "Hello";

let b = 1;
// let b = "Hello";
b = "Hello";

const c = 1;
// const c = "Hello";
// c = "Hello";

// Cơ chế hoisting
console.log("d", d);
var d = "Hello";

// console.log("e", e); ERROR
let e = 5;

// -(Scope): Tâm hoạt động của 1 biến
// global scope(biến toàn cục): Biến được khai báo ở ngoài cùng của 1 file có thể được truy cập ở mọi nơi
// Function scope (biến dược khai báo bên trong 1 Function): Chỉ có thể truy cập biến bên trong function nó khai báo
// Block scope (biến được khai báo bên trong cặp {}), VD: if(){}, for(){}, while(){}

function demoVarScope() {
  var a = 5;

  if (a > 3) {
    var a = 8;
  }
  console.log(a);
}
demoVarScope(); // var là function scope

function demoLetScope() {
  let b = 5;

  if (b > 3) {
    let b = 8;
    console.log(b);
  }
  console.log(b);
}
demoLetScope(); // let và const là block scope

// ========== 2. Arrow function ==========
// function foo() {}

// var foo = function() {}

// const foo = () => {}
// const bar = () => "Hello BC42"

const student = {
  fullName: "John",
  age: 28,
  print: function () {
    setTimeout(() => {
      console.log(this.fullName, this.age);
    }, 2000);
  },
};

student.print();

// call, apply, bind
function getInfo(a, b) {
  console.log("This Get info:", this, a, b);
  console.log("Get info:", this.fullName, this.age);
}
// getInfo();
// Gọi hàm và đưa một object vào làm this của hàm
// Điểm khác biệt giữa call và apply là call sẽ truyền các tham số của hàm lần lượt
// getInfo.call(student, 1, 2);
// getInfo.apply(student, [1, 2]);

// Return về một hàm mới và đưa một object vào làm this của hàm
// const getStudentInfo = getInfo.bind(student, 1, 2);

// ========== 3. Default params ==========
function renderStudents(students = []) {
  let html = students.reduce((result, student) => {
    return result + `<p>${student.name}</p>`;
  }, "");

  console.log("Default params:", html);
}
// renderStudents();
renderStudents([{ name: "A" }, { name: "B" }]);

function calulateBill(price, discount = 0, tax = 10) {
  return price + (price * tax) / 100 - (price * discount) / 100;
}

console.log("calulateBill:", calulateBill(500_000));
console.log("calulateBill:", calulateBill(500_000, 5));
console.log("calulateBill:", calulateBill(500_000, 5, 8));

// ========== 4. Rest params ==========
function sum(...numbers) {
  return numbers.reduce((total, item) => total + item, 0);
}
console.log("sum:", sum(1, 2));
console.log("sum:", sum(5, 1, 8, 9));
console.log("sum:", sum(5, 1, 8, 9, 10, 22));

// ========== 5. Spread operator ==========
const obj = { a: 1, b: 2 };
// tạo ra 1 obj mới và sao chép lại toàn bộ giá trị của obj hiện tại
const obj1 = { ...obj };
obj1.a = 3;

const obj2 = { ...obj, b: 5 };
const obj3 = { ...obj, c: 9 };
console.log("Clone object:", obj1, obj2, obj3);

const arr = [1, 2, 3, 4];
// Tạo ra 1 array mới và sao chép lại toàn bộ giá trị của arr hiện tại
const arr1 = [...arr];
arr1[0] = 10;
const arr2 = [-5, -8, ...arr, 5, 6];

console.log("Clone array:", arr, arr1, arr2);

// Tìm min, max trong mảng
const nums = [5, 3, 1, 4, 9, 15, 8];
console.log("Min nums:", Math.min(...nums));
console.log("Max nums:", Math.max(...nums));

// ========== 6. Destructuring ==========

const staff = {
  firstName: "Khai",
  lastName: "Truong",
  email: "khai@gmail.com",
};
// const firstName = staff.firstName;
// const lastName = staff.lastName;
// const myEmail = staff.email;
const { firstName, lastName, email: myEmail } = staff;
console.log("Destructuring object:", firstName, lastName, myEmail);

const date = ["19", "02", "2023"];
// const day = date[0];
// const month = date[1];
// const year = date[2];
const [day, month, year] = date;
console.log("Destructuring array:", day, month, year);

// ========== 7. Template string ==========
// Cho phép xuống hàng, nối chuỗi với biến bằng toán tử ${variable}
let className = "BC42";
let content = `
  Hello ${className}
  Javascript ES6.
`;

// ========== 8. Object literal ==========
let age = 25;
let key = "email";
const person = {
  name: "John",
  // Khi tên key và tên biến giống nhau. VD: age: age ta có thể rút gọn
  age,
  // Khai báo động tên thuộc tính bằng cặp []
  [key]: "john@gmail.com",
  // Phương thức thay vì khai báo sayHi: function() {}
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};
console.log(person);

// ========== 9. for...in, for...of ==========
// const nums = [5, 3, 1, 4, 9, 15, 8];
for (let i in nums) {
  console.log(`index: ${i} - value: ${nums[i]}`);
}

for (let num of nums) {
  console.log(`value: ${num}`);
}

// Ngoài ra có thể sử dụng for ... in để duyệt obj
for (let key in person) {
  console.log(`key: ${key} - value: ${person[key]}`);
}

// ========== 9. optional chaining ==========
// Toán tử && khi sử dụng trong phép gắn, sẽ lấy giá trị falsy value đầu tiên, hoặc giá trị cuối cùng nếu không có bất kỳ falsy value nào
// const address =
//   document.getElementById("txtAddress") &&
//   document.getElementById("txtAddress").value;

// Toán tử ? nếu biểu thức phía trước là falsy value, thì sẽ trả về underfined
const address = document.getElementById("txtAddress")?.value;
console.log("Optional chaining:", address);

// Kiểm tra trước khi thực hiện gọi hàm
person.sayHello?.();

// ========== 11. Nullish coalescing (toán tử ??) ==========

// Toán tử || khi sử dụng trong phép gán, sẽ lấy giá trị truthy value đầu tiên, hoặc giá trị cuối cùng nếu không có bất kỳ truthy value nào
const products = JSON.parse(localStorage.getItem("products")) || [];

// Toán tử ?? tương tự như ||, tuy nhiên nó chỉ bỏ qua null và underfined
const score = 0 ?? "N/A";

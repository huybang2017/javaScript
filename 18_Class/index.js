class Student {
  // Phương thức khởi tạo, được tự động khởi chạy khi class được khởi tạo
  // Dùng để khởi tạo giá trị cho các thuộc tính
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Khai báo phương thức
  sayHi() {
    console.log(`Hello: ${this.name}`);
  }
}

const student = new Student("huy", "ndhbang2017@gmail.com");
console.log(student);
student.sayHi();

// =========== Kế thừa ==========
class Employee {
  constructor(id, name, email, age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }

  print() {
    console.log(`ID: ${this.id} - Name: ${this.name}`);
  }

  calcSalary() {
    return 3_000_000;
  }
}

// class Sale kế thừa class Employee sẽ kế thừa toàn bộ thuộc tính và phương thức đã được định nghĩa trong class Employee
class Sale extends Employee {
  // Trường hợp muốn bổ xung thêm các thuộc tính chỉ thuộc về class Sale, ta cần override constructor
  constructor(id, name, email, age, bonus) {
    // super đại diện cho class cha mà nó đang kế thừa
    // super(...): Gọi tới constructor của class cha
    super(id, name, email, age);

    // Tự định nghĩa các thuộc tính thuộc về class Sale
    this.bonus = bonus;
  }

  // Override lại phương thức calcSalary của class cha
  calcSalary() {
    // super.calcSalary(): Gọi tới phương thức calcSalary của class cha
    return super.calcSalary() * 1.5 * ((100 + this.bonus) / 100);
  }
}

// extends: từ khoá kế thừa
const sale1 = new Sale("0001", "Khải", "khai@gmail.com", 30, 10);
console.log(sale1);
sale1.print();
const sale1Salary = sale1.calcSalary();
console.log("Lương sale1:", sale1Salary);

class Marketing extends Employee {
  constructor(id, name, email, age, KPI) {
    super(id, name, email, age);

    this.KPI = false;
  }
  // Phương thức chỉ thuộc về class Marketing
  setKPI() {
    // logic kiểm tra để set KPI là true hoặc false
    this.KPI = true;
  }

  calcSalary() {
    return super.calcSalary() * 2.5;
  }
}

const marketing1 = new Marketing("0002", "Hiếu", "hieu@gmail.com", 28);
console.log(marketing1);
marketing1.print();
const marketing1Salary = marketing1.calcSalary();
console.log("Lương marketing1:", marketing1Salary);

// =========== Đa Hình ==========
const sale2 = new Sale("0003", "Tuấn", "tuan@gmail.com", 30, 15);
const sale3 = new Sale("0004", "Nam", "nam@gmail.com", 26, 10);
const marketing2 = new Marketing("0005", "Toàn", "toan@gmail.com", 24);

const employees = [marketing1, sale1, sale2, marketing2, sale3];

// Tính đa hình thể hiện khi các class khác nhau cùng kế thừa 1 class (Marketing và Sale cùng kế thừa Employee, mà ở class cha có định nghĩa 1 phương thức nào đó(Phương thức caclcaSalary), thì ta chắc chắn các class con có thể gọi tới phương thức đó mà không cần quan tâm nó thuộc marketing hay là thuộc sale)
function rederEmployees() {
  const html = employees.reduce((result, item) => {
    return (
      result +
      `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.calcSalary()}</td>
      </tr>
    `
    );
  }, "");
  document.getElementById("employee-list").innerHTML = html;
}

rederEmployees();

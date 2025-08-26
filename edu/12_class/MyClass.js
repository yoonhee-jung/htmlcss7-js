class MyClass {
  // public : 클래스 내외부 어디서든 접근 가능
  name = 'Hong';
  //private : 클래스 내부에서만 접근 가능
  #age = 20;
  //protected : 나와 그리고 상속관계에서 자식클래스들은 접근이 가능
  _addr = 'wnth'; 
  static gender = 'M';
  
// 생성자 메소드
//'new' 키워드로 객체를 인스턴스화 할때 딱 한 번 실행되는 메소드
 constructor(name, age, addr) {
    this.name = name;
    this.#age = age;
    this._addr = addr;
 }

// getter / setter
// 메소드지만 사용할때 프로퍼티 사용 하듯이 동작한다.
get age() {
  return this.#age;
}

set age(age) {
  this.#age = age;
}

getAge() {
  return this.#age;
}

// 인스턴스 메소드

add(a, b) {
    return a + b;
  }
}

const myClass = new MyClass('홍길동', 20, '조선');
const myClass2 = new MyClass('갑순이', 10, '한국');
//myClass.add(5, 10);
console.log(myClass.age); //getter
myClass.age = 40; //setter
console.log(myClass.getAge());
console.log(myClass.age);
console.log(myClass2.name);
const obj = {
  name: '홍길동',
  age: 20,
  addr: '조선'
}
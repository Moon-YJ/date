/*
  - JS에서 객체를 생성하는 방법 두가지
    1. 객체 리터럴식으로 생성
    2. 생성자를 통한 인스턴스 생성

  - ES6에서의 객체지향
   : 동일한 형식의 객체를 대량으로 뽑아내야될때 객체생성을 자동화
   : 생성자 - 객체를 생성해주는 함수 (붕어빵 틀)
   : 인스턴스 - 생성자를 통해서 복사된 객체 (만들어진 붕어빵들)
   : 프로토타입 - 생성자 안에 자동으로 추가되는 공통의 저장공간 (각 인스턴스에 활용될 함수 등록: 메서드)
   : 같은 생성자를 통해서 복사된 인스턴스들은 프로토타입에 등록된 메서드를 공유
   : 생성자 안쪽의 this - 해당 생성자를 통해서 앞으로 복사될 인스턴스 객체를 지칭
*/

// 생성자를 통한 인스턴스 생성
class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.school = 'uni';
	}
	// 프로토타입에 각 인스턴스들이 공통으로 활용할 함수 등록(메서드)
	plusAge() {
		this.age = this.age + 1;
	}
	changeSchool(txt) {
		this.school = txt;
	}
}

// 생성자를 통해서 두개의 인스턴스 객체 복사
const s1 = new Student('David', 20);
const s2 = new Student('Amy', 23);
//s1.plusAge();
// 인스턴스가 생성된 이후 프로토타입의 메서드를 호출해서 일괄적으로 인스턴스의 구조를 변경 가능
[s1, s2].forEach((el) => {
	el.plusAge();
	el.changeSchool('college');
});
console.log(s1);
console.log(s2);

// 리터럴식으로 객체 생성
/*
  const s1 = {
    name: 'David',
    age: 20,
    school: 'uni'
  }
  const s2 = {
    name: 'Amy',
    age: 23,
    school: 'uni'
  }
*/

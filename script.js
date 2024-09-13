//복사가된 각 개별적인 인스턴스들은 자유롭게 prototype에 접근해서 등록된 메서드를 호출가능
instance.inform();

//ES6에서부터는 위의 불편한 프로토타입 기반 객체지향 문법을 마치 JAVA의 클래스문법을 따라해서 코드 가독성 높임
class Student2 {
	constructor(props) {
		this.name = props.name;
		this.age = props.age;
	}

	inform() {
		//template literal '문자열 안에 변수를 삽입하기 위한 ES6전용의 템플릿 문법'
		//console.log('My Name is ' + this.name + '! ' + 'I am ' + this.age + ' years old.');
		console.log(`My Name is ${this.name}. and I am ${this.age} years old.`);
	}
}

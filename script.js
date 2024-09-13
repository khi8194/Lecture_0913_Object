//ES5 객체 지향
function Student1(props) {
	this.name = props.name;
	this.age = props.age;
}
//생성자에 자동 생성된 prototype이란 공용 공간에 앞으로 재활용할 함수 등록 (메서드)
Student1.prototype.inform = function () {
	console.log("My Name is " + this.name + "! " + "I am " + this.age + " years old.");
};

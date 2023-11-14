const now = new Date(); // 현재 시간 인스턴스객체 반환
const year = now.getFullYear(); // 시간 인스턴스에서 메서드로 연도 반환
const month = now.getMonth(); // 월의 값이 아닌 순서값 반환
const monthName = [
	'1월',
	'2월',
	'3월',
	'4월',
	'5월',
	'6월',
	'7월',
	'8월',
	'9월',
	'10월',
	'11월',
	'12월',
];
const date = now.getDate(); // 일 반환
const day = now.getDay(); // 순서값 반환: 일=0, 월=1, 화=2
const hour = now.getHours(); // 시간 반환
const min = now.getMinutes(); // 분 반환
const sec = now.getSeconds(); // 초 반환
const time = now.getTime(); // 표준시간이 지정된 시점으로부터의 밀리세컨드값 반환

console.dir(now);
console.log(year);
console.log(monthName[month]);
console.log(day, date);
console.log(hour);
console.log(min);
console.log(sec);
console.log(time);

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

const worldHour = now.getUTCHours(); // 전세계 표준시
// 특정 나라 표준시 구하는 방법
// 우리나라시간대를 밀리세컨드로 반환한 값 - 밀리세컨드 시차
const timeGerman = time - 1000 * 60 * 60 * 8; // time에서 시차8시간 빼줌
// 해당 밀리세컨드 시간값으로 시간 인스턴스값이 수정돼서 반환됨
const nowGerman = new Date(timeGerman);
console.log(worldHour);
console.log('한국시간', now);
console.log('독일시간', nowGerman);

// 특정 시간구간에 맞게 호출 메서드 (js 아닌 브라우저 내장 기능)
// setTimeout(실행함수, 지연시간) - 일정시간 이후에 한번만 호출
// setInterval(실행함수, 인터벌시간) - 일정시간마다 계속해서 반복 호출

/*
  setTimeout(() => {
    console.log('5초후 실행');
  }, 5000);

  setInterval(() => {
    console.log('1초마다 반복 실행');
  }, 1000);
*/

const h1 = document.querySelector('h1');
const [btnStart, btnStop] = document.querySelectorAll('button');
// 전역변수를 사용해야하는 경우
// --> 특정 변수값이 서로 다른 함수에서 공유되어야할 때
// 코드블록 외부에서 변수선언뒤 null이나 기본 자료값으로 초기화
// 함수 내부에서 새로 지역변수를 만드는 것이 기존 전역변수를 가져와서 새로운 값만 재할당
let timer = null; // null로 초기화
let num = 0; // 0으로 초기화

timer = setInterval(() => {
	h1.innerText = num++;
	console.log('1초마다 반복 실행');
}, 1000);

btnStop.addEventListener('click', () => {
	clearInterval(timer);
});

btnStart.addEventListener('click', () => {
	timer = setInterval(() => {
		h1.innerText = num++;
		console.log('1초마다 반복 실행');
	}, 1000);
});

// 전자시계 출력
const [spanHr, spanMin, spanSec] = document.querySelectorAll('.box span');

setInterval(() => {
	const hr2 = new Date().getHours();
	const min2 = new Date().getMinutes();
	const sec2 = new Date().getSeconds();

	spanHr.innerText = hr2;
	spanMin.innerText = min2;
	spanSec.innerText = sec2;
}, 1000);

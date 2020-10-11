- typeof 연산자
  데이터유형을 알려주는 중요한 연산자!
  typeof 5;
  typeof -4.8;
  typeof "5";

- 증감연산자
  var a;
  a++;
  a = 0;
  a++;
  a--;

- 슬라이스
  var a = "KheLLo"
  a.slice(1,4); //"heL"

- BREAK (반복문을 중간에 빠져나갈 때 많이 사용)
  var str;
  while (true) {  
   str = prompt("아무거나 입력하세요");
  document.write(str + "<br>");
  if (str == "q") {
  break;
  }
  }
  document.write("Bye~");

- Continue (반복문의 처음으로 돌아갈 때 (skip이랑 유사함))
  while: 조건식( i < 10 )으로 이동
  for: 증감식 ( i++) 으로 이동

for(var i = 0;i < 10; i++) {
if (i == 5) {
continue;
}
console.log(i);
}

- 이중루프
  반복문 안에 반복문이 있는 걸 이중 루프라고 합니다. 종종 사용합니다. 3중, 4중도 가능하지만 잘 사용하지 않습니다.
  for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 3; j++) {
  console.log(i + ", " +j);
  }
  }

  (생각해 보기) 이중 루프 중간에 한꺼번에 빠져나갈 수 있을까요? 아래 코드의 결과는?
  for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 5; j++) {
  console.log("i= " + i+ ", j= " + j);
  if (j == 2) {
  break; }
  }
  }

- 배열의 마지막 원소를 읽어오려면?
  scores[scores.length - 1];
  배열은 Mutable, 문자열은 Immutable
  push(value) : 배열의 뒤 쪽에 새로운 원소를 삽입합니다.
  pop(): 배열의 마지막 원소를 빼서 변수에 넣어 줍니다. 이 때 변수의 길이는 1 감소합니다.
  unshift(v): 배열의 맨 앞에 새로운 값을 추가합니다.
  shift(): 배열의 앞에서 값을 빼서 변수에 넣어 줍니다.

- return 으로 함수를 종료하는데 사용할 수 있다.
  var test1 = function(text) {
  if (text === "exit") {
  return;
  }  
   console.log("보이나요?");  
  }

test1("hoho");
test1("exit")

- 2중 루프를 한 번에 빠져 나가기
  `break` 명령은 한 번에 한 루프만 빠져나갑니다.
  함수의 `return` 을 이용하면 2중 루프를 한 번에 종료할 수 있습니다.

---------(객체)----------

- 객체란 무엇인가?
  현실의 물체에 대응되는 개념입니다.
  객체를 사용하면 변수와 함수를 묶어서 관리하게 됩니다.
  객체는 속성과 메소드를 가집니다.

- 객체 만들기
  p1 = {};

- 속성
  객체에 속한 변수
  p1.name = "Hoyoung Jung";
  console.log(p1.name);

- 메소드
  객체에 속한 함수
  p1.eat = function(food) {
  console.log(this.name + " ate delicious " + food +"...");
  };
  p1.eat("Beef");

- 메소드 대신에 일반 함수를 썼다면?
  eat(p1, "Beef");

- 객체 지향 프로그래밍
  유지보수가 쉬워진다.
  가독성이 높아진다.
  대형 프로그램을 짜기 쉬워진다.
  객체와 객체가 협력해서 일을 한다.
  객체는 일에 책임을 진다.
  객체는 객체에 메시지를 보낸다.
  객체는 자율적으로 일을 한다.

- this 키워드
  메소드 안에서 사용시 함수를 소유한 객체를 가르킨다.
  var p2 = {};
  p2.name = "crong";
  p2.weight = 80;
  p2.say = function(word) {
  console.log(this.name + " says, " + word);
  };

- 객체 만들기2
  var m1 = {
  "name": "Honux",
  "hp": 100,
  "power": 10,
  "attack": function(target) {
  target.hp -= this.power;
  }
  };
  var c1 = {
  type: "Coffee",
  energy: 10
  };
  //m1.eat(c1);

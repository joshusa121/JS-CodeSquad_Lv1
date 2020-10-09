// function sayhello(name, age) {
//     console.log(`hello, my name is ${name} and Im ${age} years old`)
// }

var input1 = prompt("몸무게를 입력하세요")
var input2 = prompt("키를 입력하세요")

var n1 = Number(input1)
var rawn2 = Number(input2)
var n2 = rawn2/100

var bmi = n1/(n2*n2)
if (bmi < 18.5  ) {
    console.log("당신은 처제중 입니다.")
} else if ( bmi < 23 ) {
    console.log("당신은 정상 입니다.")
} else if ( bmi < 25 ) {
    console.log("당신은 과체중 입니다.")
} else if ( bmi < 30 ) {
    console.log("당신은 비만 입니다.")
} else {
    console.log("당신은 고도비만 입니다.")
}    
    

// 몸무게(kg) ÷ (신장(m) × 신장(m)) 
// 산출된 값이 18.5 이하면 저체중, 18.5~23은 정상, 23~25는 과체중, 25~30은 비만, 30이상은 고도비만

console.log('당신의 BMI는 ' + bmi + '입니다.')

/**
 * Module?
 * js에서 모듈이란 파일 안에 코드를 모듈화해서 사용하는 것을 말한다. 
 * 
 * 코드를 그 파일 내부에서만 한정할 수 있도록 하는 것을 말한다.(모듈화)
 * 모듈화를 하게되면 기본적으로 서로 다른 파일에서는 다른 파일끼리 접근하거나 볼 수 없다.(같은 함수명을 사용해도 충돌이 나지 않음)
 * 
 * Why Module?
 * - 파일간의 중복적으로 발생할 수 있는 이름 충돌을 방지할 수 있다. 
 * - 서로간의 코드를 분리함으로써 모듈성을 높여준다. 
 * - 모듈간의 재사용성도 높여준다. 
 * 
 */

// 모듈화를 하지 않으면 기본적으로 global scope를 갖는다. 
// 즉, 같은 다른 파일에서 같은 이름의 함수가 있을 때, 어떤게 호출될지 모름.. ERROR도 안뜸 
// -> 모듈화를 해줘야한다. html에서 모듈화는 <script>안에 type="module" 을 정의해주면 됨. 
//<script type="module" src="10-3-module1.js"></script>
export default function add(a, b) {
    return a + b;
}

// 한 파일안에서 default는 1개여야 한다. 
// 이건 import 할때 이름 변경이 안됨. 
export function print() {}
---
layout: post
title:  "[자바기본] ETC"
date:   2019-11-26
description: 자바의 기본적인 내용들 중 따로 포스팅하기 부적합한 내용들을 모아놓음
---

자바 공부하면서 생겼던 의문이나,  
따로 포스팅하기에는 짧은 내용들을 모아보려고 함  

### Char은 몇 Byte?  
자바에서는 2Byte 이지만 C에는 1Byte 이다.  

char은 문자를 내부적으로 정수값 코드로 저장하기 때문에   정수형 (byte, short, int, long) 과 밀접한 관계가 있음.    

자바는 유니코드를 사용하기 때문에 2 B  
C는 아스키코드를 사용하기 때문에 1 B  


#### ASCII ? Unicode ??

ASCII code(American Standard Code for Information Interchange) 는 1Byte
왜 아스키 코드는 7비트만 활용할까? 그 이유는 1비트를 통신 에러 검출을 위해 사용하기 때문이다.
0~126까지 사용  

한글은 자음과 모음의 조합 가능 개수만 따져도 가뿐히 128개를 넘는다.  
중국어 역시 한자의 개수가 만 개가 넘는데, 이를 어떻게 아스키 코드에 담을 수 있을까?  

그래서 용량을 크게 확장한 2byte (2의 16승 = 65536)의 유니코드가 등장하게 되었다.  


* 여기서 발생한 의문, C 는 ASCII 를 쓰기 때문에 1Byte 고 한글은 2Byte 이다.  
C 에서 char 로 한글을 출력하기 위해서는 어떻게 해야 할까 ?  


~~~ c
char a[11]="한글테스트"; // 한글은 2byte 차지, 5*2 + 1(널문자)  
 
 
 printf("%s \n", &a); // 테스트를 위해 배열 다 찍기.
 
 printf("%c%c\n", a[0],a[1]); //  한글은 2byte 이므로 %c를 2개 붙여주면 나오게 된다. 
 printf("%c%c\n", a[2],a[3]); 
 printf("%c %c\n", a[4],a[5]); // %c를 띄어 쓰면 깨지게 된다. 
 printf("%c%c\n", a[6],a[7]);
 printf("%c%c\n", a[8],a[9]); 
~~~

결과
~~~
한글테스트
한
글
??
스
트
~~~


## SCE(Short-circuit Evaluation-Lazy Evaluation)  

" 가장 빠르게 연산을 진행하기 위한 계산방식 "  

이게 뭐지? 하는 사람은 아래 코드의 출력값을 생각해보면 쉽게 이해가 갈 것이다.  

~~~ java
int num1=0, num2=0;
boolean result;

result = ((num1+=10)<10) && ((num2+=10)<10);

System.out.println(result);
System.out.println("num1 : "+num1);
System.out.println("num2 : "+num2);
~~~

결과!
~~~ 
false
num1 : 10
num2 : 0
~~~

num2의 결과 값을 맞춘 사람이라면 바로 이해했을 것이다.  
~~~ java
result = ((num1+=10)<10) && ((num2+=10)<10);
~~~
&& 왼쪽에 있는 연산자가 false 라면 오른쪽에 있는 연산자는 진행 할 필요가 없다.  
따라서 연산속도 향상을 위해 && 연산자의 오른편을 실행하지 않는다!  

(+) 따라서 개발 시에 여러 개의 조건문이 들어가는 경우,  
제일 확률이 높게 걸리는 조건을 제일 앞에 두기도 함 ^^  





references
https://whatisthenext.tistory.com/103
https://www.crocus.co.kr/269

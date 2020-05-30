---
title: "[자바기본] ETC"
categories:
  - Java
tags:
  - etc
  - ascii
  - unicode 
  - sce
  - outerloop
  - javac
  - pure function
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

## 반복문
이중 중첩 반복문을 나가야 하는 상황에 사용.  

**outerLoop** 에 집중하자  
중첩된 반복문 전부를 벗어나야 할 때, 빠져나갈 위치를 명시해 두면  
한번에 빠져나갈 수 있다.  

이거 사용하는거 한번도 못본 것 같은데..  
성능이나 다른 이상 없는지? 왜 사용하지 않는지? 확인 필요 ^^  ₩ \
 

~~~ java
outerLoop:
for(int i = 1; i < 10; i++){
    for(int j = 2; j < 10; j++){
        //...
        if(i%2==0 && j%2==0)
            break outerLoop;
    }
}
~~~

## javac

**javac(java compiler)**  
 Java 파일(소스파일)에 저장되어 있는 소스코드를 가상머신이 이해 할 수 있는 '자바 바이트 코드(자바 컴파일의 결과로 생성되는 코드)'로 변환시켜 주는 것을 의미함.


## 순수 함수 (Pure function)
동일한 인자를 넣었을 때 항상 동일한 리턴값을 반환하고 외부에 영향을 받지 않는 함수
즉, 오직 입력만이 결과에 영향을 주는 함수

"동일한 인자값을 받으면 동일한 리턴값을 반환해야 함"
-> 어디에서 호출 되든 결과가 동일 해야 함

"외부에 영향을 주지 말아야 함"
   


# 직렬화  
### 객체 직렬화   
자바가 객체를 바이트 스트림으로 인코딩(직렬화) 하고 그 바이트 스트림으로부터 다시 객체를 재구성하는(역직렬화) 메커니즘

직렬화된 객체는 다른 VM에 전송하거나 디스크에 저장한 후 나중에 역직렬화 할 수 있음

> 신뢰할 수 없는 데이터는 절대 역직렬화 하지 않는다.   

references
https://whatisthenext.tistory.com/103
https://www.crocus.co.kr/269
https://seungwoohong.tistory.com/14
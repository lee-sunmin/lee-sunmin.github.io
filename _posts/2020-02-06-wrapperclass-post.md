---
title: "[자바 기본] int와 Integer의 차이에 대해서 아시나요?"
categories:
  - Java
tags:
  - java
  - int
  - Integer
--- 
  
  
## int와 Integer의 차이에 대해서 아시나요?

### wrapper class(래퍼 클래스) 
기본타입 8개를 객체로 포장해주는 클래스이다.  
즉, ***기본 자료형을 클래스화 한 객체***  
각 타입에 해당하는 데이토를 인수로 전달받아 해당값을 가지는 객체를 생성한다.  

기본(int, double, char)  
[Unboxing] =>  
래퍼클래스(Integer, Double, Character) 

<img width="621" alt="스크린샷 2020-02-06 오전 6 21 04" src="https://user-images.githubusercontent.com/17976251/73884343-05129c00-48a9-11ea-8240-97427c096b0d.png">  
이미지 출처 : https://qkrrudtjr954.github.io/java/2017/11/03/wrapper-class.html  

자료형을 선언하는 것 뿐만 아니라 클래스가 제공하는 메소드를 활용하여 일반 자료형보다 폭넓은 활용을 보일 수 있지만 일반 자료형보다 더 많은 메모리 공간을 차지하게 된다.  
따라서 무분별한 사용을 삼가하는 것이 좋다.  
  
1) int  
자료형(long, float, double ..)  
산술 연산 가능  
null로 초기화 불가능  

2) Integer  
래퍼클래스(객체)  
unboxing을 하지 않으면 산술 연산이 불가능
null값 처리 가능  
-> SQL과 연동할 경우 처리 용이  
-> DB에서 자료형이 정수지만 null값이 필요한 경우 VO에서 Integer 사용 가능  

### 다양한 메소드
.equal(), parseInt(), toString() 등 다양한 메소드를 제공해준다.  
(wrapper 클래스 내부의 값을 비교하고 싶을 때는 꼭 .equals() 를 사용해야 한다.)  

문자열을 숫자로 변환하거나, 숫자를 문자로 변환하는 상황에서 주로 사용된다. :)  
따라서 위의 메소드들이 익숙할 것이라 생각한다.  

  
### Auto boxing / unboxing  

자바에서는 boxing(자료형->래퍼클래스)와 unboxing(래퍼클래스->자료형)을 거의 자동으로 변환해준다.  

~~~ java
int i = 1;
Integer integer = i; // auto boxing
int j = integer; // auto unboxing
~~~



출처 : https://jjunii486.tistory.com/49  

https://qkrrudtjr954.github.io/java/2017/11/03/wrapper-class.html  

---
title: "[자바 기본] 자바 interface에 대해 알아보자"
categories:
  - Java
tags:
  - java
  - interface
--- 
  


## 완벽한 abstract 클래스는 interface

* 인터페이스 내에 존재하는 **변수**는 무조건 <span style="color:green">public static final</span>

* 인터페이스 내에 존재하는 **메소드**는 무조건 <span style="color:green">public abstract</span>

  
### interface간 상속이 가능하다  
~~~ java
public interface SuperInterf
{
    public void supMethod();
}

public interface SubIntef extends SuperInterf // extends 로 받는다!
{
    public void subMethod();
}
~~~
  
### interface 기반의 상수표현
"인터페이스 내에 존재하는 변수는 무조건 public static final"로 선언된다."  

~~~java
public interface Week
{
    int MON=1, TUE=2, WED=3, THU=4, FRI=5, SAT=6, SUN=7;
}

public class MeaningfulConst
{
    //.... 생략
    switch(sel)
    {
        // 사용하는 것을 보면 Week. 클래스명으로 사용한다.
        // 가능한 이유는 static 으로 선언되었기 때문이다.(static 게시글 참고)
        case Week.MON:
            System.out.println("월요일");
        case Week.TUE:
            System.out.println("화요일");
    }
}
~~~

### interface의 다중 구현과 다형성

1) 다중 구현
interface는 **다중 구현**이 가능하다.  
~~~ java
class Class implements Interface1, Interface2
~~~

implemets로 받는 것을 '구현' 이라고 부른다.


2) 다형성
~~~ java
 public interface MyInterface {
   int VALUE = 5;

   int calculate(int a);
 }
~~~

~~~ java
public CalCulA implements MyInterface {
   int calculate(int a) {
     return VALUE+a;
   }
 }

 public CalCulM implements MyInterface {
   int calculate(int a) {
     return VALUE*a;
   }
 }
~~~

## Q)abstract와 interface의 차이를 설명해주세요.

***interface***  
인터페이스는 클래스와 별도로 일련의 연관된 메서드를 정의  
서로 관련이 없는 클래스에서 공통적으로 사용하는 방식이 필요하지만 기능을 각각 구현할 경우 좋다  
<span style="color:green">**구현 객체의 같은 동작을 보장하기 위한 목적**</span>  

***abstract class***  
메서드를 선언하지만 모든 메서드를 선언하지 않는 불완전하게 정의된 클래스  
일반적으로 베이스 클래스로 상속해서 더 구체적인 클래스를 만들 때 쓰기 좋다  
<span style="color:green">**상속을 받아서 기능을 확장시키는 데 목적**</span>



References  
난 정말 JAVA를 공부한 적이 없다구요!  

인터페이스(interface)와 추상 클래스(abstract class)  
https://loustler.io/languages/oop_interface_and_abstract_class/

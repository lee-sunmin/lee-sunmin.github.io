---
layout: post
title:  "[자바 기본] 자바 abstract에 대해 알아보자"
date:   2020-01-19
description: 자바 abstract class, method에 대한 간단 정리
---

## 이 클래스의 인스턴스 생성은 제가 원하는 것이 아닙니다.

**인스턴트는 생성하면 안되지만 상속의 관계를 형성하기 위한 클래스**를 만들고 싶다면 abstract 클래스(추상 클래스)를 사용해야 한다.  


## abstract 클레스(추상 클래스)

abstract 클래스는 완전하지 않은 클래스이며 <span style="color:red">인스턴스의 생성이 불가능</span>하다.  

~~~ java
abstract class Friend
{
    // .. 앞부분 생략
    
    public void showData()
    {
        System.out.println("이름 : "+name);
        System.out.println("전화 : "+phoneNum);
        System.out.println("주소 : "+addr);
    }

    public abstract void showBasicInfo(); // abstract 메소드 선언
}
~~~

위와 같이 하나 이상의 abstract 메소드가 정의되어 있는 클래스는 인스턴스의 생성이 불가능하기 때문에, 클래스 역시 abstract 클래스로 선언되어야 한다.  

abstract 메소드는 오버라이딩의 관계를 형성하기 위해 정의되었다. :)  

~~~ java
Friend friend = new Friend(); //error!!!
~~~
그러니까 위 코드처럼 추상클래스의 객체 생성은 절대 불가능하다.  

> abstract 메소드가 없는 abstract 클래스? : 가능  
abstract 메소드가 없어도, 인스턴스의 생성을 원하지 않으면 클래스를 abstract로 선언할 수 있다.  
반대로 abstract 메소드가 하나라도 있으면 그 클래스는 abstract로 선언해야 한다.  

## abstract 클래스를 상속하는 하위 클래스에서 반드시 해야 할 일은?  

~~~ java
abstract class AAA
{
    void methodOne() {...}
    abstract void methodTwo();
}

class BBB extends AAA
{
    void methodThree() {...}
    
    // 핋수 !!!!!
    void methodTwo() {...}
}
~~~

methodTwo 상수를 오버라이딩 하는 것이다.  
abstract 메소드인 methodTwo를 반드시 오버라이딩 해야 컴파일이 가능하다~  

## 정리를 위한 질문 

### abstract class는 new 키워드를 사용한 객체 생성이 가능할까? 
NO!  
상속 관계를 형성하기 위한 클래스이며 객체 생성은 절대 불가능하다.  
  

### abstract method 내에 수행 내용이 있을까?  
NO!
abstract class 내에는 수행 내용이 있는 일반 method가 선언 될 수 있지만,  
abstract 키워드를 붙인 method 내에는 내용이 없다.  




References  
난 정말 JAVA를 공부한 적이 없다구요! (17-1)  
  
인터페이스(interface)와 추상 클래스(abstract class)  
https://loustler.io/languages/oop_interface_and_abstract_class/  
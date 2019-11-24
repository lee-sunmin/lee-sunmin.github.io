---
layout: post
title:  "[자바 기본] 자바 Static 에 대해서 알아보자!"
date:   2019-10-13
description: 자바 기본 문법 중 Static 에 대한 간단 정리
---

<!-- <p class="intro"><span class="dropcap">C</span>urabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.</p> -->

<!-- # Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6 -->

# 자바 - Static 이란 ?

자바를 사용하면서도 기본적인 내용을 놓치는 경우가 많았다.
최근 자바 Static 이 무엇인가? 에 대한 질문을 받았는데 이런 기본 문법도 모르는 사실에 충격을 먹고 여기에 간단히라도 정리해 보려고 한다.  
개인 공부를 위한 공간  

## Static 변수

변수나 함수 앞에 붙여서 사용하는 것이 기본.

~~~ java
public class HousePark  {
    String lastname = "박";

    public static void main(String[] args) {
        HousePark pey = new HousePark();
        HousePark pes = new HousePark();
    }
}
~~~
위와 같은 클래스를 만들고 객체를 생성하면 ***객체마다 객체변수 lastname을 저장하기 위한 메모리를 별도로 할당해야 한다.***   
하지만 모든 객체에서 lastname의 값이 동일하다면?  
이렇게 항상 값이 변하지 않는 경우라면 static 사용 시 메모리의 이점을 얻을 수 있다.

~~~ java
static String lastname = "박";
~~~

static 키워드를 붙이면 자바는 ***메모리 할당을 딱 한번만*** 하게 되어 메모리 사용에 이점을 볼 수 있게된다.

* **Key point!**  
 메모리 할당을 딱 한번만 한다. 

> ※ lastname값이 변경되지 않기를 바란다면 static 키워드 앞에 final를 붙이면 된다. final 키워드는 한번 설정되면 그 값을 변경하지 못하게 하는 기능이 있다. 변경하려고 하면 예외가 발생한다.


***공유의 개념***  << 이게 더 중요!  
static 으로 설정하면 같은 곳의 메모리 주소만을 바라보기 때문에  
<span style="color:red"> static 변수의 값을 공유</span>한다.


생각해보면, 메모리 할당을 한 번만 하는 것과 연결되는 개념이다.  
잘 생각해 보자 ^ ^ ~


~~~ java
public class Counter  {
    static int count = 0;
    Counter() {
        this.count++;
        System.out.println(this.count);
    }

    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
    }
}
~~~

static 키워드를 붙이면 count 값이 공유되어 아래와 같이 방문자수가 증가된 결과값이 나온다.
~~~
1
2
~~~

***보통 변수의 static 키워드는 프로그래밍 시 메모리의 효율보다는 두번째 처럼 공유하기 위한 용도로 훨씬 더 많이 사용하게 된다.***  
  
  
    
-Quiz  
class안에 static으로 선언된 변수가 있는데 초기화가 되있는 상태이면 객체가 생성될때마다 초기화 되는가?

-A   
변수 선언과 함께 초기화를 했다면, 생성될때마다 초기화 되지 않는다.

     
## Static 함수

*  Static Method 안에서는 인스턴트 변수 접근 불가능!
 : Static 변수만 Static Method에서 접근이 가능하다. 이유는 아래에!

Static Method는 보통 Utility성 Method 작성 시 많이 사용한다.
> Utility Method가 뭐지?  
비슷한 기능들이 자주 사용되는 경우 이런한 기능들을 Static Method로 만들어 Utility class로 만들곤 한다.  
Utility Method의 예 : isEmpty, replace, hasText, ...  
어디서 많이 본 명칭임


## Singleton 패턴  
> Singleton : 단 하나의 객체만을 생성하도록 강제하는 패턴  
즉, 클래스를 통해 생성하는 객체는 Only One!! 한 개만 생성되도록 만드는 것  

대략적인 뜻은 알고 있었는데, 제대로 이해를 하지 못하고 있었음  
하지만 이제 Static 을 배웠으니 훨씬 쉽게 이해 할 수 있다 ~  

* Key point !!!  
아래 코드 보면서 읽으면 이해 잘 됨. 읽기만 해도 이해 됨.  

1. 생성자를 private으로 생성해서 외부에 호출하지 못하도록 함  
=> 외부에서 new로 객체 생성하지 못하도록 막음
2. Static 변수(객체) 선언  
3. Static으로 선언한 변수가 null일때만 new로 객체 생성  
=> 하나만 가지겠다 이말  


~~~ java
class Singleton {
    private static Singleton one; // 1번 &  2번
    private Singleton() {
    }

    public static Singleton getInstance() {
        if(one==null) { // 3번
            one = new Singleton();
        }
        return one;
    }
}

public class SingletonTest {
    public static void main(String[] args) {
        Singleton singleton1 = Singleton.getInstance();
        Singleton singleton2 = Singleton.getInstance();
        System.out.println(singleton1 == singleton2);
    }
}
~~~

위 에제는 thread 환경에서 안전하지 않다고 함.  
안전한 싱글톤은 다음에 포스팅하겠음  

## Static 심화  


### 그래서, 메모리 할당은 언제 되는데?  


여기까지 쭉 읽었다면, 아래 내용이 훨씬 쉽게 이해 될 것임  

<span style="color:red">클래스 로딩 시에</span> 멤버(함수나 변수)가 생성된다.  
 . 객체가 생기기 전에 이미 생성  
 . 객체가 생기기 전에도 사용 가능 (즉, 객체 생성하지 않아도 사용 가능)  
 . 객체가 사라져도 멤버는 사라지지 않음  
 . 멤버는 프로그램이 종료될 때 사라짐  
동일 클래스의 모든 객체들에 의해 공유된다.  

**(심화)**  


실제 static 멤버의 생성 시점은 JVM(자바가상머신)에 따라 다름  
그러나, 일반적으로 staitc 멤버가 포함된 클래스가 로딩되는 시점에 static 멤버를 생성한다.  
=> JVM은 많은 경우 처음부터 필요한 대부분의 클래스를 로딩하기 때문에  
static멤버의 생성 시점은 ***"JVM이 시작되는 시점"*** 이라고 말할 수 있음!

### 접근은 어떻게 하는데?  


클래스 별로 하나(모든 객체들->하나!)이기 때문에  
클래스명의 멤버명으로 접근이 가능하다. (왜? new에 의해 객체가 생기기 전에 static 멤버에 접근 가능하니까)

### 제약조건은 뭔데?  


**1> Static 메서드는 오직 Static 멤버만 접근 가능**  


이유 : Static 메서드는 객체가 생성되지 않은 시점에서도 가용 가능하기 때문에,  
인스턴트 변수, 메서드 사용이 불가능하다.  
그러나, 인스턴스 메서드는 static 멤버 모두 사용 가능 => 생각해보면 이유 간단함  

**2> Static 메서드는 this 키워드 사용 불가**


this는 호출 당시 *실행중인 객체를 가리키는 Reference*  
이유 : 따라서 객체가 실행되지 않은 상황에서도 클래스 이름을 사용하여 호출 가능한 static은!  
당~연히 this 못씀. 너무 당연하다 이제  

-끝-  


출처 : 점프 투 자바 https://wikidocs.net/228  
[JAVA] java Static 멤버와 Static 메서드 https://gmlwjd9405.github.io/2018/08/04/java-static.html
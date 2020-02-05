---
layout: post
title:  "[자바 기본] 자바 class와 Object, 참조변수"
date:   2020-01-19
description: 자바 class와 object 에 대한 간단 정리
---


## Class, Object

클래스는 틀, 객체는 실체가 있는 **인스턴스** 라고도 부른다.  
그리고 객체를 생성하는 행위를 '인스턴스화(instantiation)' 한다고 표현한다.  

클래스에 존재하는 변수와 메소드는 메모리 공간에 할당된 형태로 존재하지 않는다.  
따라서 접근도 호출도 불가능한 하나의 틀로서만 역할을 한다.
  
반면 객체는 메모리 공간에 할당이 이뤄진다.  
객체를 구성하는 모든 변수는 그 크기대로 메모리 공간에 할당되고, 메소드도 호출할 수 있는 형태로 메모리 공간에 존재하게 된다.  

~~~ java
FruitSeller seller = new FruitSeller();
~~~
위 코드에서 seller와 같은 변수를 가리켜 **'참조변수'** 라고 한다.  
참조변수에 대한 설명은 아래에서 계속 하기로 한다.  

### Object class?  
최근 class와 object의 차이를 묻는 질문에서 object(객체)를 object class로 착각해서 대답하는 바람에 낭패를 본 적이 있다.  
따라서 정리하는김에 object class도 같이 정리해보자 ~  

Object class는 모든 클래스의 부모이다.  
모든 클래스는 Object class를 암시적으로 상속받고 있다.  
그런 점에서 Object는 모든 클래스의 조상이라고 할 수 있는데, 그 이유는 모든 클래스가 공통으로 포함하고 있어야 하는 기능을 제공하기 위해서다.  

[API 문서 - Object class의 메소드 목록]  
![2123](https://user-images.githubusercontent.com/17976251/73885152-a64e2200-48aa-11ea-9175-612ae49e90b7.png)
이미지 출처 : https://www.opentutorials.org/module/2495/14150  

위의 그림은 Object 클래스가 가지고 있는 메소드를 보여준다.  
다시 말해서 자바의 객체는 위의 메소드들을 반드시 가지고 있다고 할 수 있다.  
특히, 객체를 문자로 포현하는 toString()의 경우 많은 분들이 봤을 것이라 생각한다.  






## 참조변수

<img width="595" alt="스크린샷 2020-01-19 오후 3 02 20" src="https://user-images.githubusercontent.com/17976251/72675787-c4efa300-3acc-11ea-80dd-0cb54d8c2f1e.png">

위 이미지가 가장 이해하기 쉬운 것 같아서 그려보았다.  
new 에 의한 객체 생성시 생성된 객체는 메모리에 저장되고,  
저장된 메모리의 주소 값이 반환되어 참조변수에 저장된다.  

때문에 참조변수에 의한 객체 접근이 가능하며, 주소값이 저장됐기 때문에 아래와 같은 코드도 가능하다.  

~~~java
FruitSeller seller1 = new FruitSeller();
FruitSeller seller2 = seller1; // seller2에 seller1에 저장된 주소값 저장
~~~

두 참조변수가 하나의 객체를 참조하게 되며, 아래와 같다.  

<img width="583" alt="스크린샷 2020-01-19 오후 3 13 31" src="https://user-images.githubusercontent.com/17976251/72675884-44ca3d00-3ace-11ea-9088-88164ada37c0.png">


### new에 의해 반환되는 주소 값

자바에서는 new에 의해 반환되는 주소 값(참조변수가 저장하고 있는 값)을 '참조' 또는 reference라고 한다.

## 객체간의 대화 방법(Message Passing 방법)
~~~ java
public void buyApple(FruitSeller seller, int money)
{
    numberOfApple += seller.saleApple(money); // point!!
    myMoney -= money;
}
~~~
하나의 객체가 다른 객체에게 메시지를 전달하는 방법은 메소드 호출을 기반으로 한다.  
그래서 객체지향에서는 이러한 형태의 메소드 호출을 **'메시지 전달(Message Passing)'** 이라 한다.

## 객체? 인스턴스?

인스턴스는 클래스라는 틀을 기반으로 실체화 된 대상이라는 뜻을 담고 있다.  
**클래스라는 틀을 기반으로 실체화되었음을 강조할 때에는 인스턴스라는 단어를 사용한다.**  

객체는 현실 세계의 사물이나 ㄷ상을 프로그램상에서 표현되었음을 강조할 때 사용한다.  

결국, 인스턴스와 객체는 자바에서 동일한 의미로 사용된다.  
각각의 단어가 더 어울리는 경우가 있긴 하다.  
예) 과일장수를 하시는 옆집 철수 아버님을 의미하는 객체를 생성한다.  
클래스 FruitSeller의 인스턴스를 두 개 생성한다.  

### 인스턴스 변수와 인스턴스 메소드  
인스턴스 메소드는 인스턴스의 행위 및 행동을 표현하는 방법  
인스턴스 변수를 가리켜 인스턴스 필드라고 하기도 한다.  

그러니까 객체 안에 있는 변수와 메소드를 인스턴스를 붙여서 말한다는 것 같음.  




References  
Object class  
https://www.opentutorials.org/module/2495/14150  
난 정말 JAVA를 공부한 적이 없다구요!  


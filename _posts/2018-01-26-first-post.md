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
최근 자바 Static 이 무엇인가? 에 대한 질문을 받았는데 이런 기본 문법도 모르는 사실에 충격을 먹고
여기에 간단히라도 정리해 보려고 한다.  
출처에 있는 내용을 내가 기억하고 읽기 편하게 바꿨다.

## Static 변수

변수나 함수 앞에 붙여서 사용하는 것이 기본.

1. 
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

2. 

***공유의 개념***  << 이게 더 중요!  
static 으로 설정하면 같은 곳의 메모리 주소만을 바라보기 때문에  
<span style="color:red"> static 변수의 값을 공유</span>한다.


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
  
## Static 함수 : To be continue...
      






출처 : 점프 투 자바 https://wikidocs.net/228
---
layout: post
title:  "[자바기본] ++,-- 연산자의 prefix/postfix"
date:   2019-12-08
description: 은근히 헷갈리는 증가/감소연산자 prefix/postfix 정리
---

증가, 감소 연산자가 앞에 붙는지 뒤에 붙는지에 따라 값이 바뀌는 것은 잘 알고 있을 것이다.  
하지만 결과가 어떻게 출력되는지 혼동되는 경우가 꽤 있기 때문에 한번 쭉 정리해보려고 한다.  

## 증가, 감소 연산자(++,--) : prefix

시작하기에 앞서, 증가 감소 연산자의 결합 방향은 **<-** 이다.  

아래 문제를 꼭 직접 풀어보는 것을 추천한다!  
~~~ java
int num1 = 7;
int num2, num3;

num2 = ++num1;
num3 = --num1;

System.out.println(num1);
System.out.println(num2);
System.out.println(num3);
~~~

결과
~~~
7
8
7
~~~

## 증가, 감소 연산자(++,--) : postfix  

~~~ java
int num1 = 7;
int num2, num3;

num2 = num1++;
num3 = num1--;

System.out.println(num1);
System.out.println(num2);
System.out.println(num3);
~~~

결과  
~~~
7
7
8
~~~

헷갈리는 경우가 많은데,  
변수 기준으로 왼쪽으로 진행된다고 생각하면 쉽다.

post의 경우  
num2 = num1++;  
num1 기준으로 왼쪽으로 진행되면 num2에 기존 num1 값이 들어가고,  
별도로 오른쪽 과정이 진행된다고 생각하면 num1+1 연산이 진행된다.  

마지막 문제.  

~~~ java
int num1=7, num2;
num2 = (num1--) + 5;

System.out.println("num1 : "+num1);
System.out.println("num2 : "+num2);
~~~  

결과  
~~~
num1 : 6
num2 : 12 
~~~




References  
난 정말 JAVA를 공부한 적이 없다구요
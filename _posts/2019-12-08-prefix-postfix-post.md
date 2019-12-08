---
layout: post
title:  "[자바기본] ++,-- 연산자의 prefix/postfix"
date:   2019-12-08
description: 은근히 헷갈리는 증가/감소연산자 prefix/postfix 정리
---

간단한 것 같은 증가, 감소 연산자가 앞에 붙는지 뒤에 붙는지에 따라 값이 바뀌는 것은 잘 알고 있을 것이다.  
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

~~~



References
난 정말 JAVA를 공부한 적이 없다구요
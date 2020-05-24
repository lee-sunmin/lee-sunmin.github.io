---
layout: post
title:  "[자바 기본] String, StringBuilder, StringBuffer"
date:   2020-02-08
description: String, StringBuilder, StringBuffer의 차이에 대해 알아보자.
---

크게 생각해보지 않았던 String이 알고보니 생각보다 새로운 것이 많아서 재밌었다 :)  

## String

이전 게시글인 final 관련 글을 보면 String은 immutable class 중 하나라고 되어있다.  
String에 대해 자세히 살펴보자  

### String 클래스의 인스턴스는 상수 형태의 인스턴스이다.
String의 인스턴스는 상수의 성격을 갖는다고 표현을 한다.  
String의 인스턴스에 저장된 문자열 데이터의 변경이 불가능하기 때문이다.  

~~~ java
String str = "Constant String";
~~~
이렇게 저장된 문자열 데이터는 *결코 바꿀 수 없다!*  

바꾸는 메소드가 제공되지 않을 뿐 아니라 문자열 데이터에 직접적인 접근도 불가능하리 때문에 바꿀 수 있는 방법이 전-혀 없다.  

#### 상수 형태로 String 클래스를 정의한 이유는 무엇일까?
인스턴스의 생성은 시스템에 부담되는 요소인데 자바에서는 문자열을 표현할 때마다 인스턴스가 생성되니, 생성을 최소화할 필요가 있었다.  
그래서 다음과 같은 원칙이 기준이 되었다.  

<span style="color:green">"문자열이 동일한 경우에는 하나의 String 인스턴스만 생성해서 공유하도록 한다!"</span>  
위 문장을 보고 띠용- 했다 정말 핵심이 되는 한 줄이라 생각한다.  

~~~ java
class ImmutableString
{
    // ... 생략
    String str1 = "Ming"
    String str2 = "Ming"
    String str3 = "lee"

    if(str1==str2)
        System.out.println("동일 인스턴스 참조");
    else
        System.out.println("다른 인스턴스 참조");

    if(str2==str3)
        System.out.println("동일 인스턴스 참조");
    else
        System.out.println("다른 인스턴스 참조");
}
~~~

**결과**
~~~
동일 인스턴스 참조
다른 인스턴스 참조
~~~

위 상황에서는 str1과 str2가 함께 동일한 인스턴스를 참조한다.  
이때, 참조변수 str2를 이용해서 저장되어 있던 문자열을 "MingMing" 으로 바꾼다면 함께 인스턴스를 참조하던 str1은 자신의 동의 없이 바뀌어버린 문자열을 확인하며 황당할 것이다.  

즉!!!!!  
> 자바는 인스턴스 생성의 수를 줄이기 위해서 동일한 문자열 데이터로 구성되는 String 인스턴스의 생성을 하나로 제한한다. 그리고 이를 통한 문제의 발생을 막기 위해서 String 인스턴스의 데이터 변경은 허용하지 않고 있다.  

### 자바에서는 문자열을 복사한다는 표현을 쉽게 찾아보기 어렵다.

String을 새로 생성함과 동시에 복사하는 것이 목적이라면, 아래와 같이 코드를 작성해야 한다. - 별도의 인스턴스에 저장하기 위해 새로운 String 인스턴스 생성하는 방법.
~~~ java
String str1 = "Best String";
String str2 = new String(str1);
~~~  
  
  

#### String = " " vs new String(" ") 의 차이  
![img](https://user-images.githubusercontent.com/17976251/82747120-2607ea00-9dd1-11ea-9284-3ed539b7b1d2.png)  
[두 가지 방법으로 String]  

자바의 문자열은 java.lang 패키지의 String 클래스의 인스턴스로 관리됨.  
1)String="aa" 를 하면 문자열 리터럴은 String 객체로 자동 생성되지만,  
2)String 클래스의 다양한 생성자를 이용해서 직접 String 객체를 생성하고 사용 할 수 있다.  
ex)String s3 = new String("Cat");  

즉, 첫 번째는 문자열 리터럴 생성 방식, 두 번째는 생성자인 new 연산자를 이용한 문자열 생성 방식인데, 겉으로 보았을 때의 문법 차이도 있지만 실제 메모리에 할당되는 영역에도 차이가 있다.(위 이미지 참고)  

#### ???  
~~~ java
		String a = "abc";
		a += "def";

		String b = "abcdef";
		String c = "abcdef";

		System.out.println(a);
		System.out.println(b);

		if (a == b)
			System.out.println("true");
		else
			System.out.println("false");

		if (b == c)
			System.out.println("true");
		else
			System.out.println("false");
~~~

[결과]  
~~~
false
true
~~~  

첫 번째 결과가 왜 false가 나오는지 궁금하다. 다음에 추가 할 예정 :)  
  
  
## StringBuilder
<span style="color:green">"가변"</span>    
문자열의 저장 및 변경을 위한 메모리 공간(버퍼)을 내부에 지니고 있으며 이 메모리 공간은 크기가 자동으로 조절된다는 특징이 있다.  

중요하게 여겨지는 메소드는 append와 insert이다.  
~~~ java
class BuilderString{
    // ... 생략
    StringBuffer strBuf = new  StringBuffer("AB");
    strBuf.append(25);
    strBuf.append('Y').appned(true);
    System.out.println(strBuf);

    stfBuf.insert(2.false);
    strBuf.insert(strBuf.length(),'Z');
    System.out.println(strBuf);
}
~~~

**결과**
~~~
AB25Ytrue
ABfalse25YtrueZ
~~~

append 메소드의 반환 형태는 'strBuf의 참조 값' 이다.  
즉, 자신의 ***참조 값을 반환***하는 것이다.  
때문에 아래와 같이 연이은 메소드의 호출이 가능하다.

~~~ java
new StringBuilder().append(1).append("Lemon").append(2).toString()
~~~
toString() 메소드는 StringBuilder인스턴스가 저장하고 있는 문자 데이터들을 하나로 모아서 String 인스턴스를 생성하여, 생성된 인스턴스의 참조 값을 반환한다.  
따라서 이 과정에서 또 하나의 인스턴스를 생성하기 때문에 총 2개의 인스턴스가 생성되는 셈이다 :)  


### StringBuilder는 버퍼의 크기를 스스로 확장한다.
StringBuilder의 내부에 존재하는 버퍼는 자동으로 크기가 증가하도록 설계되어 있다.  그러나 필요에 따라서는 그 크기를 조절할 수도 있다. 

~~~ java
public StringBuilder() // 16개의 문자 저장 버퍼 생성
public StringBuilder(int capacity) // capacity 개의 문자 저장 버퍼 생성
public StringBuilder(String str) // str.length()+16개의 문자 저장 버퍼 생성
~~~

> 버퍼의 크기를 확장하는 작업은 많은 연산이 요구되는 작업이기 때문에, 가급적 필요로 하는 버퍼의 크기를 미리 할당하는 것이 성능에 도움이 된다.  




## StringBuffer
<span style="color:green">"StringBuffer 클래스는 Thread-safe 하다."</span>    
"StringBuffer는 쓰레드에 안전하지만, StringBuilder는 쓰레드에 안전하지 못하다."  


References  
난 정말 JAVA를 공부한 적이 없다구요!

[[JAVA] String = " " vs new String(" ") 의 차이  
https://ict-nroo.tistory.com/18 [개발자의 기록습관]


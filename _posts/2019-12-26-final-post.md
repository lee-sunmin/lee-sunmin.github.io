---
layout: post
title:  "[자바 기본] final"
date:   2019-12-26
description: 자바 기본 문법 중 final 에 대한 간단 정리
---


## final 변수 ?
"한번 값이 결정된 이 변수의 값은 변경이 불가능하다."
~~~ java
final int APPLE_PRICE = 2000;
~~~

**final은 딱 한번 값의 초기화가 가능하다.**
~~~ java
final int APPLE_PRICE;

APPLE_PRICE=2000;
~~~

## final method ?  
해당 메소드를 *오버라이드하거나 숨길 수 없음*을 의미한다.  

## final class ?  

(추가)  
private 메소드와 final 클래스의 모든 메소드는 명시하지 않아도 final 처럼 동작한다.  
-> 오버라이드 할 수 없음.  

~~~ java
public final class myclass{ }

public class yourclass extends myclass { } // error !!!
~~~

final class는 final 지시어를 통해 *상속하지 못하도록 정의*한다.

자바의 대표적인 final class 로는 string이 있다.  
string을 final로 정의함으로써 얻을 수 있는 이점으로는 "immutable" 이 있다.  
*immutable 에 대한 자세한 설명은 아래에서 계속 진행한다.(어려워 ㅠ)*   

References의 스택오버플로우에 따르면,  
final 의 이점을 아래와 같이 말하고 있다.  
**You can share duplicates by pointing them to a single instance.**  

* 왜 static final 을 함께 사용하는가?  
해당 클래스를 쓸 때 변하지 않고 계속 일관된 값으로 쓸 것을 멤버 상수로 지정한다.  

예를 들면, 중학교 수학 성적의 만점은 100점이다.  
이 정보는 프로그램이 시작해서 끝날 때까지 절대 변하지 않는 값이다.  

~~~
모든 클래스 인스턴스에서 똑같이 써야할 값이고, 처음부터 끝까지 바뀌지 않는 논리다. 그렇다면 인스턴스가 만들어질 때마다 새로 메모리를 잡고 초기화시키지 말고, 클래스 레벨에서 한 번만 잡아서 하나의 메모리 공간을 쭉 쓰면 동일한 값을 가지는 인스턴스를 계속 생성하여 매번 같은 메모리를 잡는 것보다 더 효율적일 것이다.
~~~

[결론]  
~~~ java
public static final int MAX_SUBJECT_SCORE = 100;
~~~

* final 멤버 변수에 static을 함께 사용하지 않는 경우는 무엇인가 ?  

각 인스턴스마다 서로 다른 final 멤버 변수를 생성자에서 초기화시키는 방식을 사용 할 때이다.  
즉, 인스턴스를 생성 할 때 딱 한번 초기화하고 쭉 변화 없이 사용할 내용에 적합하다.  

DI(Dependency Injection) 기법을 사용해 클래스 내부에 외부 클래스의 의존성을 집어넣는 경우가 그 예이다.  

~~~ java
public class MovieRecommender {

    private final CustomerPreferenceDao customerPreferenceDao;

    @Autowired
    public MovieRecommender(CustomerPreferenceDao customerPreferenceDao) {
        this.customerPreferenceDao = customerPreferenceDao;
    }

    // ...
~~~

위 내용은 springboot 공식 문서의 내용이라고 한다.  
CustomerPreferenceDao 값은 생성자를 통해 주입받아 한 번 초기화되고 있다.  
즉, MovieRecommender의 인스턴스는 작동 내내 변하지 않는 dao 필드 값을 사용하게 된다.  

*영화 추천 기능 사용 중에 소비자 선호도 자료 접근(dao) 기능이 바뀌지 않을 것을 의미한다.*  





@ To-do ! immutable objects 살펴보기.  


### Immutable ?  
Immutable이란 생성후 변경 불가한 객체.  
그래서 immutable 에는 setter가 없으며, 멤버 변수를 변경할 수 없다.  
이걸 쓰면 multi thread 환경에서 더욱 신뢰도 있는 코드를 짤 수 있다고 한다.  
multi thread 환경에서 하나의 객체를 접근할 때 각 thread 끼리 영향을 받는 경우가 있는데, 이러한 경우에 객체의 값이 변하지 않음을 보장 할 수 있다.  

#### 대표적인 Immutable class  
String, Boolean, Integer, .. 등이 있는데, 여기서 포인트는 **변경 불가라는 것은 heap 영역에서의 변경 불가를 뜻한다.**  
따라서 String a = "a" , a = "b" 처럼 재할당은 가능하다고 하는데...  
이러한 변경은 a가 reference 하고 있는 heap 영역 안의 객체 값이 변경된 것이지 heap 영역에 있는 값이 바뀌는 것은 아니라고 한다.  
약간 알 것 같기도 한데 더 읽어보자.  

#### String vs StringBuffer
 String은 Immutable 입니다. StringBuffer는 아닙니다. StringBuffer가 String에 비해서 훨씬 빠르다는 얘기를 들어보셨나요? 그건 객체를 새로 생성할 필요가 없기 때문입니다.

String에는 없고 StringBuffer에만 있는 대표적인 메소드 append, delete 등이 있음  
멤버 변수를 변화시켜 값을 바꿀 수 있는 있는데 잘 보면 리턴 값은 StringBuffer 타입입니다. 객체를 새로 만들어 내지 않고 return this 로 되어 있다.  
아래 코드를 실행시켜 보면, 결과는 true 값이 나온다.  

~~~ java
StringBuffer b = new StringBuffer();
StringBuffer a = b.append("test");
System.out.println(a == b);
~~~

return true 로 되어있기 때문에 아래와 같은 코드도 작성이 가능하다.  

~~~ java
StringBuffer test = new StringBuffer();
test.append("a").append("b").append("c").append("d");
~~~

#### Immutable 은 보통 final 클래스로 정의  

##### 잘못된 Immutable의 구현  

아주 간단한 형태로 예제를 만들어 보았다.  
Immutable 하게 만들기 위해 final 키워드를 사용했다.  

아래 예제를 보면, setter를 사용한 변경이 불가능하고 생성자를 통해서만 멤버변수인 date 의 변경이 가능 할 것이라고 생각된다.  
하지만 아래 예제는 잘못된 구현이다.  

~~~ java
public final class MyDate {
    private final Date date;

    public myDate(Date date){
        this.date = date; // point !!! 
    }
}
~~~

아래 test를 실행시키면, 생성자에 인자로 넣은 Date의 값을 외부에서 변화시키면 멤버 변수의 값. 즉, date의 값이 변화하기 때문이다.  

~~~ java
public class myDateTest {
    public static void main(String[] args){
        Date testDate = new Date();
        MyDate mydate = new Mydate(testDate);

        testDate.setTime(testDate.getTime()+99); // point !!
    }
}
~~~

위 코드를 실행시키면 MyDate 클래스의 멤버변수인 date 값이 변경된다 !!!!  

따라서, 아래와 같이 생성자에서 멤버 변수의 값을 할당하는 부분을 변경해야 한다.  

~~~ java
public final class MyDate {
    private final Date date;

    public myDate(Date date){
        this.date = new Date(date.getTime()); // point !!! 
    }
}
~~~

#### (추가) java의 reflection을 이용하면 Immutable로 사용하고자 하는 값들을 변경 할 수 있다.  

정확한 내용은 다음 포스팅에 reflection 관련 내용을 다뤄야 할 것 같다.  


References  
https://blog.lulab.net/programming-java/java-final-when-should-i-use-it/  

https://djkeh.github.io/articles/Why-should-final-member-variables-be-conventionally-static-in-Java-kor/

https://stackoverflow.com/questions/2068804/why-is-the-string-class-declared-final-in-java  

https://hashcode.co.kr/questions/727/%EC%9E%90%EB%B0%94%EC%97%90%EC%84%9C-immutable%EC%9D%B4-%EB%AD%94%EA%B0%80%EC%9A%94  

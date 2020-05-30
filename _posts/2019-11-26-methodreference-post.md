---
title: "[자바] 자바 메서드 참조(method reference)"
categories:
  - Java
tags:
  - java
  - method
  - reference
---


# 메서드 참조(method reference)
람다 표현식이 단 하나의 메소드만을 호출하는 경우에 해당 람다 표현식에서 불필요한 매개변수를 제거하고 사용할 수 있도록 해줌  

메소드 참조를 사용하면 불필요한 매개변수를 제거하고 다음과 같이 '::' 기호를 사용하여 표현할 수 있음

### 사용방법
~~~
클래스이름::메소드이름
또는
참조변수이름::메소드이름
~~~

~~~ java
// lambda
(base, exponent) -> Math.pow(base, exponent);
// method reference
Math::pow;
~~~

특정 인스턴스의 메소드를 참조할 때에도 참조 변수의 이름을 통해 메소드 참조 사용
~~~ java
MyClass obj = new MyClass;

Function<String, Boolean> func = (a) -> obj.equals(a); // 람다 표현식

Function<String, Boolean> func = obj::equals(a);       // 메소드 참조
~~~

# 생성자 참조
단순히 객체를 생성하고 반환하는 람다 표현식은 생성자 참조로 변환할 수 있습니다.  

다음 예제는 단순히 객체를 생성하고 반환하는 람다 표현식 및 생성자 참조  

~~~ java
// 람다 표현식
(a) -> { return new Object(a); }

// 생성자 참조
Obkect::new;
~~~

~~~ java
Function<Integer, double[]> func1 = a -> new double[a]; // 람다 표현식

Function<Integer, double[]> func2 = double[]::new;      // 생성자 참조
~~~

*항상 람다 표현식보다 생성자 참조가 항상 좋은 건 아님!!



출처 : http://tcpschool.com/java/java_lambda_reference
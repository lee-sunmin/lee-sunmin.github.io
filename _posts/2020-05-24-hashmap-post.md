---
layout: post
title:  "[자바] HashMap"
date:   2020-05-24
description: HashMap
---

### HashMap?  

Hashmap은 고정시간을 제공하는 Key-value 데이터 구조이다.  
**시간복잡도 : O(1)**  

자바의 Hash 개념을 사용한다. 이 데이터 구조는 키를 입력해서 O(1) 시간복잡도로 value 값을 찾을 수 있다.  
해싱에서 해시함수는 해시맵 안의 key와 value를 연결한다.  

데이터를 넣기 위해서 put 함수를 사용하면 key object의 hashcode() 함수가 호출되는데 이는 맵의 해시함수가 value가 저장되어 있는 bucket(table로 알려져 있는 iternal array)에서의 location을 찾기 위함이다.    

해시맵 내부에 Map.Entry 형태로 key value 매핑 값이 들어있다.(아래 코드 참고)  

get() 함수를 사용해서 



[데이터 저장]  
~~~ java
// java 11에서 map을 만드는 방법
var products = new HashMap<String, Double>();

//java 8의 경우
Map<String, Double> products = new HashMap<>();

// add value
products.put("Rice", 6.9);
products.put("Flour", 3.9);
~~~
  
[데이터 검색, 조회]  
~~~ java
//get value : key 값을 사용해서 데이터 검색
Double egg = products.get("Egg");
~~~

### HashMap에서 모든 Key와 Value 출력  
[모든 Key 출력]  
~~~ Java
Set<String> keys = products.keySet();

//print all the keys 
for (String key : keys) {
  System.out.println(key);
}

// or
keys.forEach(key -> System.out.println(key));
~~~  

[모든 Value 출력]  
~~~ java  
Collection<Double> values = products.values();
values.forEach(value -> System.out.println(value));
~~~  

[모든 Key/Value 출력]  
~~~ java
Set<Map.Entry<String, Double>> entries = products.entrySet();

for (Map.Entry<String, Double> entry : entries) {
  System.out.print("key: "+ entry.getKey());
  System.out.println(", Value: "+ entry.getValue());
}

// or (lambda expression) 확실히 깔끔하네
products.forEach((key, value) -> {
  System.out.print("key: "+ key);
  System.out.println(", Value: "+ value);
});
~~~

### Hashmap vs Hashtable  

Hashmap vs Hashtable
1. HashMap is non synchronized. It is not-thread safe and can’t be shared between many threads without proper synchronization code whereas Hashtable is synchronized. It is thread-safe and can be shared with many threads.  
2. HashMap allows one null key and multiple null values whereas Hashtable doesn’t allow any null key or value.  
3. HashMap is generally preferred over HashTable if thread synchronization is not needed  

Why HashTable doesn’t allow null and HashMap does?
To successfully store and retrieve objects from a HashTable, the objects used as keys must implement the hashCode method and the equals method. Since null is not an object, it can’t implement these methods. HashMap is an advanced version and improvement on the Hashtable. HashMap was created later.


References  
[코드 참고]  
http://tech.javacafe.io/2018/12/03/HashMap/  
정리를 너무 잘 해주셔서 해당 내용 참고하면서 교육 목적으로 재정리 했습니다. 감사합니다 :)  
[Haspmap vs Hasptable]  
https://www.geeksforgeeks.org/differences-between-hashmap-and-hashtable-in-java/  



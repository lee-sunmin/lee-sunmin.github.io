---
title: "[자바 기본] Thread에 대해 알아보자"
categories:
  - Java
tags:
  - java
  - thread
---
  
  
## Thread

할당된 메모리 공간을 기반으로 실행 중에 있는 프로그램을 가리켜 '프로세스(Process)'라 한다. 따라서 프로세스를 간단히 '실행중인 프로그램' 으로 설명하기도 한다.  

쓰레드를 통해 하나의 프로세스 내에서 둘 이상의 프로그램 흐름을 형성할 수 있다.  

### extends Thread
~~~ java
class ShowThread extends Thread
{
    //... 생략
    String threadName;

    public showThread(String name){
        threadName = name;
    }
    
    // Thread 클래스의 run 메소드를 오버라이딩 한 것
    public void run()
    {
        // ... 로직
    }
}

class ThreadUnderStand
{
    public static void main(String[] args)
    {
        ShowThread st1 = new ShowThread("멋진 쓰레드");
        ShowThread st2 = new ShowThread("예쁜 쓰레드");
        // 별도의 흐름을 생성하기 위해 Thread 클래스에 정의되어 있는 start 메소드 호출
        str1.start(); 
        str2.start();
    }
}
~~~

- 모든 쓰레드는 CPU를 공유한다.  
- 쓰레드를 생성하고 start 메소드를 호출한다고 해서 main 메소드가 멈춰서는 것은 아니다. main 메소드도 여느 쓰레드와 마찬가지로 자신만의 실행흐름을 이어간다.  

### implements Runnable

~~~ java
class AdderThread extends Sum implements Runnable
{
    //... 생략
}

class RunnableThread
{
    public static void main(String[] args)
    {
        AdderThread at1 = new AdderThread(1,50);
        AdderThread at2 = new AdderThread(51,100);

        // Runnable 인터페이스를 구현하는 인스턴스를 대상으로 쓰레드 생성
        Thread tr1 = new Thread(at1);
        Thread tr2 = new Thread(at2);
        tr1.start();
        tr2.start();

        try
        {
            tr1.join();
            tr2.join();
        }
        catch(InterrruptedException e)
        {
            //...
        }

        System.out.println("1~100까지의 합 : "+(at1.getNum()+at2.getNum());
    }
}
~~~

**join()** : 다른 쓰레드의 실행완료를 기다리는 목적으로 호출하는 join 메소드  
  

## Thread의 특성

### 쓰레드의 스케줄링과 우선순위 컨트롤
.. 추후 내용 추가 예정  
  

### 쓰레드의 라이프 사이클(Life Cycle)  
1) New 상태 : 쓰레드 클래스가 키워드 new를 통해서 인스턴스화 된 상태를 가리켜 'New 상태' 라고 한다.  

2) Runnable 상태 : start 메소드가 호출되면, 해당 쓰레드는 'Runnable' 상태가 된다.  
모든 실행의 준비를 마치고, 스케줄러에 의해서 선택되어 실행될 수 있기만을 기다리는 상태다.  
-> start 메소드가 호출된다고 해서 바로 run 메소드가 호출되는 것이 아님을 알 수 있다!  

3) Blocked 상태  
실행 중인 쓰레드가 sleep, join 메소드를 호출하거나 CPU 할당이 필요하지 않은 입출력 연산을 하게 되면 CPU를 다른 쓰레드에게 양보하고, 본인은 'Block 상태' 가 된다.  

4) Dead 상태
run 메소드의 실행이 완료되어서 run 메소드를 빠져 나오게 되면, 해당 쓰레드는 'Dead 상태' 가 된다.  
한번 Dead 상태가 된 쓰레드는 다시 Runnable 상태가 되지 못한다.  

### 쓰레드의 메모리 구성
쓰레드의 가장 큰 역할은 '별도의 실행흐름 형성' 이다.  
따라서 main 메소드와는 전혀 다른 실행 흐름을 형성하기 위해 **별도의 스택이 쓰레드에게 할당**되어야 한다.  

<img width="616" alt="스크린샷 2020-02-09 오전 11 22 01" src="https://user-images.githubusercontent.com/17976251/74095047-6e571100-4b2e-11ea-99e2-93c860babfb5.png">  

쓰레드는 자신의 스택을 할당받지만, **힙과 메소드 영역은 모든 쓰레드에서 공유**한다.  
(JVM 포스팅 참고!!)  
특히 힙은 쓰레드 사이에 데이터를 주고받아야 할 때 힙 영역을 활용하기도 한다.  


## 동기화(Synchronization)

한 쓰레드가 변수 num에 접근해서 연산을 완료할 때까지, 다른 쓰레드가 변수 num에 접근하지 못하도록 막아야 한다. 이것이 '동기화(Synchronization)' 이다.  

### Thread-safe 합니까?  
String 포스팅을 참고하면 StringBuffer 클래스가 Thread-safe 하다고 설명한 내용이 있다. StringBuffer는 이미 동기화 처리가 되어있어서, 둘 이상의 쓰레드가 동시에 접근을 해도 문제가 발생하지 않는다는 뜻이다.  

### 쓰레드 동기화 기법 1 : synchronized 기반의 동기화 메소드

키워드 synchronized를 사용해서 '동기화 메소드'를 선언하거나 '동기화 블록'을 지정해 주면 된다.

아래는 동기화 메소드의 선언 방법이다.  
~~~ java
public synchronized void increment()
{
    num++;
}
~~~
위와 같이 동기화 메소드를 사용하면 쓰레드B는 쓰레드A가 메소드의 실행을 완료할 때까지 대기하고 있다가, 완료가 되면 비로소 실행을 하게 된다.  
따라서 정확한 값이 출력되지만, ***실행시간이 오래 걸린다***는 문제가 발생한다.  

### synchronized 기반 동기화 메소드의 정확한 이해 

~~~ java
public synchronized int add(int n1, int n2)
{
    opCnt++;
    return n1+n2;
}

public synchronized int min(int n1, int n2)
{
    opCnt++;
    return n1-n2;
}
~~~

Q. 위 코드는 add 메소드가 호출 될 때, min 메소드의 호출도 막을 수 있나요? 그리고 그 반대의 상황도 막을 수 있나요?

A. YES ~  ***실질적인 동기화의 주체는 인스턴스***이기 때문에 동기화되는 영역은 인스턴스 전체로 확장이 된다.

자바의 모든 인스턴스에는 하나의 열쇠가 존재한다.  
calculator 라는 인스턴스 내에 하나의 열쇠를 사용하여 add 함수와 min 함수를 실행하고, 실행이 멈추면 열쇠를 다시 반납한다.  
따라서 인스턴스 내에서 synchronized로 선언된 모든 메소드는 동시에 둘 이상이 실행될 수 없다.  

> 동기화 대상이 인스턴스이기는 하지만 synchronized로 선언되지 않은 메소드에는 얼마든지 접근이 가능하다.  

### 쓰레드 동기화 기법 2 : synchronized 선언에 의한 동기화 블록의 구성

위 동기화 메소드에서 동기화가 필요한 문장은 opCnt++; 와 같이 연산을 진행하는 한 줄에 지나지 않는다. 메소드의 전체 실행이 완료될 때까지 열쇠를 반납하지 않는 것은 성능 감소가 발생한다.  
따라서 코드 블록 일부로  메소드 대상을 제한하는 '동기화 블록' 을 사용해보자.  

~~~java
public int add(int n1, int n2)
{
    synchronized(this) //!!!! (1)
    {
        opCnt++; // 동기화 된 문장
    }
    return n1+n2;
}

public int min(int n1, int n2)
{
    synchronized(this)
    {
        opCnt++; // 동기화 된 문장
    }
    return n1-n2;
}
~~~
위와 같이 동기화 블록을 사용하여 코드의 일부를 부분적으로 동기화의 대상에 포함시킬 수 있다.  
여기서 synchrnized(this) 의 this 에 대해 생각해보자.  
괄호 안에 들어가는 내용은 "어디에 있는 열쇠를 가져다 동기화를 하겠는가?" 이다.  
아래 예제를 보고 명확히 이해해보자.

~~~java
public void addOneNum1()
{
    synchronized(key1)
    {
        num1+=1;
    }
}
public void addTwoNum1()
{
    synchronized(key1)
    {
        num1+=2;
    }
}
public void addOneNum2()
{
    synchronized(key2)
    {
        num2+=1;
    }
}
public void addTwoNum2()
{
    synchronized(key2)
    {
        num2+=2;
    }
}


//... 생략
Object key1 = new Object();
Object key2 = new Object();
~~~

위 예제의 key1, key2는 동기화의 '열쇠'로 사용하기 위해서 생성되었다.  
num1을 사용하는 함수와 num2를 사용하는 함수는 동기화를 위해 사용된 열쇠가 다르기 때문에 과도한 동기화로 인한 성능 저하는 발생하지 않는다 :)  

**정말로 필요한 부분에 최소한의 형태로 동기화를 하는 개발자가 정말로 동기화를 잘하는 개발자이다**  
  

### 동기화는 쓰레드의 접근 순서(방식)를 컨트롤한다는 의미이다.
쓰레드의 실행순서를 결정하는 것도 동기화의 범주에 포함된다.  
"쓰레드의 실행순서는 소스코드가 나열된 순서와 다를 수 있다." 
따라서 아래와 같이 실행 순서를 동기화 할 수 있다.

### wait, notify, notifyAll에 의한 실행순서의 동기화
소포(데이터)가 도착하기로 약속된 장소(인스턴스)가 있는데,
배달부보다 수취인이 먼저 약속된 장소에 도착했다.  
이때 수취인은 "배달부가 오기를 기다리며 낮잠 한숨 잔다"  
그리고 배달부가 와서 데이터를 놓은 뒤에 "수취인을 깨워서 물건을 가져가게 한다"  

~~~ java
// "배달부가 오기를 기다리며 낮잠 한숨 잔다"  
public final void wait() throws InterruptedException
~~~
위 메소드는 Object 클래스에 정의되어 있다. 따라서 어느 인스턴스를 대상으로 하건 호출이 가능하다.  

~~~java
// "수취인을 깨워서 물건을 가져가게 한다"  
public final void notify()
public final void notifyAll()
~~~

위 코드를 사용한 예제를 확인해보자.
~~~ java
//... 생략
public void setTodayNews(String news)
{
    //...
    synchronized(this)
    {
        notifyAll(); // 모두 일어나세요~
    }
    //...
}

public String getTodayNews()
{
    //...
    synchronized(this)
    {
        wait(); // 한숨 자면서 기다릴게요.
    }
    //...
}
~~~
"wait과 notifyAll(notify) 메소드는 동기화 처리를 해서, 한 순간에 하나의 쓰레드만 호출이 가능하도록 해야 한다."  
이 말은 즉 두 메소드 wait과 notify가 서로 다른 두 쓰레드에 의해 각각 동시 호출되는 것 조차 허용되지 않아야 함을 의미한다. 따라서 동기화 블록 또는 동기화 메소드를 이용해서 처리를 한다.  
그리고 wait 메소드는 연이은 호출이 가능하다 :) 
예를들어 A쓰레드가 위 wait 메소드를 호출하면서 잠이 들었다고 가정하면, wait 문장을 감싸는 동기화 블록을 완전히 벗어난것은 아니지만 더 이상 실행중인 것이 아니라 그냥 잠이 들어버린 것이므로 다른 쓰레드가 이 동기화 블록에 접근하는 것은 허용이 된다.  
즉, 다른 쓰레드에 의해서 wait 메소드는 또 다시 호출이 가능하다.  









References  
난 정말 JAVA를 공부한 적이 없다구요
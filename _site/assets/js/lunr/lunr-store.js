var store = [{
        "title": "[자바 기본] 자바 Static 에 대해서 알아보자!",
        "excerpt":"자바 - Static 이란 ? 자바를 사용하면서도 기본적인 내용을 놓치는 경우가 많았다. 최근 자바 Static 이 무엇인가? 에 대한 질문을 받았는데 이런 기본 문법도 모르는 사실에 충격을 먹고 여기에 간단히라도 정리해 보려고 한다. 개인 공부를 위한 공간 Static 변수 변수나 함수 앞에 붙여서 사용하는 것이 기본. public class HousePark {...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/static-post/",
        "teaser": null
      },{
        "title": "[자바] 자바 메서드 참조(method reference)",
        "excerpt":"메서드 참조(method reference) 람다 표현식이 단 하나의 메소드만을 호출하는 경우에 해당 람다 표현식에서 불필요한 매개변수를 제거하고 사용할 수 있도록 해줌 메소드 참조를 사용하면 불필요한 매개변수를 제거하고 다음과 같이 ‘::’ 기호를 사용하여 표현할 수 있음 사용방법 클래스이름::메소드이름 또는 참조변수이름::메소드이름 // lambda (base, exponent) -&gt; Math.pow(base, exponent); // method reference Math::pow; 특정...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/methodreference-post/",
        "teaser": null
      },{
        "title": "[자바기본] 자바 순수 함수(pure function)",
        "excerpt":"순수 함수 (Pure function)   동일한 인자를 넣었을 때 항상 동일한 리턴값을 반환하고 외부에 영향을 받지 않는 함수 즉, 오직 입력만이 결과에 영향을 주는 함수   “동일한 인자값을 받으면 동일한 리턴값을 반환해야 함” -&gt; 어디에서 호출 되든 결과가 동일 해야 함   “외부에 영향을 주지 말아야 함”   references https://seungwoohong.tistory.com/14  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/purefunction-post/",
        "teaser": null
      },{
        "title": "[자바] 직렬화(serializable)",
        "excerpt":"직렬화   객체 직렬화  자바가 객체를 바이트 스트림으로 인코딩(직렬화) 하고 그 바이트 스트림으로부터 다시 객체를 재구성하는(역직렬화) 메커니즘   직렬화된 객체는 다른 VM에 전송하거나 디스크에 저장한 후 나중에 역직렬화 할 수 있음      신뢰할 수 없는 데이터는 절대 역직렬화 하지 않는다.    references  effective java  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/serializable-post/",
        "teaser": null
      },{
        "title": "[자바기본] ETC",
        "excerpt":"자바 공부하면서 생겼던 의문이나, 따로 포스팅하기에는 짧은 내용들을 모아보려고 함 Char은 몇 Byte? 자바에서는 2Byte 이지만 C에는 1Byte 이다. char은 문자를 내부적으로 정수값 코드로 저장하기 때문에 정수형 (byte, short, int, long) 과 밀접한 관계가 있음. 자바는 유니코드를 사용하기 때문에 2 B C는 아스키코드를 사용하기 때문에 1 B ASCII ? Unicode...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javaetc-post/",
        "teaser": null
      },{
        "title": "[자바기본] 상수와 형 변환(Type casting)",
        "excerpt":"상수도 메모리 공간에 저장 된다고? int num = 1+5; 위와 같은 코드에서 1과 5의 합을 계산하기 위해서는 상수 1,5가 메모리 공간에 저장되어야 한다. 상수도 자로형을 기반으로 저장이 된다. 상수의 메모리 저장을너무나 당연하게 생각하는 경향이 있는데, 위 코드에서 1과 5는 자료형인 byte, short, int, long 중 하나로 저장되어야 하며, 2.4나 7.5와...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/typecasting-post/",
        "teaser": null
      },{
        "title": "[자바기본] ++,-- 연산자의 prefix/postfix",
        "excerpt":"증가, 감소 연산자가 앞에 붙는지 뒤에 붙는지에 따라 값이 바뀌는 것은 잘 알고 있을 것이다. 하지만 결과가 어떻게 출력되는지 혼동되는 경우가 꽤 있기 때문에 한번 쭉 정리해보려고 한다. 증가, 감소 연산자(++,–) : prefix 시작하기에 앞서, 증가 감소 연산자의 결합 방향은 &lt;- 이다. 아래 문제를 꼭 직접 풀어보는 것을 추천한다! int...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/prefix-postfix-post/",
        "teaser": null
      },{
        "title": "[자바 기본] final",
        "excerpt":"final 변수 ? “한번 값이 결정된 이 변수의 값은 변경이 불가능하다.” final int APPLE_PRICE = 2000; final은 딱 한번 값의 초기화가 가능하다. final int APPLE_PRICE; APPLE_PRICE=2000; 인스턴스 메소드 내에서 final 인스턴스 변수의 값을 초기화하는 행위는 허용되지 않는다. “인스턴스 메소드는 두 번 이상 호출이 가능하기 때문이다!!” 하지만 딱 한 번만 호출되는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/final-post/",
        "teaser": null
      },{
        "title": "[자바 기본] 자바 class와 Object, 참조변수",
        "excerpt":"Class, Object 클래스는 틀, 객체는 실체가 있는 인스턴스 라고도 부른다. 그리고 객체를 생성하는 행위를 ‘인스턴스화(instantiation)’ 한다고 표현한다. 클래스에 존재하는 변수와 메소드는 메모리 공간에 할당된 형태로 존재하지 않는다. 따라서 접근도 호출도 불가능한 하나의 틀로서만 역할을 한다. 반면 객체는 메모리 공간에 할당이 이뤄진다. 객체를 구성하는 모든 변수는 그 크기대로 메모리 공간에 할당되고,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/class-post/",
        "teaser": null
      },{
        "title": "[통신] HTTP, TCP",
        "excerpt":"사용자가 웹브라우저를 통해 서버에 이미지를 요청해서 사용자에게 보여주기까지 과정 요청을 보내고 받는 과정을 ‘트랜젝션’ 이라고 하는데 요청을 보내고(request) 응답을 받고(response)를 하나의 http 트랜젝션이라고 부른다. 이미지 요청을 보내고 받으면 트랜젝션이 일어난 것이다. 한개의 페이지를 보여주는데도 여러개의 트랜젝션이 발생한다. HTTP트랜젝션은 ‘HTTP 메세지(HTTP Message)’라고 불리는 데이터 덩어리를 이용해 이루어진다. 통신 과정 (TCP, HTTP)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/http-post/",
        "teaser": null
      },{
        "title": "[자바 기본] 자바 abstract에 대해 알아보자",
        "excerpt":"이 클래스의 인스턴스 생성은 제가 원하는 것이 아닙니다. 인스턴트는 생성하면 안되지만 상속의 관계를 형성하기 위한 클래스를 만들고 싶다면 abstract 클래스(추상 클래스)를 사용해야 한다. abstract 클레스(추상 클래스) abstract 클래스는 완전하지 않은 클래스이며 인스턴스의 생성이 불가능하다. abstract class Friend { // .. 앞부분 생략 public void showData() { System.out.println(\"이름 : \"+name); System.out.println(\"전화...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/abstract-post/",
        "teaser": null
      },{
        "title": "[스프링 부트] JPA에 대해 알아보자",
        "excerpt":"JPA JPA를 사용한다는건 ORM(Object Relational Mapping : 객체의 관계를 연결)형태를 쓴다고 한다. JPA의 대표적인 것중에 Hibernate가 있다. DB에 테이블 생성 쿼리를 직접 날리지 않고 Entity 클래스를 생성해서 DB 테이블을 만드는 등 객체형태의 데이터를 데이터베이스 컬럼에 하나씩 파싱해서 넘기지 않고 객체에 저장된 데이터를 쉽게 데이터베이스에 적재 할 수 있도록 도와준다. ORM...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/jpa-post/",
        "teaser": null
      },{
        "title": "[자바 기본] 자바 jvm의 실행 과정에 대해서 알아보자!",
        "excerpt":"아래 출처에 있는 게시글을 재정리하며 스스로 공부함이 목적인 게시글입니다. JVM(Java Virtual Machine) : 자바 가상 머신으로 자바 바이트 코드를 실행할 수 있는 주체이며, CPU나 운영체제(플랫폼)의 종류와 무관하게 실행이 가능하다. (자바의 장점 중 하나라고 생각함~) 즉, 운영체제 위에서 동작하는 프로세스로 자바 코드를 컴파일해서 얻은 바이트 코드를 해당 운영체제가 이해할 수 있는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/jvm-post/",
        "teaser": null
      },{
        "title": "[자바 기본] 자바 GC(Gargabe Collection)에 대해서 알아보자!",
        "excerpt":"Java Garbage Collection 가비지 컬렉션 과정 - Generational Garbage Collection stop-the-world 란? GC을 실행하기 위해 JVM이 애플리케이션 실행을 멈추는 것이다. stop-the-world가 발생하면 GC를 실행하는 쓰레드를 제외한 나머지 쓰레드는 모두 작업을 멈추고, GC 작업을 완료한 이후에야 중단했던 작업을 다시 시작한다. 어떤 GC 알고리즘을 사용하더라도 stop-the-world는 발생하기 때문에, 대개의 경우 GC 튜닝이란...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/gc-post/",
        "teaser": null
      },{
        "title": "[자바 기본] int와 Integer의 차이에 대해서 아시나요?",
        "excerpt":"int와 Integer의 차이에 대해서 아시나요? wrapper class(래퍼 클래스) 기본타입 8개를 객체로 포장해주는 클래스이다. 즉, 기본 자료형을 클래스화 한 객체 각 타입에 해당하는 데이토를 인수로 전달받아 해당값을 가지는 객체를 생성한다. 기본(int, double, char) [Unboxing] =&gt; 래퍼클래스(Integer, Double, Character) 이미지 출처 : https://qkrrudtjr954.github.io/java/2017/11/03/wrapper-class.html 자료형을 선언하는 것 뿐만 아니라 클래스가 제공하는 메소드를 활용하여...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/wrapperclass-post/",
        "teaser": null
      },{
        "title": "[자바 기본] OOP 특징에 대해 알아보자",
        "excerpt":"OOP(Object Oriented Programming) 객체의 관점에서 프로그래밍 하는 것을 의미한다. OOP는 객체들의 유기적인 관계를 통해서 프로세스가 진행된다. 즉, 애플리케이션을 구성하는 요소들을 객체로 바라보고, 객체들을 유기적으로 연결하여 프로그래밍 하는 것을 말한다. OOP의 특징 1) 추상화 객체의 공통된 속성들 중 필요한 부분을 포착해서 클래스로 정의하는 설계 기법 공통의 속성이나 기능을 묶어 이름을 붙이는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/oop-post/",
        "teaser": null
      },{
        "title": "[자바 기본] 자바 interface에 대해 알아보자",
        "excerpt":"완벽한 abstract 클래스는 interface 인터페이스 내에 존재하는 변수는 무조건 public static final 인터페이스 내에 존재하는 메소드는 무조건 public abstract interface간 상속이 가능하다 public interface SuperInterf { public void supMethod(); } public interface SubIntef extends SuperInterf // extends 로 받는다! { public void subMethod(); } interface 기반의 상수표현 “인터페이스 내에 존재하는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/interface-post/",
        "teaser": null
      },{
        "title": "[통신] 쿠키와 세션에 대한 간단한 정리",
        "excerpt":"Cookie와 Session Cookie와 Session 사용 이유 현재 우리가 인터넷에서 사용하고 있는 HTTP 프로토콜은 연결 지향적인 성격을 버렸기 때문에 새로운 페이지를 요청할 때마다 새로운 접속이 이루어지며 이전 페이지와 현재 페이지 간의 관계가 지속되지 않는다. 이에 따라 HTTP프로토콜을 이용하게 되는 웹 사이트에서는 웹 페이지에 특정 방문자가 머무르고 있는 동안에 그 방문자의 상태를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/cookie-post/",
        "teaser": null
      },{
        "title": "[자바 기본] String, StringBuilder, StringBuffer",
        "excerpt":"크게 생각해보지 않았던 String이 알고보니 생각보다 새로운 것이 많아서 재밌었다 :) String 이전 게시글인 final 관련 글을 보면 String은 immutable class 중 하나라고 되어있다. String에 대해 자세히 살펴보자 String 클래스의 인스턴스는 상수 형태의 인스턴스이다. String의 인스턴스는 상수의 성격을 갖는다고 표현을 한다. String의 인스턴스에 저장된 문자열 데이터의 변경이 불가능하기 때문이다. String...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/string-post/",
        "teaser": null
      },{
        "title": "Async와 Sync에 대해 알아보자",
        "excerpt":"동기 방식(Synchronous) 요청을 보낸 후 응답(=결과)를 받아야지만 다음 동작이 이루어지는 방식으로 어떠한 일을 처리할 동안 다른 프로그램은 정지한다. 실제 cpu가 느려지는 것은 아니지만 시스템의 전체적인 효율이 저하된다고 할 수 있다. 통신에 참여하는 모든 노드가 시간을 동기화한다. (예) 면접 진행 시 15분에 1명씩 진행하는 것 비동기 방식 (Asynchronous) 요청을 보낸 후...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/sync-post/",
        "teaser": null
      },{
        "title": "[데이터베이스] index에 대해 알아보자",
        "excerpt":"INDEX의 의미 RDBMS에서 검색속도를 높이기 사용하는 기술로 INDEX는 색인이다. 해당 TABLE의 컬럼을 색인화(따로 파일로 저장)하여 검색시 해당 TABLE의 레코드를 full scan 하는게 아니라 색인화 되어있는 INDEX 파일을 검색하여 검색속도를 빠르게 하는것이 포인트! RDBMS에서 INDEX는 B+ Tree를 사용한다. :) INDEX의 원리 INDEX를 해당 컬럼에 주게 되면 초기 TABLE생성시 만들어진 MYD,MYI,FRM 3개의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/index-post/",
        "teaser": null
      },{
        "title": "[알고리즘] B-Tree에 대해 알아보자",
        "excerpt":"B-tree 데이터베이스와 파일시스템에서 B-Tree를 많이 사용하며, rdb 인덱스에서도 일반적으로 B-Tree , B+-Tree 자료구조를 사용한다. 이진 트리가 자식 노드가 최대 2개인 노드라면 B-Tree는 자식 노드의 개수가 2개 이상인 트리이다. 또한 노드내의 데이터가 1개 이상일수가 있으며, 노드내 최대 데이터 수가 2개라면 2차 B-Tree, 3개라면 3차 B-Tree 라고 한다. 차수가 홀수인지 짝수인지에 따라...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/Btree-post/",
        "teaser": null
      },{
        "title": "[알고리즘] 정렬 알고리즘에 대해 알아보자",
        "excerpt":"Insertion sort(삽입 정렬) 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘 매 순서마다 해당 원소를 삽입할 수 있는 위치를 찾아 해당 위치에 넣는다. 삽입 정렬은 두 번째 자료부터 시작하여 그 앞(왼쪽)의 자료들과 비교하여 삽입할 위치를 지정한 후 자료를 뒤로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/basicsort-post/",
        "teaser": null
      },{
        "title": "[알고리즘] 분할 정복 알고리즘(정렬)에 대해 알아보자",
        "excerpt":"아래 출처에 있는 게시글을 재정리하며 스스로 공부함이 목적인 게시글입니다. 합병정렬(Merge sort) 분할 정복 알고리즘의 하나 이다. 분할 정복(divide and conquer) 방법 문제를 작은 2개의 문제로 분리하고 각각을 해결한 다음, 결과를 모아서 원래의 문제를 해결하는 전략이다. 분할 정복 방법은 대개 순환 호출을 이용하여 구현한다. 과정 설명 1) 리스트의 길이가 0 또는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/sort-post/",
        "teaser": null
      },{
        "title": "[자바 기본] Thread에 대해 알아보자",
        "excerpt":"Thread 할당된 메모리 공간을 기반으로 실행 중에 있는 프로그램을 가리켜 ‘프로세스(Process)’라 한다. 따라서 프로세스를 간단히 ‘실행중인 프로그램’ 으로 설명하기도 한다. 쓰레드를 통해 하나의 프로세스 내에서 둘 이상의 프로그램 흐름을 형성할 수 있다. extends Thread class ShowThread extends Thread { //... 생략 String threadName; public showThread(String name){ threadName = name; }...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/thread-post/",
        "teaser": null
      },{
        "title": "[기타] 배포 전략의 종류 3가지",
        "excerpt":"해당 게시글의 모든 내용은 아래 출처에서 가져왔습니다. 개인 학습용으로 해당 공간에 재생성하였습니다. 1. 롤링 배포 (Rolling) 일반적인 배포를 의미하며, 구 버전에서 신 버전으로 트래픽을 점진적으로 전환하는 배포이다. 위 이미지를 보면 초록색 부분이 배포되는 영역이며, 점진적으로 전환되는 것을 확인 할 수 있다. 관리는 편하지만 배포 중 한쪽 인스턴스의 수가 감소되므로 서버...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/distribution-post/",
        "teaser": null
      },{
        "title": "[자바] HashMap",
        "excerpt":"HashMap? Hashmap은 고정시간을 제공하는 Key-value 데이터 구조이다. 시간복잡도 : O(1) 자바의 Hash 개념을 사용한다. 이 데이터 구조는 키를 입력해서 O(1) 시간복잡도로 value 값을 찾을 수 있다. 해싱에서 해시함수는 해시맵 안의 key와 value를 연결한다. 데이터를 넣기 위해서 put 함수를 사용하면 key object의 hashcode() 함수가 호출되는데 이는 맵의 해시함수가 value가 저장되어 있는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/hashmap-post/",
        "teaser": null
      },{
        "title": "DAO VS DTO(VO)",
        "excerpt":"DAO  DAO : Data Access Object Database data 접근을 위한 객체  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/dtovsdao-post/",
        "teaser": null
      },{
        "title": "[통신] TCP VS UDP",
        "excerpt":"TCP / UDP ? 전송계층에서 사용하는 프로토콜로써, 목적지 장비까지 전송한 패킷을 상위의 특정 응용 프로토콜에게 전달하는 것에 목적이 있음 전송계층이란? 송신자와 수신자를 연결하는 통신 서비스를 제공하는 계층으로, 쉽게 말해 데이터의 전달을 담당함 전송방식: TCP, UDP TCP(Transmission Control Protocol)? : 연결형 서비스를 지원하는 전송 계층 프로토콜 호스트간 신뢰성 있는 데이터 전달과...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/tcpudp-post/",
        "teaser": null
      }]

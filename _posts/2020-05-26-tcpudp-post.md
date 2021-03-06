---
title: "[통신] TCP VS UDP"
categories:
  - Network
tags:
  - network
  - tcp
  - udp
---
  
  
### TCP / UDP ?  

전송계층에서 사용하는 프로토콜로써, 목적지 장비까지 전송한 패킷을 상위의 특정 응용 프로토콜에게 전달하는 것에 목적이 있음  

* 전송계층이란? 송신자와 수신자를 연결하는 통신 서비스를 제공하는 계층으로, 쉽게 말해 데이터의 전달을 담당함  

전송방식: TCP, UDP  
  


### TCP(Transmission Control Protocol)?  

: 연결형 서비스를 지원하는 전송 계층 프로토콜  

호스트간 **신뢰성 있는 데이터 전달과 흐름제어**  
인터넷상에서 *데이터를 메시지의 형태로 보내기 위해 IP와 함께 사용*하는 프로토콜  

일반적으로 TCP와 IP를 함께 사용하는데, IP가 데이터의 배달을 처리한다면 TCP는 패킷을 추적 및 관리한다.  

  
### TCP 특징  

1. 연결형 서비스로 가상 회선 방식(처음 패킷으로 최적의 경로를 고정하고 경로가 고정되면 그 다음은 패킷으로 나누어 고속으로 전송하는 기술)을 제공한다.
2. 데이터의 경계를 구분하지 않는다.
3. ***데이터의 전송 순서 보장한다.***
4. ***UDP보다 전송속도가 느리다.***
5. ***신뢰성있는 데이터를 전송한다.***




### UDP ( User Datagram Protocol )  

: *비연결형 서비스를 지원하는 전송계층 프로토콜*  
인터넷상에서 서로 정보를 주고받을 때 정보를 보낸다는 신호나 받는다는 신호 절차를 거치지 않고, ***보내는 쪽에서 일방적으로 데이터를 전달***하는 통신 프로토콜
  
데이터를 데이터그램(독립적인 관계를 지니는 패킷) 단위로 처리  

​  
### UDP 특징  

1. 비연결형 서비스로 데이터그램 방식을 제공한다.
2. ***정보를 주고 받을때 정보를 보내거나 받는다는 신호절차를 거치지 않는다.***
3. ***신뢰성 없는 데이터를 전송한다.***
4. 데이터의 경계를 구분한다.
5. ***TCP보다 전송속도가 빠르다.***
  


### 결론 (차이점)  

: TCP는 연속성보다 신뢰성있는 전송이 중요할 때에 사용하는 프로토콜이며,  
UDP는 TCP보다 속도가 빠르며 네트워크 부하가 적다는 장점이 있지만 신뢰성있는 데이터 전송을 보장하지는 않는다.  

그렇기 때문에 신뢰성보다는 연속성(어떠한 상태가 계속 유지되는 것)이 중요한 실시간 서비스(streaming)같은 곳에 자주 사용됨  


References  
https://choseongho93.tistory.com/3 [⊂코딩 5분전⊃]


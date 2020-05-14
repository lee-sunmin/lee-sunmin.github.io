---
layout: post
title:  "[기타] 배포 전략의 종류 3가지"
date:   2020-05-14
description: 롤링, 블루그린, 카나리 배포
---

해당 게시글의 모든 내용은 아래 출처에서 가져왔습니다.  
개인 학습용으로 해당 공간에 재생성하였습니다.  

### 1. 롤링 배포 (Rolling)
<img width="752" alt="스크린샷 2020-05-14 오후 10 03 19" src="https://user-images.githubusercontent.com/17976251/81937588-c66e4980-962e-11ea-9319-06b1ecfd6780.png">  

일반적인 배포를 의미하며, **구 버전에서 신 버전으로 트래픽을 점진적으로 전환하는 배포**이다.  
위 이미지를 보면 초록색 부분이 배포되는 영역이며, 점진적으로 전환되는 것을 확인 할 수 있다.  


관리는 편하지만 배포 중 <한쪽 인스턴스의 수가 감소되므로 서버 처리 용량을 미리 고려해야 한다.>  


### 2. 블루그린 (Blue Green)  
<img width="791" alt="스크린샷 2020-05-14 오후 10 08 31" src="https://user-images.githubusercontent.com/17976251/81938146-8360a600-962f-11ea-9d9e-e21130177ed7.png">  

  
<img width="807" alt="스크린샷 2020-05-14 오후 10 09 29" src="https://user-images.githubusercontent.com/17976251/81938219-996e6680-962f-11ea-8a4d-e02a4b6a7683.png">  

위 이미지를 보면 쉽게 알 수 있는 것처럼 신 버전을 배포하고 일제히 전환하여 모든 연결을 신 버전을 바라보도록 하는 배포방법이다.  
구 버전(파랑)과 신 버전(초록) 서버를 동시에 나란히 구성하여 배포 시점에 트래픽을 일제히 전환시킨다.  
**빠른 롤백이 가능하고 실제 서비스 환경으로 신 버전 테스트가 가능하다!**  
하지만, ***시스템 자원이 두 배로 필요하다는 단점이 있다.***  
  

### 3. 카나리 (Canary)
  
<img width="819" alt="스크린샷 2020-05-14 오후 10 12 39" src="https://user-images.githubusercontent.com/17976251/81938574-0f72cd80-9630-11ea-9779-32d8604f9ce8.png">  

카나리의 어원은 카나리아라는 새이다. 카나리아는 유독가스에 굉장히 민감한 동물로 석탄에서 유독가스 유출을 알리는 용도로 사용되어 왔다. - 미리 위험을 감지하기 위함  

카나리 배포는 *위험을 빠르게 감지할 수 있는 배포 전략*이다.  
**지정한 서버 또는 특정 유저에게만 배포했다가 정상적이면 전체를 배포하는 방식**으로 서버의 트래픽 일부를 신 버전으로 분산하여 오류 여부를 확인 할 수 있다.  
이러한 전략은 성능 모니터링에 유용하다. 트래픽을 분산시킬 때는 라우팅을 랜덤하게 할 수 있다.










### 출처  
https://reference-m1.tistory.com/211  
모든 자료는 위 링크를 참고했습니다. 깔끔한 정리 감사합니다 ^^  
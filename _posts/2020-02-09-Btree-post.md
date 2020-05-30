---
title: "[알고리즘] B-Tree에 대해 알아보자"
categories:
  - Algorithm
tags:
  - algorithm
  - b-tree
---
  
  
## B-tree
데이터베이스와 파일시스템에서 B-Tree를 많이 사용하며, 
rdb 인덱스에서도 일반적으로 B-Tree , B+-Tree 자료구조를 사용한다.  

이진 트리가 자식 노드가 최대 2개인 노드라면 **B-Tree는 자식 노드의 개수가 2개 이상**인 트리이다.    
또한 **노드내의 데이터가 1개 이상**일수가 있으며, 노드내 최대 데이터 수가 2개라면 2차 B-Tree, 3개라면 3차 B-Tree 라고 한다.  
차수가 홀수인지 짝수인지에 따라 알고리즘이 많이 달라진다고 한다. 아직 잘 모르겠다 ㅠ  

### B-tree 성립 조건

1) 노드의 데이터수가 n개라면 자식 노드의 개수는 n+1 개이다.  
btree조건 root 노드의 데이터가 1, 2, 3 3개이므로 자식 노드의 개수는 4개 입니다.
<img width="678" alt="btree_1" src="https://user-images.githubusercontent.com/17976251/74100921-67082580-4b77-11ea-93f5-3c53d3629624.png">  
이미지 출처 : https://hyungjoon6876.github.io/jlog/2018/07/20/btree.html 

2) 노드의 데이터는 반드시 정렬된 상태여야 한다.  
3) 노드의 자식노드의 데이터들은 노드 데이터를 기준으로 데이터보다 작은 값은 왼쪽 서브 트리에 큰값들은 오른쪽 서브 트리에 이루어 져야 한다.  
4) Root 노드가 자식이 있다면 2개이상의 자식을 가져야 한다. 
5) Root 노드를 제외한 모든 노드는 적어도 M/2 개의 데이터를 갖고 있어야 한다.  
3차 B-Tree 까지는 1개의 데이터지만 4차부터는 최소 2개 이상의 데이터를 가져야 한다.  
<img width="845" alt="btree_4" src="https://user-images.githubusercontent.com/17976251/74100930-7b4c2280-4b77-11ea-82e9-0c30918562a2.png">  
이미지 출처 : https://hyungjoon6876.github.io/jlog/2018/07/20/btree.html  
6) Leaf 노드로 가는 경로의 길이는 모두 같아야 한다.  
즉 Leaf 노드는 모두 같은 레벨에 있어야 한다.  


### B-Tree 삽입/삭제 등 시뮬레이션 해볼 수 있는 사이트  
https://www.cs.usfca.edu/~galles/visualization/BTree.html  


### B-Tree 삽입   

<img width="559" alt="스크린샷 2020-02-09 오후 8 14 09" src="https://user-images.githubusercontent.com/17976251/74101035-cf0b3b80-4b78-11ea-9bde-89141029dead.png">  
위 예제를 보면 위에서 명시한 조건들이 성립되는 것을 확인 할 수 있다.  
특히, Root 노드를 제외한 모든 노드는 적어도 M/2 개의 데이터를 가지고 있어야 한다고 했는데, M=4이고 4/2는 2이기 때문에 노드들의 최소 갯수가 2개 임을 볼 수 있다 :)  
또한, leaf 노드는 모두 같은 레벨에 있음을 확인 할 수 있다.  

### B-Tree 삭제
삭제는 케이스에 따라 달라지는 것 같아서 추후 추가 할 예정이다 :)





References  
https://hyungjoon6876.github.io/jlog/2018/07/20/btree.html  
---
title: "[bigdata] Big Data Assessment"
categories:
  - bigdata
tags:
  - bigdata
---
# 평가 항목

## 필수영역
### 수집
Data 수집 (* 점수)  
1)본인이 수집/사용 가능한 오픈소스별 아키텍처 특징 설명  
TODO : kafka 아키텍처에 대한 설명  

#### Kafka
분산 스트리밍 플랫폼이며 데이터 파이프 라인을 만들 때 주로 사용되는 오픈소스 솔루션  
대용량의 실시간 로그처리에 특화되어 있는 솔루션이며 데이터를 유실없이 안전하게 전달하는 것이 주목적인 메세지 시스템에서 Fault-Tolerant한 안정적인 아키텍처와 빠른 퍼포먼스로 데이터를 처리  

[기본 개념]  
- 스키마  
카프카는 메시지를 단순히 바이트 배열로 처리하지만, 내용 이해가 쉽도록 메시지의 구조를 나타내는 스키마(Schema)를 사용할 수 있다.  
JSON이나 XML을 사용 할 수 있지만 아파치 Avro를 선호한다. 이것은 하둡을 위해 개발된 직렬화(serrialization)프레임워크이다.  



#### Kafka 특징  
1. Publisher Subscriber 모델 : Publisher Subscriber 모델은 데이터 큐를 중간에 두고 서로 간 독립적으로 데이터를 생산하고 소비합니다. 이런 느슨한 결합을 통해 Publisher나 Subscriber가 죽을 시, **서로 간에 의존성이 없으므로 안정적으로 데이터를 처리**할 수 있습니다. 또한 설정 역시 간단하게 할 수 있다는 장점이 있습니다.

2. 고가용성(High availability) 및 확장성(Scalability) : 카프카는 *클러스터로서 작동*합니다. 클러스터로서 작동하므로 Fault-tolerant 한 고가용성 서비스를 제공할 수 있고 *분산 처리를 통해 빠른 데이터 처리*를 가능하게 합니다. 또한 서버를 수평적으로 늘려 안정성 및 성능을 향상시키는 Scale-out이 가능합니다.

3. 디스크 순차 저장 및 처리(Sequential Store and Process in Disk) : 메세지를 메모리 큐에 적재하는 기존 메세지 시스템과 다르게 카프카는 메세지를 ***디스크에 순차적으로 저장***합니다. 이로서 얻는 이점은 두 가지입니다.  

(1) 서버에 장애가 나도 메세지가 디스크에 저장되어 있으므로 유실걱정이 없습니다.  
(2) 디스크가 순차적으로 저장되어 있으므로 디스크 I/O가 줄어들어 성능이 빨라집니다.  

4. 분산 처리(Distributed Processing) : 카프카는 **파티션(Partition)**이란 개념을 도입하여 여러개의 파티션을 **서버들에 분산시켜 나누어 처리**할 수 있습니다. 이로서 메세지를 상황에 맞추어 빠르게 처리할 수 있습니다.

#### 카프카 아키텍처 및 구성  


![다운로드](https://user-images.githubusercontent.com/17976251/88535844-a8b55b80-d045-11ea-8f3c-bc4bf064e84b.png)  

카프카 클러스터를 중심으로 프로듀서와 컨슈머가 데이터를 push하고 pull하는 구조   Producer, Consumer는 각기 다른 프로세스에서 **비동기로 동작**하고 있음  

위 그림에 대한 설명  
Foo와 Bar은 각각 3개의 파티션으로 나뉘어져 있으며 이 각각의 파티션들은 3개의 복제본으로 복제된다. 3개의 복제본 중에는 하나의 리더가 선출되게 되고(하늘색으로 칠해진 파티션) 이 리더가 모든 데이터의 읽기, 쓰기 연산을 담당하게 된다.  

중요한 것은 이 파티션들은 운영 도중 그 수를 늘릴 수 있지만 <span style="color:pink">***절대 줄일 수 없다.*** 이 때문에 파티션을 늘리는 것은 신중하게 고려해서 결정해야될 문제가 된다.</span>



**[구성요소들]**  

1. 프로듀서(Producer) : 데이터를 발생시키고 카프카 클러스터(Kafka Cluster)에 적재하는 프로세스입니다.

2. 카프카 클러스터(Kafka Cluster) : 카프카 서버로 이루어진 클러스터를 말합니다.  

**카프카 클러스터를 이루는 각 요소**

 - 브로커(Broker) : 카프카 서버

 - <span style="color:skyblue">주키퍼(Zookeeper)</span> : 주키퍼(Zookeeper)는 *분산 코디네이션 시스템*이다.  
 *카프카 브로커를 하나의 클러스터로 코디네이팅하는 역할*을 하며 나중에 이야기할 카프카 클러스터의 리더(Leader)를 발탁하는 방식도 주키퍼가 제공하는 기능을 이용함  

 - 토픽(Topic) : 카프카 클러스터에 데이터를 관리할 시 그 기준이 되는 개념  
 토픽은 카프카 클러스터에 여러 개 생성이 가능하며, 하나의 토픽은 1개 이상의 파티션(Partition)으로 구성되어 있다.  

 - 파티션(Partition) : *각 토픽 당 데이터를 분산 처리하는 단위*입니다. 카프카에서는 토픽 안에 파티션을 나누어 그 수대로 데이터를 분산처리합니다. 카프카 옵션에서 지정한 replica의 수만큼 파티션이 각 서버들에게 복제된다.  
 리더와 동기화를 하기 위해 리플리카들은 리더에게 Fetch 요청을 전송한다. 이는 컨슈머가 메시지를 읽기 위해 전송하는 것과 같은 타입의 요청임.  
 : 데이터를 수록할 파티션을 결정하기 위해 일관된 해시 값으로 키 생성  



 - 리더, 팔로워(Leader, Follower) : 카프카에서는 각 파티션당 복제된 파티션 중에서 하나의 리더가 선출됩니다. 이 리더는 모든 읽기, 쓰기 연산을 담당하며, 리더를 제외한 나머지는 팔로워가 되고 이 팔로워들은 단순히 리더의 데이터를 복사하는 역할만 수행한다.  


3. 컨슈머그룹(Consumer Group) : 컨슈머의 집합을 구성하는 단위  
카프카에서는 컨슈머 그룹으로서 데이터를 처리하며 *컨슈머 그룹 안의 컨슈머 수만큼 파티션의 데이터를 분산처리*하게 됩니다.  

카프카 클러스터에서 데이터를 가져오게 될 때는 컨슈머 그룹(Consumer Group)단위로 가져오게 되는데, 이 컨슈머 그룹은 자신이 가져와야하는 토픽 안의 파티션의 데이터를 Pull하게 되고 각각 컨슈머 그룹안의 *컨슈머들이 파티션이 나뉘어져 있는 만큼 데이터를 처리*  


#### 카프카 파티션 읽기, 쓰기(Kafka Partition, Read, Write)

![다운로드](https://user-images.githubusercontent.com/17976251/88537443-8ffa7500-d048-11ea-83ab-f59bf1e64826.png)  

카프카에서의 쓰기, 읽기 연산은 카프카 클러스터 내의 리더 파티션들(하늘색)에게만 적용된다.  
리더 파티션들에게 프로듀서가 쓰기 연산이 진행되고 난 후 업데이트된 데이터는 각 파티션들의 복제본들에게로 복사된다.  

![다운로드 (1)](https://user-images.githubusercontent.com/17976251/88537726-10b97100-d049-11ea-9c59-a1769521c557.png)  

컨슈머그룹의 각 컨슈머들은 파티션의 오프셋을 기준으로 데이터를 순차적으로 처리한다. (먼저 들어온 순서부터)  
중요한 것은, 컨슈머들은 컨슈머 그룹으로 나뉘어서 데이터를 분산 처리하게 되고  
-> 컨슈머 그룹에 따라 개별 offset을 가짐  
*같은 컨슈머 그룹 내에 있는 컨슈머끼리 같은 파티션의 데이터를 처리할 수 없다.*  
  
파티션에 저장되어 있는 데이터들은 순차적으로 데이터가 저장되어 있으며 이 데이터들은 설정값에 따라 데이터를 디스크에 보관하게 된다. (2.x 기준 default 7일, 우리 플젝 7일)  

![다운로드 (2)](https://user-images.githubusercontent.com/17976251/88537950-773e8f00-d049-11ea-86eb-0beb2d2b65ed.png)  

위 그림은 컨슈머 그룹단위로 그룹 내 컨슈머들이 각각의 파티션의 데이터를 처리하는 모습  
"특정 파티션의 리더 리플리카를 포함하는 브로커가 해당 파티션의 쓰기 요청을 받는다"  

(1) (컨슈머 개수 == 파티션의 개수) 컨슈머는 각 파티션을 1:1로 맡음.  
(2) (컨슈머 그룹 안의 컨슈머의 개수 < 파티션의 개수) 컨슈머 중 하나가 남는 파티션의 데이터를 처리  
(3) (*)(컨슈머의 개수 > 파티션의 개수) 남는 컨슈머는 파티션이 개수가 많아질 때까지 대기!!  


출처: https://engkimbs.tistory.com/691 [새로비]  
위 블로그에서 카프카 설명을 깔끔하게 잘해주심,    


2) 다양한 수집 프로그램을 활용하여 다양한 소스의 데이터를 수집하기 위한 설정값을 이해하고 수집이 되도록 설정이 가능한가?  
ex) nifi를 활용한 데이터 로그 수집 등  

3) Performance tuning에 대한 본인만의 노하우가 있는지?  
ex) kafka topic 관리 - consumer, producer 설명/튜닝/모니터링  
sqoop (rdb <-> Hadoop 데이터 전송)에 대한 설명, ELK를 활용한 수집/검색 설명  
TODO : kafka 아키텍처에 대한 설명, Sqoop  

#### Kafka Tuning
-개념  
Throughput은 초당 처리하는 작업의 개수를 말한다.  
Latency는 하나의 작업을 처리하는데 걸리는 시간을 말한다.  

https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/kafka_performance.html  

1. Tuning Brokers  
Cloudera recommends starting with one partition per physical storage disk and one consumer per partition.

2. Tuning Producers
대충 버퍼에 여러개 넣어서 보내던가 일정 시간마다 보내던가 하라는 것 같은데    
Two parameters are particularly important for latency and throughput: batch size and linger time.  

3. Tuning Consumers
컨슈머 그룹에 있는 컨슈머의 수를 파티션 수와 같게 해주면 될 것 같음.





### 저장  
분산 파일 시스템(DFS) (* 점수)  
1) HDFS 용량 산정 및 HA 설계 가능한 수준인가?
2) Namenode, Datanode에 대한 이해를 바탕으로 클러스터를 구성하고 Hadoop 명령어를 통한 파일 핸들링, config(HA) 설정이 가능한가?  
TODO : HDFS 용량 산정, HA 설계, Namenoode와 Datanode이해, HA Config설정, Hadoop명령어(hdfs dfs ..?)  

--------------  
#### Rack Awareness  
fault tolerance by placing one block replica on a different rack.  
This provides data availability in the event of a network switch failure or partition within the cluster.
Q. 우리 플젝은 몇일라나? 3정도 될듯. 왜 3이더라? 하나는 같은 rack 다른 하나는 다른 rack 이었나? 왜 이렇게 했지?  
동일 rack 이 접근이 빠르니까 웬만하면 그쪽으로 접근하고, rack 자체가 다운되면 다른 rack으로 간다?  

![helloworld-1546-03](https://user-images.githubusercontent.com/17976251/88451610-e8881180-ce92-11ea-87f8-2fecf15adcf2.png)  
(출처 : https://d2.naver.com/helloworld/0475200)  

> 블록은 아래와 같은 순서로 노드를 할당하여 복제한다.  
Node Local -> Rack Local -> Off Switch  

#### Namenode  
*Namenode HeapSize*  
파일과 블록의 크기, 개수에 따라 NameNode의 적절한 heap 크기를 정하는 것은 Cloudera의 "Sizing NameNode Heap Memory" 문서를 참고하면 좋다.  
간략히 정리하면 백만 개 블록마다 1GB의 heap을 설정하라는 것이다.  
예를 들어 지금 HDFS에 저장된 블록 수가 5백만 개라면(블록 수는 NameNode UI에서 확인할 수 있다) NameNode의 heap 크기는 5GB가 적당하다는 것이다.  
그리고 (파일 개수 + 블록 수) x 150으로 계산한 크기(NameNode가 차지하는 대략적인 메모리량)보다는 크게 설정한다.  

*특징*  
HDFS에서의 master인 NameNode는 분산환경에서 저장기능을 담당한다. 즉, 실제 작업의 대상이 되는 파일을 블록(block)단위로 나누어서 slave node들에게 분배할 뿐만 아니라 전체적인 (분산) 파일시스템의 이상 유무도 체크하고 slave 컴퓨터인 DataNode에서의 데이터 입출력 작업 (low-level I/O tasks)을 지휘한다.  
이러한 작업은 메모리 소모도 크고 입출력도 많이 일어나므로 NameNode에 이상이 발생하면 Hadoop 클러스터는 전체적으로 동작을 멈추게 된다.  

*Master Node와 Name Node*  
메타데이터(파일 및 디렉토리 이름 등)은 여러 클라이언트 컴퓨터가 동시에 수정을 시도할 수 있으므로 동기화 기능이 중요하기 때문에 NameNode가 별도의 컴퓨터에서 관리한다.  
NameNode는 파일시스템의 모든 메타데이터를 관리하는데 파일당 메타데이터의 크기가 작으므로 (파일명, 사용권한, 각각의 블록의 위치 정도만 관리) 이들 메타정보는 NameNode 기기의 메인메모리에 상주시켜 이용한다. 이처럼 한 클러스터에는 단 한 개의 NameNode가 존재하고 master node로 지정된 컴퓨터가 NameNode를 전담관리하며 다른 작업은 일체 하지 않는다.  
-> 여기는 Master Node가 3대, Name Node가 2대인데 그럼 해당 정보는 세 군데에 복제 하는건가? 왜 이렇게 했지?  


클라이언트는 NameNode에게 질의하여 메타데이터 즉, 특정 파일의 블럭의 목록 등은 NameNode를 통해 메인메모리로부터 가져오지만 이후의 작업은 NameNode의 간섭 없이 DataNode로부터 병렬로 직접 read 작업을 수행한다. 이처럼 NameNode의 관여없이 데이터를 통째로 가져오기 때문에 효율이 높아진다.  

개별 DataNode가 장애를 일으키는 경우에도 전체적인 시스템의 이용은 유지되지만 NameNode의 장애는 시스템 전체의 이용이 불가능한 상태를 초래한다. 다만 일상적인 작업현장에서 DataNode와는 달리 NameNode는 주도적 역할을 하지 않기 때문에 장애의 위험성은 훨씬 적다. 만전을 기하기 위해 NameNode를 이중으로 가져가려는 노력이 있을 수 있는데 그 방법이 secondary NameNode를 이용하는 것이다.->우리는 Standby NameNode 사용한다.    

출처: https://icecello.tistory.com/33 [Big Foot]  

#### NameNode, DataNode

[ 네임노드(NameNode) ]  
네임노드(namenode)는 파일시스템의 네임스페이스를 관리한다. 네임노드는 *파일시스템 트리와 그 트리에 포함된 모든 파일과 디렉터리에 대한 메타데이터를 유지*한다. 이 정보는 네임스페이스 이미지(namespace image)와 에디트 로그(edit log)라는 두 종류의 파일로 *로컬 디스크에 영속적으로 저장*된다.  
네임노드는 또한 파일에 속한 모든 블록이 어느 데이터노드에 있는지 파악하고 있다. 하지만 블록의 위치 정보는 시스템이 시작할 때 모든 데이터노드로부터 받아서 재구성하기 때문에 디스크에 영속적으로 저장하지는 않는다.   

[ 데이터노드(DataNode) ]  
데이터노드는 파일시스템의 실질적인 일꾼이다. 데이터노드는 클라이언트나 네임노드의 요청이 있을 때 블록을 저장하고 탐색하며, 저장하고 있는 블록의 목록을 주기적으로 네임노드에 보고한다.  

[ 네임노드의 중요성 ]  
네임노드가 없으면 파일시스템은 동작하지 않는다. 네임노드를 실행하는 머신이 손상되면 파일시스템의 어떤 파일도 찾을 수 없다. 데이터노드에 블록이 저장되어 있지만 이러한 블록 정보를 이용하여 파일을 재구성할 수는 없기 때문이다. 따라서 네임노드의 장애복구 기능은 필수적이다.

출처: https://brocess.tistory.com/190 [행복한디벨로퍼]

#### Standby NameNode - HDFS HA

참고 : https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithQJM.html  

In order for the Standby node to keep its state synchronized with the Active node, both nodes communicate with a group of separate daemons called “JournalNodes” (JNs). When any namespace modification is performed by the Active node, it durably logs a record of the modification to a majority of these JNs. The Standby node is capable of reading the edits from the JNs, and is constantly watching them for changes to the edit log. As the Standby Node sees the edits, it applies them to its own namespace. In the event of a failover, the Standby will ensure that it has read all of the edits from the JournalNodes before promoting itself to the Active state. This ensures that the namespace state is fully synchronized before a failover occurs.  

the DataNodes are configured with the location of all NameNodes, // and send block location information and heartbeats to all.  
-> 데이터 노드는 네임노드에게 주기적으로 하트비트 보내고 있음  

During a failover, the NameNode which is to become active will simply take over the role of writing to the JournalNodes,  
-> failover 하는 동안 active 될 namenode는 JNs에 writing하는 역할 가져와야해  
which will effectively prevent the other NameNode from continuing in the Active state, allowing the new Active to safely proceed with failover.

**Hardware resources**  
HA 구성을 위해서는 아래 두 가지 종류의 노드 머신이 있어야 함  
- NameNode machines : the machines on which you run the Active and Standby NameNodes should have equivalent hardware to each other, and equivalent hardware to what would be used in a non-HA cluster.  
-> active/standby node의 하드웨어 성능은 거의 동일해야 함  

- JournalNode machines : the machines on which you run the JournalNodes. The JournalNode daemon is relatively lightweight, so these daemons may reasonably be collocated on machines with other Hadoop daemons, for example NameNodes, the JobTracker, or the YARN ResourceManager.  
-> JNs 데몬은 비교적 가벼워서 다른 데몬들과 같은 머신에 올리기도 함  
우리 프로젝트는 MasterNode에 올라가 있음.  

Note: **There must be at least 3 JournalNode daemons,**  
**-> JNs 데몬은 최소 3개 있어야 함 : 그래서 우리 플젝은 MasterNode 3대에 올렸나보다**  
since edit log modifications must be written to a majority of JNs.  
edit log 변경이 일어날 때 반드시 JNs 의 과반수에 쓰여야 한다.  
This will allow the system to tolerate the failure of a single machine. You may also run more than 3 JournalNodes, but in order to actually increase the number of failures the system can tolerate, you should run an odd number of JNs, (i.e. 3, 5, 7, etc.).  
-> JNs의 모듈 수는 홀수로 하는것이 좋음  


**Configuration**  
hdfs-site.xml  
dfs.nameservices and dfs.ha.namenodes.[nameservice ID] : key  
~~~ xml
<property>
  <name>dfs.nameservices</name>
  <value>mycluster</value>
</property>
~~~
dfs.ha.namenodes.[nameservice ID] - unique identifiers for each NameNode in the nameservice  
-> 우리는 2개니까 nn1,nn2
~~~ xml
<property>
  <name>dfs.ha.namenodes.mycluster</name>
  <value>nn1,nn2, nn3</value>
</property>
~~~
dfs.namenode.shared.edits.dir - the URI which identifies the group of JNs where the NameNodes will write/read edits  
~~~ xml
<property>
  <name>dfs.namenode.shared.edits.dir</name>
  <value>qjournal://node1.example.com:8485;node2.example.com:8485;node3.example.com:8485/mycluster</value>
</property>
~~~


*JournalNode*  
데이터의 영속성(persistence)과 성능 사이의 트레이드 오프를 위하여 전체 메타데이터의 스냅샷과 이후 새롭게 발생하는 메타데이터의 변화를 로그(incremental)로 기록하는 방법을 쓴다. - 증분로그  
일정한 주기(2분 마다)로 계속 롤링되는 이 Edit Log들을 관리하는 데몬을 JournalNode라 부른다.  

그러므로 fsimage를 메모리로 적재한 다음엔 JournalNode가 관리하는 Edit Log들 중에서 Commit되지 않은 것들을 찾아 메모리 상의 메타데이터에 반영하는 과정을 거치게 된다.  

아래 출처로 가서 로그를 확인해 보면 마지막에 'Finished loading FSImage in 2332 msecs' 가 있음  
그리고 우리 프로젝트는 3개의 MasterNode에 모두 JournalNode가 설치되어 있음  

출처 : https://likebnb.tistory.com/162  


#### Map/Reduce

*시스템 구성*   
맵 리듀스 시스템은 Client, JobTracker, TaskTracker 로 구성된다.  
JobTracker는 NameNode에, TaskTracker는 DataNode에 위치한다.   
![6507](https://user-images.githubusercontent.com/17976251/88472279-0c5b5e00-cf4c-11ea-9256-88d975e1fedd.png)  


- Client : 분석하고자 하는 데이터를 잡의 형태로 JobTracker에게 전달  
- JobTracker : 하둡 클러스터에 등록된 전체 job을 스케줄링하고 모니터링  
- TaskTracker : DataNode에서 실행되는 데몬이고, 사용자가 설정한 맵리듀스 프로그램을 실행하며, JobTracker로부터 작업을 요청받고 요청받은 맵과 리듀스 개수만큼 맵 태스크와 리듀스 태스크를 생성   

#### HDFS 용량 산정

<img width="563" alt="스크린샷 2020-07-26 오후 3 38 15" src="https://user-images.githubusercontent.com/17976251/88473194-1b470e00-cf56-11ea-96f2-d33be63585a7.png">  
출처 : https://www.slideshare.net/powerbox/hadoop-engineeringv10


#### Hadoop 명령어
**fsck 커맨드**  

fsck 커맨드는 HDFS 파일시스템의 상태를 체크하는 명령어 입니다. fsck 커맨드는 *파일시스템에 블록 상태 확인, 파일의 복제 개수를 확인하여 결과를 알려줍니다.* 일반적으로 네임노드가 자동으로 상태를 복구하기 위한 작업을 진행하기 때문에 fsck 커맨드가 오류를 확인해도 상태를 정정하지는 않습니다.  

일반적으로 사용했던 hdfs dfs 명령어는 파일시스템 쉘 명령어이고, 위처럼 fsck 외에 운영자 명령어도 있음  

출처 : https://wikidocs.net/26496#fsck

--------------  

### 처리
1. 분산 프로그램  
Yarn에 대한 이해, Spark를 활용한 Data 처리 프로세스/모니터링에 대해 설명 가능한가?  
ex) yarn/container를 활용한 프로그램 구현, spark scala or pyspark code 작성 수준 등 map/reduce 처리 과정을 이해하고 효율적 key 분배로 데이터를 처리 할 수 있는가?  
TODO : Yarn, Spark, Map/reduce 이해  


#### Yarn  
https://m.blog.naver.com/PostView.nhn?blogId=gkenq&logNo=10187292348&proxyReferer=https:%2F%2Fwww.google.com%2F

#### Map/reduce  

jobtracker 개념도 함께 등장  
https://12bme.tistory.com/154  
https://opentutorials.org/course/2908/17055  

#### spark






2. SQL on Hadop (* 점수)  
분산 처리에 대한 이해를 바탕으로 최적화된 성능의 SQL 작성이 가능한가?  
(Hive Performance Tuning, Hive 구성/절차(MetaStore포함)/설계 활용 역량 등)
ex)partition / ORC / External or Internal 테이블 설계 등  
TODO : Partition, ORC, Hive Performance tuning, Hive 구성  

#### partitioning
테이블 마이그레이션을 위해서는 아래 두 가지 방법을 사용한다  
Static partitioning (SP)  
Dynamic partitioning(DP)  
**정적 파티션(static partitioning)**  
정적 파티션은 data 삽입을 위해서 partition의 값을 명시적으로 입력해야 한다.  
~~~ sql
insert into table salesdata partition (dt=’10-27-2017’)
select * from salesdata_source where end_dt_tm=’10-27-2017’;
~~~  
  
**동적 파티션(dynamic partitioning)**  
파티션 칼럼의 값을 기반으로 hive engine 이 동적으로 파티션을 수행할 수 있도록 하는 방식이다.  

사용을 위해서는 아래와 같이 parameter 설정이 필요하다. 이는 의도치 않게 hive에 의해서 많은 수의 partition 들이 생성되는 것을 막기 위한 설정 값이다.  
~~~
set hive.exec.dynamic.partition.mode=nonstrict;
~~~  

아래와 같이 동적 파티션을 생성 할 수 있는데, *파티션 컬럼이 마지막*에 와야 한다.  
~~~
hive> insert into table salesdata partition (dt)
select salesperson_id,product_id,end_dt_tm from salesdata_source ;
~~~  

이와 같이 동적 파티션을 사용하는 경우 hive engine 이 파티션 칼럼이 가지고 있는 unique 값들을 확인해서 각각의 값으로 파티션을 생성한다. 파티션의 최대 개수는 기본적으로 200 으로 별도의 설정을 통해 해당 값을 조절할 수 있다.  
~~~
set hive.exec.max.dynamic.partitions=1000;
set hive.exec.max.dynamic.partitions.pernode=1000;
~~~

#### 파티션 필요성  

~~~
select * from salesdata_source where salesperson_id=12 and dt =’10-28-2017’
~~~
salesdata_source 는 파티션이 되어 있지 않기 때문에 full-scan 작업을 거쳐야 한다.  
그러나 동일한 쿼리를 파티션이 된 salesdata 에 수행하는 경우, 10-28-2017 의 값을 갖는 파티션만 탐색하면 됨으로 훨씬 작은 자원과 시간으로 쿼리를 수행할 수 있다. 이러한 특성은 테이블이 커질 수록 점점 더 큰 성능 향상을 나타낸다.  

#### ORC  
The Optimized Row Columnar (ORC) file format provides a highly efficient way to store Hive data. It was designed to overcome limitations of the other Hive file formats. Using ORC files improves performance when Hive is reading, writing, and processing data.  

RC file format처럼 컬럼 단위로 파일을 기록하되, 인덱스도 함께 기록하였기 때문에 read 과정에서의 성능 향상이 이루어짐.  


**특징**  
- 높은 level의 compression  
- Datetime, Decimal, Complex type(struct, list, map, union)을 포함한 하이브타입 지원  
- 파일에 경량 인덱스 저장  
->필터링 조건이 없는 row 그룹은 스킵  
->특정 row로 seek 가능  
: skip 되는 row들은 decompression도 하지 않음  
- 데이터 타입 기반의 block-mode 압축  
integer 컬럼은 run-length encoding 사용  
문자열 컬럼은 dictionary encoding 사용  
- 파일을 동시에 읽기위해 다중 스트림을 지원함(하나의 파일을 여러개 리더로 동시 읽기 가능)    
- 각 task의 output을 단일 file들로 생성하여 네임 노드의 부하를 감소시킴  
- 파일내의 메타데이터를 protocol buffer를 사용하여 보관함(구조화된 데이터 serialization용도)  

하나의 ORC 파일은 여러개의 stripe로 구성될 수 있고 하나의 stripe 안에서 칼럼은 각각 compress되어 있으며 query 조건에 부합하여 값을 꺼내야 하는 column만 decompress한다.  

출처: https://box0830.tistory.com/207 [이야기박스]  
</br>
![1_Y8Urvk1yFoo0jmYf8XBvgQ](https://user-images.githubusercontent.com/17976251/88474286-d6c07000-cf5f-11ea-9d27-4eca03780d67.png)  


stripe 데이터는 아래 3가지로 구성된다.  
1. stripe footer는 디렉토리의 stream location을 가리킴  
2. row data 는 테이블 스캔에 사용되고 default로 1만 row를 가짐  
3. index data는 각 칼럼의 min, max 값을 가짐  


출처 : https://paulsmooth.tistory.com/133 
http://www.kwangsiklee.com/2020/01/아파치-하이브-성능-튜닝하기/  
https://cwiki.apache.org/confluence/display/Hive/LanguageManual+ORC  


</br>

#### Hive Tuning

1. partitioning
칼럼 읽는 양을 파티션을 통해 줄여 disk i/o time을 줄이고 그 결과 쿼리 퍼포먼스가 좋아짐

2. bucketing
데이터 검색에 사용되는 데이터를 줄이기 위한 방안으로 파티셔닝, 버켓팅 기능을 제공한다.  
파티셔닝은 데이터를 폴더 단위로 구분하여 저장하고,  
버켓팅은 지정한 개수의 파일에 컬럼의 해쉬값을 기준으로 데이터를 저장한다.  

~~~ sql
CREATE TABLE table1(
    col1 STRING
) 
CLUSTERED BY(user_id) INTO 256 BUCKETS;
~~~  


3. Using Tez as Execution Engine : Tez 엔진 사용  
hive 의 기본엔진은 mr 이었으나 2.x로 넘어오면서 tez를 사용하게 되었다.  
mr 엔진은 맵리듀스 연산중 중간 파일을 로컬 디스크에 쓰면서 진행한다.  
이로 인한 IO 비용으로 늦어지게 되는데 tez 엔진은 이 임시 파일을 메모리에 저장하여 처리 속도를 높인다.  

4. ORC 사용하기  
: 자세한 정보는 위 내용 참고  

<br/>
출처: https://118k.tistory.com/630 [개발자로 살아남기]

#### partitioning VS bucketing
![apache-hive-partitioning-vs-bucketing](https://user-images.githubusercontent.com/17976251/88476998-71787900-cf77-11ea-9d15-77fde6b0fb72.jpg)  

- Partitioning – Apache Hive organizes tables into partitions for grouping same type of data together based on a column or partition key.  
Each table in the hive can have one or more partition keys to identify a particular partition.  
Using partition we can make it faster to do queries on slices of the data.  
-> column 이나 partition key에 기반하여 같은 타입의 데이터를 그룹핑  
- Bucketing – In Hive **Tables or partition are subdivided into buckets based on the hash function of a column** in the table to give extra structure to the data that may be used for more efficient queries.  
-> 테이블이나 파티션을 해쉬함수를 사용하는 버킷을 통해 더 잘게 쪼갤 수 있음(파티션도 한번 더 쪼갤 수 있다는게 띠용임.)  
</br>

[bucket]  
~~~ sql
CREATE TABLE table_name PARTITIONED BY (partition1 data_type, partition2 data_type,….) CLUSTERED BY (column_name1, column_name2, …) SORTED BY (column_name [ASC|DESC], …)] INTO num_buckets BUCKETS;
~~~  

출처 : https://data-flair.training/blogs/hive-partitioning-vs-bucketing/  

#### Hive 구성

![hive-hadoop-architecture](https://user-images.githubusercontent.com/17976251/88477383-73900700-cf7a-11ea-90b1-324021773b8b.png)  

1. UI : 사용자가 쿼리 및 기타 작업을 시스템에 제출하는 사용자 인터페이스
CLI, Beeline, JDBC 등
2. Driver : 쿼리를 입력받고 작업을 처리
사용자 세션을 구현하고, JDBC/ODBC 인터페이스 API 제공
3. Compiler : 메타 스토어를 참고하여 쿼리 구문을 분석하고 실행계획을 생성
4. Metastore : 디비, 테이블, 파티션의 정보를 저장
5. Execution Engine : 컴파일러에 의해 생성된 실행 계획을 실행

**하이브 실행순서**  
1. 사용자가 제출한 SQL문을 드라이버가 컴파일러에 요청하여 메타스토어의 정보를 이용해 처리에 적합한 형태로 컴파일
2. 컴파일된 SQL을 실행엔진으로 실행  
3. 리소스 매니저가 클러스터의 자원을 적절히 활용하여 실행  
4. 실행 중 사용하는 원천데이터는 HDFS등의 저장장치를 이용  
5. 실행결과를 사용자에게 반환  

#### 하이브 Metastore
하이브의 메타정보는 파일의 물리적인 위치와 데이터에 대한 논리적인 정보로 구분할 수 있습니다. 이 메타정보를 보관하고 사용자의 요청에 따라 관련 정보를 제공하는 곳이 하이브 메타스토어입니다.  

메타스토어는 쓰리프트 프로토콜을 이용하여 다른 서비스에 정보를 제공합니다. 메타 정보는 JDBC 드라이버를 이용하여 RDBMS에 저장됩니다.  
. thrift protocl : 이기종간 통신을 위한 프로토콜. Apache Thrift  

**원격 메타스토어**
세 가지 방식중에 원격 메타스토어를 사용하는 것 같음  
원격 메타스토어는 메타스토어가 별도의 JVM에서 동작하며, 쓰리프트 프로토콜을 이용하여 접속한다.  

*hive-site.xml 설정*  
~~~
<property>
    <name>hive.metastore.uris</name>
    <value>thrift://[메타스토어 IP]:[메타스토어 Port]</value>
    <description>JDBC connect string for a JDBC metastore</description>
</property>
~~~

*하이브 스키마 정보 확인*  
~~~
$ hive --service schemaTool -dbType mysql -info
~~~  

출처 : https://wikidocs.net/23282  

TODO : 왜 하이브버전 1.1.0 쓰는지 확인 필요  
2.0은 Tez 쓰고 LLAP 도 나와서 성능 더 좋다는데..?  
하이브 실행엔진은 뭐 사용하는거지? - mapreduce 같음  


#### Hive VS Imapala

**Impala?**  
MapReduce 프레임워크 사용하지 않고 분산 질의 엔진을 사용해서 빠름  

참고 나중에 다시 읽기..어렵넹  
참고 : https://www.dezyre.com/article/impala-vs-hive-difference-between-sql-on-hadoop-components/180  




## 선택 필수. 기술분류 택 1

### 처리  
1. 배치 처리  
Oozie 배치 처리 이해 및 Oozie 명령어 및 xml 작성/설명이 가능한가?  
TODO : Oozie  

2. 스트리밍 처리  
Spark Streaming 등 실시간 처리를 위한 API를 이해하여 프로그램을 구현하고 Kafka, Flume 등과 연동 가능한가?  
(요구사항에 대한 Performance 설계 및 Kafka Spark 구성/설치/설계 역량)  
TODO : 실시간 스트리밍 처리.. 우리 프로젝트 streams 이해, kafka spark 구성/설치/설계 확인(플젝)  




## 추가 Value  

### 운영  
1. 보안  
range/Kerberos 등 사용 경험이 있으며, 개념 설명이 가능한가?  
TODO : Kerberos  

### Cloud Container  
1. Docker/Kubernates  
(1) Cloud 환경하에서 데이터 저장 및 분석 경험이 있는가?  
(Azure Blob/File/Queue/Table 및 AWS S3)  
(2) 본인이 작성한 App.에 대한 빌드/이미지/배포 등 파이프라인 작성 경험이 있는가?  
TODO : AWS S3(Image Platform), 파이프라인 작성 경험? 뭔지 확인 필요  

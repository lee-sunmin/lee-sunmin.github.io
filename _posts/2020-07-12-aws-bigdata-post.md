---
title: "[bigdata] Big Data on AWS"
categories:
  - bigdata
tags:
  - aws
  - bigdata
---


3일 교육  
**-> Amazon EMR을 사용하여 Hive 및 Hue와 같은 광범위한 하둡 도구 에코시스템을 통해 데이터를 처리하고, 빅 데이터 환경 생성을 생성하고, Amazon DynamoDB, Amazon Redshift, Amazon QuickSight, Amazon Athena 및 Amazon Kinesis 로 작업하고, 빅 데이터 환경 설계를 위한 방법 학습**  


# 예습


## 1. Amazon EMR ?  
Amazon EMR은 Apache Spark, Apache Hive, Apache HBase, Apache Flink, Apache Hudi 및 Presto와 같은 오픈 소스 도구를 사용하여 방대한 양의 데이터를 처리하기 위한 업계 최고의 클라우드 빅 데이터 플랫폼입니다.  
https://aws.amazon.com/ko/emr/  

***아마존 S3는 HDFS API를 만족시켜서 HDFS 대신 파일시스템으로 사용될 수 있고***, 아마존 EMR은 EC2인스턴스 클러스터를 구성하여 하둡 프레임워크로서 동작하여 분산처리가 가능하게 한다. 아마존 EMR은 스파크, HBase, Presto, Flink와 같은 분산처리 프레임워크를 실행할 수 있다. 

* Apache Hadoop on Amazon EMR
※ 하둡이라하면 보통 MapReduce, YARN(Resource Manager), HDFS를 함께 말한다.  
  EC2 인스턴스 클러스터를 이용해서 하둡 프레임워크를 돌릴 수 있다. 하둡 에코시스템에 속한 Hive, Pig, Hue, Ganglia, Ozzie, HBase 등 다양한 어플리케이션 또한 물론 EMR 위에서 사용가능하다.  
Amazon EMR은 스토리지로 사용될 S3와 연결시켜주는 EMRFS(EMR File System)를 지원해준다. 
  

## 2. Amazon Kinesis  
- 빅 데이터의 스트림 처리  

AWS Kinesis 란  
AWS Kinesis는 데이터 수집구간과 데이터 처리구간 중간에 위치한다. 즉. 대용량의 데이터를 안정적으로 수집구간에서 수집을 하고, 데이터 처리 구간인 AWS 플랫폼(EC2,S3,DB..등)에서 다양하게 소비 할수 있도록 환경을 제공 한다.  
  
AWS Kinesis가 존재 하는 이유는 **다양한 데이터들을 수집하고, 이것을 다양한 포맷으로 만들어 주기 위함**이다. Kinesis가 '스트리밍 데이터 처리'를 해준다는 것이다. 다양한 형태로 들어오는 방대한 데이터를 가공해서 소프트웨어가 사용 가능하도록 다양한 출력물을 만들어 주거나, 데이터 저장소에 저장하도록 해준다.  
  
- Amazon은 Kinesis를 '완전 관리형 스트리밍 데이터 서비스' 라고 한다. 수십만 개의 소스에서 클릭 스트림, 애플리케이션 로그, 소셜 미디어와 같은 *다양한 유형의 데이터를 Amazon Kinesis 스트림에 지속적으로 추가*할 수 있습니다. 그러면 *몇 초안에 Amazon Kinesis 애플리케이션에서는 스트림의 해당 데이터를 읽고 처리 할 수 있습니다.*    
  
> AWS Kinesis는 다양한 데이터들을 빠르게 가공해준다. 그리고 이러한 데이터들은 다양한 포맷으로 출력줌으로써 다양한 소프트웨어서 사용해주게 해준다.  
  

![다운로드](https://user-images.githubusercontent.com/17976251/87239227-9cc37a00-c447-11ea-9873-b81fba44d15c.png)  
Amazon Kinesis Data Streams는 빅데이터 솔루션의 게이트웨이로 사용되고 있다.  
<핵심>  
다양한 소스에서 데이터가 Amazon Kinesis 스트림에 추가되고, 스트림 데이터가 다양한 Amazon Kinesis 애플리 케이션에서 사용된다.  
    
위 이미지를 보면,
1) Yellow Application - 스트리밍 데이터에 대해 실시간 대시보드 실행.
2) Red Application - 간단한 집계를 수행하고 처리한 데이터를 Amazon S3로 내보낸다. S3의 데이터는 추가적인 처리 과정을 거친 후 복잡한 분석을 위해 Amazon Redshift에 저장된다.  
3) Green Application - Amazon S3로 원시 데이터를 내보내는데, 좀더 저렴한 장기 저장을 위해 Amazon Glacier에 보관한다.  

**이러한 세가지 유형의 데이터 처리 파이프라인은 <span style="color: green;">모두 동시에 병렬로 발생</span>한다.** 

  
> Amazon Kinesis를 사용하면 모든 데이터가 수집된 후에야 처리를 시작할 수 있는 것(배치같은것)이 아니라 데이터가 수신되는 대로 처리 및 분석하여 즉시 대응 할 수 있다.  
  

### - Amazon Kinesis Data Firehose  
데이터 스트림을 AWS 데이터 스토어로 로드  
기존 인텔리전스 도구를 사용해 *거의 실시간 분석을 위해 데이터 스트림을 캡쳐 및 변환하여 AWS 데이터 스토어로 로드*할 수 있는 가장 쉬운 방법이다.  

:heavy_check_mark: 간단하게 전송 스트림을 생성 - 대상을 선택 - 수십만 개의 데이터를 원본에서 동시에 실시간으로 전송  
  
전송 스트림 ?  
Amazon Kinesis Data Firehose의 기본 엔터티로 전송 스트림을 생성한 후, 데이터를 전송 스트림으로 보내어 Firehose를 사용한다.  
  
대상 ?  
데이터가 전송 되는 데이터 스토어로 Firehose에서는 전송 대상으로 Amazon S3 , Amazon Redshift, Amazon Elasticsearch Service 및 Splunk를 지원한다.  

#### 데이터 전송 흐름  

(1) Amazon S3 대상일 경우  
스트리밍 데이터가 S3 버킷으로 전송된다.  
데이터 변환이 활성화 되면, 선택적으로 소스 데이터를 다른 Amazon S3 버킷으로 백업할 수 있다.  
<img width="315" alt="다운로드 (1)" src="https://user-images.githubusercontent.com/17976251/87239444-2d02be80-c44a-11ea-8a9b-60c22cfbe827.png">  

(2) Amazon Redshift 대상일 경우  
먼저 스트리밍 데이터가 S3 버킷으로 전송된다.  
*이때 Firehose가 Amazon Redshift COPY 명령을 실행하여 데이터를 S3 버킷에서 Amazon Redshift 클러스터로 로드한다.*  
데이터 변환이 활성화 되면 선택적으로 소스 데이터를 다른 Amazon S3 버킷으로 백업할 수 있다.  
  
![다운로드 (2)](https://user-images.githubusercontent.com/17976251/87239447-2f651880-c44a-11ea-9d81-2afb04fcedca.png)  


(3) Amazon ES 대상일 경우  
스트리밍 데이터가 Amazon ES 클러스터로 전송되며, 동시에 선택적으로 S3 버킷에 백업할 수 있다.  

![다운로드](https://user-images.githubusercontent.com/17976251/87239665-abf8f680-c44c-11ea-8ba6-63f6426fd90f.png)  


(최종) 작동 방식  
![다운로드 (2)](https://user-images.githubusercontent.com/17976251/87239669-b74c2200-c44c-11ea-804b-c17469620a90.png)  

 


### - Amazon Kinesis Video Streams  
비디오 스트림을 캡처,처리 및 저장 용도  
Amazon Kinesis Video Streams를 사용하면 분석, 기계 학습 및 기타 처리를 위해 커넥티드 디바이스에서 AWS로 비디오를 쉽고 안전하게 스트리밍할 수 있습니다.  

작동 방식  
![다운로드](https://user-images.githubusercontent.com/17976251/87239696-0f832400-c44d-11ea-9097-d4f239f6b802.png)  

  
  
  
### - Amazon Kinesis Data Analytics  
표준 SQL로 데이터 스트림을 분석  
Amazon Kinesis Data Analytics는 새로운 프로그래밍 언어 또는 처리 프레임워크를 배울 필요 없이 *표준 SQL을 통해 실시간으로 데이터 스트림을 처리*할 수 있는 가장 쉬운 방법이다.  
  

Kinesis Data Analytics 를 사용하려면 데이터를 지속적으로 읽고 처리하는 Kinesis 데이터 분석 애플리케이션이 필요하다  
Kinesis Data Streams / Kinesis Data Firehose 로 데이터 수집 하고 SQL 코드로 데이터를 읽고 처리해 결과를 전송한다  
전송 대상을 구성할 수도 있다 (s3,Redshift, Elasticsearch Service, Lambda, Kinesis Data Streams, Kinesis Data Firehose)    
-> 거의 실시간으로 데이터를 지속적으로 읽고 처리하고 저장하는 SQL 코드를 신속하게 작성할 수 있다  

> Analytics는 수신 데이터 스트림을 지정하고, SQL 쿼리를 작성하고, 결과를 로드할 위치를 지정하기만 하면 된다. 아주 간편하다. 그러면 데이터가 수신되는 동안 Analytics에서 데이터에 대해 SQL 쿼리를 지속적으로 실행하고 결과를 대상에 전송한다.  

#### 예시  
예를 들어 게임의 경우 랭킹을 계산하여 이를 Amazon S3로 전송함으로써 실시간 라이브 순위표를 만들 수 있다. 또한 5분 간격으로 웹사이트의 고유 방문자 수를 계산하고 처리된 결과를 Amazon Redshift에 전송함으로써 웹 사이트에 대한 트래픽을 추척할 수 있다.  


#### 정리  
애플리케이션의 스트리밍 소스. 입력 구성에서 스트리밍 소스를 애플리케이션 입력 스트림에 매핑하면, 인애플리케이션 스트림은 지속적으로 업데이트 되는 테이블과 같다 이 테이블을 SELECT 나 INSERT 등 SQL 쿼리 작업을 수행할 수 있다.  
  
인애플리케이션 스트림 ?  
사용자가 SELECT 및 INSERT SQL 작업을 수행할 수 있도록 데이터를 애플리케이션에 지속적으로 저장하는 엔터티  
  


(Analytics 다이어그램 아키텍처)    
![다운로드](https://user-images.githubusercontent.com/17976251/87239804-34c46200-c44e-11ea-87a2-a9d960ee6b6d.png)  
위 이미지를 보면 kinesis나 firehose를 통해 들어온 데이터를 analytics application에서 가공하고 가공된 데이터를 동일하게 kinesis나 firehose를 사용하여 s3 등 target 공간으로 전송하는 거라고 생각한다.  
  

(작동방식)  
![다운로드 (1)](https://user-images.githubusercontent.com/17976251/87239811-4574d800-c44e-11ea-9cdc-a7b4cfc9e5f1.png)  
  
  
## 3. Amazon RedShift
AWS가 서비스하는 클라우드 데이터 웨어하우스 DB  
온프레미스에서 쿼리툴을 통해 레드프레스에 쿼리를 날리면, 레드프레스는 데이터를 분석, 가공해 기업에게 필요한 정보로 리턴해줌  
  
### 특징  
1) 빠른 성능  
레드시프트는 기존의 데이터웨어 하우스보다 10배 빠른 성능을 자랑하는데, 기계학습, 대량 병렬 쿼리 실행, column 기반 스토리지, 결과 캐싱 때문이다.(기계학습 하는거 좀 신기)  
  
- 레드시프트는 기계학습을 통해 프로세스들의 부하량을 계산하고 가장 빠른 처리가 가능하게 대기열을 구성한다.  
  
- 수천 개의 인스턴트를 사용해 대량 병렬 쿼리를 실행한다. 클러스터는 쿼리를 통합해 리턴하는 리더노드, 병합쿼리를 실행하는 컴퓨팅 노드로 구성되어 있다.  
  
- 고성능 디스크의 column 기반 스토리지 및 데이터 압축, 영역 매핑을 사용하여 쿼리 수행에 필요한 I/O 수를 줄이고->??, *쿼리 결과를 캐싱*해두어서 같은 쿼리를 반복적으로 사용할 경우 데이터가 변경되지 않았으면 캐시된 결과를 가져온다.  
  

2) 간단신속한 확장과 백업  
- 클라우드 기반이며 S3와 연결되어 확장성이 뛰어납니다. 주로 큰 데이터는 S3에, 중요한 데이터나 소규모 데이터는 레드시프트에 저장하면 효율적이라 합니다. 또한 레드시프트는 확장 관리 작업 대부분을 자동화하여 편리한 확장이 가능합니다.  
- 자동으로 *스냅샷을 S3에 저장해 백업*합니다.  
  
3) 데이터 레이크 쿼리
  
레드시프트는 레드시프트가 가진 페타바이트 규모의 데이터와 S3에 구축된 데이터 레이크에 있는 엑사바이트 규모의 데이터에 대해 쿼리를 실행할 수 있습니다.(wow !!)  
  
레드시프트는 PostgreSQL을 기반으로 만들어졌기 때문에 쿼리를 통한 실행이 가능하다. *데이터 레이크인 S3에 바로 접근할 수 있기에 데이터를 로딩하는 시간이 없어 시간이 절약*된다.  

(단점)  
- 레드시프트는 PregreSQL을 바탕으로 하고 있지만 분석에 초점을 두었기에 소규모 OLTP 처리에 적합한 기능, index나 PK, FK 등 분석과 무관한 기능들은 약하거나 제외되었습니다.  
또한 column 기반 스토리지이기에 OLTP 시간은 느립니다.  
▶OLTP는 Oracle이 나음.  
  
  
## 4. Amazon QuickSight  
Amazon QuickSight는 데이터를 사용하여 시각적 객체를 구축하고, 애드혹 분석을 수행하고, 사업과 관련된 통찰을 얻는 데 사용할 수 있는 비즈니스 분석 서비스입니다. AWS 데이터 원본을 자동으로 검색하고 사용자의 데이터 원본에도 작동합니다.  

(작동방식)  
![quicksight-workflow-overview](https://user-images.githubusercontent.com/17976251/87240190-43147d00-c452-11ea-9b30-723330b44546.png)  
  
  
## 5. Amazon Athena  
Amazon Athena은(는) Amazon Simple Storage Service(Amazon S3)에서 표준 SQL을 사용하여 데이터를 쉽게 바로 분석할 수 있는 대화형 쿼리 서비스입니다.  
AWS Management Console에서 몇 가지 작업을 수행하면 Amazon S3에 저장된 데이터에서 Athena을(를) 가리키고, 표준 SQL을 사용하여 임시 쿼리를 실행하고, 몇 초 안에 결과를 얻을 수 있습니다.  

Athena은(는) 서버리스 서비스이므로 설정하거나 관리할 인프라가 없으며, 실행한 쿼리에 대해서만 비용을 지불합니다.  
  

## 6. Amazon DynamoDB(다이나모 DB)  
NoSQL Database  


## 7. Streaming
  
## 8. AWS Glue
AWS Glue는 완전 관리형 추출, 변환 및 로드(ETL) 서비스로, 효율적인 비용으로 간단하게 여러 데이터 스토어 및 데이터 스트림 간에 원하는 데이터를 분류, 정리, 보강, 이동합니다.  
  
[데이터 원본] - AWS Glue에서 지원되는 데이터 원본  
1) 데이터 스토어  
- Amazon S3  
- Amazon Relational Database Service (Amazon RDS)  
- 타사 JDBC에서 액세스할 수 있는 데이터베이스-> ??  
- Amazon DynamoDB  

2) 데이터 스트림  
- Amazon Kinesis Data Streams  
- Apache Kafka  

[데이터 대상] - AWS Glue에서 지원되는 데이터 대상
1) 데이터 스토어
- Amazon S3  
- Amazon Relational Database Service (Amazon RDS)  
- 타사 JDBC에서 액세스할 수 있는 데이터베이스  
  
  
  
References  

[Amazon EMR이란?](https://m.blog.naver.com/PostView.nhn?blogId=kbh3983&logNo=221084176372&proxyReferer=https:%2F%2Fwww.google.com%2F)  


[[ AWS ] Amazon Kinesis 란? 개념 정리](https://itjava.tistory.com/99)  

[[ AWS ] AWS RedShift 아마존 웹서비스 레드시프트 란?](https://itjava.tistory.com/117)  

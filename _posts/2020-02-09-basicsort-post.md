---
layout: post
title:  "[알고리즘] 정렬 알고리즘에 대해 알아보자"
date:   2020-02-09
description: 기본 정렬(Insertion sort, Selection sort, Bubble sort)
---

## Insertion sort(삽입 정렬)
자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘  
매 순서마다 해당 원소를 삽입할 수 있는 위치를 찾아 해당 위치에 넣는다.  

삽입 정렬은 두 번째 자료부터 시작하여 그 앞(왼쪽)의 자료들과 비교하여 삽입할 위치를 지정한 후 자료를 뒤로 옮기고 지정한 자리에 자료를 삽입하여 정렬하는 알고리즘이다.  
***처음 key값은 두 번째 자료부터 시작한다***

![insertion-sort](https://user-images.githubusercontent.com/17976251/74099242-c90b5f80-4b64-11ea-8841-6a2e131ab17e.png)  
이미지 출처 : https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html  

~~~ java
public class InsertionSort {
	public void run(int[] arr) {
        int j = 0;
        // 처음 key값은 두 번째 자료부터 시작하기 때문에 시작은 1이다.
		for (int i = 1; i < arr.length; i++) {
            // 시작값은 temp 에 저장해둔다.
			int temp = arr[i];
			for (j = i - 1; j >= 0; j--) {
				if (temp < arr[j]) {
					arr[j + 1] = arr[j];
				} else {
					break;
				}
			}
            // point :)
			arr[j + 1] = temp;
		}
		print(arr);
	}
}
~~~  

  
## Selection sort(선택 정렬)
선택 정렬은 첫 번째 자료를 두 번째 자료부터 마지막 자료까지 차례대로 비교하여 가장 작은 값을 찾아 첫 번째, 두번째,... 에 놓는 과정을 반복하며 정렬을 수행한다.  
*1회전을 수행하고 나면 가장 작은 값의 자료가 맨 앞에 오게 되므로* 그 다음 회전에서는 두 번째 자료를 가지고 비교한다.  

![selection-sort](https://user-images.githubusercontent.com/17976251/74099613-fce88400-4b68-11ea-9c75-bfd033f62b0e.png)  

~~~java
// 순차적으로 보면서 가장 작은애를 제일 앞으로 가져옴.
public class SelectionSort {
	public void run(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			int minIdx = i;
			for (int j = i + 1; j < arr.length; j++) {
				if (arr[minIdx] > arr[j])
					arr[minIdx] = arr[j];
			}
			int temp = arr[i];
			arr[i] = arr[minIdx];
			arr[minIdx] = temp;
		}
		print(arr);
	}
}
~~~

  
## Bubble srt(버블 정렬)
1회전을 수행하고 나면 가장 큰 자료가 맨 뒤로 이동하며 이와 같은 과정을 반복한다.  

![bubble-sort (1)](https://user-images.githubusercontent.com/17976251/74099820-e8a58680-4b6a-11ea-8772-7869e0c08c59.png)  


~~~ java
public class BubbleSort {
	public void run(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			for (int j = i + 1; j < arr.length; j++) {
				if (arr[i] > arr[j]) {
					int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		print(arr);
	}
}
~~~


  
## 시간 복잡도  
![sort-time-complexity](https://user-images.githubusercontent.com/17976251/74099583-be52c980-4b68-11ea-9490-49ef8be4ebbc.png)  
  

  

References  
[알고리즘] 합병 정렬(merge sort)이란    
https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html  
정리 정말 잘해주시는 개발자님 :) 모든 내용은 위 블로그에서 참고했습니다.  
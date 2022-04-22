// 자바스크립트 or 자바 선택해서 풀 것!
// 선택정렬을 이용해서 오름차순으로 정렬해보자.
// 선택정렬 관련해서 서치는 좋지만 코드는 직접 풀어봐요! 과정을 중요시 생각합니다 :)

```js
let array = [9, 6, 7, 3, 5];
let temp = 0;
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array.length; j++) {
    if (array[i] <> array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

```java
	int array[] = {9, 6, 7, 3, 5};
		int temp=0;
		for(int i=0; i<array.length; i++) {
			for(int j=0; j<array.length; j++) {
				if(array[i] < array[j]) {
					temp = array[i];
					array[i] = array[j];
					array[j]=temp;
			}
			}
		}
		for(int i=0; i<array.length; i++) {
			System.out.println(array[i]);
		}
	}
```

// 자바스크립트 or 자바 선택해서 풀 것!
// 버블정렬을 이용하여 오름차순으로 정렬하고 총 몇회전 했는지 알아내시오.
let array = [1, 10, 4, 3, 5];
		let count = 0;
		let temp = 0;
		let size = array.length;
	
		for(var i=1;i<array.length; i++) {
			for(var j=0; j<array.length-1; j++) { 
				if(array[i]<array[j]) {
					count++;
                    temp = array[i];
                    // 배열 중 작은 수를 temp에 대입
                    array[i] = array[j];
                    // 배열 중 큰 수를 뒤로 빼기
                    array[j] = temp;
                    // 작은 수를 앞으로 보내기
				}
			}
		}
		console.log("몇번 돌았는가? "+count);
		
		for(var i=0; i<size; i++) {
			if(i == array.length-1) {
				console.log(array[i]);
                break;
                // 마지막 배열순서일 때 쉼표 없이 break
			}
			console.log(array[i]+",")
		}

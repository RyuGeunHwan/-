- ## ajax(ajax defalut value = 비동기 통신)

```
- 동기 : 요청과 결과가 한 자리에서 동시에 일어남,
        결과가 주어질 때까지 아무것도 못하고 대기해야 하는 단점

- 비동기 : 요청한 그 자리에서 결과가 주어지지 않음,
            결과가 주어지는데 시간이 걸리더라도 그 시간 동안
            다른 작업을 할 수 있으므로 자원을 효율적으로 사용
```

- ## ajax 기본 문법

```js

    1. type이 GET이 아닐 경우
$.ajax({
        1. url: (API주소) 데이터를 가지고 올 API주소 or 파일 등
        2. type: HTTP method type(GET, POST, DELETE, PATCH, PUT...)
        3. contentType: 'application/json', // contentType : 서버에 어떤 타입을 보낼 것인지 의미한다.
        4. dataType: 데이터를 받아올 형식(주로 json, html, xml로 보냄) //dataType : 서버에서 어떤 타입을 받을 것인지 의미한다.
        5. data: JSON.stringify(jsonData), // data : JSON.stringify(json을 담은 변수명)을 안해주면 json을 문자로 인식 <-> 해주면 json으로 인식
        6. success: function (data) {
        // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'data'는 응답받은 데이터이다.
            (서버 요청 성공하면 함수 실행)
        },
        7. error: function (request, status, error) {
        // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
            (서버 요청 실패하면 함수 실행)
        },
      }); // ajax 선언!


    2. type이 GET일 경우
$.ajax({
    url : localhost:8080/... ,
    type : 'GET',
    dataType : 'json',
    success : function(data){
        서버에 GET(조회)이 성공하면 변수data에 데이터가 대입됨.
    },
    error : function(request, status, error){
        서버에 GET(조회)이 실패해서 에러가 뜨게되면 변수 error에 에러메세지가 대입됨.
    }

})
```

- # HTTP 개념(= HyperText Transfer Protocol)
- ### HyperText를 전송하겠다!

```
1. HyperText : 사용자에게 내용의 비순차적 검색이 가능하도록 제공되는 텍스트.
2. Transfer : 전송하다.
3. Protocol : 형식, 약속, 규약, 규칙 체계 혹은 프로그램을 말한다.
4. json을 HTTP로 만들어서 jquery로 server에 보냄.
5. HTTPS : HTTP의 보안 버젼을 얘기함, HTTP가 보안에 취약한 점을 보완한것.
```

- # HTTP 메소드 타입의 종류

```
HTTP : 기능(method or function)
1. ***GET = select (데이터 조회)
2. POST = insert(데이터 생성,등록)
3. DELETE (데이터 삭제)
4. PATCH = update (데이터 부분적 변경)
5. PUT (목적 리소스를 생성, 기존 리소스를 삭제하고 덮어쓰기(갱신))
```

- # URL주소 (no!!no!!) = API주소(Application Programming Interface)
- ### API = json을 받을 목적지

```
1. Interface : 상호 작용!
2. Application : 프로그램(소프트웨어)

API를 점원이라고 생각하고 예를 들어보자.

- 레스토랑에서 손님에게 주문 가능한(선택 가능한)메뉴를 보여주고 손님이 고른 음식을 주방에 전달 후, 음식이 나오면 고객에게 전달하는 '점원'이 API라고 생각하면 편함.
```

- # ajax 기본 문법

```
$.ajax({
        url:  (API주소) 데이터를 가지고 올 API주소 or 파일 등
        type:   HTTP method type(GET, POST, DELETE, PATCH, PUT...)
        dataType: 데이터를 받아올 형식(json, html...)
        success: function (변수이름) {  가져온 데이터를 변수이름에 대입!
            (서버 요청 성공하면 함수 실행)
        },
        error: function (request, status, error) {
            (서버 요청 실패하면 함수 실행)
        },
      }); // ajax 선언!
```

```CS
$.ajax(
    // {}가 나오면 무조건 json
    {
    // json으로 정의 함
    url : API주소     //목적지
    type : HTTP Method
    dataType : json or text  //서버응답 데이터(return type)
    success(응답이 성공 되었는지) : function(response){

        // HTML에서 요청이 성공하면 익명함수 파라미터에 값을 대입해줄께!
    },
    error : function(request, status, error){

    }
    }
)
```

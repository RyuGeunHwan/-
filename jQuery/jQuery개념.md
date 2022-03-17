- # <a href ="https://sunnnkim.tistory.com/199" >JQuery</a>

## 왜 바닐라.js에서 jQuery로 넘어갔을까?

```
1. 기능적인 한계
2. 2008년~2017 or 2018년까지는 jQuery 시대!(압도적이게!)
3. 2018년 이후네는 React, Vue, 앵귤러 지금은 jQuery or React 사용!
```

## JQuery 사용방법

```
1. 구글에 JQuery 입력 후
2. JQuery CDN 들어가서 jQuery3 버전 minified 클릭
3. 복사 후 body아래에 붙여넣기

```

## jQuery 호출방법

```
1. CDN호스트를 사용하는 방법(jQurey 사이트 참고)
    -script에 사용
    <script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>

2. 직접 내려 받는 방법
    -직접 내려 받는 경우에는 경로를 정확히 설정해주어야 한다.
    <script src="jquery-3.5.1.min.js"></script>
```

## JQuery 개념

```
1. 바닐라.js(순수 자바스크립트)
document.getElementBy
                id,
                className,
                name
: 태그를 불러 옴.
-> 바닐라.js를 JQuery로 표현
$('.className').css('display', 'block')

->document.getElementBYclassName = $('.className')

2. 자바스크립트는 데이터 타입이 없기 때문에 return에 function도 return 가능(return에 함수 구현 가능)(=클로저)


```

## 자주 사용하는 JQuery 태그!

```
1. show, hide
2. append
3. children
*****4. val, text, focus
*5. attr
```

## jQuery Best 장점

```
    1. 비동기 통신 지원
    2. 같은 동작을 짧은 코드로 구현
    3. 웹브라우저 구버전(익스플로러 등) 지원
```

## jQuery 문법 종류

- ### 기본 문법

```
$('선택자').동작함수();

1. 선택자 : 함수가 적용되기 원하는 요소
2. 동작함수 : 선택된 요소에 원하는 동작을 설정
ex)
보기1) $('#children').on('click', function () {
      console.log('hello word');
    });

보기2) function createItem() {
      for (var i = 0; i < 5; i++) {
        $('.row').append('<div class="item"></div>');
      }
    }
```

- ### 시작함수

```
1. $(document).ready(function func() { jquery 및 함수 작성 });
    - JQuery를 사용 시 페이지를 먼저 로드한 후에 함수를 실행하는 방식

2. $(function() { 함수 작성});
    - JQuery를 사용 시 함수부터 불러오는 방식
```

- ### 기본함수

```
1. id 호출 = $('#id이름')
2. class 호출 = $('.class이름')
3. name 호출 = $('[name = name이름]')
4. 시맨틱 태그(header,footer,section 등) 호출 = $('시맨틱태그') -> 아무것도 안붙임
5. getter
    var 변수이름 = $("p").html();
    = p태그 내용을 변수이름에 가져옴.
```

- ### 동작함수

```
1. .show(보여주다) :
    $('document할 클래스 or id 이름').show(); = 'document할 클래스 or id 이름'을 보여줌

2. .hide(지우다) :
    $('document할 클래스 or id 이름').hide(); = 'document할 클래스 or id 이름'을 지움

3. .append(추가하다) :
    $('document할 클래스 or id 이름').append('추가할 내용);

4. .ready(jQuery 로드하다)) :
    $(document).ready(function '함수이름'() {alert('자 게임을 시작하지'); } );
    = 위 코드를 해석해보면, 웹 페이지가 로드가 완료되면 경고창 1 을 출력하라라는 의미.
    = alert('내용')의 의미는 경고창(알림창)에 '내용 출력'
5. .on(준비하다) :
    $('#children').on('click', function () { }); -> (=바인딩)
    = 이벤트를 받을 준비
    = 함수 중에 function() : 익명 함수
```

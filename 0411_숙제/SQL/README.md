### 테이블 설명

    customer 테이블은 고객데이터를 저장하는 테이블.
    고객이 비용을 지불하면 customer_history_purchase 테이블에 저장된다.
    등록된 고객만 구매할 수 있다.

## 문제

1. 탈퇴하지 않은 고객 아이디와 이름, 등급 조회.

```sql
select customer_id,customer_name,grade
from customer
where is_use = "false"
```

2. '2021-12-09' 이후에 가입한 고객 수 조회.

```sql
select count(*)
from customer
where create_at > '2021-12-09'
```

3. 구매이력이 있는 고객 아이디와, 이름, 구매날짜, 비용 조회.

```sql
select c.customer_id ,
c.customer_name ,
sum(chp.cost) ,
chp.create_at
from customer c right join customer_history_purchase chp
using (customer_id)
group by customer_id
```

4. 등록된 고객 중 한 번도 구매 이력이 없는 고객 아이디, 이름, 회원 탈퇴 여부 조회.

```sql
customer테이블로 left join한 뒤에 차집합(MINUS)에서
교집합(INTERSECT)을 뺀 나머지 customer_id == "SMITH"
```

```SQL
-- 방법1.
select c.customer_id as "아이디" ,
c.customer_name as "이름",
c.is_use as "탈퇴여부"
from customer c left join customer_history_purchase chp
on c.customer_id = chp.customer_id
where chp.customer_id is null
```

```SQL
-- 방법2.
select c.customer_id as "아이디" ,
c.customer_name as "이름",
c.is_use as "탈퇴여부"
from customer c
where not exists (
select distinct customer_id
from customer_history_purchase chp
where chp.customer_id = c.customer_id
-- exists 개념 : 서브쿼리의 결과가 한건이라도 존재하면 true를 리턴하여 메인쿼리 실행, 존재하지않으면 false를 리턴
-- not exists 개념 : 서브쿼리의 결과값이 존재하지 않는다면 true를 리턴, 존재한다면 false를 리턴
-- exists, not exists서브쿼리에 join조건이 있을경우
-- : exist 서브쿼리에 조인조건이 있다면 교집합인 데이터가 있다면 결과출력
-- : not exists를 사용하여 서브쿼리에 join조건을 주게 되면 서브쿼리 조인조건을 제외한 나머지를 출력
-- distinct = 중복제거;
)
```

```SQL
-- 방법3.
select c.customer_id as "아이디" ,
c.customer_name as "이름",
c.is_use as "탈퇴여부"
from customer c
where c.customer_id not in(
select distinct chp.customer_id
from customer_history_purchase chp
)
```

5. '2022-01-03'기준 고객 아이디별 구매 건수와 총 비용, 이름, 등급 조회.
6. '2022-01-03'기준 3번 이상 구매한 고객 아이디, 이름, 등급 조회.
7. 고객번호가 5194998인 고객 등급을 골드로 업데이트 하시오.

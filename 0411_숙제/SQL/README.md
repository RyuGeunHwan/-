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

5. '2022-01-03'기준 고객 아이디별 구매 건수와 총 비용, 이름, 등급 조회.
6. '2022-01-03'기준 3번 이상 구매한 고객 아이디, 이름, 등급 조회.
7. 고객번호가 5194998인 고객 등급을 골드로 업데이트 하시오.

# react bucket list project
* SPA(Single Page App)로 구현하는 나의 버킷 리스트
* React를 사용하여 화면구현
* Nodejs + MongDB를 연동한 서버구현
* React + Nodejs + MongoDB 연동하는 API App으로 구현하기

## CRUD
* 입력창에 버킷 입력 후 Enter 누르면 바로 insert
* FLAG를 클릭하면 중요, 매우중요, 긴급, 일반이 번갈아 표시
* 완료항목을 클릭하면 완료 일자가 등록
* 취소를 체크하면 취소선이 나타나고 
* 항목 클릭하면 업데이트를 수행 할 수 있도록

## 버킷리스트에서 Update 수행하기
* 버킷리스트의 버킷 항목을 클릭하면 input Box가 나타나도록
* 버킷항목의 td box에 onclick event를 설정하기
* onClick이 되면 
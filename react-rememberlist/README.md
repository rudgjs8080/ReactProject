# React를 이용한 Remember List Project
* 화면에서 기억해야 할 일을 입력하고 Enter를 누르면 List에 추가
* 리스트를 더블클릭하면 완료 표식을 붙이는 Project

## LocalStroage를 사용
* 각 Browser 자체에 있는 매우 소형 DB, 문자열형 데이터를 저장할 수 있는 공간
* 임의로 백업을 하거나 다른곳으로 이전하는 기능이 없으면 다른 곳에서는
접근을 할 수 없다

## 시간과 관련
* 할일을 입력한 후 Enter를 누르면 날짜와 시간을 자동으로 생성하여 저장
* yarn add moment

## RememberList 배열에 ID값 추가하기 
* CRUD를 구현해야 할 때는 어떤 데이터를 CRUD할지를 
명확히 하기 위해 ID값을 설정해줘야 한다
* 만약 배열의 index(첨자)를 기준으로 RUD를 수행하는 것은 내가
원하는 데이터를 RUD한다는 보장이 없다
* 데이터를 배열에 추가할 때 ID 칼럼을 생성하고 UNIQUE한
데이터를 만들어서 값을 저장할 필요가 있다
* yarn add react-uuid 를 사용하여 UNIQUE 한 ID 값을 만든다



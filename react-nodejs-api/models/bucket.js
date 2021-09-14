/**
 * ORM 방식으로 DB 핸들링
 * SQL 방식의 RDBMS에서 직접 SQL을 사용하지 않고
 * 함수, method등을 이용하여 CRUD를 쉽게 구현할 수 있도록 만들어진 도구
 * MySQL : sequelize, Mongo : mongoose
 * mongoDB는 Schema를 만들지 않는 전통적인 NoSQL이다
 * NoSQL은 도큐먼트 방식으로 데이터를 저장하고 관리하는 DB이다
 * RDBMS는 초기에 반드시 데이터를 저장할 공간을 만들고
 * 데이터의 구조를 선언하여 Table등을 생성해야 한다
 * 
 * NoSQL은 저장공간만 선언하고
 * 데이터는 언제든지 필요한 구조로 Document를 만들어 저장한다
 * NoSQL Document = JSON 데이터
 * 
 * 보통 DBMS에서는 구조적인 방법으로 데이터를 관리하는 것이
 * 편리 할 때가 있다
 * mongoose를 사용하면 NoSQL을 마치 Schema가 있는 RDBMS의
 * 모양처럼 사용할 수 있다
 */
const mongoose = require('mongoose')
/**
 * b_id 칼럼을 MongoDB에서 제공하는 Serial number로 설정하기
 * 이 항목을 지정하지 않으면 id 칼럼이 _id라는 이름으로 생성된다
 */
const bucket = mongoose.Schema({
	b_id: String,
	b_flag: Number,
	b_start_data: String,
	b_title: String,
	b_end_date: String,
	b_end_check: Boolean,
	b_cancel: Boolean,
})

// 생성한 Schema 구조로 bucketList를 작성하겠다
module.exports = mongoose.model('bucketList', bucket)
const express = require('express')
const router = express.Router()

/**
 * RESTful
 * 클라이언트에서 요청을 할 때 할 일을 프로토콜 method로 분리하기 
 * 		CREATE(Insert) : POST로 요청을 하고
 * 		READ(Select) : GET 요청
 * 		UPDATE(update) : put 요청
 * 		DELETE(delete) : delete 요청
 * 
 * 자원의 명확한 지정
 * 		localhost:3000/book/delete?id=1234 이런식으로 보통 요청 수행하는데
 * 		localhost:3000/book/1234/delete : RESTful에서 할 일, 자원을 명확하게 설정하기
 * 
 * RESTful 요청을 처리하기 위해서는 
 * 표준 HTML 코드만으로는 연결이 불가능하다
 * 		표준 HTML에서는 POST와 GET은 지원을 하지만
 * 		PUT과 DELETE는 지원을 하지 않는다
 * 		PUT과 DELETE를 사용하기 위해서는 Ajax(fetch)와 같은 
 * 		별도의 도구를 사용해야한다
 * 
 * React와 API 연동을 할 때는 RESTful 4가지 method를 사용하여 서버를 구축한다
 * 
 * POST, PUT : 데이터를 body에 담아서 전송
 * GET, DELETE : 단순히 URL요청만 수행하거나 pathVarriable 방식으로
 * 		데이터를 전송하여 처리를 수행한다
 * 
 * client에서 요청을 할 때
 * 같은 URL을 통하여 요청을 하여도 method가 다르면 서로 다른 역할을 
 * 수행할 수 있기 때문에 서버 코딩을 하는데 다소 부담이 덜 할 수 있다
 * 		GET localhost:3000/book/delete 를 수행하면 
 * 			-> 도서정보에서 삭제된 데이터를 보여달라는 의미가 될 수 있다
 * 		DELETE localhost:3000/book/delete?id=1 을 수행하면
 * 			-> 도서정보에 1인 값의 데이터를 삭제하라고 요청하라는 의미
 * 			router.delete('/book/delete')
 */

const dataList = [
	{
	b_id: "00001",
	b_start_date: "2021-09-15",
	b_title: "Test 연동",
	b_end_date: "",
	b_end_check: false,
	b_cancel: false
	},
	{
	b_id: "00003",
	b_start_date: "2021-09-15",
	b_title: "api server 연동",
	b_end_date: "",
	b_end_check: false,
	b_cancel: false
	}

];

/**
 * POST로 받는 데이터는 주로 form에 담긴 데이터이다
 * API Server에서는 fetch() 통하여 데이터를 전달받을 때도 사용한다
 * request의 body에 담겨서 전달되기 때문에
 * req.body에서 데이터를 추출하면 된다
 */
router.post('/bucket', (req,res) => {
	const body = req.body
	console.log("데이터 추가하기")
	console.log(body)
	res.send("끝")
})

router.put('/bucket', (req,res) => {
	const body = req.body
	console.log("데이터 업데이트 하기")
})

router.get('/get', (req,res) => {
	console.log('개별 데이터 요청하기')
	res.json(dataList)
	// console.log(dataList)
})

router.get('/:id/get', (req,res) => {
	
})

router.get('/update/:id/:title',(req,res) =>{
	const id = req.params.id
	const title = req.params.title

	console.log(`id: ${id} title: ${title}`)
	/**
	 * res.status(200).end("끝")
	 * 
	 * Http Status Code
	 * 2xx : 정상처리가 되고 데이터르 보낼 준비를 하고 있으니 기다려라
	 * 3xx : 조금전에 보내준 결과와 변함이 없으니 그대로 써라, redirect
	 * 4xx : 보낸 요청에 문제가 있다 
	 * 		404 (not found)
	 * 		401, 403 권한이 없다
	 * 5xx : server Internal Error
	 */
	res.end("끝")
})

router.delete('/cancel/:id', (req,res) => {
	const id = req.params.id
	
	console.log(`id: ${id}`)
	res.end("end")
})

module.exports = router
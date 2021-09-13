import React from 'react'

function BucketMain() {
	return (
		<>
		<div className="input_box">
			<input type="text" placeholder="버킷에 추가할 내용을 입력하세요" />
		</div>
		<table className="bucket_list">
			<thead>
				<tr>
					<th>FLAG</th>
					<th>날짜</th>
					<th>BUCKET</th>
					<th>완료</th>
					<th>취소</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>중요</td>
					<td>2021-09-13 00:00:00</td>
					<td>월요일</td>
					<td>2021-09-14 12:12:12</td>
					<input type="checkbox" />
				</tr>
			</tbody>
		</table>
		</>
	)
}

export default BucketMain

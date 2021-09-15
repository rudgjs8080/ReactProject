import React, {useState, useEffect, useCallback} from 'react'
import BucketList from "./BucketList";
import BucketInput from "./BucketInput";
import uuid from 'react-uuid'
import moment from 'moment'

function BucketMain() {
	// 버킷리스트를 담을 배열
	const [bucketList, setBuckList] = useState([]);
	// db에 update할 state
	const [saveBucket, setSaveBucket] = useState({})

	const bucketFetch = useCallback(async () => {
		const res = await fetch('http://localhost:4000/api/get')
		const bucketList = await res.json()
		await setBuckList(bucketList)
	}, [])
	useEffect(bucketFetch, [bucketFetch])
	
	// 저장할 데이터를 생성하고
	const bucket_insert = async(bucket_text) => {
		const bucket = {
			b_id: uuid(),
			b_start_date : moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
			b_title : bucket_text,
			b_flag: 0,
			b_end_date : "",
			b_end_check: false,
			b_cancel: false
		}
		// 화면에 보여질 리스트에 추가하기
		// bucketList를 가져와서 새로운 bucket 추가하기
		await setBuckList([...bucketList, bucket])

		const fetch_option = {
			method: "POST",
			headers: {
				"Content-Type" : "application/json",
			},
			body: JSON.stringify(bucket)
		}
		await fetch('http://localhost:4000/api/bucket',fetch_option)
		// await bucketFetch()
	}
	const putBucket = async() => {
		console.log(saveBucket)
		const putFetchOption = {
			method:"PUT",
			headers: {"Content-Type" : "application/json"},
			body: JSON.stringify(saveBucket)
		}
		const result = await fetch('http://localhost:4000/api/bucket', putFetchOption)
		console.log(result.json())
	}
	// saveBucket 이 변화가 생기면 
	// pubBucket 실행?? saveBucket은 fetch로 보낼?
	useEffect(putBucket, [saveBucket])

	  const flag_change = (id) => {
		const _bucketList = bucketList.map((bucket) => {
		  // alert(bucket.b_flag);
		  /**
		   * 전달받은 id와 같은 항목의 flag를 1 증가시키기 
		   */
		  if (bucket.b_id === id) {
			  const _temp = {...bucket, b_flag: bucket.b_flag +1}
			  setSaveBucket(_temp)
			return _temp
		  } else {
			return bucket;
		  }
		});
		// 원래의 bucketList를 _bucketList로 바꾸는 것
		setBuckList(_bucketList); 
	  };
	
	  const bucket_update = (id, title) => {
		  const _bucketList = bucketList.map(bucket => {
			  if(bucket.b_id === id) {
				  const _temp = {...bucket, b_title:title}
				  setSaveBucket(_temp)
				  return _temp
			  } else {
				  return bucket
			  }
		  })
		  setBuckList(_bucketList)
	  }
	  /**
	   * JS에서
	   * 문자열 변수에 담긴값이 "" 이거나 null 이거나 undefined 이거나
	   * 숫자형 변수에 담긴 값이 0 이거나 NaN 이러한 값이면
	   * 
	   * 변수와 함께 논리연산자가 묶였을 때
	   * 
	   * 예)
	   * let 변수 = ""
	   * 변수 || 와 같은 코드를 만나면 이 결과는 false가 된다
	   * 
	   * 변수 = 변수 || "대한민국" 이라는 코드를 작성하면
	   * 1. 원래 변수에 ""이 담겨 있으므로 변수 || 는 false가 되고
	   * 2. or 연산을 수행하려고 한다
	   * 3. 양쪽 값이 모두 true 일 때만 true가 되고 변수 || 연산은 false이므로
	   * 이후에 나타나는 코드를 수행하여 좌항의 변수에 대한민국 문자열을 담게 된다
	   * 
	   * 변수 = "" || "우리나라" 이런 코드를 만나면
	   * 변수에는 "우리나라"라는 문자열이 담기게 된다
	   * 
	   */
	  const bucket_complete = (id) => {
		  const _bucketList = bucketList.map(bucket=> {
			  if(bucket.b_id === id){
				  const _temp = {...bucket,
					b_end_date : 
					  	bucket.b_end_check || moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
					  b_end_check : !bucket.b_end_check}
				  setSaveBucket(_temp)
				  return _temp
			  	} else {
				  return bucket
			  }
		  })
		  setBuckList(_bucketList)
	  }
	  const bucket_cancel = (id) => {
		const _bucketList = bucketList.map(bucket=> {
			if(bucket.b_id === id){
				const _temp = {...bucket, b_cancel: !bucket.b_cancel}
				setSaveBucket(_temp)
				return _temp
				} else {
				return bucket
			}
		})
		setBuckList(_bucketList)
	}
	  const args = {
		  bucketList:bucketList,
		  flag_change: flag_change,
		  bucket_update: bucket_update,
		  bucket_complete : bucket_complete,
		  bucket_cancel : bucket_cancel,
	  }
	  return (
		<div className="w3-container-fluid">
		  <BucketInput bucket_insert={bucket_insert}/>
		  {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기  */}
		  <BucketList args={args} />
		</div>
	  );
}

export default BucketMain

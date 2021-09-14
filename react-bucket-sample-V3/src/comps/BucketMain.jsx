import React, {useState, useEffect, useCallback} from 'react'
import BucketList from "./BucketList";
import BucketInput from "./BucketInput";
import uuid from 'react-uuid'
import moment from 'moment'

function BucketMain() {
	const [bucketList, setBuckList] = useState([]);

	const bucketFetch = useCallback(async() => {
		const res = await fetch('http://localhost:5000/data')
		const bucketList = await res.json()
		await setBuckList(bucketList)
	}, [])
	useEffect(bucketFetch, [bucketFetch])
	
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
		// bucketList를 가져와서 새로운 bucket 추가하기
		await setBuckList([...bucketList, bucket])
		const fetch_option = {
			method: "POST",
			headers: {
				"Content-Type" : "application/json",
			},
			body: JSON.stringify(bucket)
		}
		await fetch('http://localhost:5000/insert',fetch_option)
		// await bucketFetch()
	}

	  const flag_change = (id) => {
		const _bucketList = bucketList.map((bucket) => {
		  // alert(bucket.b_flag);
		  /**
		   * 전달받은 id와 같은 항목의 flag를 1 증가시키기 
		   */
		  if (bucket.b_id === id) {
			return {
			  ...bucket,
			  b_flag: bucket.b_flag + 1,
			};
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
				  return {...bucket, b_title: title}
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
				  return {
					  ...bucket,
					  b_end_date : 
					  	bucket.b_end_check || moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
					  b_end_check : !bucket.b_end_check
				  }
			  	} else {
				  return bucket
			  }
		  })
		  setBuckList(_bucketList)
	  }
	  const bucket_cancel = (id) => {
		const _bucketList = bucketList.map(bucket=> {
			if(bucket.b_id === id){
				return {
					...bucket,
					b_cancel: !bucket.b_cancel
				}
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

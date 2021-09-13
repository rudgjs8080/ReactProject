import React, {useState} from 'react'
import BucketList from "./BucketList";
import BucketInput from "./BucketInput";
import uuid from 'react-uuid'
import moment from 'moment'

function BucketMain() {
	const [bucketList, setBuckList] = useState([]);
	
	const bucket_insert = (bucket_text) => {
		const bucket = {
			b_id: uuid(),
			b_start_date : moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
			b_title : bucket_text,
			b_flag: 0,
			b_end_date : "",
			b_end_check: false,
			b_cancle: false
		}
		// bucketList를 가져와서 새로운 bucket 추가하기
		setBuckList([...bucketList, bucket])
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

	  const bucket_complete = (id) => {
		  bucketList.map(bucket=> {
			  if(bucket.b_id === id){
				  return {
					  ...bucket,
					  b_end_date : moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
					  b_end_check : true
				  }
			  } else {
				  return bucket
			  }
		  })
	  }
	  const args = {
		  bucketList:bucketList,
		  flag_change: flag_change,
		  bucket_update: bucket_update,
		  bucket_complete : bucket_complete,
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

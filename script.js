var crudApp = new function() {
	// 수강 데이터를 담을 Json형식의 배열 만들기
	this.myClass = [
		{ID : '1', Class_Name:'운영체제', Category:'전공필수', Credit : 3},
		{ID : '2', Class_Name:'컴퓨터구조론', Category:'전공선택', Credit : 4},
		{ID : '3', Class_Name:'심리학의 이해', Category:'교양필수', Credit : 2, newKey : 'hihi'},
	]
	
	// 선택할 수 있는 항목 미리 정의
	this.Category = ['전공필수', '전공선택', '교양필수', '교양선택'];
	
	// Table Header에 담길 데이터를 확장성을 위해 배열에 담기
	this.col = [];
	
	// 위의 데이터들을 토대로 실제로 테이블을 만들어주는 메서드
	this.createTable = () => {
		// 테이블을 만들고 데이터를 채우는 코드
		// col에 table header에 해당하는 데이터 (myClass의 key값들)들을 넣어주는 코드
		// 비어있는 col 배열에 myClass 배열 속 객체들의 key값들을 넣어줘야 함
		
		//myClass 속 객체들 조회
		for (var i=0; i<this.myClass.length; i++){
			// 각 객체들 속의 key값들 순회
			for(var key in this.myClass[i]){
				// indexOf : 문자열속의 문자열 검색
				if(this.col.indexOf(key) === -1) this.col.push(key);
			}
		}
		
		var table = document.createElement('table');
		table.setAttribute('id', 'classTable');

		// tr : 새로운 행 추가
		var tr = table.insertRow(-1); // 하나의 행 생성


		// th 작성
		for(var h =0; h<this.col.length; h++){
			var th = document.createElement('th');
			th.innerHTML = this.col[h];
			tr.appendChild(th);
		}

		var div = document.getElementById('container');
		div.innerHTML = '수강관리 앱';
		div.appendChild(table);
	}
	
	
}

crudApp.createTable();
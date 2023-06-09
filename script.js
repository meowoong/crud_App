var crudApp = new function() {
	this.myClass = [
		{ID : '1', Class_Name:'운영체제', Category:'전공필수', Credit : 3},
		{ID : '2', Class_Name:'컴퓨터구조론', Category:'전공선택', Credit : 4},
		{ID : '3', Class_Name:'심리학의 이해', Category:'교양필수', Credit : 2, newKey : 'hihi'},
	]
	
	this.Category = ['전공필수', '전공선택', '교양필수', '교양선택'];

	this.col = [];

	this.createTable = () => {
		for (var i=0; i<this.myClass.length; i++){
			for(var key in this.myClass[i]){
				if(this.col.indexOf(key) === -1) this.col.push(key);
			}
		}
		
		var table = document.createElement('table');
		table.setAttribute('id', 'classTable');

		var tr = table.insertRow(-1);

		//th 작성
		for(var h =0; h<this.col.length; h++){
			var th = document.createElement('th');
			th.innerHTML = this.col[h];
			tr.appendChild(th);
		}

		//tr 작성
		for(var i=0; i<this.myClass.length; i++){
			//table에 일단 한 행을 추가
			tr=table.insertRow(-1);
			//table header길이만큼 순회하며 거기에 매칭되는 데이터 가져오기
			for(var j=0; j<this.col.length; j++){
				var tabCell=tr.insertCell(-1);
				tabCell.innerHTML = this.myClass[i][this.col[j]];
			}
		}

		var div = document.getElementById('container');
		div.innerHTML = '수강관리 앱';
		div.appendChild(table);
	}
}
crudApp.createTable();
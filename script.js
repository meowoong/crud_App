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

		for(var h =0; h<this.col.length; h++){
			var th = document.createElement('th');
			th.innerHTML = this.col[h];
			tr.appendChild(th);
		}

		var div = document.getElementById('container');
		div.innerHTML = '수강관리 앱';
		div.appendChild(table);
	}
	/*여기수정함*/
}
crudApp.createTable();
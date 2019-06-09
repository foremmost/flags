function Fiction(){
	let _ = this;

	_.langs = ['en','ru','kz'];

	let from = prompt("Выберите язык с какого перевод(0:en,1:ru,2:kz)")*1;
	let to = prompt("Выберите язык на какой перевод(0:en,1:ru,2:kz)")*1;
	_.current_word = {};
	_.from = _.langs[from];
	_.to = _.langs[to];
		// trs = translates 	
	_.words = {
		'en':[
			{ id:1, words:['test','testing'] },
			{ id:2, words:['human','people'] }
		],
		'ru':[
			{ id:1, words:['тест', 'проверка', 'анализ']},
			{ id:2, words:['человек', 'смертный']}
		],
		'kz':[
			{ id:1, words:['сынак']},
			{ id:2, words:['адам']}
		]
	};

	
	_.choose_word = function(){
		let ind = _.words[_.from].length-1;
		if(ind < 0 ){
			ind = 0;
		}
		let rnd = Math.round(Math.random() * ind),
			id = _.words[_.from][rnd].id;
			words = _.words[_.from][rnd].words,
			wind = words.length-1;
		if(wind < 0 ){
			wind = 0;
		}
		_.current_word['id'] = id;
		_.current_word['word'] = words[Math.round(Math.random() * wind)];
	}
	_.find_word = function(_word){
		let translated_words = _.words[_.to];
		let filtered = translated_words.filter(function(word){
			return word['id'] == _.current_word['id'];
		})[0];
		let similar = filtered['words'].filter(function(word){
			return word == _word;
		})[0];

		if(similar){
			alert('Уcпех');
		}else{
			console.error("Ошибка")
		}
	}
	_.choose_word();
	let user_word = prompt(_.current_word['word']);
	while(user_word != '-1'){
		_.find_word(user_word);
		_.choose_word();
		user_word = prompt(_.current_word['word']);
	}
	//console.log(user_word);
}

let game = new Fiction();

// fetch('../en.json')
//   .then(function(response) {
//     	console.log(response)
//     });
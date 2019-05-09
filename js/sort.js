function create_random_arr(cnt){
    let arr = [];
    for(let i=0; i< cnt;i++){
        arr.push(Math.round(Math.random()*100))
    }
    return arr;
}
function for_each(arr,func){
    // Для каждого
    for(let i=0;i < arr.length;i++){
        func(arr[i],i);
    }
}
function filter(arr,func){
    let out_arr = [];
    for(let i=0; i < arr.length;i++){
        if(func(arr[i])){
            out_arr.push(arr[i]);
        }
    }
    return out_arr;
}
function is_arr(elem){
    if(elem instanceof Array){
        return true;
    }
    return false;
}
function merge_arr(){
    let out_arr = [];
    if(arguments.length < 2){
        return out_arr;    
    }
    let check_arr = true;
    for_each(arguments, function(argument,index){
        if(!is_arr(argument)){
            check_arr = false;
            console.warn('В парамент '+index+' передан '+argument+', а не массив');
            return;
        } 
    });
    if(!check_arr) return [];
    for_each(arguments, function(argument){
        // Перебираем массив переданных параметров
        for_each(argument, function(elem){
            // Перебираем каждый параметр и добавляем в массив на выход
            out_arr.push(elem);
        }); 
    });
    
    return out_arr;
}
function quick_sort(arr){
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[0],
        left = [],
        right = [];
    left =  filter(arr,function(elem){
        return elem < pivot;
    });
    right =  filter(arr,function(elem){
        return elem > pivot;
    });
    let sorted_left = quick_sort(left);
    sorted_left.push(pivot);
    let sorted_right = quick_sort(right);
    return merge_arr(sorted_left,sorted_right);
}



// Object
let table = 'Стол';
let table_obj =  {
    color : 'brown',
    height: '1m'
};
let human = {};
human.age = 20;
human.name = 'Вася';
human['to_do_list'] = [
    {
        id: 3,
        action : 'покушать',
        time: '9:00',
        complete: false,
        parent: 1
    },
    {
        id: 1,
        parent: null,
        action : 'проснуться',
        time: '8:00',
        complete: false
    }, {
        id: 2,
        parent: 1,
        action : 'помыться',
        time: '8:30',
        complete: false
    }
];
human['get_action'] = function(action){
    return  filter( human['to_do_list'], function (elem) {
        return elem.action == action;
    })[0];
};
human['get_work'] = function(id){
    return filter( human['to_do_list'], function (elem) {
        return elem.id == id;
    })[0];
};
human['do_action'] = function (action) {
    let  work = human.get_action(action);
    if(work.length < 1) return;
    if(!work.parent) {
        if(confirm('Вы уверены, что хотите '+ work.action+'?')){
            work.complete = true;
        }
        return;
    }

    let  parent = filter( human['to_do_list'], function (elem) {
        return elem.id == work.parent;
    })[0];
    if(!parent.complete){
     //   let parent = human['get_work'](work.parent);
        console.error('Сначала надо сделать: '+ parent.action);
    }
    if(confirm('Вы уверены, что хотите '+ work.action+'?')){
        work.complete = true;
    }
};

function  Work (params) {
    this.id = params.id;
    this.action = params.action;
    this.time =  params.time;
    this.complete = false,
    this.parent ? params.parent : null;
}

function Human(params){
    // this
    this.name = params['name'];
    this.age = params['age'];
    this.to_do_list = [];
    this.add_work = function (params) {
        if(is_arr(params)){

            return;
        }
        this.to_do_list.push(new Work(params));
    };
    this['show_notice'] = function(notice){
        if(notice){
            if(confirm(notice)){
                work.complete = true;
            }
            return;
        }
        if(confirm(this.name+', Вы уверены, что хотите '+ work.action+'?')){
            work.complete = true;
        }
    }
    this['get_action'] = function(action){
        return  filter( this['to_do_list'], function (elem) {
            return elem.action == action;
        })[0];
    };
    this['get_work'] = function(id){
        return filter( this['to_do_list'], function (elem) {
            return elem.id == id;
        })[0];
    };
    this.do_work = function (action) {
        let  work = this.get_action(action);
        if(work.length < 1) return;
        if(!work.parent) {
            this.show_notice();
            return;
        }
        let  parent = this.get_work(work.parent);
        if(!parent.complete){
            //   let parent = human['get_work'](work.parent);
            console.error('Сначала надо сделать: '+ parent.action);
        }
        this.show_notice();
    }
    this.show_to_do_list = function () {
        console.log(this.to_do_list);
    }
}
let Anton = new Human({ name: 'Anton', age: 10 });
Anton.add_work({
    id: 1,
    action: 'Встать'
});
Anton.add_work([
    {
    id: 1,
    action: 'Встать'
},    {
        id: 2,
        action: 'Сесть'
    },    {
        id: 2,
        action: 'Лежать'
    }


]);

function Car(){
    // Свойства
    // бензин
    // Методы
    // Заправить бак
    // Завести двигатель
    // Поехать
}
let bmw = new Car(
    {
        fuel: 30,
        volume: 3.0
    }
    );
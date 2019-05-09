
function create_random_arr(cnt){
    let arr = [];
    for(let i=0; i< cnt;i++){
        arr.push(Math.round(Math.random()*100))
    }
    return arr;
}

let digits = create_random_arr(10);

console.log('Не сортированный массив; '+digits)


function for_each(arr,func){
    // Для каждого
    for(let i=0;i < arr.length;i++){
        func(arr[i],i);
    }
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
    for_each(arr, function(elem){
        if(elem < pivot){
            left.push(elem);
        }
    });
    for_each(arr, function(elem){
        if(elem > pivot){
            right.push(elem);
        }
    });
    let sorted_left = quick_sort(left);
    sorted_left.push(pivot);
    let sorted_right = quick_sort(right);
    return merge_arr(sorted_left,sorted_right);


    return [ ...quick_sort(left), pivot, ...quick_sort(right)];

}
console.log(quick_sort(digits));
//quick_sort('Отсортированный массив: '+digits);


//console.log(merge_arr(test,test2))

let for_filter = create_random_arr(10);
// 10,40,3,4,6
function filter(arr){
    
}

let out = filter(arr,function(elem){
    if(elem > 20){
    }
});
console.log(out); // [40]

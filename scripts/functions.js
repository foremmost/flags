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
    arguments.__proto__.forEach = [].__proto__.forEach;
    arguments.forEach( function(argument,index){
        if(!is_arr(argument)){
            check_arr = false;
            console.warn('В парамент '+index+' передан '+argument+', а не массив');
            return;
        } 
    });
    if(!check_arr) return [];
    arguments.forEach(function(argument){
        // Перебираем массив переданных параметров
        argument.forEach( function(elem){
            // Перебираем каждый параметр и добавляем в массив на выход
            out_arr.push(elem);
        }); 
    });
    
    return out_arr;
}
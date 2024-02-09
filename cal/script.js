function insertValue(value){
    result.value+=value;
}
function clearResult(){
    result.value ='';
}
function deleteResult(){
    result.value= result.value.slice(0,-1);
}
function claculate(){
    try{
        result.value = eval(result.value);
    }
    catch(error){
        result.value='Error';
    }
}
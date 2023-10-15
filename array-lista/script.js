const fruitList = ['banana','mela','pera','ciliegia','arancia','mandarino','cocomero','limone','fragola'];
fruitList.push('pesca');

for(let i = 0; i < fruitList.lenght; i++){
    if(i === fruitList[6]){
        console.log(i);
        console.log(fruitList)
    }else{
        let fruit_msgContainer=document.getElementById('fruit-msgContainer');
        fruit_msgContainer.innerHTML= "Oh no, devo uscire a comprare il cocomero!"
    }
}


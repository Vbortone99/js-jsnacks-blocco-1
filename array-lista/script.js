let fruitList = ['banana','mela','pera','ciliegia','arancia','mandarino','cocomero','limone','fragola'];
fruitList.push('pesca');

for(let i = 0; i < fruitList.length ; i++){
    if(i = fruitList[6]){
        console.log(i);
        let fruit_msgContainer = document.getElementById('fruit-msgContainer');
        fruit_msgContainer.innerHTML = "Trovato! Devo solo preparare il cocktail."
    }else{
        fruit_msgContainer.innerHTML = "Oh no, devo uscire a comprare il cocomero!"
    }
}


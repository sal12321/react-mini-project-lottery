function sumArr (arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });

    return sum;

}



    let randomNumber  = () =>{
         let num1 = Math.floor((Math.random()*10));
         let num2 = Math.floor((Math.random()*10));
         let num3 = Math.floor((Math.random()*10));

    return([num1, num2, num3]);

        
    }

    let genTicket = (n) =>{
        let arr = []
        for(let i=0; i<n; i++ ){
        arr.push(
            Math.floor((Math.random()*10))
                );

        }
        return arr;
    }

    export {randomNumber, sumArr, genTicket}
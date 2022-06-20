

mainNumbers(1);

function mainNumbers(num){
    if (num <=100){
        console.log(num);
        mainNumbers(num + 1);
    }
}

// 2do ejercicio

const mainNumbers2 = (num) => {
    if(num >= 500){
        console.log(num);
        mainNumbers2(num - 2);
    }
};

mainNumbers2(1000);
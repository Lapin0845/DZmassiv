const numbers=[]

console.log(numbers.length)

$('#add').click(f1)
$('#last').click(f2)
$('#first').click(f3)
$('#rep').click(f4)



function f1(){
    let num= $('#in').val()
    numbers.push(num)
     $('#out').text(numbers)
}

function f2(){
     let num= $('#in').val()
    numbers.pop(num)
     $('#out').text(numbers)
}

function f3(){
     let num= $('#in').val()
    numbers.shift(num)
     $('#out').text(numbers)
}

function f4(){
     let num= $('#in').val()
    let index=numbers.indexOf(num)
    if(index===-1) {
        $('#out').text('не найден')
    }
    else {
        numbers.splice(index,1)
        $('#out').text(numbers)
    }
}
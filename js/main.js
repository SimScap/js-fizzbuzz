const wrapper = document.getElementById('my-wrapper')


for  (let i = 0 ; i< 100 ; i++){

    let newDiv = document.createElement('div');
    newDiv.classList.add('box', 'm-4', 'text-center');
    newDiv.innerText = i;
    wrapper.append(newDiv);

    if (i % 15 == 0)   {
    newDiv.innerHTML = "FizzBuzz";
    }
    
else if (i % 3 == 0) {
    newDiv.innerHTML = "Fizz";
}

else if (i % 5 == 0) {
    newDiv.innerHTML = "Buzz";
}
else;
}
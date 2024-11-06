function calc(){
    let input=parseInt(document.getElementsByTagName('input')[0].value);
   let h1=document.getElementsByTagName('h1')[0];
    if(input>=90){
     h1.textContent='Excellent, Good job!'

    h1.style.color='green'
}

}
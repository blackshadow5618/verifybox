//UI
const codes = document.querySelectorAll('.code');
// console.log(codes);
// console.log(codes[0]);
// codes[2].focus();  //for curosor point index number

codes.forEach((code,index)=>{
    // console.log(code);

    code.addEventListener('keydown', (e)=>{
        
        if(e.key >= 0 && e.key <= 9){
            // codes[index+1].focus();

            // For only one number 
            codes[index].value='';

            if(index !== 5){
                // codes[index+1].focus();
                setTimeout(()=>codes[index+1].focus(),10);  
            }

        }else if(e.key === "Backspace"){

            if(index !== 0){
                setTimeout(()=>codes[index-1].focus(),10);
            }

        }

    });

});
//INI Js

//formvalidation
function formValidation(){
    let name = document.getElementById('input-name').value;
    console.log(name);

    let email = document.getElementById('input-email').value;
    console.log(email);

    if (name == '' || null){
        alert('Maaf nama anda belum di isi');
    } else {
        prompt("apa benar ini data anda ?", (name));
    }
    
    if (email == ''){
        alert('Maaf email anda belum di isi');
    } else {
        prompt("apa benar ini data anda ?", (email));
    }  

}

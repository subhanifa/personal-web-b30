function submitData(){
    
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let number = document.getElementById('input-number').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    // Bisa menggunaakan cara ini
    // let skillHtml = document.querySelector('#html:checked').value 
    // let skillCss = document.querySelector('#css:checked').value

    // Bisa menggunakan cara ini juga
    // variabel untuk menampung tag checkbox yang di ceklis
    let skillHtml =  document.getElementById('html').checked
    let skillCss =  document.getElementById('css').checked
    let skillJs =  document.getElementById('javaScript').checked
    
    // kondisi untuk mengecek apakah checkbox di ceklis, kalau di ceklis maka tampilkan valuenya
    if (skillHtml) {
        skillHtml = (document.getElementById('html').value);
        
    // jika tidak di ceklis maka tampilkan string kosong 
    } else {
        skillHtml = ""
    } 
    
    if (skillCss) {
        skillCss = (document.getElementById('css').value);
    } else {
        skillCss = ""
    }

    if (skillJs) {
        skillJs = (document.getElementById('javaScript').value);
    } else {
        skillJs = ""
    }

    console.log(name);
    console.log(email);
    console.log(number);
    console.log(subject);
    console.log(message);
    console.log(skillHtml);
    console.log(skillCss);
    console.log(skillJs);




    // condition

    if (name == ''){
        return alert("All Field must be filled")
    } else if (email == '') {
        return alert("All Field must be filled")
    } else if (number == '') {
        return alert("All Field must be filled")
    } else if (subject == '') {
        return alert("All Field must be filled")
    } else if (message == '') {
        return alert("All Field must be filled")
    } 

    let emailReceiver = 'subhanifa@mail.com'

    let a = document.createElement('a')

    a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hello i'm ${name}.%0A${message}, please contact me on ${number}
    %0Aor ${email}. I'm good at ${skillHtml} ${skillCss} ${skillJs}. Thank you.`
    a.click()

    let dataObject = {
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message,
        skillHtml: skillHtml,
        skillCss: skillCss,
        skillJs: skillJs
    }

    console.log(dataObject);

}
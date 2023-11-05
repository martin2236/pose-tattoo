(function main() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('phoneNumber').value;
        const motivo = document.getElementById('selectPerson').value;
        const mensaje = document.getElementById('message').value;

        if (nombre.length > 5 && email.length > 5 && telefono.length > 5 && mensaje.length > 5) {
            var data = {}
            data.cliente = nombre;
            data.email = email;
            data.motivo = motivo;
            data.telefono= telefono;
            data.mensaje = mensaje; 
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (nombre.length > 5 && emailPattern.test(email) && telefono.length > 5 && mensaje.length > 5) {
                enviarEmail(data);
                
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Por favor, verifique el email ingresado.',
                });
              }
          } else {
            Swal.fire({
                title: 'Error!',
                text: 'Todos los campos deben tener más de 5 caracteres y no pueden estar vacíos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
          }
    });
})();

 function enviarEmail (data){
    console.log({data})
    var templateParams = {
        from_name: data.email,
        nombre: data.cliente,
        numero: data.telefono,
        motivo: data.motivo,
        reply_to: data.email,
        mensaje: data.mensaje,
    };

    emailjs.init("HqMBsHVEe2jT92Qlc");
    
    if(data){
        emailjs.send("service_m814u19","template_hm56cqq",templateParams)
        .then(function(response) {
            Swal.fire({
                title: 'email enviado!',
                text: 'Gracias por tu consulta en breve te vamos a contactar.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })

              document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phoneNumber').value = '';
                document.getElementById('selectPerson').selectedIndex = 0;
                document.getElementById('message').value = '';

        }, function(error) {
            Swal.fire({
                title: 'Ups!',
                text: 'Ocurrió un error, por favor intentelo más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
           console.log('FAILED...', error);
        });
       }
 }
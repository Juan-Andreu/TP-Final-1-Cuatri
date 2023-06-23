document.getElementById('myForm').addEventListener('submit', function(value) {
    value.preventDefault();   //Evita el envío del formulario si la validación falla

    // Accedo a los campos del formulario y se muestran los valores en la consola
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;

    console.log('Nombre: ',name);
    console.log('Apellido: ',lastName);
    console.log('Email: ',email);
})



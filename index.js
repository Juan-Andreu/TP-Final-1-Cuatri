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

function agregarTarea() {

    const lista = document.getElementById("lista")
    const textoTarea = document.getElementById("nombreTarea")
    
    const nuevoElem = document.createElement("li")

    // console.log(textoTarea)
    
    nuevoElem.innerHTML = textoTarea.value

    lista.appendChild(nuevoElem)
}

function eliminarTarea() {
    const lista = document.getElementById("lista")
    const textoTarea = document.getElementById("nombreTarea")
    
    // for(let i =0; i < lista.childElementCount; i++) {
    //     console.log(lista.children[i])
    // }

    if (lista.childElementCount > 0){
        lista.removeChild(lista.lastChild)
    }
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario si la validación falla

  // Accedo a los campos del formulario y se muestran los valores en la consola
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log("Nombre: ", name);
  console.log("Apellido: ", lastName);
  console.log("Email: ", email);
  console.log("Password: ", password);
});

/* document.getElementById('myForm'): Obtiene el elemento del documento HTML que tiene el ID 'myForm'. Este elemento representa el formulario en el que se está trabajando.

.addEventListener('submit', function(event) { ... }): Aquí se agrega un "event listener" al formulario. El evento que se está escuchando es el envío del formulario (submit). Cuando ocurre este evento, se ejecuta la función proporcionada. El parámetro event representa el objeto de evento relacionado con el envío del formulario.

event.preventDefault();: Esta línea evita que el formulario se envíe si la validación falla. Al llamar al método preventDefault() en el objeto de evento, se cancela el comportamiento predeterminado del envío del formulario.

let name = document.getElementById('name').value;: Aquí se obtiene el valor del campo de entrada con el ID 'name' y se guarda en la variable name. El método getElementById('name') devuelve el elemento del documento HTML correspondiente al campo de entrada, y luego .value obtiene el valor actual del campo.

let lastName = document.getElementById('lastName').value;: Esto hace lo mismo que el punto anterior, pero para el campo de entrada con el ID 'lastName'.

let email = document.getElementById('email').value;: Aquí se obtiene el valor del campo de entrada con el ID 'email' y se guarda en la variable email.

let password = document.getElementById('password').value;: Esta línea obtiene el valor del campo de entrada con el ID 'password' y se guarda en la variable password. */



function agregarTarea(seccion) {
  // Obtener el valor del campo de entrada de texto correspondiente a la sección
  var inputId = "nombreTarea" + seccion;
  var nuevaTarea = document.getElementById(inputId).value;

  // Crear un nuevo elemento de lista
  var nuevoElemento = document.createElement("li");

  // Agregar el valor del campo de entrada de texto al nuevo elemento de lista
  nuevoElemento.appendChild(document.createTextNode(nuevaTarea));

  // Crear el che    ckbox para la tarea
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "opcion";

  // Agregar el checkbox al final del nuevo elemento de lista
  nuevoElemento.appendChild(checkbox);

  // Obtener la lista correspondiente a la sección
  var listaId = "lista" + seccion;
  var lista = document.getElementById(listaId);

  // Agregar el nuevo elemento de lista a la lista existente
  lista.appendChild(nuevoElemento);

  // Limpiar el campo de entrada de texto
  document.getElementById(inputId).value = "";
}

// Función para eliminar una tarea de la lista
function eliminarTarea(seccion) {
  // Obtener la lista correspondiente a la sección
  let listaId = "lista" + seccion;
  let lista = document.getElementById(listaId);

  // Obtener el primer elemento de lista de la lista
  let primerElemento = lista.getElementsByTagName("li")[0];

  // Verificar si hay un elemento para eliminar
  if (primerElemento) {
    // Eliminar el primer elemento de lista de la lista
    lista.removeChild(primerElemento);
  }
}

const $header = document.querySelector(".header");

/* La función agregarTarea(seccion) recibe un parámetro de sección, obtiene el valor del campo de entrada de texto correspondiente a esa sección, crea un nuevo elemento de lista con el texto de la tarea y un checkbox, y agrega este nuevo elemento a una lista existente en el documento HTML. Luego, se limpia el campo de entrada de texto para permitir la adición de nuevas tareas. */

/* La función eliminarTarea(seccion) recibe un parámetro de sección, obtiene la lista correspondiente a esa sección en el documento HTML, verifica si hay un elemento en la lista y, si existe, elimina el primer elemento de la lista. Esto permite eliminar tareas de la lista de tareas correspondiente a la sección especificada. */
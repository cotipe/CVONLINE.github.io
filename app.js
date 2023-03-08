//variables
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const nombre2 = document.querySelector('#nombre2');
const apellido2 = document.querySelector('#apellido2');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');



//funciones
const datosCv = async () => {
    try {
        const url = "https://randomuser.me/api/?seed=56d27f4a53bd5441"
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];

        console.log(datos);
        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;
        nombre2.textContent = datos.name.first;
        apellido2.textContent = datos.name.last;
        email.textContent = datos.email;
        telefono.textContent = datos.cell;



        
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", datosCv);
//Ejercicio 1
let cursos = [
    { nombre: 'Matemáticas', codigo: 'MAT101', estudiantes: [{ nombre: 'Juan', nota: 7 }, { nombre: 'María', nota: 5 }], profesor: 'Dr. Pérez' },
    { nombre: 'Historia', codigo: 'HIS102', estudiantes: [{ nombre: 'Ana', nota: 8 }, { nombre: 'Luis', nota: 6 }], profesor: 'Dra. Gómez' },
    // Agrega más cursos aquí
    agregarCurso=(nombre,codigo,profesor)=>{
        const nuevoCurso={
            nombre:nombre,
            codigo:codigo,
            profesor:profesor
        }
        cursos.push(nuevoCurso)
    },
    agregarEstudiante=(codCurso,nombre,nota)=>{
        //Buscamos el curso con find
        const curso=cursos.find(curso=>curso.codigo===codCurso)
        //Creamos estudiantee
        const estudiante={nombre:nombre,nota:nota}
        curso.estudiantes.push(estudiante)
    },
    calcularPromedio=(codCurso)=>{
        const curso=cursos.find(curso=>curso.codigo===codCurso)
        if (curso){
            let promedio=0
            curso.estudiantes.forEach(estudiante=>promedio+=estudiante.nota)
            promedio=promedio/curso.estudiantes.length
            return promedio
        }    
    },
    cursosImpartidosPor=(profesor)=>{
        //Filtramos los cursos en los que está el profesor y los asignamos a una vairbale
        const listaCursos=cursos.filter(curso=>curso.profesor===profesor)
        //Imprimimos los cursos
        listaCursos.forEach(curso=>console.log(curso.nombre))
    },
    haAprobado=(estudiante,curso)=>{
        //Buscamos al estudiante y lo asignamos a una variable
        const estudiante=curso.estudiantes.find(estudiante=>estudiante.nombre===estudiante)
        if (estudiante.nota>=6){
            console.log("Aprobo")
        }else{
            console.log("Desaprobo")
        }
    }
];




//Ejercicio 2
let estudiantes = [
    { nombre: 'Juan', nota: 8 },
    { nombre: 'María', nota: 9 },
    { nombre: 'Ana', nota: 7 },
    extraerNombres=()=>{
        const listaNombres=estudiantes.map(estudiante=>estudiante.nombre)
        return listaNombres
    }
];


//Ejercicio 3
let empleados = [
    { nombre: 'Alice', salario: 3000 },
    { nombre: 'Bob', salario: 4000 },
    { nombre: 'Charlie', salario: 5000 },
    aumentarSalario=(porcentaje)=>{
        empleados.forEach(empleado=>{empleado.salario*=(porcentaje/100)
        })
    }
];

//Ejercicio 4
const juanPablo=document.querySelector("ej4")
const nombreCompleto=juanPablo.querySelector("nombre4")
const edad=juanPablo.querySelector("edad")
const titulo=juanPablo.querySelector("titulo")
const ocupacion = juanPablo.querySelector("ocupacion")
let persona={
        nombre: nombreCompleto,
        edad: edad,
        titulo: titulo,
        ocupacion:ocupacion,
        saludar: function(){
            console.log(`Hola soy ${this.nombre} y tengo ${this.edad} tengo titulo de ${this.titulo} y trabajo de ${this.ocupacion}`)
        }
    }

//Ejercicio 5

// Seleccionar el botón y el div con la imagen de fondo
    const botonImg=document.getElementById("cambiar-imagen")
    const imagenFondo=document.getElementById("fondo-imagen")

// Definir las URLs de las imágenes
    const urlImagen1 = 'assets/img/bg-showcase-1.jpg';
    const urlImagen2 = 'assets/img/bg-showcase-3.jpg';
    
// Variable para controlar el estado de la imagen
    let imagenActual = 1;

    const cambiarImagen=()=>{
        if(imagenActual===1){
            imagenFondo.style.backgroundImage = `url('${urlImagen2}')`;
            imagenActual = 2;
        }else{
            imagenFondo.style.backgroundImage= `url('${urlImagen1}')`
        }
    }
    botonImg.addEventListener('click',cambiarImagenFondo)

//Ejercicio 6
let productos = [
    { nombre: 'Camisa', precio: 25 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 60 },
    { nombre: 'Sombrero', precio: 20 }
];


// Función para mostrar productos filtrados
function mostrarProductosFiltrados() {
    // Obtener el valor del input de búsqueda
    const filtro = document.getElementById('searchInput').value.toLowerCase().trim();

    // Filtrar productos según el nombre ingresado
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(filtro));

    // Mostrar productos filtrados en el HTML
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = ''; // Limpiar lista

    if (productosFiltrados.length > 0) {
        productosFiltrados.forEach(producto => {
            // Crear elemento de lista para cada producto
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
            listaProductos.appendChild(li);
        });
    } else {
        // Mostrar mensaje si no hay resultados
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = 'No se encontraron productos.';
        listaProductos.appendChild(li);
    }
}

// Agregar evento al botón de buscar
const btnBuscar = document.getElementById('buscarProducto');
btnBuscar.addEventListener('click', mostrarProductosFiltrados);
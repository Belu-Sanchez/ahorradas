
const descripcionInput = document.getElementById('descripcion-input');
const montoInput = document.getElementById('monto-input');
const tipoOperacion = document.getElementById('tipo-operacion');
const categoriaSelect = document.getElementById('categoria-select')

const sinOperaciones = document.getElementById('sin-operaciones');
const conOperaciones = document.getElementById('con-operaciones');



const agregarOperacionBtn = document.getElementById('agregar-operacion-btn');


const fechaInput = document.getElementById('fecha-input');
const fechaInputFiltro = document.getElementById('input-filtro-fecha');
const panelEditarFechaInput = document.getElementById('panel-editar-fecha-input');

// EDITAR OPERACION
const containerEditarOperacion = document.getElementById('container-editar-operacion');
const panelEditarDescripcionInput = document.getElementById('panel-editar-descripcion-input');
const panelEditarMontoInput = document.getElementById('panel-editar-monto-input');
const panelEditarTipoOperacion = document.getElementById('panel-editar-tipo-operacion');
const panelEditarCategoriaSelect = document.getElementById('panel-editar-categoria-select');
const panelEeditarFechaInput = document.getElementById('panel-editar-fecha-input');
const BtnPanelEditarAgregarOperacion = document.getElementById('panel-editar-agregar-operacion-btn');

// OCULTAR FILTROS


const btnOcultarFiltros = document.getElementById('btn-ocultar-filtros');
const formFiltros = document.getElementById('form-filtros');

btnOcultarFiltros.addEventListener('click', ()=>{
    formFiltros.classList.toggle('oculto');   
})


//NUEVA OPERACION


const btnNvaOperacion = document.getElementById('btn-nueva-operacion');
const primeraPagina = document.getElementById('primera-pagina');
const containerNvaOperacion = document.getElementById('container-nueva-operacion');
const cardOperaciones = document.getElementById('card-operaciones');
const btnAgregar = document.getElementById('btn-agregar');
const btnCancelar = document.getElementById('btn-cancelar');


btnNvaOperacion.addEventListener('click', ()=>{
    primeraPagina.style = 'display:none';
    containerNvaOperacion.style = 'display:block';
    cardOperaciones.style = 'display:none';
    containerReportes.style = 'display:none';
});


btnCancelar.addEventListener('click', ()=>{
    containerNvaOperacion.style = 'display:none';
    primeraPagina.style = 'display:block';
    cardOperaciones.style = 'display:block';
})




//BALANCE


const balance = document.getElementById('balance');

balance.addEventListener('click', ()=>{
    primeraPagina.style = 'display:block';
    cardOperaciones.style = 'display:block';
    containerNvaOperacion.style = 'display: none';
    containerCategorias.style = 'display: none';
    containerReportes.style = 'display:none';

});




//DECLARACION VARIABLES DE CONTAINER DE NUEVA OPERACION

/*
const descripcion = document.getElementById('descripcion');
const monto = document.getElementById('monto');
const tipo = document.getElementById('tipo');
const categoria = document.getElementById('categoria');
const fecha = document.getElementById('fecha');
const btnCancelar = document.getElementById('btn-cancelar');
const btnAgregar= document.getElementById('btn-agregar');
*/

//CATEGORÍAS


const categorias = document.getElementById('categorias');
const containerCategorias = document.getElementById('container-categorias');

categorias.addEventListener('click', ()=>{
     containerCategorias.style = 'display: block';
     containerNvaOperacion.style = 'display:none';
     primeraPagina.style = 'display:none';
     cardOperaciones.style = 'display:none';
     containerReportes.style = 'display:none';
});


//REPORTES

const reportes = document.getElementById('reportes');
const containerReportes = document.getElementById('container-reportes');

reportes.addEventListener('click', ()=>{
    containerReportes.style = 'display:block';
    containerCategorias.style = 'display: none';
    containerNvaOperacion.style = 'display:none';
    primeraPagina.style = 'display:none';
    cardOperaciones.style = 'display:none';

})
//EDITAR OPERACION
const btnPanelEditarCancelar = document.getElementById('panel-editar-btn-cancelar');

btnPanelEditarCancelar.addEventListener('click', () => {
    containerEditarOperacion.style = 'display:none'; 
    containerNvaOperacion.style = 'display:block';
    primeraPagina.style = 'display:block';
    cardOperaciones.style = 'display:block'; 
    containerNvaOperacion.style = 'display:none'; 
})

// *****************
// SELECT FILTRO 
// *****************

 const filtroMonto = [
    'Gasto',
    'Ganancia'
];


const filtroCategorias = [
    'Comida',
    'Salidas',
    'Educación',
    'Transporte',
    'Trabajo'
];

const filtoOrdenar = [
    'Más reciente',
    'Menos reciente',
    'Mayor monto',
    'Menor monto',
    'A/Z',
    'Z/A'
]



// *****************
//    OPERACIONES
// ****************

let operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];

const generarMonto = ()=>{
    const selects = document.getElementsByClassName('select-monto');
    for(let i = 0; i < selects.length; i++){
        const select = selects [i];
        if(select.classList.contains('select-monto-filtro')){
            select.innerHTML ='<option value="Todos">Todos</option>'
        }
        for(let j = 0; j < filtroMonto.length; j++){
            select.innerHTML += `<option value=${filtroMonto[j]}>${filtroMonto[j]}</option>`
        }
    }
}


const generarCategorias = ()=>{
    const selects = document.getElementsByClassName('categorias-select');
    for(let i = 0; i < selects.length; i++){
        const select = selects [i];
        if(select.classList.contains('filtro-categoria')){
            select.innerHTML ='<option value="Todas">Todas</option>'
        }
        for(let j = 0; j < filtroCategorias.length; j++){
            select.innerHTML += `<option value=${filtroCategorias[j]}>${filtroCategorias[j]}</option>`
        }
    }
}


const generarOrdenarOperaciones = ()=>{
    const select = document.getElementById('select-ordenar');
        for(let i = 0; i < filtoOrdenar.length; i++){
            select.innerHTML += `<option value=${filtoOrdenar[i]}>${filtoOrdenar[i]}</option>`
        }
        }
    

const mostrarOperaciones = (arreglo) => {
    if(!arreglo.length){
        sinOperaciones.classList.remove('d-none');
        conOperaciones.classList.add('d-none'); 
    }else{
        sinOperaciones.classList.add('d-none');
        conOperaciones.classList.remove('d-none');
    }
}

agregarOperacionBtn.addEventListener('click', () => {
    if(descripcionInput.value.trim().length === 0 || montoInput.value == 0){
       return
    }
const operacion = {
    id: uuidv4(),
    descripcion: descripcionInput.value,
    monto: montoInput.value,
    tipo: tipoOperacion.value,
    categoria: categoriaSelect.value,
    fecha: fechaInput.value

}
operaciones.push(operacion)

primeraPagina.style = 'display:block';
containerNvaOperacion.style = 'display:none';
cardOperaciones.style = 'display:block';

descripcionInput.value = ''
montoInput.value = 0
tipoOperacion.value = 'Gasto'
categoriaSelect.value = 'Comida'
fechaInput.valueAsDate = new Date()
mostrarOperaciones(operaciones)
localStorage.setItem('operaciones', JSON.stringify(operaciones))
pintarOperaciones(operaciones)

});

const pintarOperaciones = arr =>{
    let str = '';
    arr.forEach((operacion) => {
        const {id, descripcion, categoria, fecha, monto, tipo} = operacion;
        str = str + `<tr>
            <td scope="row">${descripcion}</td>
            <td>${categoria}</td>
            <td>${fecha}</td>
            <td class="fw-bold ${tipo === 'Ganancia'?'ganancia':'gasto'}">$${monto}</td>
            <td><a class="btn-editar text-decoration-none" data-id=${id} href="#">Editar</a>
            <a class="btn-borrar text-decoration-none" data-id=${id} href="#">Borrar</a>
            </td>
        </th>` 
      
    })
    
document.getElementById('tabla-operaciones').innerHTML= str;
const btnEditar = document.querySelectorAll('.btn-editar');


btnEditar.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        console.log('hola')
        containerEditarOperacion.style = 'display:block';
        containerNvaOperacion.style = 'display:none';
        primeraPagina.style = 'display:none';
        cardOperaciones.style = 'display:none';
        const editarOperacion = operaciones.filter(operacion => operacion.id === e.target.dataset.id)
        operacionEditar(editarOperacion)
   })
})

const operacionEditar = arr =>{ 
    arr.forEach((element) =>{
        panelEditarMontoInput.value = element.monto;
        panelEditarDescripcionInput.value = element.descripcion;
        panelEditarTipoOperacion.value = element.tipo;
        panelEditarCategoriaSelect.value = element.categoria;
        panelEeditarFechaInput.value = element.fecha;
        })
    }  
    


const btnBorrar = document.querySelectorAll('.btn-borrar');

btnBorrar.forEach(btn => {
    btn.addEventListener('click', (e) =>{      
    const borradoDeoperacion = operaciones.filter(operacion => operacion.id !== e.target.dataset.id )
    localStorage.setItem('operaciones',JSON.stringify(borradoDeoperacion))
    operaciones = JSON.parse(localStorage.getItem('operaciones'))

    pintarOperaciones(operaciones);
    mostrarOperaciones(operaciones);
})
})
}
pintarOperaciones(operaciones);


const nuevaOperacionpanelEditar = () =>{
    console.log
    BtnPanelEditarAgregarOperacion.addEventListener('click', (e)=> {
    const operacionPanelEditar = {
        id: uuidv4(),
        descripcion: panelEditarDescripcionInput.value,
        monto: panelEditarMontoInput.value,
        tipo: panelEditarTipoOperacion.value,
        categoria: panelEditarCategoriaSelect.value,
        fecha: panelEeditarFechaInput.value  
}

console.log(operacionPanelEditar)

containerEditarOperacion.style = 'display:none';
primeraPagina.style = 'display:block';
containerNvaOperacion.style = 'display:none';
cardOperaciones.style = 'display:block';
mostrarOperaciones(operaciones);



})

}

nuevaOperacionpanelEditar()










const inicializar = () => {
    fechaInput.valueAsDate = new Date ()
    fechaInputFiltro.valueAsDate = new Date ()
    panelEditarFechaInput.valueAsDate = new Date ()
    generarMonto();
    generarCategorias();
    generarOrdenarOperaciones();
    mostrarOperaciones(operaciones);
    pintarOperaciones(operaciones);
}

window.onload = inicializar


// *****************
//   FILTROS
// ****************

const selectTipofiltro = document.getElementById('select-tipo-filtro');

selectTipofiltro.addEventListener('change', e => {
    if(e.target.value !== 'Todos'){
        const arrFiltroTipo = operaciones.filter(operaciones => operaciones.tipo === e.target.value)
        localStorage.setItem('operaciones',arrFiltroTipo)
        localStorage.setItem('operaciones',JSON.stringify(arrFiltroTipo))

        pintarOperaciones(arrFiltroTipo);
    }else{
        pintarOperaciones(operaciones);
    }
})


const filtroCategoria = document.getElementById('filtro-categoria');
const inputFiltroFecha = document.getElementById('input-filtro-fecha');
const selectOrdenar = document.getElementById('select-ordenar');


filtroCategoria.addEventListener('change', e =>{
    if(e.target.value !== 'Todas'){
        const arrFiltroCategoria = operaciones.filter(operaciones => operaciones.categoria === e.target.value)
        localStorage.setItem('operaciones',arrFiltroCategoria)
        localStorage.setItem('operaciones',JSON.stringify(arrFiltroCategoria))

        pintarOperaciones(arrFiltroCategoria);
    }else{
        pintarOperaciones(operaciones);
    }
})



inputFiltroFecha.addEventListener('change', e => {
    console.log(e.target.value)
    if(e.target.valueAsDate !== new Date()){
    const arrFiltroFecha = operaciones.filter(operaciones =>  new Date(operaciones.fecha) > e.target.valueAsDate )
    console.log(operaciones.fecha)
    localStorage.setItem('operacionFecha',arrFiltroFecha)
    localStorage.setItem('operacionFecha',JSON.stringify(arrFiltroFecha))
    pintarOperaciones(arrFiltroFecha);
}else{
  pintarOperaciones(operaciones);
    }

})

operacionFecha= [...operaciones]


// inputFiltroFecha.addEventListener('change', e => {
//     console.log(e.target.valueAsDate)
//     if(e.target.valueAsDate !== new Date()){
//     const arrFiltroFecha= operaciones.filter(operaciones => operaciones.fecha > e.target.valueAsDate)
//     localStorage.setItem('operaciones',arrFiltroFecha)
//     localStorage.setItem('operaciones',JSON.stringify(arrFiltroFecha))
//     pintarOperaciones(arrFiltroFecha);
// }else{
//   pintarOperaciones(operaciones);
//     }

// })

// FILTRO MAS RECIENTE = estan las funciones para cada value,
// falta ver como poner el evento y que cuando se haga change
// en ese value pase tal cosa. y el de monto falta ver como decir
// cuando es - gasto y + ganancia. 
// selectOrdenar.addEventListener('change', e => {
// if(e.target.value === 'Más'){
 
// const arrFiltroMasReciente = operaciones.sort((a, b) => {
//    return (new Date(b.fecha) - new Date(a.fecha))         
// })
// console.log(arrFiltroMasReciente)


// FILTRO MENOS RECIENTE

// const arrFiltroMenosReciente = operaciones.sort((a, b) => {
//     return (new Date(a.fecha) - new Date(b.fecha))       
// })
// console.log(arrFiltroMenosReciente)




// FILTRO MENOR MONTO 
// me falta como decirle si es - gasto o + ganancia

// const arrFiltroMenosMonto = operaciones.sort((a, b) => {
//     return a.monto - b.monto
// })
// console.log(arrFiltroMenosMonto)


// FILTRO DE LA A / Z cambia el objeto oroginal

// const arrFiltroOrdenarAz = operaciones.sort((a, b) => {
//     const descripcionA = a.descripcion.toLowerCase();
//     const descripcionB = b.descripcion.toLowerCase();
//     if(descripcionA < descripcionB){
//         return -1
//   }   
// })
// console.log(arrFiltroOrdenarAz)

// FILTRO DE LA Z / A

// const arrFiltroOrdenarZa = operaciones.sort((a, b) => {
//     const descripcionA = a.descripcion.toLowerCase();
//     const descripcionB = b.descripcion.toLowerCase();
//     if(descripcionA > descripcionB){
//        return -1; 
//     }
// })
// console.log(arrFiltroOrdenarZa)
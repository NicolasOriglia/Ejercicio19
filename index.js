const parrafos = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.section');
const papelera = document.querySelector('.reciclar');

parrafos.forEach(parrafo => {
   parrafo.addEventListener('dragstart', event=>{
    console.log('inicio de arrastre del' + parrafo.innerHTML);
    parrafo.classList.add('dragging');
    event.dataTransfer.setData('id', parrafo.id)
   });

   parrafo.addEventListener('dragend',()=>{
    parrafo.classList.remove('dragging')
   });
});

secciones.forEach(section => {
    section.addEventListener('dragover', event => {
        event.preventDefault();

    });

    section.addEventListener('drop', event=> {
        console.log('drop');
        const id_parrafo = event.dataTransfer.getData('id');
        console.log('parrafo id ' + id_parrafo);
        const parrafo = document.getElementById(id_parrafo);
        section.appendChild(parrafo);
    });
});

papelera.addEventListener('dragover', ev => {
    console.log('dragover');
    ev.preventDefault();
    const id = parrafos.id;

    if (id == 'papelera') {
        return false; 
    }  
});


papelera.addEventListener('drop', ev =>{
    ev.preventDefault();
    elementId = ev.dataTransfer.getData('id');
    ev.target.appendChild(document.getElementById(elementId));
    eliminar(ev);
    console.log('fue eliminado el ' + elementId);
});

function eliminar(ev){
    const elementoId = document.getElementById(ev.dataTransfer.getData('id'));
    elementoId.parentNode.removeChild(elementoId);
}

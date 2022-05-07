//BUSQUEDAS
function Buscar(busqueda, arreglo){
    let encontre =false;
    if(arreglo.indexOf(busqueda) > -1){
        encontre =true;
    }
  return encontre;
}
function BorrarRepetidos(a)
{
    let newArr = [];
    for(let  i=0;i<a.length;i++)
    {
        let elem= a[i];
        if(a.indexOf(elem)=== i)
        {
            //Primera impresión
            newArr.push(elem);
        }
    }
    return newArr;
}
function buscarUsuario(usuarios, usu)
{
        for(let i = 0; i < usuarios.length; i++){
            let unUS = usuarios[i];
        
        if(unUS.usuario === usu ){
            return true;
        }
    }
        return false;
}
//busca y devuelve un usuario
function buscarUsuDevolver(usuarios, usu)
{
    let unUS;
    let retorno;
        for(let i = 0; i < usuarios.length; i++){
             unUS = usuarios[i];
        
        if(unUS.usuario === usu ){
            retorno = unUS.usuario;
            break;
        }
    }
    return retorno;
}
function buscarUsuarioDevolver(usuarios, usu)
{
    let unUS;
    let retorno;
    usu=usu.toLowerCase();
        for(let i = 0; i < usuarios.length; i++){
             unUS = usuarios[i];
             unUS.usuario=unUS.usuario.toLowerCase();
        if(unUS.usuario === usu ){
            retorno = unUS;
            break;
        }
    }
    return retorno;
}//funcion que sirve para buscar ejercicios y resoluciones por su arreglo y su identificador
function buscarUsuDevolverEjercicio(ejercicios, id)
{
    let unEj;
    let retorno;
        for(let i = 0; i < ejercicios.length; i++){
             unEj = ejercicios[i];
        
        if(unEj.id === id ){
            retorno = unEj;
            break;
        }
    }
    return retorno;
}
function buscarPorId(arreglo, id,usuarioAlumno){//esta funcion toma el arreglo de resoluciones y busca la resolucion que tenga el nombre y id puestos 
    let unArreglo;//crea un arreglo
    for (let i = 0; i < arreglo.length; i++) {//recorre
        unArreglo = arreglo[i];//guarda 
        if(unArreglo.id === id && unArreglo.Alumno === usuarioAlumno){//compara id y nobre de alumno
            return unArreglo;//retorna cuando encuentre
        }
    }
}//buscar resoluciones por el id y el usuario del alumno
//VERIFICACIONES
function verificarSubCadena(texto, subcadena)
{
    texto = texto.toLowerCase();
    subcadena = subcadena.toLowerCase();
    if(texto.indexOf(subcadena) === -1){
        return false;
    }
    return true;
}
function PrimeraMayusTodasMinus(tx){
      txNuevo ="";
      tx = tx.toLowerCase();
      let letra = tx.charAt(0);
      let may= letra.toUpperCase();
      for (let i = 1; i < tx.length;i++){
        txNuevo += tx.charAt(i);
       txNuevo.toLowerCase();
     }
       txNuevo = may + txNuevo;
      return txNuevo;
}
function textoObligatorioUsu(tex)
{
    let esValido = false;
    //largo es igual a o o menor a 4 retorna falso
    if(tex.length >=  3)
    {
        esValido = true;
    }
    return esValido;
}
function textoObligatorioNom(tex)
{
    let esValido = false;
    //largo es mayor o igualretorna true
    if(tex.length >=  3)
    {
        esValido = true;
    }
    return esValido;
}
function validar_clave(contrasenia){
    if(contrasenia.length >= 4)//largo de la clave minimo 4
    {		
        let mayuscula = false;
        let minuscula = false;
        let numero = false;
        
        for(let i = 0;i<contrasenia.length;i++)//recorro la misma 
        {
            if(contrasenia.charCodeAt(i) >= 65 && contrasenia.charCodeAt(i) <= 90)
            {
                mayuscula = true;//uso los charcode para saber si tiene mayusculas
            }
            else if(contrasenia.charCodeAt(i) >= 97 && contrasenia.charCodeAt(i) <= 122)
            {
                minuscula = true;//uso los charcode para saber si tiene minusculas
            }
            else if(contrasenia.charCodeAt(i) >= 48 && contrasenia.charCodeAt(i) <= 57)
            {
                numero = true;////uso los charcode para saber si tiene numeros
            }
        }
        if(mayuscula == true && minuscula == true &&  numero == true)//si tiene todo
        {
            return true;//es verdadero
        }
    }
    return false;//si no falso
}
//LOGUEO
function logueoUsuario(usuarios, usu, contr){
        for(let i = 0; i < usuarios.length; i++){
            let unUS = usuarios[i];
         unUS.usuario = unUS.usuario.toLowerCase();
         usu = usu.toLowerCase();
        if(unUS.usuario === usu && unUS.contrasenia === contr){
            return true;
        }
    }
        return false;
}
function alumnosDocenteLogueado(){//ARMA LISTA DE ALUMNOS DEL DOCENTE LOGUEADO (susAlumnos) *esta funcion solo sirve para eso
        susAlumnos=[];
    for (let s = 0; s < usuariosA.length; s++) {  
        let pAlumnos = usuariosA[s];
        if(pAlumnos.docent=== usu) {
           susAlumnos.push(pAlumnos.usuario);//los alumnos del docente logueado
        }
    }
    return susAlumnos;
  }
//ARREGLOS
function arregloSolucionesdeUnEjercicio(arreglodesoluciones, id)
{
    nuevoAr=[];
    for (let i = 0; i < arreglodesoluciones.length; i++) {
        const unS = arreglodesoluciones[i];
        if(unS.id === id){
            nuevoAr.push(unS);
        }
    }
    return nuevoAr;
}
//LIMPIAR Y MOSTRAR REGISTRO
function mostrarA(){
    document.querySelector("#errorA").innerHTML = errorA;
    document.querySelector("#mostrarA").innerHTML = muestra;
}
function ClearA(){
    muestra="";
    errorA="";
    document.querySelector("#errorA").innerHTML = errorA;
    document.querySelector("#mostrarA").innerHTML = muestra;
}
function mostrarD(){
    document.querySelector("#errorD").innerHTML = errorD;
    document.querySelector("#mostrarD").innerHTML = muestraD;
}
function ClearD(){
    errorD="";
    muestraD="";
    document.querySelector("#errorD").innerHTML = errorD;
    document.querySelector("#mostrarD").innerHTML = muestraD;
}
function ejerciciosEntregados(docente){
    let ejerciciosDeElDocente=[];
    let ejerciciosRes=[];
    let un;
    for (let i = 0; i < ejercicios.length; i++) {
        if(docente === ejercicios[i].Docente){
            ejerciciosDeElDocente.push(ejercicios[i]);
        }
    }
    for (let x = 0; x < resoluciones.length; x++) {
         un = resoluciones[x];
        for(let y =0; y< ejerciciosDeElDocente.length; y++){
            if(un.id === ejerciciosDeElDocente[y].id){
                ejerciciosRes.push(ejerciciosDeElDocente[y]);
            }
        }
    }
    ejerciciosRes = BorrarRepetidos(ejerciciosRes)
    return ejerciciosRes;
}            
// ejerciciosDocenteLogueado = ejerciciosEntregados(usu);   
function modificarDevoucion(devol, arregloResolucioes, id, alumno) {
    let unRes;
    for (let i = 0; i < arregloResolucioes.length; i++) {
        unRes = arregloResolucioes[i];
        if (unRes.Alumno === alumno && unRes.id === id) {
            unRes.devolucion = devol;
            break;
        }
    }
}
//--------------------------- OCULTAR LOGUEO ------------------
function ocultarLogueoRegistro() {
    logReg = document.querySelector(".logueoRegistro");
    logReg.style.display = "none";
}
//VOLVER INICIO
function volverLogueoRegistro() {
    document.querySelector(".logueoRegistro").style.display = "block";
    cambiarSeccion("seccionLogueo");
}
function vaciar() {
    document.querySelector("#txtUsuario").value = "";
    document.querySelector("#txtContrasenia").value = "";
}
function vaciarRegistroAlumno() {
    document.querySelector("#txtNomA").value = "";
    document.querySelector("#txtUsuA").value = "";
    document.querySelector("#txtConA").value = "";
}
function vaciarRegistroDocente() {
    document.querySelector("#txtNom").value = "";
    document.querySelector("#txtUsu").value = "";
    document.querySelector("#txtCon").value = "";
}         

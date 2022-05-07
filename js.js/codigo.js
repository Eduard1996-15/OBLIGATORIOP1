//VARIABLES Y ARREGLOS GLOBALES DE TODO EL PROGRAMA
let nom;//nombre
let usu;//usuario
let contra;//cotrasenia
let prof;//nombre profesor
let errorA;//error
let muestra;//mostrar
let usuariosA = [];//lista alumnos
let usuariosD = [];//lista docentes
let ejercicios = [];//lista ejercicios
let resoluciones = []//lista de resoluciones
let unUsuarioD;//undocente
let unUsuarioA;//un alumno
let tipUsu;//tipo de usuario nque se loguea
let unBotonHTML;//boton 
let elEjercicio;
let mens;//mensaje para usuario
let nombreUsuDoc;//nombre del usuario docente logueado
let errorD = "";//mensaje de error
let muestraD = "";//mostrar mensaje
let ejerciciosAlum;//ejercicios de alumno
let mensaje;//mensaje
let resDeEjercicio;//resoucion de ejercicio
let mensajesinohay;//mensaje al usuario
let resoDeAlumno = [];//resoluciones de alumno
let resoluction;//resolucion
let unResolucion = [];//resoluciones
let unRe;//una resolucion
let unE;//ejercicio
let ejD;//ejercicio de docente
let ejerDelDocente = [];//ejercicios del docente
let sms; //mensaje al usuario 
let er;//emensaje de erros
let env = 0;
let totalResoluciones = 0;//total de resoluciones de ejercicio por nivel
let totalEjercicosNivel = 0;//total de ejercicios de un nivel
let nivelUsu; //nivel del alumno
let unAlumno;//cada uno de los que tiene resoluciones
let alumnoConMasRes = [];//el con mas resoluciones
let max = 0;//maximo
let susAlumnos = [];//alumnos por docente
let totalRes = 0;//total resoluciones
let a = [];
let xAlumnos = []; //alumnos
let cadaAlumno;//un alumno
let todosLosAlumnosConRes = [];//alumnos con resolucion
let b = [];
let misAlumnos = [];//alumnos de un docente
let logReg;//logueo registro
let idEjerciciosEnviados = [];//paraguardar el id del ejercicio enviado
let ejerciciosDocenteLogueado = [];//ejercicios docente logueado
let resXAlumno = 0;//resolucion por alumno
let nInicial = 0;//nivel inicial
let nIntermedio = 0;//nivel intermedio
let nAvanzado = 0;//nivel avanzado
let doc;//docente
//-----------------------------------------------------------CLASES-----------------------------------------------------------------
class UsuarioD//DOCENTES
{
    constructor(pNombre, pUsuario, Pcontrasenia) {
        this.nombre = pNombre;
        this.usuario = pUsuario;
        this.contrasenia = Pcontrasenia;
    }
}
class UsuarioA //ALUMNOS
{
    constructor(pNombre, pUsuario, pcontrasenia, profesor, pnivel) {
        this.nombre = pNombre;
        this.usuario = pUsuario;
        this.contrasenia = pcontrasenia;
        this.docent = profesor;
        this.Nivel = pnivel;
    }
    cambiarNivel(nombreusu, nuevoNivel) {
        if (this.usuario === nombreusu) {
            this.Nivel = nuevoNivel;
            return true;
        }
        return false;
    }
}
class Ejercicio//EJERCICIOS
{
    constructor(pid, ptitulo, pimagen, pdescripcion, pnivel, pdocente) {
        this.id = pid;
        this.Titulo = ptitulo;
        this.Imagen = pimagen;
        this.Descripcion = pdescripcion;
        this.Nivel = pnivel;
        this.Docente = pdocente;
    }
}
class Resolucion {//RESOLUCIONES
    constructor(unid, paudio, pdevolucion, alumno) {
        this.id = unid;//vinculacion con la tarea
        this.audio = paudio;//parte del alumno
        this.devolucion = pdevolucion;//parte del docente
        this.Alumno = alumno;//vinculacion con el alumno
    }
}
precargaDocente();
precargaAlumno();
precargaResolucion();
precargaEje();
//---------------------------------------EVENTOS DE CLICK DE TODO EL PROGRAMA--------------------------------------
//REGISTRO Y LOGUEO
document.querySelector("#btnRegistroD").addEventListener("click", RegistroD);//registro docente
document.querySelector("#btnRegistroA").addEventListener("click", RegistroA);//registro alumno
document.querySelector("#btnEntrar").addEventListener("click", Loguearse);//Loguearse
//DOCENTE 
document.querySelector("#btnNivel").addEventListener("click", asignarNivel);//asignar nivel a alumno
document.querySelector("#btnAgregarEjer").addEventListener("click", agregarEjercicio);//agregar un ejercicio
//ESTADISTICAS DOCENTE
document.querySelector("#btnBuscaAlumno").addEventListener("click", listaAlumnosMasEjercicios);//listado de alumno con mas ejercicios
document.querySelector("#btnBuscaCantidad").addEventListener("click", cantidadTotalDeEjerciciosEntregados);
document.querySelector("#btnListarEstadisticas").addEventListener("click", cantidadEjerciciosNivel);
//ALUMNO
document.querySelector("#btnBuscarEjer").addEventListener("click", buscarListarEjercicio);//buscar y mostrar el ejercicio
//------------------------------------------------
//ESTADISTICAS ALUMNO 
document.querySelector("#btnEstadisticaUno").addEventListener("click", porcentaje);
document.querySelector("#btnEstadisticaDos").addEventListener("click", cantidadEjerConDevolucion);
//------------------------------------------------
document.querySelector("#btnVolver").addEventListener("click", volverLogueoRegistro);//volver al inicio
//------------------------------------------- MANEJO INTERFAZ ---------------------------------------------------------
let botonesMenu = document.querySelectorAll(".btnSeccion");
for (let i = 0; i < botonesMenu.length; i++) {
    const boton = botonesMenu[i];
    boton.addEventListener("click", cambiarSeccionClick);
}
function cambiarSeccionClick() {//cambia el id del boton transformarlo
    //en el id de la seccion que quiero mostrar, luego llamo a cambiarSeccion
    let idBoton = this.getAttribute("id"); //"btnSeccionAgregar"
    let idSeccionMostrar = idBoton.charAt(3).toLowerCase() + idBoton.substring(4); //"seccionAgregar"
    cambiarSeccion(idSeccionMostrar);
}
function cambiarSeccion(idSeccion) {//llega id de seccion, oculta el 
    //resto y mustra la que necesito
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        const seccion = secciones[i];
        seccion.style.display = "none";//NO SE VE
    }
    document.querySelector("#" + idSeccion).style.display = "block";//SE VE
}
function mostrarBotones(tipoUsuario) {
    let botones = document.querySelectorAll(".btnSeccion");
    for (let i = 0; i < botones.length; i++) {
        const boton = botones[i];
        boton.style.display = "none";
    }
    let botonesMostrar = document.querySelectorAll("." + tipoUsuario);
    for (let i = 0; i < botonesMostrar.length; i++) {
        const unBoton = botonesMostrar[i];
        unBoton.style.display = "block";
    }
}
//-------------------------------------------PRECARGAS ------------------------------------------------
//-------------------------------PRECARGAS     DOCENTES----------------------------------
function precargaDocente() {
    agregarDocente("Carlos", "carlos", "Ab123");
    agregarDocente("Juan", "juan", "Ab123");
    agregarDocente("Diego", "diego", "Ab123");
    agregarDocente("Santiago", "santiago", "Ab123");
}
function agregarDocente(elNombre, elUsuario, laContrasenia) {
    let valNombre = textoObligatorioNom(elNombre);
    let valUsuario = textoObligatorioUsu(elUsuario);
    let valContrasenia = validar_clave(laContrasenia);
    if (valNombre && valUsuario && valContrasenia) {
        let docenteCarga = new UsuarioD();
        docenteCarga.nombre = elNombre;
        docenteCarga.usuario = elUsuario;
        docenteCarga.contrasenia = laContrasenia;
        usuariosD.push(docenteCarga);
    }
}
//-------------------------------PRECARGAS    ALUMNOS----------------------------------
function precargaAlumno() {
    agregarAlumno("Quike", "quike", "Ab123", "carlos", "Inicial");
    agregarAlumno("Jorge", "Jorje", "Ab123", "juan", "Inicial");
    agregarAlumno("Nego", "nego", "Ab123", "diego", "Inicial");
    agregarAlumno("maria", "maria", "Ab123", "diego", "Inicial");
    agregarAlumno("dario", "dario", "Ab123", "diego", "Inicial");
    agregarAlumno("Peca", "peca", "Ab123", "juan", "Inicial");
    agregarAlumno("bruno", "bruno", "Ab123", "juan", "Inicial");
    agregarAlumno("santi", "santi", "Ab123", "carlos", "Inicial");
    agregarAlumno("glass", "glass", "Ab123", "carlos", "Inicial");
    agregarAlumno("lopp", "lopp", "Ab123", "carlos", "Inicial");
}
function agregarAlumno(elNombre, elUsuario, laContrasenia, elDocente, elNivel) {
    let valNombre = textoObligatorioNom(elNombre);
    let valUsuario = textoObligatorioUsu(elUsuario);
    let valContrasenia = validar_clave(laContrasenia);
    if (valNombre && valUsuario && valContrasenia) {
        let alumnoCarga = new UsuarioA();
        alumnoCarga.nombre = elNombre;
        alumnoCarga.usuario = elUsuario;
        alumnoCarga.contrasenia = laContrasenia;
        alumnoCarga.docent = elDocente;
        alumnoCarga.Nivel = elNivel;
        usuariosA.push(alumnoCarga);
    }
}
//-------------------------------PRECARGAS  -- EJERCICIOS----------------------------------
function precargaEje() {
    //carlos
    agregarEje(1, "Ejecutar en Do menor", "ej1.png", "El ejercicio debe contemplar opciones", "Inicial", "carlos");//CAMBIÉ A INICIAL!!!!
    agregarEje(2, "Establecer ritmos de ocho en ocho", "ej2.png", "Se debe ejecutar solo indicado", "Inicial", "carlos");
    agregarEje(3, "Ritmo latino", "ej3.png", "Puede hacer variantes", "Inicial", "carlos");
    agregarEje(4, "Introduccion a ritmos", "ej4.png", "Se deben realizar variantes", "Inicial", "carlos");
    agregarEje(5, "Primeras notas", "ej5.png", "La ejecucion es libre", "Inicial", "carlos");
    agregarEje(6, "segundas notas", "ej6.png", "La ejecucion es libre", "Inicial", "carlos");
    agregarEje(7, "terceras notas", "ej7.png", "La ejecucion es libre", "Avanzado", "carlos");
    agregarEje(8, "cuartas notas", "ej8.png", "La ejecucion es libre", "Avanzado", "carlos");
    //juan  
    agregarEje(9, "Introduccion a ritmos", "ej7.png", "Se deben realizar variantes", "Inicial", "juan");
    agregarEje(10, "Ritmo dominicano", "ej8.png", "Ejercicio de calecita libre", "Inicial", "juan");
    agregarEje(11, "Ritmo colombiano", "ej1.png", "hacerlo para el lunes sin falta ", "Intermedio", "juan");
    agregarEje(12, "Ritmo africano", "ej2.png", "Ejercicio de ejecucion libre", "Avanzado", "juan");
    agregarEje(13, "Ritmo paraguayo", "ej3.png", "Ejercicio de ejecucion limpia ", "Avanzado", "juan");
    agregarEje(14, "Ritmo uruguayo", "ej4.png", "Ejercicio de ejecucion cerrada en sol", "Inicial", "juan");
    agregarEje(15, "Ritmo brasilero", "ej5.png", "Ejercicio de ejecucion cerrada en do", "Inicial", "juan");
    agregarEje(16, "Ritmo argentino", "ej6.png", "Ejercicio de ejecucion libre", "Inicial", "juan");
    //santiago
    agregarEje(17, "Ritmo electronico", "ej5.png", "tocar y rasguqear", "Inicial", "santiago");
    agregarEje(18, "ejercicio complemetario", "ej5.png", "tocar solo con una mano", "Inicial", "santiago");
    agregarEje(19, "parcial numero 1", "ej9.png", "tocar con sol,do y re", "Inicial", "santiago");
    agregarEje(20, "ejrcicio 4", "ej1.png", "tocar con sol,do y re", "Inicial", "santiago");
    agregarEje(21, "ejercicio 2do semestre", "ej2.png", "tocar con sol,do y re", "Inicial", "santiago");
    agregarEje(22, "ejercicio 3", "ej3.png", "tocar con sol,do y re", "Intermedio", "santiago");
    agregarEje(23, "ejercicio 4", "ej4.png", "tocar con sol,do y re", "Intermedio", "santiago");
    agregarEje(24, "ejercicio 5", "ej5.png", "tocar con sol,do y re", "Intermedio", "santiago");
    //diego
    agregarEje(25, "ejercicio 3 en do mayor", "ej5.png", "tocar con notas negativas", "Inicial", "diego");//entregado
    agregarEje(26, "Ritmo del agua", "ej4.png", "grabarlo y enviarlo en un zip", "Inicial", "diego");//entregado
    agregarEje(27, "cantar y tocar", "ej1.png", "este ejerccio lleva 10 puntos", "Intermedio", "diego");
    agregarEje(28, "grabar con pedalera distorcionada", "ej2.png", "el miercoles 23 pronto", "Intermedio", "diego");
    agregarEje(29, "grabar en acustico", "ej3.png", "Ehacerlo para el martes", "Inicial", "diego");
    agregarEje(30, "grabar en elctro", "ej8.png", "Ehacerlo para el martes", "Inicial", "diego");
    agregarEje(31, "Ritmo distorcionado", "ej9.png", "Ehacerlo para el martes", "Inicial", "diego");
    agregarEje(32, "Ritmo en sol negativo", "ej8.png", "Ehacerlo para el martes", "Inicial", "diego");
    agregarEje(33, "Ritmo a discrecion menos la nota &", "ej6.png", "Ehacerlo para el martes", "Inicial", "diego");
}
sumaId = 33;//id
function agregarEje(elId, elTitulo, laImagen, laDescri, elNivel, elDocente, elResuelto) {
    //if(sumaCaracteres(elTitulo,laDescri)){
    //let valTitulo = elTitulo;
    //let valDescri = laDescri;}
    let valTitulo = elTitulo;
    let valDescri = laDescri;
    if (valTitulo && valDescri) {

        let ejeCarga = new Ejercicio();
        ejeCarga.id = elId;
        ejeCarga.Titulo = valTitulo;
        ejeCarga.Imagen = quitarFakepath(laImagen);
        ejeCarga.Descripcion = laDescri;
        ejeCarga.Nivel = elNivel;
        ejeCarga.Docente = elDocente;
        ejercicios.push(ejeCarga);
    }
}
//------------------------------------PRECARGAS RESOLUCIONES------------------------------------------------
function precargaResolucion() {
    agregarResolu(1, "audios/ej9.m4a", "", "lopp");//sin

    agregarResolu(1, "audios/ej6.m4a", "", "glass");//sin
    agregarResolu(2, "audios/ej4.m4a", "", "glass");//sin 
    agregarResolu(3, "audios/ej5.m4a", "", "glass");//sin

    agregarResolu(9, "audios/ej5.m4a", "", "bruno");//sin
    agregarResolu(10, "audios/ej2.m4a", "", "bruno");//sin

    agregarResolu(26, "audios/ej7.m4a", "", "nego");//sin
    agregarResolu(25, "audios/ej6.m4a", "muy bien nego se supero mucho en en estos meses", "nego");//sin

    agregarResolu(9, "audios/ej9.m4a", "", "peca");//sin
    agregarResolu(10, "audios/ej8.m4a", "", "peca");//sin

    agregarResolu(1, "audios/ej1.m4a", "bien", "santi");//con

    agregarResolu(26, "audios/ej3.m4a", "", "maria");//sin 
    agregarResolu(25, "audios/ej7.m4a", "", "maria");//sin

    agregarResolu(1, "audios/ej4.m4a", "", "quike");//sin
    agregarResolu(2, "audios/ej3.m4a", "", "quike");//sin
    agregarResolu(3, "audios/ej2.m4a", "", "quike");//sin
    agregarResolu(4, "audios/ej1.m4a", "", "quike");//sin
    agregarResolu(5, "audios/ej8.m4a", "", "quike");//sin
    agregarResolu(6, "audios/ej5.m4a", "", "quike");//sin 
}
function agregarResolu(unId, elAudio, laDevolu, elAlumno) {

    let cargaResolu = new Resolucion();
    cargaResolu.id = unId;
    cargaResolu.audio = elAudio;
    cargaResolu.devolucion = laDevolu;
    cargaResolu.Alumno = elAlumno;
    resoluciones.push(cargaResolu);
}
// ------------------------------------------LOGUEO USUARIO --------------------------------------------------
cambiarSeccion("seccionLogueo");
function Loguearse() {
    document.querySelector("#errorLog").innerHTML = "";
    document.querySelector("#mostrarLog").innerHTML = "";
    usu = document.querySelector("#txtUsuario").value;
    contra = document.querySelector("#txtContrasenia").value;
    usu = usu.toLowerCase();
    if (logueoUsuario(usuariosD, usu, contra)) {
        tipUsu = "seccionDocente";
        ListarEjercicios();
        listarAlumnosXdocente(usu);
        listaComparativa(usu);
    }
    else if (logueoUsuario(usuariosA, usu, contra)) {
        recargarEjerciciosResueltos(usu);
        tipUsu = "seccionAlumno";
        listaEjerciciosDeAlumno(usuariosA, usu);
        listaEjerciciosResueltos();
    }
    else {
        errorLog = "<b>Usuario o Clave incorrectos<b>";
        document.querySelector("#errorLog").innerHTML = errorLog;
        vaciar();
        return -1;
    }
    cambiarSeccion(tipUsu);
    vaciar();
    ocultarLogueoRegistro();
}
//carga docentes disponibles para selection
listarDocentesXnombre();
//----------- -------------------------REGISTRO DOCENTE -----------------------------------------------
function RegistroD() {
    nom = document.querySelector("#txtNom").value;
    usu = document.querySelector("#txtUsu").value;
    contra = document.querySelector("#txtCon").value;
    ClearD();
    if ((buscarUsuario(usuariosD, usu)) || (!textoObligatorioNom(nom)) || (!textoObligatorioUsu(usu)) || (!validar_clave(contra))) {
        errorD = "Notas <br> 1) No se pueden repetir los usuarios  <br> 2)Nombre debe contener minimo 2 caracteres <br> 3) Usuario Debe contener minimo 3 caracteres <br>  4) Su clave debe tener al menos una mayuscula una minuscula y un numero";//mensaje al usuario
        mostrarD();
        vaciarRegistroDocente();
        return -1;//no guardo nada espero que usuario vualva ingresar 
    }
    else {
        unUsuarioD = new UsuarioD(nom, usu, contra);
        usuariosD.push(unUsuarioD);
        muestraD = " <b>se ha registrado con exito!!<b>";
        mostrarD();
    }
    vaciarRegistroDocente();
    listarDocentesXnombre();
}
//-------------------------------------REGISTRO ALUMNO-------------------------------------------------
function listarDocentesXnombre() {
    document.querySelector("#slcDocente").innerHTML = "";
    for (let n = 0; n < usuariosD.length; n++) {
        document.querySelector("#slcDocente").innerHTML +=
            ` <option value="${usuariosD[n].usuario}">${usuariosD[n].nombre} "(${usuariosD[n].usuario})"</option><br>`
    }
}
function RegistroA() {
    nom = document.querySelector("#txtNomA").value;
    usu = document.querySelector("#txtUsuA").value;
    contra = document.querySelector("#txtConA").value;
    prof = document.querySelector("#slcDocente").value;
    errorA = "";
    ClearA();
    if ((buscarUsuario(usuariosA, usu)) || (!textoObligatorioNom(nom)) || (!textoObligatorioUsu(usu)) || (!validar_clave(contra))) {
        errorA = "<b> Notas <br> 1) No se pueden repetir los usuarios  <br> 2)Nombre debe contener minimo 2 caracteres <br> 3) Usuario Debe contener minimo 3 caracteres <br>  4) Su clave debe tener al menos una mayuscula una minuscula y un numero<b>";//mensaje al usuario
        mostrarA();
        vaciarRegistroAlumno();
        return -1;//no guardo nada espero que usuario vualva ingresar 
    }
    else {
        unUsuarioA = new UsuarioA(nom, usu, contra, prof, "Inicial");
        usuariosA.push(unUsuarioA);
        muestra = "<b> se ha registrado con exito!!<b>";
        mostrarA();
    }
    vaciarRegistroAlumno();
}
//------------- ----------PERFIL DOCENTE - CAMBIAR NIVEL ALUMNOS ----------------------------------------
function asignarNivel() {
    let niv = document.querySelector("#txtNivel").value;
    let usuA = document.querySelector("#txtVerAlumnos").value;
    for (let i = 0; i < usuariosA.length; i++) {
        if (usuariosA[i].usuario === usuA) {
            let uS = usuariosA[i];
            if ((uS.Nivel === "Inicial") && (niv === "Intermedio") ||
                (uS.Nivel === "Intermedio") && (niv === "Avanzado") ||
                (uS.Nivel === "Inicial") && (niv === "Avanzado")) {
                uS.cambiarNivel(usuA, niv);
                listarAlumnosXdocente(usu);
                listaComparativa(usu);
            }
            else {
                document.querySelector("#errordeAsignacion").innerHTML = "<b> No se puede cambiar a un nivel menor<b>";
                return -1;
            }
        }
    }
}
function listarAlumnosXdocente(nomUsuDocente) {
    document.querySelector("#txtVerAlumnos").innerHTML = "";
    for (let s = 0; s < usuariosA.length; s++) {
        if (usuariosA[s].docent === nomUsuDocente) {
            document.querySelector("#txtVerAlumnos").innerHTML +=
                ` <option value="${usuariosA[s].usuario}">${usuariosA[s].usuario + " Nivel: " + usuariosA[s].Nivel}</option><br>`;
        }
    }
}
//------------- ----------PERFIL DOCENTE - PLANTEAR (AGREGAR) EJERCICIO----------------------------------------
function agregarEjercicio() {
    document.querySelector("#agregado").innerHTML = "";
    let elTitulo = document.querySelector("#txtTituloEjer").value;
    let laImagen = document.querySelector("#fileFotoEjer").value;
    let laDescri = document.querySelector("#txtDescripcion").value;
    let resu = false;
    let niv = document.querySelector("#txtNiv").value;
    if (laImagen === "") {
        document.querySelector("#agregado").innerHTML = "<b>El archivo esta vacio<b>"
        return -1;
    }
    else {
        if (sumaCaracteres(elTitulo, laDescri)) {
            let cargaEjer = new Ejercicio();
            sumaId++;
            cargaEjer.id = sumaId;
            cargaEjer.Titulo = elTitulo;
            cargaEjer.Imagen = quitarFakepath(laImagen);
            cargaEjer.Descripcion = laDescri;
            cargaEjer.Nivel = niv;
            cargaEjer.Docente = usu;
            cargaEjer.resuelto = resu;
            ejercicios.push(cargaEjer);
            mensaje = "El ejercicio se agregó!!";
        }
        else {
            mensaje = "<b>Revise titulo y descripcion <br> notas : <br> minimo 20 caracteres maximo 200 <br> no pueden ser vacios !!<b>";
        }
    }
    document.querySelector("#agregado").innerHTML = mensaje;
    document.querySelector("#txtTituloEjer").value = "";
    document.querySelector("#fileFotoEjer").value = "";
    document.querySelector("#txtDescripcion").value = "";

}
//FUNCION PARA VALIDAR TITULO Y DESCRIPCION DE LOS EJERCICIOS----------------------------------------
function sumaCaracteres(tex1, tex2)//validar ejercicio, titulo y descripcion
{//sumados menor que 200 pero mayor de 20 y cada uno DIFERENTE de 0
    if (((tex1.length + tex2.length) <= 200) && ((tex1.length + tex2.length) >= 20) && (tex1.length != 0) & (tex2.length != 0)) {
        return true;
    }
    return false;
}
function quitarFakepath(pfoto) {//para usar en la interfaz del Docente imagen ejercicio
    let nombreFoto = pfoto.substring(pfoto.lastIndexOf("\\") + 1);
    return nombreFoto
}
//---------------------------DOCENTE LISTAR Y REDACTAR------------------------------------------------------
let Aid;
let Reid;
function ListarEjercicios() {//parametro usuario de logueo
    unResolucion = [];
    ejerDelDocente = [];
    document.querySelector("#tdListarEje").innerHTML = ``;
    sms = "";
    for (let y = 0; y < ejercicios.length; y++) {//recorro los ejercicos
        unE = ejercicios[y];
        //unE.Docente = unE.Docente.toLowerCase();
        if (unE.Docente === usu)//comparo si encuentro un ejercicio que el docente sea igual el docente logueado
        { ejerDelDocente.push(unE); }
    }
    //unResolucion = arregloSolucionesdeUnEjercicio(resoluciones, unE.id);//guardo el arreglo de resoluciones del ejercicio con el id del mismo
    for (let i = 0; i < ejerDelDocente.length; i++) {//recorro las resoluciones
        //unaRe = unResolucion[i];
        ejD = ejerDelDocente[i];
        unResolucion = arregloSolucionesdeUnEjercicio(resoluciones, ejD.id);
        for (let l = 0; l < unResolucion.length; l++) {
            unRe = unResolucion[l];
            if (unRe.devolucion === "") {//si la devoloucion es igual a vacia se listan
                Aid = unRe.Alumno;
                Reid = unRe.id;
                Aid += Reid;
                document.querySelector("#tdListarEje").innerHTML +=
                    `<tr>
                <td><b>${unRe.Alumno}<b></td>
                <td><b>${unRe.id}<b></td>
                <td><audio src="${unRe.audio}" controls ></audio></td>
                <td><textarea type ="text" cols="30" rows="5" id="-${Aid}" class="txtRedactar"></textarea></td>
                <td><input type ="button" value="Enviar" class="btnRedactar"  id="${unRe.id}" data-idEjercicio="${unRe.Alumno}"></td>
                </tr>`;
            }
        }
    }
    let botones = document.querySelectorAll(".btnRedactar");//genero un boton por cada click
    for (let i = 0; i < botones.length; i++) {
        unBotonHTML = botones[i];
        unBotonHTML.addEventListener("click", Redactar);
    }
}
function Redactar() {//el evento de click activa el guardado de lo que esta redactado
    let elId = this.getAttribute("data-idEjercicio");//tomo el id de la fila que seleccione 
    let ide = this.getAttribute("id");
    let ideN = elId + ide;
    let devo = document.querySelector("#-" + ideN).value;
    if (devo === "") {
        document.querySelector("#sms").innerHTML = "No se puede enviar vacia la redacción del ejercicio";
        return -1;
    }
    if (textoObligatorioUsu(devo)) {
        ide = Number(ide);
        modificarDevoucion(devo, resoluciones, ide, elId);//capturo la resolucion con el id y nombre de esa fila 
        ejerDelDocente = [];
        ListarEjercicios();
        cantidadTotalDeEjerciciosEntregados()
        sms = `<b>* Enviado ${elId} <b><br>`;//guardo en la propiedad devlucion lo que escriba el docente
        er = "";
    }
    document.querySelector("#sms").innerHTML = sms;
}
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
//PERFIL ALUMNO - --------------------------------------------------------------
function listaEjerciciosDeAlumno(usuariosA, usu) {//LISTA SUS EJERCICIOS A RESOLVER Y ENTREGAR - ALUMNO
    document.querySelector("#tbllistaEjercicios").innerHTML = "";
    let elAlum = buscarUsuarioDevolver(usuariosA, usu);
    for (let i = 0; i < ejercicios.length; i++) {
        ejerciciosAlum = ejercicios[i];
        if (ejerciciosAlum.Docente === elAlum.docent && ejerciciosAlum.Nivel === elAlum.Nivel && idEjerciciosEnviados.indexOf(ejerciciosAlum.id) < 0) {
            document.querySelector("#tbllistaEjercicios").innerHTML +=
                `<tr>
                <td><b>${ejerciciosAlum.id}<b></td>
                 <td><b>${ejerciciosAlum.Titulo}<b></td>
                 <td><b>${ejerciciosAlum.Descripcion}<b></td>
                 <td><img width="200" src="img/${ejerciciosAlum.Imagen}" ></td>
                 <td><input type="file" id="archivoA${ejerciciosAlum.id}" class="arch"></td>
                 <td><input type ="button" value="Enviar" class="btnEnviar" id="A${ejerciciosAlum.id}" data-idEjercicioAlumo="${ejerciciosAlum.id}"></td>
                </tr>`;
        }
    }
    let botones = document.querySelectorAll(".btnEnviar");//genero un boton por cada click
    for (let i = 0; i < botones.length; i++) {
        const BotonHTML = botones[i];
        BotonHTML.addEventListener("click", Enviar);
    }
    mensaje = "";
    document.querySelector("#noEncont").innerHTML = mensaje;
}
function Enviar() {//el evento de click activa el guardado de lo que esta subido
    document.querySelector("#noEncont").innerHTML = "";
    let elEjeAEnv = Number(this.getAttribute("data-idEjercicioAlumo"));//devuelve el numero de id del ejercicio en el que si hizo CLICK
    let audio = document.querySelector("#archivoA" + elEjeAEnv).value;
    audio = "audios/" + audio.substring(12);
    if (audio === "audios/") {
        document.querySelector("#noEncont").innerHTML = "<b>* No hay archivo cargado</b>";
        return -1;
    } else {
        let solu = new Resolucion(elEjeAEnv, audio, "", usu);
        for (let i = 0; i < ejercicios.length; i++) {
            let elEjercioEnviar = ejercicios[i];
            if (elEjeAEnv === elEjercioEnviar.id) {
                idEjerciciosEnviados.push(elEjercioEnviar.id);
                break;
            }
        }
        resoluciones.push(solu);
        mensaje = "<b>* Enviado</b>";
        listaEjerciciosResueltos();
        listaEjerciciosDeAlumno(usuariosA, usu);
        porcentaje();
    }
    document.querySelector("#noEncont").innerHTML = mensaje;
}
//PERFIL ALUMNO - BUSCAR LISTAR-------------------------------------------------------------------------
function buscarListarEjercicio() {//BUSCAR DENTRO DE LOS EJERCICIOS A RESOLVER Y ENTREGAR
    document.querySelector("#tblEjercicios").innerHTML = "";
    let busqueda = document.querySelector("#txtTextoBusqueda").value;
    let alum = buscarUsuarioDevolver(usuariosA, usu);
    mensajesinohay = "";
    for (let i = 0; i < ejercicios.length; i++) {
        elEjercicio = ejercicios[i];
        if (elEjercicio.Docente === alum.docent && elEjercicio.Nivel === alum.Nivel && idEjerciciosEnviados.indexOf(elEjercicio.id) < 0) {
            if (verificarSubCadena(elEjercicio.Titulo, busqueda)) {
                document.querySelector("#tblEjercicios").innerHTML +=
                    `<tr>
            <td><b>${elEjercicio.id}<b></td>
             <td><b>${elEjercicio.Titulo}<b></td>
             <td><b>${elEjercicio.Descripcion}<b></td>
             <td><img width="200" src="img/${elEjercicio.Imagen}" ></td>
             <td><input type="file" id="archivoB${elEjercicio.id}" class="archivo"></td>
             <td><input type ="button" value="Enviar" class="btnEnviarBuscar" data-idEjercicioAlum="${elEjercicio.id}"></td>
            </tr>`;
            } else if (verificarSubCadena(elEjercicio.Descripcion, busqueda)) {
                document.querySelector("#tblEjercicios").innerHTML +=
                    `<tr>
            <td><b>${elEjercicio.id}<b></td>
             <td><b>${elEjercicio.Titulo}<b></td>
             <td><b>${elEjercicio.Descripcion}<b></td>
             <td><img width="200" src="img/${elEjercicio.Imagen}" ></td>
             <td><input type="file" id="archivoB${elEjercicio.id}" class="archivo"></td>
             <td><input type ="button" value="Enviar" class="btnEnviarBuscar" data-idEjercicioAlum="${elEjercicio.id}"></td>
            </tr>`;
            }
        } else {
            mensajesinohay = "No hay resultados que coincidan con su busqueda";
        }
    }



    let botones = document.querySelectorAll(".btnEnviarBuscar");//genero un boton por cada click
    for (let i = 0; i < botones.length; i++) {
        const BotonHTML = botones[i];
        BotonHTML.addEventListener("click", EnviarBuscar);
    }
    document.querySelector("#noEncontrado").innerHTML = mensajesinohay;
}
function EnviarBuscar() {//el evento de click activa el guardado de lo que esta subido
    let elEjeAEnvBus = Number(this.getAttribute("data-idEjercicioAlum"));//devuelve el numero de id del ejercicio en el que si hizo CLICK
    let audio = document.querySelector("#archivoB" + elEjeAEnvBus).value;
    audio = "audios/" + audio.substring(12);
    if (audio === "audios/") {
        document.querySelector("#noEncontrado").innerHTML = "<b>* No hay archivo cargado<b>";
        return -1;
    } else {
        let solu = new Resolucion(elEjeAEnvBus, audio, "", usu);
        for (let i = 0; i < ejercicios.length; i++) {
            let elEjercioEnviar = ejercicios[i];
            if (elEjeAEnvBus === elEjercioEnviar.id) {
                idEjerciciosEnviados.push(elEjercioEnviar.id);
                break;
            }
        }
        resoluciones.push(solu);
        mensajesinohay = "* Enviado";
        listaEjerciciosResueltos();
        listaEjerciciosDeAlumno(usuariosA, usu);
        buscarListarEjercicio();
        porcentaje();
    }

    document.querySelector("#noEncontrado").innerHTML = mensajesinohay;
}
//PERFIL ALUMNO - LISTA LOS EJERCICIOS QUE YA RESOLVIÓ-------------------------------------------------------------------------
function listaEjerciciosResueltos() {// LISTA LOS EJERCICIOS QUE YA RESOLVIÓ
    document.querySelector("#listaEjercicios").innerHTML = "";
    let devolucion = "";
    let elAlum = buscarUsuarioDevolver(usuariosA, usu);//busco usuraio
    for (let i = 0; i < ejercicios.length; i++) {
        const ejerciciosAlu = ejercicios[i];//comparo quye sean ejercicios del su docente que tenga su nivel y que ya esten resultos
        devolucion = buscarDevolucionesEjercicios(ejerciciosAlu.id, usu);
        if(devolucion === ""){devolucion = "sin Devolucion";}
            if ((ejerciciosAlu.Docente === elAlum.docent) && (ejerciciosAlu.Nivel === elAlum.Nivel) && (idEjerciciosEnviados.indexOf(ejerciciosAlu.id) > -1)) {
                document.querySelector("#listaEjercicios").innerHTML +=
                    `<tr><td><b>${ejerciciosAlu.id}</b></td><td><b>${ejerciciosAlu.Titulo}</b></td><td><b>${ejerciciosAlu.Descripcion}</b></td>
                   <td><img width="200" src="img/${ejerciciosAlu.Imagen}" ></td><td>${devolucion}</td>
                  </tr>`;
                mensajesinohay = "";
            }
    }
    if (idEjerciciosEnviados.length === 0) {
        mensajesinohay = "<b>No tiene ejercicios Resueltos</b>";
    }
    document.querySelector("#smsSinoHay").innerHTML = mensajesinohay;
}
//--------------------ESTADISTICAS DOCENTE ------------------------------------------------
//----------------- LISTA DE ALUMNOS CON MAS EJERCICIOS RESUELTOS -------------------------
function listaAlumnosMasEjercicios() {
    max = 0;//agregado despues de entrega ya que el programa sigue con este numero 
    alumnoConMasRes = [];
    document.querySelector("#txtlosAlumnos").innerHTML = "";
    losAlumnos = alumnosDocenteLogueado();
    for (let j = 0; j < losAlumnos.length; j++) {//recorro array de los alumnos del docente logueado
        for (let i = 0; i < resoluciones.length; i++) {//recorro el array resoluciones
            if (losAlumnos[j] === resoluciones[i].Alumno) {//COMPARO ELEMENTO DE LOS DOS ARRAY
                unAlumno = resoluciones[i].Alumno;//TOMO EL ELEMENTO QUE COINCIDE
                totalRes++
                if (totalRes >= max) {//COMPARA PARA "MAYOR" NO ESTA QUEDANDO PARA LOS QUE TIENE IGUAL CANTIDAD DE RESOLUCIONES
                    alumnoConMasRes.push(unAlumno);
                    max = totalRes;
                }
            }
        }
        totalRes = 0;
    }
    a = BorrarRepetidos(alumnoConMasRes);
    for (let k = 0; k < a.length; k++) {
        document.querySelector("#txtlosAlumnos").innerHTML += `<br><b>* ${a[k]}<br><b>`;
    }
}
// ----------------- MOSTRAR CANTIDAD DE EJERCICIOS ENTREGADOS --------------------------------
function cantidadTotalDeEjerciciosEntregados() {
    todosLosAlumnosConRes.splice(0);
    xAlumnos.splice(0);
    xAlumnos = alumnosDocenteLogueado();
    for (let j = 0; j < xAlumnos.length; j++) {//recorro array de los alumnos del docente logueado
        for (let i = 0; i < resoluciones.length; i++) {//recorro el array resoluciones
            if (xAlumnos[j] === resoluciones[i].Alumno && resoluciones[i].devolucion === "") {
                cadaAlumno = resoluciones[i].Alumno;//TOMO EL ELEMENTO QUE COINCIDE
                todosLosAlumnosConRes.push(cadaAlumno);
            }
        }
    }
    document.querySelector("#txtCantidadEjerciciosRes").innerHTML = `<br><b> ${todosLosAlumnosConRes.length}<b><br>`;
}
//-----------------LISTA COMPARATIVA POR ALUMNO- TOTAL EJERCICIOS NIVEL - ENTREGADOS ---------------
function listaComparativa(nomUsuDocente) {//ARMA DESPLEGABLE CON SUS ALUMNOS Y EL NIVEL DE CADA UNO
    document.querySelector("#txtSusAlumnos").innerHTML = "";
    document.querySelector("#totalEjerciciosNivel").innerHTML = "";
    for (let s = 0; s < usuariosA.length; s++) {
        if (usuariosA[s].docent === nomUsuDocente) {
            //misAlumnos.push(usuariosA[s]);//array de sus alumnos
            document.querySelector("#txtSusAlumnos").innerHTML +=
                ` <option value="${usuariosA[s].usuario}">${usuariosA[s].usuario + " Nivel: " + usuariosA[s].Nivel}</option><br>`;
        }
    }
}
function cantidadEjerciciosNivel() {
    ejerciciosDocenteLogueado = [];
    resXAlumno = 0;
    nInicial = 0;
    nIntermedio = 0;
    nAvanzado = 0;
    //VALOR variable unAlumno sale del desplegable
    let unAlumno = document.querySelector("#txtSusAlumnos").value;
    let alumni = buscarUsuarioDevolver(usuariosA, unAlumno);
    let nivelAlumno = alumni.Nivel;
    for (let i = 0; i < ejercicios.length; i++) {
        let nivelEje = ejercicios[i].Nivel;
        if (ejercicios[i].Docente === usu) {
            if (nivelAlumno === "Inicial" && nivelEje === "Inicial") {
                nInicial++;
                document.querySelector("#totalEjerciciosNivel").innerHTML = `<br><b>* Cantidad ejercicios Iniciales planteados : ${nInicial}<b><br>`;
            } else if (nivelAlumno === "Intermedio" && nivelEje === "Intermedio") {
                nIntermedio++;
                document.querySelector("#totalEjerciciosNivel").innerHTML = `<br><b>* Cantidad ejercicios Intermedios planteados :${nIntermedio}<b><br>`;
            }
            else if (nivelAlumno === "Avanzado" && nivelEje === "Avanzado") {
                nAvanzado++;
                document.querySelector("#totalEjerciciosNivel").innerHTML = `<br><b>* Cantidad ejercicios Avanzados planteados :${nAvanzado}<b><br>`;
            }
        }
    }
    if (nInicial === 0 && nIntermedio === 0 && nAvanzado === 0) {
        document.querySelector("#totalEjerciciosNivel").innerHTML = `<b>* No hay ejercicios planteados para nivel :${nivelAlumno}<b>`;
    }
    for (let j = 0; j < resoluciones.length; j++) {
        let cAlumno = resoluciones[j].Alumno;

        if (cAlumno === unAlumno) {
            resXAlumno++
            document.querySelector("#totalResueltosAlumno").innerHTML = `<br><b>* El alumno ${unAlumno} resolvió ${resXAlumno} ejercicios <b><br>`;
        }
    }
}
//ESTADISTICAS ALUMNO ESTADISTICAS ALUMNO ESTADISTICAS ALUMNO ESTADISTICAS ALUMNO ESTADISTICAS ALUMNO 
function porcentaje() {// porcentaje de ejercicios que ha resueltos segun su nivel planteados por su docente
    for (let i = 0; i < resoluciones.length; i++) {
        if (resoluciones[i].Alumno === usu) {
            totalResoluciones++//cuento las resouciones
        }
    }
    let alumnoBuscado = buscarUsuarioDevolver(usuariosA, usu);//se cambio por que tenia un for innesesario
    nivelUsu = alumnoBuscado.Nivel;
    doc = alumnoBuscado.docent;
    for (let z = 0; z < ejercicios.length; z++) {
        if (ejercicios[z].Nivel === nivelUsu && ejercicios[z].Docente === doc)
            totalEjercicosNivel++;
    }
    let porcentaje = Math.floor((totalResoluciones * 100) / totalEjercicosNivel);
    document.querySelector("#porcentaje").innerHTML = `<br><b>* El alumno ${usu} resolvió ${porcentaje} % de los ejercicios <b><br>`;
}
function cantidadEjerConDevolucion() {// Ejercicos resueltos CON devolucion -- Ejercicios resueltos SIN devolucion.
    document.querySelector("#pSinDevolucion").innerHTML = "";
    document.querySelector("#pConDevolucion").innerHTML = "";
    let cantConDevolucion = 0;
    let cantSinDevolucion = 0;
    let esa = "";
    for (let i = 0; i < resoluciones.length; i++) {
        //let pResol = resoluciones[i].Alumno;
        if (resoluciones[i].Alumno === usu) {
            if (resoluciones[i].devolucion !== "") {
                cantConDevolucion++;
            }
            if (resoluciones[i].devolucion === "") {
                cantSinDevolucion++;
                esa += resoluciones[i].id + ",";
                document.querySelector("#pSinDevolucion").innerHTML = `<b>* ${usu} no ha recibido devolucion en ${cantSinDevolucion} ejercicios <br> * los cuales sus identificadores son: ${esa}<b><br>`;
            }
        }
    }
    if (cantConDevolucion === 0) {
        document.querySelector("#pConDevolucion").innerHTML = `<b>* ${usu} ha recibido ${cantConDevolucion} devoluciones <b>`;
    }

}
function recargarEjerciciosResueltos(usu) {
    idEjerciciosEnviados = [];
    for (let s = 0; s < resoluciones.length; s++) {
        resoluction = resoluciones[s];//recorro resouicione spara ver cuales son de ese alumno
        if (resoluction.Alumno === usu) {
            idEjerciciosEnviados.push(resoluction.id);
        }
    }
}

//devolucion = buscarDevolucionesEjercicios(ejercici.id, usu);
// if(devolucion !== ""){


function buscarDevolucionesEjercicios(id, al) {
    //buscar ejercicios resueltos con devolucion por su id
    for (let i = 0; i < resoluciones.length; i++) {
        if (resoluciones[i].id === id && resoluciones[i].Alumno === al) {
            return resoluciones[i].devolucion;
        }
    }
}


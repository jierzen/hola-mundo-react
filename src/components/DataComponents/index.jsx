//Links del Navbar con dropdown
export const linkData = [
    { name: 'Inicio', url: '/' },
    { name: 'Acerca de', url: '/about' },
    { name: 'Servicios', url: '/services', dropdown: [
        { name: 'Consultoría', url: '/services/consulting' },
        { name: 'Desarrollo', url: '/services/development' }
        //agregar aca mas links para el dropdown
    ]},
    { name: 'Contacto', url: '/contact' },
    { name: 'FAQ', url: '/faq' }
];

//Fecha de hoy
const weekday = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
const monthName = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
const date = new Date();
export let currentDate = weekday[date.getDay()] + ', ' + date.getDate() +' de ' +monthName[date.getMonth()] + ' de ' + date.getFullYear();

//Datos de las card
export const cardData =[
{title:'Mi primera Card',
    imgUrl: 'https://media.istockphoto.com/id/1483119031/es/foto/un-girav-escondido-detr%C3%A1s-de-una-acacia.jpg?s=1024x1024&w=is&k=20&c=Je0vOCq_M2Ob_iLOXShIQjLS0Bh3QCfO7ECdbNUjA38=',
    description: 'Jirafas en el africa occidental, ven a descubrir la aventura del safary',
    variant: 'danger',
    txtBtn: 'Ver',
    bgColor: 'bg-dark text-white',
    widthCard: '15rem'
    },
    {title:'Mi segunda Card',
    imgUrl: 'https://media.istockphoto.com/id/1483119031/es/foto/un-girav-escondido-detr%C3%A1s-de-una-acacia.jpg?s=1024x1024&w=is&k=20&c=Je0vOCq_M2Ob_iLOXShIQjLS0Bh3QCfO7ECdbNUjA38=',
    description: 'Jirafas en el africa occidental, ven a descubrir la aventura del safary',
    variant: 'primary',
    txtBtn: 'Guardar',
    bgColor: 'bg-white text-dark',
    widthCard: '20rem'
    },
    {title:'Mi tercera Card',
    imgUrl: 'https://media.istockphoto.com/id/1483119031/es/foto/un-girav-escondido-detr%C3%A1s-de-una-acacia.jpg?s=1024x1024&w=is&k=20&c=Je0vOCq_M2Ob_iLOXShIQjLS0Bh3QCfO7ECdbNUjA38=',
    description: 'Jirafas en el africa occidental, ven a descubrir la aventura del safary',
    variant: 'success',
    txtBtn: 'Navegar',
    bgColor: 'bg-success text-white',
    widthCard: '35rem'
    }
]

export const alertData = [
    {variant:'danger',msg:'Alerta danger para redireccionar a',url:'https://www.google.com/',txtUrl:'Google'},
    {variant:'warning',msg:'Alerta warning para redireccionar a',url:'https://www.google.com/',txtUrl:'Google'},
    {variant:'success',msg:'Alerta success para redireccionar a',url:'https://www.google.com/',txtUrl:'Google'},
    {variant:'primary',msg:'Alerta primary para redireccionar a',url:'https://www.google.com/',txtUrl:'Google'}

]

export const buttonData = [
    {variant:'primary', txtBtn:'Boton primary'},
    {variant:'secondary', txtBtn:'Boton secondary'},
    {variant:'success', txtBtn:'Boton success'},
    {variant:'warning', txtBtn:'Boton warning'},
    {variant:'danger', txtBtn:'Boton danger'},
    {variant:'info', txtBtn:'Boton info'}
]

export const tableData = {
    columns:["#","Nombre","Apellido","RUT","Celular","Correo", "COL_X"],
    rows:[
        {id:1,firstName: "Mark", lastName:"Otto", dni:"15.678.900-K",phone:"+569 4345 8891",email:"mark.otto@gmail.com"},
        {id:2,firstName: "Jacob", lastName:"Greyd", dni:"8.013.534-5",phone:"+569 7000 3461",email:"jacgreyd@hotmail.com"},
        {id:4,firstName: "Larry", lastName:"Rethus", dni:"23.114.566-1",phone:"+569 9103 4691",email:"rethuslarry@gmail.com", algo:'algo'},
        {id:6,firstName: "Fergus", lastName:"Vuue", dni:"9.619.941-9",phone:"+569 5613 6789"}
    ],
}

export const modalWarningData = {bgColor:'bg-danger text-white',modalHeading:'Titulo Danger Modal',modalTxt:'Texto de relleno del modal de danger'};

export const modalPrimaryData = {bgColor:'bg-primary text-white',modalHeading:'Titulo Primary Modal',modalTxt:'Texto de relleno del modal de primary'};

export const userSession = {
    logeado: true,
    name: 'Jorge Espinoza',
    email: 'jorge.esp.ram@example.com'
};

export const formDataExample = {
    button:["Guardar","/save"],
    formTitle:"Titulo de Ejemplo",
    form:
    [
        {element:'input', type:'text', required:false, placeholder:'ingrese su nombre'},
        {element:'input', type:'number', required:false, placeholder:'ingrese su edad'},
        {element:'input', type:'text', required:false, placeholder:'ingrese su correo'},
        {element:'datepicker', required:false, placeholder:'ingrese la fecha'},
        {element:'selector', required:false, placeholder:'ingrese su pais', values:[["Chile",0],["Peru",1],["Argentina",2]]},
        {element:'checkbox', required:true, placeholder:'esta de acuerdo con las normas?'}
    ]
}
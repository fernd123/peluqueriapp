// URLS
// local: 'http://localhost:8080/api'
// heroku: 'https://peluqueriapp-mysql.herokuapp.com/api'

export const environment = {
  production: false,
  urlEndPoint: 'https://peluqueriapp-mysql.herokuapp.com/api',

  //General
  ok: 'OK',
  loading: 'Cargando...',
  incorrectcredentials: 'Usuario y/o contraseña incorrecto(s)',
  save: 'Guardar',
  book: 'Reservar',
  confirm: 'Confirmar',
  days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  orange: "orange",

  //Employee
  successEmployeeCreated: 'Empleado creado con éxito',
  successEmployeeUpdated: 'Empleado actualizado con éxito',
  successEmployeeRemoved: 'Empleado eliminado con éxito',
  newEmployeeAction: 'Alta Empleado',
  newEmployeeTitle: 'Nuevo Empleado',
  editEmployeeTitle: 'Editar Empleado',


  //Company Data
  companyDataTitle: 'Datos de la Empresa',
  newCompanyTitle: 'Nueva Información de la Empresa',
  editCompanyTitle: 'Editar Información Empresa: ',
  successCompanyCreated: 'Información de empresa guardada con éxito',
  successCompanyRemoved: 'Información de empresa eliminada con éxito',

  //Service Data
  serviceDataTitle: 'Servicio',
  newServiceTitle: 'Nuevo Servicio',
  editServiceTitle: 'Editar Servicio: ',
  successServiceCreated: 'Servicio guardado con éxito',
  successServiceRemoved: 'Servicio eliminado con éxito',

  //Appointments
  successAppointmentGenerated: 'Citas generadas con éxito',
  generatingAppointments: 'Generando citas...',
  searchingAvaiableAppointments: 'Buscando citas disponibles...',
  titleBookAppointment: 'Confirmar cita',
  confirmationBookAppointment: '¿Estás seguro que quieres reservar la cita?',
  customerAppointmentHistoryTitle: "Historial de citas"

};
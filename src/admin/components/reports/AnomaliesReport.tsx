import './AnomaliesReport.css'

const anomalies: string[] = [
    "Error al cargar la lista de lanchas disponibles. Por favor, intenta de nuevo más tarde.",
    "La reserva de tu viaje no se completó correctamente. Revisa los detalles y vuelve a intentarlo.",
    "Se ha producido un problema con la ubicación de salida. Asegúrate de seleccionar una ubicación válida.",
    "La plataforma no responde. Verifica tu conexión a internet e inténtalo de nuevo.",
    "Hemos detectado un problema con la facturación. Ponte en contacto con nuestro servicio de atención al cliente.",
    "La actualización de la ubicación en tiempo real no está disponible en este momento. Vuelve a intentarlo más tarde.",
    "El sistema de notificaciones no funciona. Estaremos trabajando en resolver este problema.",
    "Se ha producido un error inesperado. Por favor, informa al equipo técnico sobre este problema.",
    "La disponibilidad de lanchas para esta ruta es limitada. Te recomendamos reservar con anticipación.",
    "Algo salió mal al calcular la tarifa del viaje. Revisa la información ingresada y prueba nuevamente.",
];

export const AnomaliesReport = () => {
    return (
        <div className="user-manager">
            <h1>Anomalías reportadas la úlima semana</h1>
            <div className="container">
                {anomalies.map(anomalie => <div className="card-anomalie">{anomalie}</div>)}
            </div>
        </div>
    )
}


export interface User {
    username: string
    firstname: string
    lastname: string
    role: 'Pasajero' | 'Lanchero' | 'Vendedor' | 'Administrador'
    approved: boolean
}

export const users: User[] = [
    {
        username: 'jrodriguez',
        firstname: 'José',
        lastname: 'Rodríguez',
        role: 'Pasajero',
        approved: false
    },
    {
        username: 'mlopez',
        firstname: 'María',
        lastname: 'López',
        role: 'Vendedor',
        approved: true
    },
    {
        username: 'pgarcia',
        firstname: 'Pedro',
        lastname: 'García',
        role: 'Lanchero',
        approved: false
    },
    {
        username: 'lramirez',
        firstname: 'Luis',
        lastname: 'Ramírez',
        role: 'Administrador',
        approved: true
    },
    {
        username: 'jgutierrez',
        firstname: 'Jorge',
        lastname: 'Gutiérrez',
        role: 'Pasajero',
        approved: false
    },
    {
        username: 'srojas',
        firstname: 'Sandra',
        lastname: 'Rojas',
        role: 'Vendedor',
        approved: true
    },
    {
        username: 'gmoreno',
        firstname: 'Gloria',
        lastname: 'Moreno',
        role: 'Lanchero',
        approved: false
    },
    {
        username: 'btorres',
        firstname: 'Blanca',
        lastname: 'Torres',
        role: 'Administrador',
        approved: true
    },
    {
        username: 'rortiz',
        firstname: 'Rosa',
        lastname: 'Ortiz',
        role: 'Pasajero',
        approved: false
    },
    {
        username: 'cdiaz',
        firstname: 'Carmen',
        lastname: 'Díaz',
        role: 'Vendedor',
        approved: true
    },
    {
        username: 'jcastro',
        firstname: 'Jesús',
        lastname: 'Castro',
        role: 'Lanchero',
        approved: false
    },
    {
        username: 'jmorales',
        firstname: 'Jhon',
        lastname: 'Morales',
        role: 'Administrador',
        approved: true
    },
    {
        username: 'dgonzalez',
        firstname: 'Diana',
        lastname: 'González',
        role: 'Pasajero',
        approved: false
    },
    {
        username: 'osanchez',
        firstname: 'Oscar',
        lastname: 'Sánchez',
        role: 'Vendedor',
        approved: true
    },
    {
        username: 'mmartinez',
        firstname: 'Manuel',
        lastname: 'Martínez',
        role: 'Lanchero',
        approved: false
    },
    {
        username: 'mvargas',
        firstname: 'Martha',
        lastname: 'Vargas',
        role: 'Administrador',
        approved: true
    },
    {
        username: 'lmoreno',
        firstname: 'Luz',
        lastname: 'Moreno',
        role: 'Pasajero',
        approved: false
    },
    {
        username: 'agomez',
        firstname: 'Ana',
        lastname: 'Gómez',
        role: 'Vendedor',
        approved: true
    },
    {
        username: 'cramirez',
        firstname: 'Carlos',
        lastname: 'Ramírez',
        role: 'Lanchero',
        approved: false
    },
    {
        username: 'jgarcia',
        firstname: 'Juan',
        lastname: 'García',
        role: 'Administrador',
        approved: true
    }
]

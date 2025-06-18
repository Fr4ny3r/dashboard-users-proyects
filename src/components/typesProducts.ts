
// Emulación de productos para videjuegos, tal vez sea mejorable
// aplicando mi poca experiencia en base de datos

//Juegos creados con inteligencia artificial

export interface Devices {
    pc : GamesPc[]
    console : GamesConsole[]
    android : GamesAndroid[]
}

export interface IdDevice {

    pc? : string
    ps5? : string
    xbox? : string
    nintendoSwitch? : string
    phone? : string

}

export const DeviceNames = {

    pc : 'PC',
    ps5 : 'PS5',
    xbox : 'Xbox',
    nintendoSwitch : 'Nintendo Switch',
    phone : 'Android / IPhone'

}

export const DevicePc : IdDevice = {
    pc : DeviceNames.pc
}

export const DevicePS5 : IdDevice = {
    ps5 : DeviceNames.ps5
}

export const DeviceXbox : IdDevice = {
    xbox : DeviceNames.xbox
}

export const DeviceNintendo : IdDevice = {
    nintendoSwitch : DeviceNames.nintendoSwitch
}

export const DevicePhone : IdDevice = {
    phone : DeviceNames.phone
}




export interface GamesPc {

    id : number
    price : number
    device : IdDevice
    favorite : boolean
    title : string
    desc : string

}


export interface GamesConsole {

    id : number
    price : number
    device : IdDevice
    favorite : boolean
    device2? : IdDevice
    device3? : IdDevice
    title : string
    desc : string

}

export interface GamesAndroid {

    id : number
    price : number
    device : IdDevice
    favorite : boolean
    title : string
    desc : string

}


export const GamesPc : GamesPc[] = [
    {id : 1,price : 20,device : DevicePc,favorite : false, title : 'Pixel Pioneers: Infinite Worlds',desc : 'Un juego de creación y exploración voxel-based, similar a Minecraft pero con un enfoque en la generación procedural de civilizaciones alienígenas y la posibilidad de construir naves espaciales para explorar la galaxia.'},
    {id : 2,price : 50,device : DevicePc,favorite : false, title : 'Tactical Nexus',desc : 'Un juego de estrategia por turnos con un fuerte componente de gestión de escuadrones y decisiones morales en un futuro distópico. Cada unidad tiene una historia de fondo y una personalidad que afecta su rendimiento.'},
    {id : 3,price : 43,device : DevicePc,favorite : false, title : 'Cryptid Chronicles',desc : 'Un simulador de investigación paranormal en primera persona. Eres un criptozoólogo que viaja a lugares remotos para investigar avistamientos y leyendas de criaturas misteriosas.'},
    {id : 4,price : 27,device : DevicePc,favorite : false, title : 'Synthwave Speedster',desc : 'Un juego de carreras arcade con una estética retrofuturista de los años 80, banda sonora synthwave original y acrobacias exageradas en circuitos neón.'},
    {id : 5,price : 13,device : DevicePc,favorite : false, title : 'Data Stream Defenders',desc : 'Un tower defense innovador donde defiendes una red neuronal de ciberataques, construyendo "firewalls" y "antivirus" que representan diferentes tipos de torres y habilidades.'},
    {id : 6,price : 38,device : DevicePc,favorite : false, title : 'Barter & Blades',desc : 'Un RPG de mundo abierto con un sistema de economía profundo donde el comercio y las relaciones con las facciones son tan importantes como el combate. Puedes ser un mercader, un herrero o un bandido.'}
]


export const GamesConsole : GamesConsole[] = [
    {id : 7,price : 53,favorite : false, device : DevicePS5, device2 : DeviceXbox, title : 'Chrono Drift', desc : 'Un RPG de acción con viajes en el tiempo donde tus decisiones en el pasado alteran drásticamente el futuro y el combate. El protagonista puede "derivar" entre líneas temporales paralelas.'},
    {id : 8,price : 23,favorite : false, device : DeviceNintendo, title : `Aetheria's Echo`, desc : 'Un juego de plataformas y puzles en 2.5D con un estilo artístico onírico. Controlas a un espíritu que puede poseer objetos y seres para resolver enigmas ambientales.'},
    {id : 9,price : 48,favorite : false, device : DevicePS5, device2 : DeviceXbox, device3 : DevicePc, title : 'Neon Genesis: Cyberscape', desc : 'Un RPG cyberpunk de mundo abierto con énfasis en la personalización de implantes cibernéticos y un sistema de combate que combina hacking y parkour.'},
    {id : 10,price : 26,favorite : false, device : DevicePS5, device2 : DeviceXbox, title : 'Luminary League', desc : 'Un brawler multijugador online con personajes inspirados en mitologías de todo el mundo, cada uno con habilidades elementales únicas y entornos destructibles.'},
    {id : 11,price : 49,favorite : false, device : DeviceNintendo, title : 'Whispering Woods', desc : 'Un juego de aventuras y misterio con una estética de cuento de hadas oscuro. Exploras un bosque encantado resolviendo puzles y descubriendo secretos de sus extrañas criaturas.'},
    {id : 12,price : 36,favorite : false, device : DevicePS5, device2 : DeviceXbox, device3 : DevicePc, title : 'Galactic Homesteaders', desc : ' Un simulador de construcción y gestión de colonias espaciales donde debes terraformar planetas hostiles, comerciar con otras facciones y defenderte de amenazas alienígenas.'},
    {id : 13,price : 19,favorite : false, device : DevicePS5, title : 'Shadow of the Colossus: Reimagined', desc : 'Una versión completamente rehecha del clásico, con gráficos fotorrealistas, inteligencia artificial de colosos más avanzada y nuevas áreas secretas para explorar.'},
    {id : 14,price : 35,favorite : false, device : DevicePS5, title : 'Arcane Ascendant', desc : ' Un roguelike de acción y fantasía oscura donde cada run te permite desbloquear nuevas magias, mutaciones y artefactos. El mundo cambia proceduralmente en cada partida.'},
]

export const GamesAndroid : GamesAndroid[] = [
    {id : 15,price : 21, device : DevicePhone,favorite : false, title : 'Pocket Dungeons', desc : 'Un roguelite de exploración de mazmorras con controles táctiles intuitivos y gráficos pixel art. Cada nivel es un puzle que requiere el uso inteligente de habilidades y objetos.'},
    {id : 16,price : 30, device : DevicePhone,favorite : false, title : 'Urban Alchemist', desc : 'Un juego de realidad aumentada donde recolectas ingredientes del mundo real para crear pociones y elixires mágicos que puedes usar para interactuar con puntos de interés virtuales.'},
    {id : 17,price : 40, device : DevicePhone,favorite : false, title : 'Starfall Odyssey', desc : 'Un RPG espacial clicker/idle con elementos de estrategia. Construyes y mejoras tu flota, envías naves a explorar y recolectar recursos, incluso cuando no estás jugando.'},
    {id : 18,price : 35, device : DevicePhone,favorite : false, title : 'Puzzle Park Tycoon', desc : 'Un juego de gestión de parques temáticos donde cada atracción es un minijuego de puzles. Resolver los puzles mejora la atracción y atrae a más visitantes.'},
    {id : 19,price : 41, device : DevicePhone,favorite : false, title : 'Whisperwind Tales', desc : 'Un juego de aventuras narrativas interactivas con múltiples ramificaciones y finales. Las decisiones del jugador afectan la historia a través de eventos basados en texto y minijuegos ocasionales.'},
    {id : 20,price : 39, device : DevicePhone,favorite : false, title : 'Mech Battle Arena', desc : 'Un juego de combate de mechs isométrico con personalización profunda de tus robots y batallas rápidas por turnos. Desbloqueas nuevas piezas y habilidades a medida que avanzas.'},
]
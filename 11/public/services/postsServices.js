angular.module('app').factory("postsService", function($http, $timeout) {
    // Propiedades privadas
    var STATIC_POSTS = [{
        _id: '0e38a7d4-38e2-4b62-8a7d-7cfe31c04dd3',
        titulo: 'Angora turco',
        descripcion: 'El angora turco (en turco: Ankara kedisi) es una raza de gato doméstico. Los angora son una de las razas más antiguas, originaria de la región de Ankara, en Turquía central.',
        texto: 'El Angora Turco es un gato bastante desconocido. Aunque se piensa que es una de las razas felinas más antiguas, apenas hay un pequeño grupo de criadores en Europa. Quizá parezca una pena, pero también pudiera ser una ventaja: su rareza le ha permitido salvarse de las alteraciones sufridas por otras razas. Y los criadores que se empeñan en la ardua tarea de criar Angoras Turcos tratan, por encima de todo, de preservar estas sorprendentes cualidades y ampliar el material genético facilitando el intercambio de animales de pura raza por todo el mundo. Es el caso de los Angoras Turcos importados del Zoo de Ankara (Turquía), los llamados Foundation Animals, imprescindibles en cualquier programa de cría que pretenda mantener la apariencia física de esta raza siempre próxima a la del original. No obstante, a pesar de la aparición de nuevas líneas, los esfuerzos por conseguir un standard homogéneo no han dado todavía su fruto… Como su nombre indica, el Angora Turco es originario de Ankara (Turquía), donde los ejemplares blancos de ojos dispares de esta raza, denominados Ankara kedi, son el símbolo tradicional de la pureza, considerados por el pueblo turco como su tesoro nacional. Curiosamente, hay un nombre específico para muchas de las variedades de color del Angora Turco: sarmen si se trata de un rojo tabby, o teku si nos encontramos con un silver tabby. Existen tres diferentes teorías acerca del origen del Angora. La primera sugiere que evolucionó a partir de la cría del Felis manul (gato salvaje) en China y Tartaria, desde donde llegó a Turquía; pero no hay ninguna prueba o evidencia científica de esta posibilidad. La teoría más aceptada explica la transformación de una antigua raza de gatos domésticos afincados en el sur de Rusia (Cáucaso) que desarrolló un largo pelaje para defenderse de los terribles fríos invernales. Esta raza llegó hasta Persia, India y Asia Menor (la actual Turquía) entre los siglos IX y XI, en las caravanas de los mercaderes que cruzaban Turquía e Irán, y sería el origen de los Angoras y de los Persas. Ya en el siglo X, los vikingos llevaron algunos de estos gatos a los países nórdicos, de regreso de sus correrías, con lo que el Angora Turco sería uno de los antepasados más lejanos del Bosque de Noruega. El Maine Coon podría ser también el resultado del cruce entre Angoras Turcos importados y los gatos autóctonos de la zona del Maine. Y aún hay quien opina que el Angora llegó desde las frías montañas de Persia gracias a las invasiones islámicas del siglo XV. En Turquía, su pelaje se hizo más ligero, diferenciándose de sus ancestros los Persas. Las primeras menciones en la literatura científica datan de mediados de 1899. En un artículo de la revista Science (Vol. 9, Issue 224, pp. 554)(en ingles) se relata las observaciones del doctor S. F. Gylbert sobre un caso atípico en un ejemplar de angora turco blanco de ocho meses de vida que padecía de ataques violentos.',
        imagen: 'http://placekitten.com/g/1000/300',
        likes: 10,
        comentarios: [{
            texto: "Que gato hermoso!!! Quiero tener uno",
            autor: "Betiana"
        }, {
            texto: "Me encanta este blog",
            autor: "Jorge"
        }]
    }, {
        _id: 'c0aca38e-864d-4194-95fd-74868def3185',
        titulo: 'Bengala',
        descripcion: 'El Bengala es un felino híbrido resultado del cruce entre un gato doméstico y un gato leopardo (llamado gato bengala en los países de habla hispana).',
        texto: 'Los huesos del Bengalí son pesados. Son musculosos y su estructura es muy robusta. Es un gato de gran tamaño, con unas dimensiones de hasta ocho o nueve kilos en los machos, mientras que las hembras sólo alcanzan los tres kilos y medio. La cola de este felino es gruesa y de tamaño medio con cuartos traseros más elevados. La cabeza es ancha, redondeada y levemente acuñada y las mandíbulas son fuertes y anchas. La nariz ancha y larga y de piel color teja, perfilada con una delgada línea negra. Las orejas pequeñas, como las del leopardo asiático, ya que se busca fiereza en su aspecto. El bengalí tiene unos ojos dignos de mencionar: su color es amarillo verdoso y su forma es almendrada. El manto y el pelo del bengalí son los motivos de la creación de esta raza. Su pelo se aplasta sobre el cuerpo y es corto, suave y espeso, a la vez que delicado. Como consejo, es recomendable pasarle un paño por el manto para que el pelo no se quede apelmazado.',
        imagen: 'http://placekitten.com/g/1000/302',
        likes: 1,
        comentarios: []
    }, {
        _id: 'b4934d4d-3394-475d-aafe-13ec54bc4055',
        titulo: 'Maine Coon',
        descripcion: 'El Maine Coon, Coon de Maine o Mancoon es una raza de gato doméstico originaria de Estados Unidos.',
        texto: 'Una popular historia dice que Maria Antonieta, reina de Francia, al intentar escapar de Francia y sus problemas, se embarca hacia Estados Unidos con seis de sus gatos angora de Turquía con la ayuda del capitán Samuel Clough. María Antonieta no logró llegar a Estados Unidos, pero sus gatos sí. Los gatos arribaron a Wiscasset, Maine.',
        imagen: 'http://placekitten.com/g/1000/303',
        likes: 1,
        comentarios: []
    }, {
        _id: 'dd6d14b5-345b-4857-bfac-705d302abb25',
        titulo: 'Gato oriental',
        descripcion: 'El gato oriental es una raza de gato originaria de Tailandia. Por su perfil afilado el gato oriental ha sido apodado el galgo de los gatos.',
        texto: 'La cabeza es de tamaño mediano, proporcionada con el cuerpo. Equilibrada, tiene forma de cuña con líneas rectas. La cuña comienza en la nariz y gradualmente aumenta en ancho hacia las orejas por medio de líneas rectas. No debe haber depresión a la altura de los bigotes. El cráneo, visto de perfil, es ligeramente convexo. Nariz larga y recta, continuando la línea desde la frente sin ninguna interrupción. Hocico angosto. Mentón y mandíbula de tamaño medianos, la punta del mentón debe formar una línea vertical con la punta de la nariz. El cuello es largo y esbelto. Las orejas son grandes y en punta, anchas en la base. En cuanto a la ubicación, continúan las líneas de la cuña. Las puntas de las orejas no se deben inclinar hacia el frente. Los ojos son de tamaño mediano, ni protuberantes ni hundidos. De forma almendrada y ligeramente oblicuos hacia la nariz, para continuar armoniosamente las líneas de la cuña. El color deber ser puro y límpido, de un verde luminoso y vívido. Las patas son largas y finas, proporcionadas con el cuerpo. Pies pequeños y ovales. La cola es muy larga, fina incluso en la base, afinándose hacia la punta. Pelaje muy corto, fino, brillante, sedoso, pegado al cuerpo, casi sin subpelo.',
        imagen: 'http://placekitten.com/g/1000/304',
        likes: 1,
        comentarios: []
    }, {
        _id: 'f80388a6-f289-4ed6-b5d7-f1a80733009e',
        titulo: 'Gato seychellois',
        descripcion: 'El Seychellois es una raza de gato muy recientemente reconocida, básicamente un gato siamés con manchas blancas.',
        texto: 'Apareció como producto del cruce de orientales bicolores portadores del gen siamés con orientales portadores del gen siamés y con siameses. En un principio estos gatos no tenían cabida dentro de las razas reconocidas y eran registrados como RIEX (registro experimental), por ser un color no reconocido. Tras muchísimo trabajo de criadores en todo el mundo, se logró cumplir con los requisitos necesarios y presentar la raza como tal en la asamblea general de la Federación Internacional Felina, donde fue aprobada, pero sin embargo, no como una variedad más de color dentro de la raza siamesa, sino como una nueva raza',
        imagen: 'http://placekitten.com/g/1000/305',
        likes: 1,
        comentarios: []
    }, {
        _id: '47422d06-0606-4ac7-98e9-3aa57391b223',
        titulo: 'Van Turco',
        descripcion: 'El gato Van Turco es una raza de gato que procede de las zonas montañosas que rodean el lago Van de Turquía.',
        texto: 'El gato de Van (en turco, Van kedi; en armenio, Վանա կատու) es una raza de gatos poco frecuente. Es originaria de la región del lago de Van, en la altiplanicie armenia, actualmente al sudeste de Turquía. El gato de Van no debe confundirse con la raza llamada “Turco de Van o Van Turco”, creada recientemente. En 1955 se exportaron varios ejemplares a Inglaterra y la raza fue reconocida en 1969. Sin embargo, Estados Unidos no considera al Van Turco como raza oficial. Los gatos de Van llevan miles de años viviendo en esta región, tal como lo demuestran numerosas referencias a los gatos con “cola de anillo” a lo largo de la historia. Se han encontrado representaciones de gatos con el clásico rabo blanco con anillos pelirrojos en joyas hititas. En unas excavaciones arqueológicas se encontraron armaduras y banderas, fechadas en la ocupación de Armenia por los romanos, en las que se ve un gato blanco de gran tamaño con anillos en la cola. El número de gatos de Van ha disminuido de forma alarmante. En 1992 solo se encontraron 92 ejemplares puros en su zona natural. Antaño había uno en casi todos los hogares. Los habitantes de la región les llaman “Pisik” y se les considera como parte de la familia. Son gatos inteligentes, limpios, a los que les encanta jugar. Una de sus características es el color de los ojos. Pueden tener ambos ojos azules, ambos ojos de color ámbar y, finalmente, un ojo de cada color. Otra peculiaridad del gato de Van es que no le disgusta el agua.',
        imagen: 'http://placekitten.com/g/1000/306',
        likes: 1,
        comentarios: []
    }];

    // Método públicos del servicio
    return {
        obtenerTodos: function() {
            // Simula una llamada a la API con un $timeout
            return $timeout(function() {}, 500).then(function() {
                return STATIC_POSTS;
            })
        },
        obtenerPorId: function(postId) {
            // Simula una llamada a la API con un $timeout
            return $timeout(function() {}, 500).then(function() {
                return STATIC_POSTS.find(function(i) {
                    return i._id == postId;
                });
            })
        },
        buscar: function(texto) {
            // Simula una llamada a la API con un $timeout
            return $timeout(function() {}, 500).then(function() {
                return STATIC_POSTS.filter(function(i) {
                    return i.texto.toLowerCase().indexOf(texto.toLowerCase()) > 0
                });
            })
        },
        agregarPost: function(post) {
            // Simula una llamada a la API con un $timeout
            return $timeout(function() {}, 500).then(function() {
                // Genera un ID random
                post._id = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

                STATIC_POSTS.push(post);
                return post;
            })
        },
        agregarComentario: function(postId, comentario) {
            // Simula una llamada a la API con un $timeout
            return $timeout(function() {}, 500).then(function() {
                var post = STATIC_POSTS.find(function(i) {
                    return i._id == postId;
                });
                if (post) {
                    var c = {};
                    angular.copy(comentario, c);
                    post.comentarios.push(c);
                }
                return post;
            })
        },
        agregarLike: function(postId) {
            // Simula una llamada a la API con un $timeout
            return $timeout(function() {}, 500).then(function() {
                var post = STATIC_POSTS.find(function(i) {
                    return i._id == postId;
                });
                if (post)
                    post.likes++;
                return post;
            })
        }
    };
});

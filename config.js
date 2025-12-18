var config = {
    style: 'mapbox://styles/daytres/cmjb7xmau001x01sb2lip7urr',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZGF5dHJlcyIsImEiOiJjbWo4Z3JyaW4wMGRzM2NzYzY0aHZ2MGo2In0.xg2YspYbOKBVTigpgnsLZA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Cines de Vigo',
    subtitle: 'Un Storymaps sobre los locales que se proyecta cine en Vigo',
    byline: 'Realizado por David G.P',
    footer: 'Este mapa fue creado gracias a las aportaciones de la comunidad. <br> Creado con <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'YELMO CINES VIALIA',
            image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxCjfFsh7W5BIOPpjSpkiwLc6_ZgEcnqqslcMvh9N_9x0lHzYc9KJfcKvcSed5DBiPb-U0TYwOxvP7vYYmXWIdQE6D5tDvys20xj9nkBphj1nBsBHU1JA6RAtaGsQoOZ9X2Y5Kh=s680-w680-h510-rw',
            description: 'Actualmente, es una de las mayores franquicias de cine de toda España, teniendo una gran presencia en Vigo. Cuenta con 2 cines en esta ubicación y uno de ellos esta en Vialia. El centro comercial más importante de Vigo, que dispone de estación de tren la cúal está a 5 minutos a pie del cine.',
            location: {
                center: [-8.709806069842102, 42.23570714582655],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'GRAN VIA CINES',
            image: 'https://lh3.googleusercontent.com/p/AF1QipMZHU8vXSn_tYmpj34J7w0e7Gp5U2J1Pxmclplt=s680-w680-h510-rw',
            description: '¡El primer cine con experiencia 4D!<br> Actualmente este cine también es conocido como Ocine, en el podrás sumergirte en una experiencia inmersiva. Podrás sentir olores, temblores, viento, luces, temblores y movimientos que únicamente surjan en la película.<br> ',
            location: {
                center: [-8.72492374468713, 42.220322679475366],
                zoom: 15.0,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'MULTICINES NORTE',
            image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw4VhkuMUOXDL6eAN50Rkuk6AdN20AOhyEFTxcBhpMaM__bt_DTvD0gb8J9Pfp27WRPN9EE5LIklzxWAG23OGtQCgk9aWhc3fzf2vhI-tMl2t_H3Ei9-0iU4lduRGo3hE1Z1kv_=s680-w680-h510-rw',
            description: 'Un cine de barrio pensado para cinéfilos, un cine que mantiene la esencia de los primeros cines. En este podrás descubrir películas de autor y verlas en su idioma original.',
            location: {
                center: [-8.71201, 42.23395],
                zoom: 15.0,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'CINES TAMBERLICK',
            image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzL0HLBfBg9vY4HgQngJxqd46LHUKYndecSDR1IHhmV5hcCkimUtcDOnnefa12ZdlqXQxcdLtsEMMT964dLUBNh57ngzg_QvI4877o1yZMxRssw1zyZDlwQUttWmlddSWuf41r9=s680-w680-h510',
            description: 'Un cine ubicado en un centro comercial subterráneo, en el te encontrarás 8 salas con una gran variedad de películas. Podrás encontrar tanto películas comerciales, en VOSE y películas de autor. Perfecto para incoformistas que no quieran limitarse a un solo tipo de cartelera.',
            location: {
                center: [-8.721059716315052, 42.231425954711426],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

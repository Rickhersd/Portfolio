const proyectsData = [
  {
    title: 'Blog Personal',
    description:'Sitio web para escribir sobre los proyectos que voy construyendo, mis experiencias como desarrollador y para redactar tutoriales, consejos y trucos de programación. La web tendrá el mismo aspecto visual de mi porfolio web personal, y desde el momento en el que esté desplegada, trabajaré activamente creando contenido.',
    technologies:'HTML, SASS, TypeScript, PHP, Laravel, Blade, MySql...',
    img:'M0 0L5.6175 63L30.8263 70L56.1006 62.9912L61.7269 0H0.0043752H0ZM49.4987 20.6063H19.9325L20.6369 28.5206H48.7988L46.6769 52.2419L30.8263 56.6344L14.9975 52.2419L13.9169 40.1056H21.6737L22.225 46.2744L30.8306 48.5931L30.8481 48.5887L39.4581 46.2656L40.3506 36.2469H13.5712L11.4887 12.88H50.1944L49.5031 20.6063H49.4987Z',
    githubLink: "#E44F26",
    urlPage: 'projects/blog-personal',
    viewProyectLink: "HTML es un lenguaje de etiquetas"
  },
  {
    title: 'Aplicación de Notas',
    description:'Pensado para estudiar el ecosistema de Firebase, este proyecto incorpora los servicios de autenticación de usuarios, base de datos y almacenamiento en la nube, y permitirá la creación, gestión, edición y eliminación de notas, listas de tareas y agendas',
    technologies:'HTML, SASS, TypeScript, Markdown, React.JS, Firebase...',
    img:'M0 0L5.6175 63L30.8263 70L56.1006 62.9912L61.7269 0H0.0043752H0ZM49.4987 20.6063H19.9325L20.6369 28.5206H48.7988L46.6769 52.2419L30.8263 56.6344L14.9975 52.2419L13.9169 40.1056H21.6737L22.225 46.2744L30.8306 48.5931L30.8481 48.5887L39.4581 46.2656L40.3506 36.2469H13.5712L11.4887 12.88H50.1944L49.5031 20.6063H49.4987Z',
    githubLink: "#E44F26",
    urlPage: 'projects/notetaking-app',
    viewProyectLink: "HTML es un lenguaje de etiquetas"
  },
  {
    title: 'Editor 3D de Cajas',
    description:'sin definir',
    technologies:'sin definir',
    img:'M0 0L5.6175 63L30.8263 70L56.1006 62.9912L61.7269 0H0.0043752H0ZM49.4987 20.6063H19.9325L20.6369 28.5206H48.7988L46.6769 52.2419L30.8263 56.6344L14.9975 52.2419L13.9169 40.1056H21.6737L22.225 46.2744L30.8306 48.5931L30.8481 48.5887L39.4581 46.2656L40.3506 36.2469H13.5712L11.4887 12.88H50.1944L49.5031 20.6063H49.4987Z',
    githubLink: "#E44F26",
    urlPage: 'projects/3D-boxes-editor',
    viewProyectLink: "HTML es un lenguaje de etiquetas"
  },
  {
    title: 'Clon de CoinMarketCap',
    description:'Réplica de uno de los sitios web más famosos para el tracking del criptomercado, tanto a nivel visual como funcional. El clon usará la Api oficial de CoinMarketCap para cargar los datos de las criptos e incluirá charts, creación de Whatchlist y porfolios personalizados, registro de usuarios, cuadros de comentarios, etc.',
    technologies:'HTML, SASS, Typescript, React.js, PHP, Laravel, MySql...',
    img:'M0 0L5.6175 63L30.8263 70L56.1006 62.9912L61.7269 0H0.0043752H0ZM49.4987 20.6063H19.9325L20.6369 28.5206H48.7988L46.6769 52.2419L30.8263 56.6344L14.9975 52.2419L13.9169 40.1056H21.6737L22.225 46.2744L30.8306 48.5931L30.8481 48.5887L39.4581 46.2656L40.3506 36.2469H13.5712L11.4887 12.88H50.1944L49.5031 20.6063H49.4987Z',
    githubLink: "#E44F26",
    urlPage: 'projects/coinmarketcap-clon',
    viewProyectLink: "HTML es un lenguaje de etiquetas"
  },
  {
    title: 'Playground de Código',
    description:'Aplicación web destinada a ser una gran colección de ejercicios de lógica de programación en diferentes lenguajes. Los usuarios podrán registrarse y monitorear su progreso y estadísticas, y mediante un playground de código, resolver los ejercicios disponibles. En un inicio se incluirán prácticas para los básicos de la web: HTML, CSS, Javascript y PHP, pero con el tiempo se irán agregando otros lenguajes como Java, Rust, C#, c++, etc.',
    technologies:'70',
    img:'M0 0L5.6175 63L30.8263 70L56.1006 62.9912L61.7269 0H0.0043752H0ZM49.4987 20.6063H19.9325L20.6369 28.5206H48.7988L46.6769 52.2419L30.8263 56.6344L14.9975 52.2419L13.9169 40.1056H21.6737L22.225 46.2744L30.8306 48.5931L30.8481 48.5887L39.4581 46.2656L40.3506 36.2469H13.5712L11.4887 12.88H50.1944L49.5031 20.6063H49.4987Z',
    githubLink: "#E44F26",
    urlPage: 'projects/coding-playground',
    viewProyectLink: "HTML es un lenguaje de etiquetas"
  },
  {
    title: 'Web de Nanogramas',
    description:'Los nanogramas son rompecabezas cuyo objetivo es pintar las celdas de una cuadrícula de acuerdo a los números mostrados en los laterales de la misma. El sitio incluirá una extensa cantidad de puzzles en diferentes dificultades, tanto en blanco y negro como coloreados, y se podrán crear propios personalizados y publicarlos.',
    technologies:'70',
    img:'M0 0L5.6175 63L30.8263 70L56.1006 62.9912L61.7269 0H0.0043752H0ZM49.4987 20.6063H19.9325L20.6369 28.5206H48.7988L46.6769 52.2419L30.8263 56.6344L14.9975 52.2419L13.9169 40.1056H21.6737L22.225 46.2744L30.8306 48.5931L30.8481 48.5887L39.4581 46.2656L40.3506 36.2469H13.5712L11.4887 12.88H50.1944L49.5031 20.6063H49.4987Z',
    githubLink: "#E44F26",
    urlPage: 'projects/nanograms',
    viewProyectLink: "HTML es un lenguaje de etiquetas"
  },
]

export default proyectsData;
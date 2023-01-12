let arrayDB = ['txt','firebase','mongo'];
let cambiarBase = arrayDB[0]; //para probar cambiar el indice del arrayDB por : 0, 1, 3;

let chatDao;

switch (cambiarBase) {
    case 'txt':
        const { ContenedorArchivo } = await import('../persistence/containers/ContenedorArchivo.js');
        chatDao = new ContenedorArchivo('chat.txt');
        break;
    case 'firebase':
        const { ContenedorFirebase } = await import('../persistence/containers/ContenedorFirebase.js');
        chatDao = new ContenedorFirebase('chat');
        break;
    case 'mongo':
        const { default: ChatDaoMongo } = await import('./ChatDaoMongo.js')
        chatDao = new ChatDaoMongo();
        break;
    default:
        // do nothing;           
        break
}

export default chatDao;
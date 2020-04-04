const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection'); //Conexão com o banco

module.exports = {
    //Rota para listar as ongs
    async index(request, response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    //Rota para criar as ongs
    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;
    
        //O id é que será utilizado pela ONG para se conectar a aplicação e por isso será devolvido ao final da criação
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return response.json({ id });
    }
};
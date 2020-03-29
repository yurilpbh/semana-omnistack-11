
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments(); //Cria uma primary key auto incrementada

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //Cria uma ligação entre essa tabela e a tabela ONG

        table.foreign('ong_id').references('id').inTable('ongs'); //Chave estrangeira ligando as tabelas pelos campos referenciados
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};

exports.up = function(knex) { //Método responsável pela criação da tabela - Executado ao criar a tabela
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) { //Método executado se algo der errado na criação da tabela
  return knex.schema.dropTable('ongs'); //Deleta a tabela
};

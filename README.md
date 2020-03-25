# ProjectOngs-Master

###################################################################

######################NODEJS 12
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt -y install nodejs

sudo apt purge -y cmdtest
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn -y
nvm ls
nvm use 12

######################NODEJS 12
sudo npm uninstall -g create-react-app

###################backend
###################backend

mkdir backend
cd backend
yarn init -y
yarn add express
yarn add nodemon
 yarn add knex
yarn add postgresql
yarn add sqlite3
yarn add cors

npx knex init # start kenex file
npx knex migrate:make create_ong
#edit migrations created
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); //2 chars only

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

# create
npx knex migrate:latest

#create new table
npx knex migrate:make create_incidents

#EDIT
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        //table.string('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
       
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};


# create
npx knex migrate:latest

###################frontend
###################frontend

npx create-react-app frontend
npm init react-app frontend
yarn create react-app frontend
yarn start

####################mobile
####################mobile

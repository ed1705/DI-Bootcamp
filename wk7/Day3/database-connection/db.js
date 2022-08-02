const knex = require('knex');

const db = knex({
  client:'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'Stupidity123',
    database:'dvdrental'
  }
});

db('country')
.del()
// .insert([
// {country: 'DI learning IL'},
// {country: 'Shaulan'},
// 	])
// .select('country_id', 'country')
// .update({country: 'Angola-1'})
.where({country_id:136})
// .orderBy('country_id', 'desc')
.returning('*')
.then(data=>{
	console.log(data);
})
.catch(e=>{
	console.log(e);
})
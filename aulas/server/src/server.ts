import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Luffy', 
    'Zoro',
    'Sanji',
    'Nami',
    'Usopp',
    'Chopper',
    'Franky',
    'Robin',
    'Brook',
    'Jinbe'
  ]);
});

app.listen(3333);
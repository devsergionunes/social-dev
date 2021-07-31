import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs'

import user1Img from './assests/imagens/user1.jpg'
import user2Img from './assests/imagens/user2.jpg'


createServer({
  models: {
    publication: Model
  },

  seeds(server) {
    server.db.loadData({
      publications: [
          {
            id: 1,
            name: 'Ana Bela',
            image: user1Img,
            text: 'essa publicaçao é publica',
            privacy: 'public',
            like: 3,
            date: '2021-07-31 13:00:00',
            coments: 2,
            share: 3
          },
          {
            id: 2,
            name: 'Sergio Nunes',
            image: user2Img,
            text: 'Essa publicaçao esta configurada no modo privado "somente eu"',
            privacy: 'private',
            like: 0,
            date: '2021-07-28 19:20:21',
            coments: 1,
            share: 1
          }
      ]
    })
  },
  routes() {
    this.namespace = 'api'
    
    this.get('/publication',() => {
      return this.schema.all('publication');
    })

    this.post('/publication', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('publication', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
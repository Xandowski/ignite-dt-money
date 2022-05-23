import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import {App} from './App'

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', (schema) => {
      return schema.transactions.all()
    })

    this.post('/transactions', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      data = {...data, createdAt: new Date()}

      return schema.transactions.create(data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

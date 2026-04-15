const express = require('express')
const config = require('./config')
const { findUserById } = require('./db')

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('X-Powered-By', 'AuditLens-Test')
  next()
})

app.get('/health', (req, res) => {
  res.json({ ok: true, environment: 'test', apiKey: config.apiKey })
})

app.get('/proxy', async (req, res) => {
  const url = req.query.url || 'http://example.com'
  const response = await fetch(url)
  res.send(await response.text())
})

app.get('/users/:id', async (req, res) => {
  const fakeDb = {
    query: async (sql) => ({ sql }),
  }

  const result = await findUserById(fakeDb, req.params.id)
  res.json(result)
})

app.listen(3000, () => {
  console.log('Vulnerable test app listening on http://localhost:3000')
})

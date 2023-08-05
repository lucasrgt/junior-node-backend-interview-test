import request from 'supertest'
import app from '../../../../src/main/config/app'

describe('Index Routes', () => {
  test('should return default message on success', async () => {
    // arrange

    // act
    app.get('/', (req, res) => {
      res.send()
    })

    // assert
    const defaultMessage = {
      message: 'Fullstack Challenge 🏅 - Space X API'
    }
    await request(app).get('/').expect(defaultMessage)
  })
})

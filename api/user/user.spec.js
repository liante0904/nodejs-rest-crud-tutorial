/**
 * Mocha
 */
// describe('GET /users', () => {
//   it('should return 200 status code', () => {
//     console.log('test 1');
//   });
// });

/**
 * assert
 */
// const assert = require('assert');
// describe('GET /users', () => {
//   it('should return 200 status code', () => {
//     assert.equal(true, false)
//   });
// });

/**
 * should
 */
// const should = require('should');
// describe('GET /users', () => {
//   it('should return 200 status code', () => {
//     (true).should.be.equal(true)
//   });
// });


/**
 * supertest
 */
const should = require('should');
const request = require('supertest');
const app = require('../../app');



// describe('GET /users', () => {
//   it('should return 200 status code', (done) => {
//     request(app)
//         .get('/users')
//         .expect(200)
//         .end((err, res) => {
//           if (err) throw err;
//           done();
//         })
//   });
//   it('should return array', (done) => {
//     request(app)
//         .get('/users')
//         .expect(200)
//         .end((err, res) => {
//           if (err) throw err;
//           res.body.should.be.an.instanceof(Array).and.have.length(3);
//           res.body.map(user => {
//             user.should.have.properties('id', 'name');
//             user.id.should.be.a.Number();
//             user.name.should.be.a.String();
//          });
//          done();
//        });
//   });
// });


/**
 * update test
 */
describe('PUT /users/:id', () => {
  it.only('should return 200 status code', (done) => {
    request(app)
        .put('/users/1')
        .send({
          name: 'foo'
        })
        .end((err, res) => {
          if (err) throw err;
          done();
        });
  });
});
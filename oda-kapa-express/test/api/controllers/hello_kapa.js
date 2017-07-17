var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('kapa_controllers', function() {

  describe('hello_kapa', function() {

    describe('GET /Communication', function() {

      it('should return a default string', function(done) {

        request(server)
          .get('/Communication')
//          .set('Accept', 'application/json')
          .set('Accept', 'application/json')
//          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            console.log(res.body)

            res.body.should.eql('');

            done();
          });
      });

      it('should accept a name parameter', function(done) {

        request(server)
          .get('/hello')
          .query({ name: 'Scott'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('Hello, Scott!');

            done();
          });
      });

    });

  });

});

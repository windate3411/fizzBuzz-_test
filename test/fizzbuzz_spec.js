var should = chai.should()
describe('function add', function () {
  it('if num divided by 3 with no remainder, it should return Fizz', function () {
    var result = fizzbuzz(6)
    result.should.be.equal('Fizz')
  })
  it('if num divided by 5 with no remainder, it should return Buzz', function () {
    var result = fizzbuzz(10)
    result.should.be.equal('Buzz')
  })
  it('if num divided by 3 or 5 with no remainder, it should return FizzBuzz', function () {
    var result = fizzbuzz(15)
    result.should.be.equal('FizzBuzz')
  })
})
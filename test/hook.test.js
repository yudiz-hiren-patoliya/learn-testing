describe('main describe block', function () {

    beforeEach('optional description', function () {
        console.log('run beforeEach hook')
    });
    
    afterEach('optional description', function () {
          console.log('run afterEach hook')
    });
  
    before('before', function () {
        console.log('run before hook')
    });
  
    after('optional description', function () {
        console.log('run after hook')
    });

    describe('inner describe block',function(){
        it('it block from inner describe block',function(){
            return 'run fuction from 1st it block from inner describe block'
        })
    })
  
    it('1st it block', function () {
      console.log('run function from 1st it block')
    });
    
    it('2nd it block', function () {
      console.log('run function from 2nd it block')
    });
});
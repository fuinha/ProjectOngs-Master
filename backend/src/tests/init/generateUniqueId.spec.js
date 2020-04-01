const generateUniqueId = require('../../utils/generateUniqueId');
describe('Generate Unique Id', () =>{
    it('should generate an run unique Id',() =>{
        const id = generateUniqueId();
        
        expect(id).toHaveLength(8);
    });
});
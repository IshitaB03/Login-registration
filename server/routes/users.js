
    module.exports = (app) => {
        const user = require('../controllers/control.js');
    
    
        app.post('/users', user.create);
    
        app.get('/users', user.findAll);
    
        app.get('/users/:id', user.findOne);
    
        app.put('/users/:id', user.update);
    
        app.delete('/users/:id', user.delete);
        
    }
    

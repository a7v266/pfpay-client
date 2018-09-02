Ext.define('PfPay.model.Person', {
    extend: 'PfPay.model.Base',
    fields: [
        {name: 'contract', reference: 'PfPay.model.Contract'},
        {name: 'snils', type: 'string'},
        {name: 'firstName', type: 'string'},
        {name: 'secondName', type: 'string'},
        {name: 'lastName', type: 'string'}
    ],
    proxy: {
        url: '/api/person'
    }
});
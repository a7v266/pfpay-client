Ext.define('PfPay.model.Organization', {
    extend: 'PfPay.model.Base',
    fields: [
        {name: 'organizationName', type: 'string'},
        {name: 'ogrn', type: 'string'},
        {name: 'host', type: 'string'},
        {name: 'port', type: 'int'}
    ],
    proxy: {
        url: '/api/organization'
    }
});
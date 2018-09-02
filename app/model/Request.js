Ext.define('PfPay.model.Request', {

    extend: 'PfPay.model.Base',

    fields: [
        {name: 'contract', reference: 'PfPay.model.Contract'},
        {name: 'requestDirection', type: 'int'},
        {name: 'requestType', type: 'int'},
        {name: 'requestStatus', type: 'int'},
        {name: 'lockTime', type: 'int'},
        {name: 'executionTime', type: 'int'},
        {name: 'requestDuration', type: 'int'},
        {name: 'errorCode', type: 'int'},
        {name: 'errorMessage', type: 'string'},
        {name: 'requestData', type: 'string'}
    ],

    proxy: {
        url: '/api/request',
    }
});
Ext.define('PfPay.model.ContractCreator', {
    extend: 'Ext.data.Model',
    requires: [
        'PfPay.data.field.LocalDate'
    ],
    fields: [
        {name: 'snils', type: 'string'},
        {name: 'contractNumber', type: 'string'},
        {name: 'contractDate', type: 'localdate'}
    ],
    proxy: {
        url: '/api/contract/create'
    }
});
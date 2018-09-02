Ext.define('PfPay.model.Contract', {
    extend: 'PfPay.model.Base',
    requires: [
        'PfPay.data.field.LocalDate'
    ],
    fields: [
        {name: 'contractNumber', type: 'string'},
        {name: 'contractDate', type: 'localdate'},
        {name: 'contractStatus', type: 'int'},
        {name: 'contractBalance', type: 'number'},
        {name: 'organization', reference: 'PfPay.model.Organization'},
        {name: 'organizationName', type: 'string'},
        {name: 'person', reference: 'PfPay.model.Person'},
        {name: 'snils', type: 'string'},
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'personName',
         calculate: function(data) {
            return data['lastName'] + ' ' + data['firstName'];
         }
        }
    ],
    proxy: {
        url: '/api/contract'
    }
});
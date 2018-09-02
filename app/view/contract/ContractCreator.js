Ext.define('PfPay.view.contract.ContractCreator', {
    extend: 'Ext.window.Window',
    xtype: 'contractcreator',
    viewModel: 'contractcreator',
    controller: 'contractcreator',
    title: 'Создать контракт',
    closeToolText: 'Закрыть окно',
    modal: true,
    resizable: false,
    closable: false,
    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 10,
            items: [
                {
                    name: 'snils',
                    xtype: 'textfield',
                    bind: '{contractCreator.snils}',
                    fieldLabel: 'СНИЛС',
                    emptyText: 'СНИЛС',
                    allowBlank: false,
                    blankText: 'Не заполнент СНИЛС'
                },
                {
                    name: 'contractNumber',
                    xtype: 'textfield',
                    bind: '{contractCreator.contractNumber}',
                    fieldLabel: 'Номер контракта',
                    emptyText: 'Номер контракта',
                    allowBlank: false,
                    blankText: 'Не заполнен номер контракта'
                },
                {
                    name: 'contractDate',
                    xtype: 'datefield',
                    bind: '{contractCreator.contractDate}',
                    fieldLabel: 'Дата контракта',
                    format: 'd.m.Y',
                    allowBlank: false,
                    maxValue: new Date(),
                    blankText: 'Не заполнена дата контракта',
                    invalidText: 'Неверно заполнена дата контракта',
                    emptyText: 'дд.мм.гггг',
                    formatText: null
                }
            ],
            buttons: [
                {
                    text: 'Создать',
                    disabled: true,
                    formBind: true,
                    handler: 'onCreateContract'
                },
                {
                    text: 'Отмена',
                    handler: 'onClose'
                }
            ]
        }
    ]
});
Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    views: [
        'user.List',
        'user.Edit'
    ],
    stores: ['Users'],
    models: ['User'],
    init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            }
        });
    },
    editUser: function(grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    }
});

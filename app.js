Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',
    controllers: [
        'Users'
    ],
    appFolder: 'app',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
          layout: 'border',
          bodyBorder: false,
          defaults: {
              collapsible: true,
              collapseMode: 'mini',
              header: false,
              split: true,
          },
          items: [{
              region: 'south',
              height: 150,
              minHeight: 75,
              maxHeight: 250,
          },{
              region:'west',
              floatable: false,
              width: 300,
              minWidth: 100,
              maxWidth: 300,
              layout: 'accordion',
                items: [{
                    title: 'Inboxes',
                }, {
                    title: 'Search',
                }, {
                    title: 'Workflow',
                }]
          },{
              collapsible: false,
              region: 'center',
              xtype: 'userlist'
          },{
              region: 'north',
              height: 100,
          }]
        });
    }
});

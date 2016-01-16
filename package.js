Package.describe({
    name: 'rwatts:orion-modal-editor',
    summary: "Extendended Material Modal Editor to enable front end editing.",
    version: "0.1.0",
    git: "https://github.com/rwatts3/meteor-orion-modal-editor",
});

Package.on_use(function(api) {
    api.versionsFrom('METEOR@1.2.0.2');

    api.use([
        'jquery',
        'templating',
        'less',
        'ui',
		'nicolaslopezj:options@1.0.1',
		'rwatts:autoform-modals-materialize@0.1.0',
        'gildaspk:autoform-materialize@0.0.20'
    ], 'client');

    api.imply([
        'rwatts:autoform-modals-materialize@0.1.0'
    ]);
	
    api.add_files('lib/client/index.html', 'client');
    api.add_files('lib/client/index.js', 'client');
    api.add_files('lib/client/index.less', 'client');
});

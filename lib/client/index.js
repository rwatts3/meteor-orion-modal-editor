
// Initialize the modalGlobalEditor Options
Options.init('modalGlobalEditor');

Template.modalGlobalEditor.helpers({
	settings: function () {
		return Options.get('modalGlobalEditor');
	},
	canShow: function () {
		var result = window[this.collection].canShowCreate();
		return result;
	},
	getHiddenFields: function () {
		var result = window[this.collection].getHiddenFields();
		return result;
	}
});
Package.describe({
	summary: "node_xslt and libxmljs packaged for Meteor",
	version: "1.0.0",
	git: "https://github.com/perak/meteor-xmlkit.git"
});

// Before Meteor 0.9?
if(!Package.onUse) Package.onUse = Package.on_use;

Npm.depends({
	node_xslt: "0.1.9",
	libxmljs: "0.14.0"
});

Package.onUse(function(api) {
	// Meteor >= 0.9?
	if(api.versionsFrom) api.versionsFrom("METEOR@0.9.0");


	api.add_files("xmlkit.js", "server");
	api.export("XSLT", "server");
	api.export("XML", "server");
});

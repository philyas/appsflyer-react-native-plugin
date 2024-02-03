const withAppsFlyerIos = require('./withAppsFlyerIos');
// my changes for shouldUseStrictMode
module.exports = function withAppsFlyer(config, shouldUseStrictMode = false ) {
	config = withAppsFlyerIos(config, shouldUseStrictMode);
	return config;
};

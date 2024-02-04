const withAppsFlyerIos = require('./withAppsFlyerIos');
// Parameter not an object
module.exports = function withAppsFlyer(config,  shouldUseStrictMode = false ) {
	config = withAppsFlyerIos(config, shouldUseStrictMode);
	return config;
};

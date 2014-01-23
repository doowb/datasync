/**
 * Sellside
 *
 * Sellside <http://www.sellside.com>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2014 Sellside.
 * Licensed under the MIT License (MIT).
 */

/**
 * Config library is used to read in configuration data
 * @type {[type]}
 */

var utils = require('utils'); 

var config = module.exports = {};

config.load = function(options) {
	return utils.data.readOptions(options);
};
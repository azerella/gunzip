"use-strict";

const core = require("./core");
const output = require("./output");

module.exports = {
    /**
     * CLI argument to print the module version
     */
	version: function () {
		return {
			description: "Print module version",
			default: output.printVersion()
		}
	},
    /**
     * CLI argument to print the help menu for user
     */
	help: function () {
		return {
			description: "Output help menu",
			default: output.printHelp()
		}
	},
    /**
     * CLI argument to compress a file, default
     */
	compress: function( fileName ) {
		return {
			description: "Compress a given file using gzip compression",
			default: core.compress( fileName )
		}
	},
    /**
     * CLI argument to decompress a file, created from gzip
     */
	decompress: function( fileName ) {
		return {
			description: "Decompress a file created from gzip",
			default: core.decompress( fileName )
		}
	}
}
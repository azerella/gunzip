"use-strict";

module.exports = {
	/**
	* Return module version as fetched from package.json
	*/
	printVersion: function() {
		console.info(`gunzip ${require("../package.json").version}`)
		process.exit() //success
	},
	/**
	* Print the help menu
	 */
	printHelp: function() {
		console.info(`Usage: gunzip [ options ] [ --version | --decompress ]
		gunzip\nOptions:
	-V, --version\t\tOutput gunzip version
	-d, --decompress\tDecompress file created by gzip`);
		process.exit() //success
	}
}
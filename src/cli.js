"use-strict";

module.exports = {
    /**
     * CLI argument to print the module version
     */
	version: function () {
		return {
			description: "Print module version",
			default: ""
		}
	},
    /**
     * CLI argument to print the help menu for user
     */
	help: function () {
		return {
			description: "Output help menu",
			default: ""
		}
	}
}
#! /usr/bin/env node

"use-strict";

const Cli = require("./cli");

/**
 * Launch point of node application, looks at first CLI argument passed to it
 * e.g node this_module --version
 */
switch ( process.argv[2] ) {
	case "--version":
		Cli.version().default
		break;
	case "-V":
		Cli.version().default
		break;
	case "--help":
		Cli.help().default
		break;
	case "-help":
		Cli.help().default;
		break;
	case "-h":
		Cli.help().default;
		break;
	case "--decompress":
		Cli.decompress( process.argv[3] ).default
		break;
	case "-d":
		Cli.decompress( process.argv[3] ).default
		break;
	default:
		Cli.compress( process.argv[2] ).default;
		break;
}
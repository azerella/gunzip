"use-strict";

const zlib = require("zlib");
const fs = require("fs");

module.exports = {
	/**
	 * Compress a given file, using gzip compression.
	 * @param { string } fileName - File to compress.
	 * @see https://nodejs.org/api/zlib.html#zlib_zlib
	 */
	compress: function(fileName) {
		fs.stat(fileName, (error, stats) => {
			if (error) throw error;

			const istream = fs.createReadStream(fileName);
			const ostream = fs.createWriteStream(`${fileName}.gz`);

			istream.pipe(zlib.createGzip()).pipe(ostream);
		});
	},
	/**
	 * Decompress a given file, assuming gzip compression.
	 * @param  {string } fileName - File to compress.
	 * @see https://nodejs.org/api/zlib.html#zlib_zlib
	 */
	decompress: function(fileName) {
		fs.readFile(fileName, (error, data) => {
			if (!error) {
				zlib.unzip(data, (error, buffer) => {
					if (!error) {
						fs.writeFile(
							fileName
								.split(".")
								.slice(0, 2)
								.join("."),
							buffer.toString(),
							error => {
								if (error) {
									console.error(error);
								}
							}
						);
					} else {
						console.error(error);
					}
				});
			}
			else {
				console.error(error);
			}
		});
	}
};

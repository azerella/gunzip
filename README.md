# gunzip
Node.js version of gunzip, a tool to compress or expand files.

[![CircleCI](https://circleci.com/gh/adamzerella/gunzip.svg?style=svg)](https://circleci.com/gh/adamzerella/gunzip)
[![npm version](https://badge.fury.io/js/gunzip.svg)](https://badge.fury.io/js/gunzip)
[![GitHub issues](https://img.shields.io/github/issues/adamzerella/gunzip.svg)](https://github.com/adamzerella/gunzip/issues)
[![GitHub stars](https://img.shields.io/github/stars/adamzerella/gunzip.svg)](https://github.com/adamzerella/gunzip/stargazers)

This module is currently only provides extremely basic functionality to compress or decompress a given file. If the community seems interested in developing this further, further features and refinements will be added.

# Prerequisites
This project preferences LTS releases:
- [Node.js >= 10.13.0](https://nodejs.org/dist/v10.13.0)

# Install
```bash
npm i -g gunzip
```

# Usage
```bash
# Compress a file using gzip
gunzip file.txt

# Decompress a file, assuming gzip
gunzip -d file.txt.gz
```

# Contributors
<div style="display:inline;">
  <img width="64" height="64" href="https://github.com/adamzerella" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam A. Zerella"/>
</div>

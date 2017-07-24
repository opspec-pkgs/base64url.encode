[![Build Status](https://travis-ci.org/opspec-pkgs/base64url.encode.svg?branch=master)](https://travis-ci.org/opspec-pkgs/base64url.encode)

# Problem statement

base 64 URL encodes a string per RFC4648

# Example usage

> note: in examples, VERSION represents a version of the
> base64url.encode pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/base64url.encode#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/base64url.encode#VERSION
```

## compose

```yaml
op:
  pkg: { ref: github.com/opspec-pkgs/base64url.encode#VERSION }
  inputs:
    rawValue:
  outputs:
    encodedValue:
```

# Support

join us on
[![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or
[open an issue](https://github.com/opspec-pkgs/base64url.encode/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/master/CONTRIBUTING.md)

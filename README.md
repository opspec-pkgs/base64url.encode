# Problem statement
base 64 URL encodes a string per RFC4648

# Example usage

> note: in examples, VERSION represents a version of the base64url.encode pkg

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

join us on [![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or [open an issue](https://github.com/opspec-pkgs/base64url.encode/issues)

# NovaChangelog

[![Latest Version on Packagist](https://img.shields.io/packagist/v/gabrielesbaiz/nova-changelog.svg?style=flat-square)](https://packagist.org/packages/gabrielesbaiz/nova-changelog)
[![Total Downloads](https://img.shields.io/packagist/dt/gabrielesbaiz/nova-changelog.svg?style=flat-square)](https://packagist.org/packages/gabrielesbaiz/nova-changelog)

A Laravel Nova tool to show app changelog.

## Installation

You can install the package via composer:

```bash
composer require gabrielesbaiz/nova-changelog
```

## Usage

Register NovaChangelog tool in Nova Service Provider

```php
<?php

class NovaServiceProvider extends NovaApplicationServiceProvider{

use Gabrielesbaiz\NovaChangelog\NovaChangelog;

public function tools()
    {
        return [
            ...
            new NovaChangelog()

        ];
    }

}

```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Gabriele Sbaiz](https://github.com/gabrielesbaiz)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

# Important

This are the offical github repo of Symposium (MSES), IIT Delhi

Ensure proper server configuration, as react requires some defined configurations for routers

```.htaccess
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

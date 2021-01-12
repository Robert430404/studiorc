FROM nginx:alpine

COPY ./dist                     /var/www/studiorclv/public
COPY ./docker/nginx/letsencrypt /var/www/studiorclv/letsencrypt
COPY ./docker/nginx/sites       /etc/nginx/sites-enabled
COPY ./docker/nginx/conf        /etc/nginx/conf
COPY ./docker/nginx.conf        /etc/nginx/nginx.conf

FROM nginx:alpine

COPY ./public      /var/www/studiorclv/public
COPY ./letsencrypt /var/www/studiorclv/letsencrypt
COPY ./sites       /etc/nginx/sites-enabled
COPY ./conf        /etc/nginx/conf
COPY ./nginx.conf  /etc/nginx/nginx.conf

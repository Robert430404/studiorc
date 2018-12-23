FROM nginx:alpine

COPY ./           /var/www/studiorclv
COPY ./certs      /etc/nginx/certs
COPY ./sites      /etc/nginx/sites-enabled
COPY ./conf       /etc/nginx/conf
COPY ./nginx.conf /etc/nginx/nginx.conf

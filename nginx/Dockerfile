FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]
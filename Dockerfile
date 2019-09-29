FROM nginx:alpine
#COPY . /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
COPY babywatch.html /usr/share/nginx/html
COPY ./css /usr/share/nginx/html/css
COPY ./img /usr/share/nginx/html/img


#docker build -t webserver-image:v1 .
# docker images
#docker run -d -p 80:80 webserver-image:v1
#curl docker

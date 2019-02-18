Use Nginx/Apache to serve static files.
Please run python manage.py check --deploy and solve all the errors. 
Do not store python code in /var/www folder 
Server Configuration Nginx 

server {
        root /home/tinker/srishti-Website/frontend/build;
        index index.html index.htm index.nginx-debian.html;
        server_name  srishti.iitr.ac.in srishti.sdslabs.co;
        location / {
                 try_files $uri /index.html;
        }

        location /stat/ {
           alias /home/tinker/srishti-Website/backend/static/;
        }

        location /media/ {
           alias /home/tinker/srishti-Website/backend/media/;
        }



        location /backend/media/ {
           alias /home/tinker/srishti-Website/backend/media/;
        }

        location /backend/ {
           include proxy_params;
           proxy_pass http://unix:/home/tinker/srishti-Website/backend/backend.sock;
        }

}

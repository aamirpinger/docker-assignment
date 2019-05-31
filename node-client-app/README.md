# Instructions for client side app Dockerfile
- You should use the 'node' official image, with the alpine tag

- This app listens on port 5000, but the container should launch on port 2000 so it will respond to http://localhost:2000 on your computer

- Copy all files from current application folder to "app" folder in container filesystem

- Set "app" folder as working directory

- Then it needs to run 'npm install' to install dependencies for your application

- Pass a environmental variable CREATEDBY with your name as value to it

- Document your container port by Expose command

- Then it needs to start container with command "node ./src/app.js"

- Don't forget to add a maintainer_email metadata with your email address and maintainer_rollNumber metadata with your rollnumber. Do it both on separate lines

- In the end you should be using FROM, RUN, WORKDIR, LABEL, ENV, COPY, EXPOSE, and ENTRYPOINT commands

# After Dockerfile
Once Dockerfile builds correctly, start container locally with two important thing to be added
- Run daemonless container using -d
- Use bind mount volume with -v ~/localfolder:/data
- Public port for mapping using -p 2000:5000

Once container up and runnig make sure it works on http://localhost:2000, It will show Created By: YOUR_NAME initially and will show current time once you will start server side app container

Then ensure image is named properly for your Docker Hub account with a new repo name

Push image to Docker Hub, then go to https://hub.docker.com and verify in you account if image is correctly uploaded

Remove local image from your system

Then start a new container from your Hub image, and watch how it auto downloads and runs test again that it works at http://localhost:2000

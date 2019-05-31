# Instructions for Server side app Dockerfile
- You should use the 'alpine' official image, with the latest tag

- Add a maintainer_email metadata with your email address and maintainer_rollNumber metadata with your rollnumber. Do it both on separate lines

- Run command "apk add --update nodejs nodejs-npm" to install node and npm inside your image

- Copy all files from current application folder to "app" folder in image

- Set "app" folder as working directory

- Then it needs to run 'npm install' to install dependencies for your application

- Then it needs to start container with command "node ./src/app.js"

- In the end you should be using FROM, RUN, WORKDIR, LABEL, COPY, and ENTRYPOINT commands

# After Dockerfile
Once Dockerfile builds correctly, start daemonless container locally

If you have already created a client side application container up and running, otherwise create client-side app container first and them follow the instruction further

Once Server side app container is up and running now you can go and check your client side application which you can access at http://localhost:2000 on the browser, It must show Created By: YOUR_NAME and list down ten times current time after every 5 second autometically

Then ensure image is named properly for your Docker Hub account with a new repo name

Push image to Docker Hub, then go to https://hub.docker.com and verify in you account if image is correctly uploaded

Remove local image from your system

Then start a new container from your Hub image, and watch how it auto downloads and runs,check again that it works at http://localhost:2000

Don't forget to stop this container when you finish using this app otherwise it will keep on running in the background and consume system resources

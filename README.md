# Getting Started

Project developed em React to calculate exercise of dpd.

# Dockerfile build

To build image install docker and execute this command: `docker build -t prob-dpd .`.

# Execute docker image

To execute docker image to run project react `docker run -d -p 8080:3000 -v "$(pwd):/var/www" --name prob prob-dpd`
Explain flags:
 * `-d` to detach
 * `-p 8080:3000` to listen port 3000 from docker and expose in 8080 
 * `-v "$(pwd):/var/www"` to set volume local for hotreload from your machine
 * `--name prob` to set name of docker image
 * `prob-dpd` image to run docker

See more in DockerFile.

# Developing

To view develop access http://localhost:8080
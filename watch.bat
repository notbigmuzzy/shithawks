@echo off
echo Starting Pug and Sass watchers...

start "Pug - HTML" cmd /k pug -w  assets/templates/index.pug -o ../shithawks/
start "Sass - CSS" cmd /k sass --watch assets/styles/index.scss index.css --style compressed

echo All watchers started in separate windows.

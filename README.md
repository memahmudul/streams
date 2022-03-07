React app with fake json server

1. At first follow this video to configure it 
https://www.youtube.com/watch?v=gSqJGGBah3Y&t=225s

2. Then follow this tutorial to upload it on heroku
https://www.youtube.com/watch?v=jAnJCsQDyXk&t=455s

3.Then add "homepage":".", to the package.json file of the main project and npm run build.

4.after that upload it on netlify.


5.If you used google Oauth in the project then the oAuth client authorized url have to be changed to make it work
6.to do it..create a new oAUth client from credential>create credential>Oauth client id and insert the netlify project link and add the new generated client it to the rojects GoogleAuth component
6.then generate new build file of the project and upload it on netlify and give the same name of the previos project and delete the previoyus project.  

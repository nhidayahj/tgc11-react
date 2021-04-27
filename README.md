# tgc11-react

# Deployment of React to Netlify 
***If *package.json* is NOT in Root directory*** (Shown below)

![deploy-img](https://user-images.githubusercontent.com/60766668/116186724-c93a4f80-a756-11eb-8e08-6427c10f411f.PNG)

*Ensure all chnages & updates has been pushed to GitHub* 

1. Ensure there is a ***_redirects*** file in the ***/public*** folder
- this _redirects tells netlify to redirect clients based on the routes in React since React Router takes care of all the routing 

2. in ***_redirects*** file include this:
``` /* /index.html 200``` 

***Note: Save all files at this point*** 

3. Then, make sure you are in your project directory do:
```npm run build``` 
- this will create a build folder

4. Once the *build* folder is completed, right-click and download the folder. It is in *.tar* extension

5. In your downloads folder, unzip by extracting using WinRar 
- The extracted build.tar will be in a folder-type 

6. Go to your Netlify account, under 'Site' tab, drag and drop the extracted *build* folder. Wait for Netlify to complete its configuration 

7. Once completed, a Netlify link is created. Click on it to view your React application. 

***Note: If there is a change in your react code, these steps needs to be repeated*** to ensure that your new Netlify link will contain the updated change of codes. 
 - Delete the previously *build* folder, and do the steps again. 

***Note: Make sure all new/updates of codes has been pushed to GitHub before doing:*** 
```npm run build```

***Ntoe: If Express has been deployed to Heroku, ensure that your React app has the link(locating from your Dev(eg. Gitpod) changed to your new Heroku link***

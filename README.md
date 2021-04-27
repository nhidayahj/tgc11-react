# tgc11-react

# Deployment of React to Netlify (Method 1)
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


## Deployment of React to Netlify (Method 2)

![deploy-img-netlify](https://user-images.githubusercontent.com/60766668/116218229-e7b34180-a77c-11eb-9a0e-2f867b73c42c.PNG)

***This method eliminates the steps to re-build the application if there is a need to make changes to our React code.***

To achieve the above screenshot from method 1 (folders layout),
1. First ***delete node_modules*** first (from inside 'misty' folder)
2. In ***/public folder***, ensure that is a ***_redirects*** file with
``` /* /index.html 200``` included 
3. Move all the other files to the root (in this case, out from 'misty' folder)
4. Then, delete the now empty 'misty' folder 
5. In terminal, type ```yarn```
- this will create another node_modules (but will not pushed to GitHub, since in .gitignore, there is already a *node_module* folder included) 
6. Now test if React application still works by typing ```yarn start``` in terminal
7. ***Note:*** If all works fine, commit chnages and push to GitHub (make sure there no *node_modules files* in the git source control, just double-check git contents before pushing) when pushing to GitHub

***In your Netlify Account***

7. In Netlify, create a new project 
8. Click on ***New Site from Git***
9. Locate your project React repository in GitHub 
10. You will be prompted with the *build* settings 
11. Under the ***build commands*** change it to ***CI= yarn run build*** (Capital 'C' and 'I, and space after '=' sign)
- this is to bypass any warnings that you may have in your React code (Since React prefers that all warning is dealt with before deployment)
12. Finally click on ***Deploy***
13. Wait for Netlify to complete its Link 

Now, if any changes needs to be made in React, just normally push to GitHub, and Netlify will automatically be in-sync (since the link is directly connected to the 
repository)

*For Project 3 Reference*

Once completed, ensure that in Heroku's Config Var, the success_url for Stripe to redirect to after completed payment has been replaced with the new Netlify link

QuickGallery
============

Quick Gallery allows you to upload image folders to make an online gallery with support for multiple image galleries.

Screenshots
============
![Quick Gallery](https://i.imgur.com/6O1YGHt.png)
![Quick Gallery](https://i.imgur.com/6O1YGHt.png)
![Quick Gallery](https://i.imgur.com/wDvaZBp.png)
![Quick Gallery](https://i.imgur.com/ZVVpFkh.png)

Instructions
============
1. Download the repository
2. Then run your package manager's install command: ```npm i``` ou ```yarn```
3. Configure the ```".env"``` file and create the ```"FOLDER_ROOT"``` folder
4. Run the server with npm start or yarn run
  
Settings
============
Edit in .env file:

```FOLDER_ROOT=store```\
```STATIC_DIR=STATIC_DIR```\
```ALLOWED_TYPE="png, jpg, jpeg, gif"```

```FOLDER_ROOT: Root folder to create gallery categories```\
```STATIC_DIR: Static route to show images (http://localhost:3000/attachments/fortnite/scarlight.png)```\
```ALLOWED_TYPE: File extension allowed```

File Tree Example
============
quickgallery  
├── src/  
├── .env 
├── store/Fortnite  
│   ├── Fortnite_2022-01-08_3423_.png  
│   ├── Fortnite_2022-01-08_3489_.png  
│   ├── Fortnite_2022-01-08_3456_.png  
│   ├── Fortnite_2022-01-08_3411_.png  
│   ├── Fortnite_2022-01-08_3478_.png  
├── package.json

Credits
============
Created by [Acacio de Lima](https://twitter.com/limadeacacio) inspired in [QuickGallery
](https://github.com/mojeda/QuickGallery) created in PHP by [mojeda](https://github.com/mojeda)

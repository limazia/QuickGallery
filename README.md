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
1. Download index.php and thumb.php
2. Upload to a folder accessible by the internet (e.g. A folder called "gallery")
3. Upload image albums to their own folder.
4. Profit???
  
Settings
============
Edit in .env file:

```FOLDER_ROOT=store```\
```STATIC_DIR=STATIC_DIR```\
```ALLOWED_TYPE="png, jpg, jpeg, gif"```\

```FOLDER_ROOT=store```
```STATIC_DIR=STATIC_DIR```
```ALLOWED_TYPE="png, jpg, jpeg, gif"```

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
Created by [Acacio de Lima](https://twitter.com/limadeacacio) inspired by [QuickGallery
](https://github.com/mojeda/QuickGallery) created in PHP by [mojeda](https://github.com/mojeda)

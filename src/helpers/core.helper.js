const path = require("path");
const fs = require("fs");

const env = (key, defaultValue) => {
  const value = process.env[key] || defaultValue;
  if (typeof value === "undefined") {
    throw new Error(`Environment variable ${key} not set.`);
  }

  return value;
};

const capitalize = (string) => {
  return string
    .replace(/(_|-)/g, " ")
    .trim()
    .replace(/\w\S*/g, function (str) {
      return str.charAt(0).toUpperCase() + str.substr(1);
    })
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
}

const sorted = (data, dir) => {
  return data.sort((a, b) => {
    const aStat = fs.statSync(`${dir}/${a}`);
    const bStat = fs.statSync(`${dir}/${b}`);

    return (new Date(bStat.birthtime).getTime() - new Date(aStat.birthtime).getTime());
  });
}

const checkGalleryExists = (activeGallery) => {
  const dirGallery = path.resolve(__dirname, "../../", env("FOLDER_ROOT"), activeGallery);
  
  if (fs.existsSync(dirGallery)) {
    return true;
  } else {
    return false;
  }
};

const getFolderListing = () => {
  const dirGallery = path.resolve(__dirname, "../../", env("FOLDER_ROOT"));

  const serialized = fs.readdirSync(dirGallery).map((folders) => {
    return folders;
  });

  return sorted(serialized, dirGallery);
};

const getImagesListing = (activeGallery) => {
  const dirGallery = path.resolve(__dirname, "../../", env("FOLDER_ROOT"), activeGallery);
  const extensions = env("ALLOWED_TYPE", "").split(", ");

  const getAllImages = fs.readdirSync(dirGallery).map((images) => {
    return images
  });
  const filtered = getAllImages.filter(file => extensions.includes(file.split('.').pop()));
  
  const hasExtensionAllowed = env("ALLOWED_TYPE", "") ? filtered : getAllImages;

  const serialized = hasExtensionAllowed.map((images) => {
    return {
      name: images,
      url: `${env("APP_URL", "http://localhost")}:${env("APP_PORT", 3333)}/${env("STATIC_DIR", "attachments")}/${activeGallery}/${images}`
    };
  });

  return serialized;
};

module.exports = {
  env,
  capitalize,
  sorted,
  checkGalleryExists,
  getFolderListing,
  getImagesListing,
};
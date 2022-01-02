const path = require("path");
const fs = require("fs");

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

const listFolders = () => {
  const dirGallery = path.resolve(__dirname, "../../", process.env.FOLDER_ROOT);

  const serialized = fs.readdirSync(dirGallery).map((folders) => {
    return folders;
  });

  return sorted(serialized, dirGallery);
};

const listImages = (activeGallery) => {
  const dirGallery = path.resolve(__dirname, "../../", process.env.FOLDER_ROOT, `${activeGallery}/`);

  const serialized = fs.readdirSync(dirGallery).map((images) => {
    return images;
  });

  return sorted(serialized, dirGallery);
};

module.exports = {
  capitalize,
  sorted,
  listFolders,
  listImages
};
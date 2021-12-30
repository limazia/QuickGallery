const path = require("path");
const fs = require("fs");

const capitalize = (string) => {
	return string.charAt(0).toUpperCase() + string.substr(1);
}

const listFolders = () => {
  const dirGallery = path.resolve(__dirname, "../../", process.env.FOLDER_ROOT);

  const serialized = fs.readdirSync(dirGallery).map((file) => {
    return file;
  });

  const sorted = serialized.sort((a, b) => {
    const aStat = fs.statSync(`${dirGallery}/${a}`);
    const bStat = fs.statSync(`${dirGallery}/${b}`);

    return (new Date(bStat.birthtime).getTime() - new Date(aStat.birthtime).getTime());
  });

  return sorted;
};

const listImages = (activeGallery) => {
  const dirGallery = path.resolve(__dirname, "../../", process.env.FOLDER_ROOT, `${activeGallery}/`);

  const serialized = fs.readdirSync(dirGallery).map((images) => {
    return images;
  });

  const sorted = serialized.sort((a, b) => {
    const aStat = fs.statSync(`${dirGallery}/${a}`);
    const bStat = fs.statSync(`${dirGallery}/${b}`);

    return (new Date(bStat.birthtime).getTime() - new Date(aStat.birthtime).getTime());
  });

  return sorted;
};

module.exports = {
  capitalize,
  listFolders,
  listImages
};
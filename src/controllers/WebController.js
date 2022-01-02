const { capitalize, listFolders, listImages } = require("../helpers/utils.helper");

class WebController {
  async renderHome(request, response, next) {
    try {
      return response.status(200).render("Home", {
        title: "Inicio",
        menuActive: "home",
        galleryAvailable: listFolders()
      });
    } catch (err) {
      next(err);
    }
  }

  async renderGallery(request, response, next) {
    try {
      const { gallery } = request.params;

      const nameGalleryCapitalize = capitalize(gallery);
      //const nameGallery = listImages(gallery).toString().toLowerCase();
      
      //imagesPerGallery: { name: "nameGallery", url: `${process.env.APP_URL}:${process.env.APP_PORT}/${process.env.STATIC_DIR}/${nameGallery}/${nameGallery}`,},

      return response.status(200).render("Gallery", {
        title: nameGalleryCapitalize,
        menuActive: nameGalleryCapitalize,
        galleryAvailable: listFolders(),
        imagesPerGallery: listImages(gallery)
      });
    } catch (err) {
      next(err);
    }
  }

  async renderPageNotFound(request, response, next) {
    try {
      return response.status(404).redirect("/");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new WebController();
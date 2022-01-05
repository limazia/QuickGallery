const { capitalize, checkGallery, listFolders, listImages } = require("../helpers/utils.helper");

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

      if (!checkGallery(gallery)) {
        return response.status(404).redirect("/");
      }

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
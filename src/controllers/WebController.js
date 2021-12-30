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

      return response.status(200).render("Gallery", {
        title: capitalize(gallery),
        menuActive: capitalize(gallery),
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
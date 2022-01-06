const {
  capitalize,
  checkGalleryExists,
  getFolderListing,
  getImagesListing,
} = require("../helpers/core.helper");

class WebController {
  async renderHome(request, response, next) {
    try {
      return response.status(200).render("Home", {
        title: "Inicio",
        menuActive: "home",
        galleryAvailable: getFolderListing()
      });
    } catch (err) {
      next(err);
    }
  }

  async renderGallery(request, response, next) {
    try {
      const { gallery } = request.params;

      const nameGalleryCapitalize = capitalize(gallery);

      if (!checkGalleryExists(gallery)) {
        return response.status(404).redirect("/");
      }

      return response.status(200).render("Gallery", {
        title: nameGalleryCapitalize,
        menuActive: nameGalleryCapitalize,
        galleryAvailable: getFolderListing(),
        imagesPerGallery: getImagesListing(gallery)
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
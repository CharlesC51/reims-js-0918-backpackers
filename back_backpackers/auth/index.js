const express = require("express");
const router = express.Router();
const connection = require("../conf");

const multer = require("multer");
const upload = multer({
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png") {
      return cb(null, false);
    } else {
      cb(null, true);
    }
  },
  limits: { fileSize: 3 * 1024 * 1024 },
  dest: "tmp/"
});
const fs = require("fs");

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/upload", upload.array("monfichier"), (req, res, next) => {
  console.log(req.files);
  req.files.map(file =>
    fs.rename(
      file.path,
      "front_backpackers/images/" + file.originalname,
      err => {
        if (err) {
          res.send("problème durant le déplacement");
        } else {
          res.send("Fichier uploadé avec succès");
        }
      }
    )
  );
});

module.exports = router;

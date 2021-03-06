const express = require("express");
const router = express.Router();
const connection = require("../conf");
const tinify = require("tinify");
tinify.key = process.env.TINIFY_API;

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

router.post("/api/upload", upload.array("monfichier"), (req, res, next) => {
  req.files.map(file =>
    fs.rename(
      file.path,
      "public/images/" + file.originalname,
      (err, results) => {
        if (err) {
          res.status(500).send(err);
        }
        connection.query(
          `UPDATE activities SET picture = "${
            file.originalname
          }" WHERE idActivity = (SELECT LAST_INSERT_ID())`,
          err => {
            if (err) {
              console.log(err);
            } else {
              res.sendStatus(200);
            }
          }
        );
      }
    )
  );
});

module.exports = router;

require("dotenv").config();

var gulp = require("gulp"),
  gulpEbDeploy = require("gulp-elasticbeanstalk-deploy");

gulp.task("deploy", function () {
  const {
    AWS_ACCESS_KEY,
    AWS_SECRET_KEY,
    AWS_REGION,
    AWS_EB_S3_BUCKET,
    AWS_APPLICATION_NAME,
    AWS_ENVIRONMENT_NAME,
  } = process.env;
  return gulp
    .src(
      [
        "bin/**/*",
        "public/**/*",
        "routes/**/*",
        "views/**/*",
        "app.js",
        "gulpfile.js",
        "package.json",
      ],
      {
        base: "./",
        nodir: true,
      }
    )
    .pipe(
      gulpEbDeploy({
        name: AWS_APPLICATION_NAME,
        timestamp: true,
        waitForDeploy: true,
        amazon: {
          accessKeyId: AWS_ACCESS_KEY,
          secretAccessKey: AWS_SECRET_KEY,
          region: AWS_REGION,
          bucket: AWS_EB_S3_BUCKET,
          applicationName: AWS_APPLICATION_NAME,
          environmentName: AWS_ENVIRONMENT_NAME,
        },
      })
    );
});

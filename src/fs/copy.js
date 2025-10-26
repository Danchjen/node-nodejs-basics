import fs from "fs";

const copy = async () => {
  const srcFolder = "files";
  const destFolder = "files_copy";

  // Check if source folder does not exist and throw an error if so
  fs.access(srcFolder, fs.constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");

    // Check if destination folder exists and throw an error if so
    fs.access(destFolder, fs.constants.F_OK, (err2) => {
      if (!err2) throw new Error("FS operation failed");

      // Create destFolder
      // @destFolder = "files_copy"
      fs.mkdir(destFolder, (err3) => {
        // Collect full file names
        fs.readdir(srcFolder, (err4, files) => {
          // Copy each file
          files.forEach((file) => {
            fs.copyFile(
              `${srcFolder}/${file}`,
              `${destFolder}/${file}`,
              (err5) => {}
            );
          });
        });
      });
    });
  });
};

await copy();

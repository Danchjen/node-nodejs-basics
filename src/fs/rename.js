import fs from "fs";

const rename = async () => {
  const wrongFilename = "wrongFilename.txt";
  const properFilename = "properFilename.md";

  fs.access(`files/${wrongFilename}`, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error(`FS operation failed`);
    }
  });

  fs.access(`files/${properFilename}`, fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error(`FS operation failed`);
    }
  });

  fs.rename(`files/${wrongFilename}`, `files/${properFilename}`, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await rename();

import fs from "fs";

const rename = async () => {
  const wrongFilename = "src/fs/files/wrongFilename.txt";
  const properFilename = "src/fs/files/properFilename.md";

  fs.access(`${wrongFilename}`, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error(`FS operation failed`);
    }
  });

  fs.access(`${properFilename}`, fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error(`FS operation failed`);
    }
  });

  fs.rename(`${wrongFilename}`, `${properFilename}`, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await rename();

import fs from "fs";

const copy = async () => {
  const srcFolder = "src/fs/files";
  const destFolder = "src/fs/files_copy";

  fs.access(srcFolder, fs.constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");

    fs.access(destFolder, fs.constants.F_OK, (err2) => {
      if (!err2) throw new Error("FS operation failed");

      fs.cp(srcFolder, destFolder, { recursive: true }, (err3) => {
        if (err3) throw new Error("FS operation failed");
      });
    });
  });
};

await copy();

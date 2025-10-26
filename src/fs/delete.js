import fs from "fs";

const remove = async () => {
  const file = "files/fileToRemove.txt";

  fs.access(file, fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }

    fs.rm(file, (err) => {
      throw new Error(err);
    });
  });
};

await remove();

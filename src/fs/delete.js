import fs from "fs";

const remove = async () => {
  const file = "src/fs/files/fileToRemove.txt";

  fs.access(file, fs.constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");

    fs.rm(file, (err2) => {
      if (err2) throw new Error("FS operation failed");
      console.log("File deleted successfully");
    });
  });
};

await remove();

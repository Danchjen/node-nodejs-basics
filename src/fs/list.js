import fs from "fs";

const list = async () => {
  const dir = "src/fs/files";

  fs.access(dir, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }

    fs.readdir(dir, (err, files) => {
      if (err) {
        throw new Error(err);
      }

      console.log(`Files in /${dir} directory:\n${files.join("\n")}`);
    });
  });
};

await list();

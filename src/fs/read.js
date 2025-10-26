import fs from "fs";

const read = async () => {
  const file = "files/fileToRead.txt";

  fs.access(file, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }

    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        throw new Error(err);
      }

      console.log(data);
    });
  });
};

await read();

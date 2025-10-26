import fs from "fs";

const create = async () => {
  const file = "src/fs/files/fresh.txt";
  const content = "I am fresh and young";

  fs.access(file, fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }

    fs.writeFile(file, content, (err) => {});
  });
};

await create();

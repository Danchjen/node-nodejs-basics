import fs from "fs";

const create = async () => {
  const file = "files/fresh.txt";
  const content = "I am fresh and young";

  fs.access(file, fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }

    fs.writeFile(file, content, (err) => {
      console.log("File created succesfully");
    });
  });
};

await create();

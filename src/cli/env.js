const parseEnv = () => {
  const rssKeys = Object.keys(process.env).filter((key) =>
    key.startsWith("RSS_")
  );

  console.log("ENV keys: ", rssKeys.join("; "));
};

parseEnv();

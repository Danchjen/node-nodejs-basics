// env for testing: RSS_name=John RSS_role=Developer
// command for testing:
// RSS_name=John RSS_role=Developer node env.js

const parseEnv = () => {
  const rssKeys = Object.keys(process.env).filter((key) =>
    key.startsWith("RSS_")
  );

  console.log("ENV keys: ", rssKeys.join("; "));
};

parseEnv();

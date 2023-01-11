const fs = require("fs")

function getStories() {
  const scope =  fs.readdirSync('src/components');
  return scope
    .map((package) => `src/components/${package}/`)
    .filter((storyDir) => fs.existsSync(storyDir))
    .map((storyDir) => `../${storyDir}/*.stories.tsx`);
}

module.exports = {
  stories: getStories(),
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};

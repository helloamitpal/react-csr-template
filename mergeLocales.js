/* eslint-disable no-console */
const fs = require('fs');
const glob = require('glob');
const _ = require('lodash');

(() => {
  const output = {};
  const LOCALE_PATH = 'app/locale/langs/';
  const OUTPUT_FILE_NAME = 'locales.json';
  const FULL_LOCALE_PATH = `${LOCALE_PATH}${OUTPUT_FILE_NAME}`;

  // deleting existing file if any
  try {
    console.log('There is a existing language file.');
    fs.unlinkSync(FULL_LOCALE_PATH);
    console.log('Existing language file has been deleted successfully');
  } catch (error) {
    console.log('There is no language file present!');
  }

  // preparing merged file
  glob(`${LOCALE_PATH}**/*.json`, (error, files) => {
    if (files) {
      files.forEach((filepath) => {
        const contents = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        const path = filepath.split(LOCALE_PATH)[1].split('/');
        const lang = path[0];
        // it doesn't bother if filename contains space, - or _
        const file = _.camelCase(path[1].split('.')[0]);

        if (!output[lang]) {
          output[lang] = {};
        }

        // preparing a single locale object combining all locale file's contents
        if (Object.keys(contents).length > 0) {
          output[lang][file] = {};

          Object.entries(contents).forEach(([key, val]) => {
            output[lang][file][key] = val;
          });
        }
      });
    }

    // writing the final object in a file
    try {
      fs.writeFileSync(FULL_LOCALE_PATH, JSON.stringify(output));
      console.log('The language file has been re-created successfully ');
    } catch (err) {
      console.log('Failed to create the language file');
    }
  });
})();

import inquirer from 'inquirer';
import InquirerTable from 'inquirer-table-prompt'
import { createTableConfig } from './utils/createTableConfig.mjs';
import { getPackageNames } from './utils/getPackageNames.mjs';
import { createChangeset } from './utils/createChangeset.mjs';

inquirer.registerPrompt("table", InquirerTable);

const packageNames = getPackageNames();
const tableConfig = createTableConfig(packageNames);

const { packages } = await inquirer.prompt(tableConfig);

let changedPkgs = {};

for (let i = 0; i < packageNames.length; i++ ) {
  if (packages[i]) {
    changedPkgs[packageNames[i]] = packages[i];
  }
}

if (Object.values(changedPkgs).length > 0) {
  createChangeset(changedPkgs);
}



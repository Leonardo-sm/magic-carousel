import inquirer from 'inquirer';
import InquirerTable from 'inquirer-table-prompt'

inquirer.registerPrompt("table", InquirerTable);

function versionTable(rows) {

}
inquirer
  .prompt([
    {
      type: "table",
      name: "packages",
      message: "Choose your workout plan for next week",
      columns: [
        {
          name: "Major",
          value: "major"
        },
        {
          name: "Minor",
          value: "minor"
        },
        {
          name: "Patch",
          value: "patch"
        },
        {
          name: "None",
          value: undefined
        }
      ],
      rows: [
        {
          name: "Monday",
          value: 0
        },
        {
          name: "Tuesday",
          value: 1
        },
        {
          name: "Wednesday",
          value: 2
        },
        {
          name: "Thursday",
          value: 3
        },
        {
          name: "Friday",
          value: 4
        },
        {
          name: "Saturday",
          value: 5
        },
        {
          name: "Sunday",
          value: 6
        }
      ]
    }
  ])
  .then(answers => {
    /*
    { workoutPlan:
      [ 'arms', 'legs', 'cardio', undefined, 'legs', 'arms', undefined ] }
    */
    console.log(answers);
  });



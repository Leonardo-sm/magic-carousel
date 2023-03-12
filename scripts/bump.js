const path = require('path');
const fs = require('fs');
const spawn = require('child_process').spawn;
const markdownIt = require('markdown-it');

const md = new markdownIt();

const EXCLUDE_FILES = ['README.md', 'config.json'];

const changesetFolderPath = path.resolve(__dirname, path.relative(__dirname, '.changeset'));

const [changelogFileName] = fs.readdirSync(changesetFolderPath).filter((file) => !EXCLUDE_FILES.includes(file))

const changelogPath = path.join(changesetFolderPath, changelogFileName);

const changelog = fs.readFileSync(changelogPath, {encoding:'utf8', flag:'r'});
const [changelogJSON] = md.parseInline(changelog);

const targets = changelogJSON.content
                        .replaceAll('---', '')
                        .split('\n')
                        .filter(n => n)
                        .map((value) => {
                          const line = value.replaceAll("'", "")
                          if (line.startsWith('@')) {
                            const [target, version] = line.split(':');
                            return { type: 'package', target, version }
                          }
                          return {type: 'message', 'message': line}
                        })

targets.forEach((target) => {
  if (target.type === "package") {
    spawn(`npm run release ${target.version}`, ['-w', target.target], { shell: true, stdio: 'inherit' });
  }
})

// fs.unlinkSync(changelogPath);




import chalk from 'chalk';
import program from 'commander';
import { writeVersion, getVersion } from './helper';

program
  .version('1.0.0', '-v, --version')
  .usage('<inject-version> [options]')
  .description('inject version into your source code.')
  .option('-t, --template [template string]', 'default `export const VERSION = \'${version};\'`')
  .arguments('<sourceFile>')
  .action(async (sourceFile: string, cmd: any) => {
    const template = cmd.template || 'export const VERSION = \'${version};\'';

    const version = getVersion();
    try {
      // 写文件
      writeVersion(sourceFile, template);
      console.log(chalk.bold.green(`\nSuccessed to writed version ${version} into ${sourceFile}.\n`));
      process.exit(1);
    } catch (e) {
      console.error(e);
      console.log(chalk.bold.red(`\nFailed to writed version ${version} into ${sourceFile}.\n`));
      process.exit(0);
    }
  });

program.parse(process.argv);

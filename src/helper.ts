import * as fs from 'fs';
import { render } from 'tplv';

/**
 * 获得当前 version
 */
export function getVersion() {
  return JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
}

/**
 * 写入代码
 * @param path 
 * @param template 
 */
export function writeVersion(path: string, template) {
  const code = [
    fs.readFileSync(path, 'utf8'), // 原代码
    '// generated by inject-version.\n' + render(template, { version: getVersion() }), // 插入的代码
  ].join('\n');

  fs.writeFileSync(path, code, 'utf8');
}
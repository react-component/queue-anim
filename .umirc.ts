// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';
const path = require('path');

export default defineConfig({
  title: 'rc-queue-anim',
  favicon:
    'https://zos.alipayobjects.com/rmsportal/HzvPfCGNCtvGrdk.png',
  logo:
    'https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg',
  outputPath: '.doc',
  alias: {
    'rc-queue-anim/es': path.join(__dirname, 'src'),
    'rc-queue-anim/lib': path.join(__dirname, 'src'),
  },
});
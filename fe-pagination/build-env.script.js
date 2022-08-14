#! /usr/bin/env node
(function() {
    // bring in child_process to use spawn command
    const cp = require('child_process');
    // bring in the amplify local-env-info.json to see current environment
    const buildInfo = require('./amplify/.config/local-env-info.json');
    // spawn the build command based on the env name:
    // npm run build-production on prod or npm run build-staging on staging
    const cmd = cp.spawn(`npm run build-${buildInfo.envName}`, { shell: true });
    // echo output of the commands to the console
    cmd.on('spawn', () => console.log('Running build command for:', buildInfo.envName));
    cmd.stdout.on('data', (d) => console.log(d.toString()));
    cmd.stderr.on('data', (d) => console.log(d.toString()));
    cmd.on('exit', () => console.log('Build Completed'));
  })();
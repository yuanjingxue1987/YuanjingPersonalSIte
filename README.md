# YuanjingPersonalSite

## Deployment:
There are two subfolders under the repo root. Each of them is a web application, in order to deploy it ( to Heroku ). Follow below instruction:
1. cd to subfolder, for example "web"
```bash
    cd web
```

2. create an app on Heroku, if not yet. "yuanjing-web" is the name for the app I will use:
```bash
    heroku create -a yuanjing-web
```

3. add buildpacks that is needed for building the app:
```bash
    heroku buildpacks:add -a yuanjing-web heroku-community/multi-procfile # move procfile to repo root
    heroku buildpacks:add -a yuanjing-web https://github.com/timanovsky/subdir-heroku-buildpack # set subfolder path as root for the app
    heroku buildpacks:add -a yuanjing-web heroku/nodejs  # add node environment since it is a node app (react / next)
```

4. set configuration for the app:
```bash
    heroku config:set -a yuanjing-web PROCFILE=web/Procfile # specify the Procfile for this app
    heroku config:set -a yuanjing-web PROJECT_PATH=web # set web folder as the root of the app
```

5. command for push and deploy the code:
```
    git push https://git.heroku.com/yuanjing-web.git HEAD:master
```

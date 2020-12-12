<div align="center">
  <h2>Read</h2>

  <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Flogustra%2Fread?ref=badge_shield">
    <img 
      src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Flogustra%2Fread.svg?type=shield&color=brightgreen" 
      alt="FOSSA Status"
    >
  </a>

  <a href="https://standardjs.com">
    <img 
      src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat" 
      alt="Code Style"
    >
  </a>

  <a href="https://github.com/logustra/read/releases/tag/v1.0.0">
    <img 
      src="https://img.shields.io/static/v1.svg?label=version&message=1.0.0&style=flat&color=brightgreen" 
      alt="Version"
    >
  </a>

  <a href="https://conventionalcommits.org">
    <img 
      src="https://img.shields.io/badge/conventional%20commits-1.0.0-brightgreen.svg" 
      alt="Conventional Commits"
    >
  </a>
</div>
<br />

<img width="1023" alt="Screen Shot 2020-05-20 at 12 58 20 PM" src="https://user-images.githubusercontent.com/13871363/82410330-dad09d00-9a99-11ea-933e-0c7fdf5a5294.png">

## Learn 7AD
Learn the design patterns [here](https://github.com/logustra/7ad)

## Requirement
  - [node.js](http://nodejs.org/)
  - [nvm](https://github.com/nvm-sh/nvm)
  - [pnpm](https://pnpm.js.org/en/installation)

## Quick Start

```bash
# install nodejs with specific version
$ nvm install 12.6.3

# using specific nodejs
$ nvm use 12.6.3

# clone repository
$ git clone https://github.com/logustra/read.git

# open folder read
$ cd read

# instal dependencies
$ pnpm install

# build and serve with express
$ pnpm start
```

## Run with Docker

```bash
# build image and tag it with name read
$ docker build . -t read

# run image read in the background with port 9900
$ docker run -p 9900:9900 -d read
```

## How to Create Folder
A guide how to create a folder using `create-cli`

### Component
```bash
# create atom component and give it name loading
$ node create atom loading
```

### Module
```bash
# create new module and give it name home
$ node create module home
```

## How to Contribute
I'm delighted that you're helping make this open source project better. Here are a few quick guidelines to make this an easier and better process for everyone.

### Reporting a bug
First, **make sure the bug hasn't already been reported** by searching GitHub's issues section.

If no existing issue exists, go ahead and create one. **Please be sure to include all of the following**:

1. A clear, descriptive title (ie. "A bug" is not a good title).
2. Include the error message if have.
3. The browser and OS that you're using.

### Submitting a Pull Request
1. Fork it
2. Create your feature branch `git checkout -b new-feature`
3. Commit your changes `git commit -m "Add some feature"`
4. Push to the branch `git push origin new-feature`
5. Create new Pull Request


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flogustra%2Fread.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Flogustra%2Fread?ref=badge_large)

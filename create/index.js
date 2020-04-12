const chalk = require('chalk')
const shell = require('shelljs')
const program = require('commander')
const camelCase = require('camelcase');
const pkg = require('../package.json') 

const COMMANDS = [
  'atom', 
  'molecule', 
  'organism', 
  'template', 
  'page'
]

let name = 'example'

const templates = {
  components: {
    default: './create/templates/components/rexample.tsx',
    typings: './create/templates/components/rexample.typings.tsx'
  },

  pages: {
    components: './create/templates/pages/components/index.tsx',
    constants: './create/templates/pages/constants/exampleConstants.tsx',
    typings: './create/templates/pages/typings/exampleIndexTypings.tsx',

    services: [
      './create/templates/pages/services/exampleService.tsx', 
      './create/templates/pages/services/index.tsx'
    ],

    stores: [
      './create/templates/pages/stores/exampleIndexActions.tsx', 
      './create/templates/pages/stores/exampleIndexMutations.tsx', 
      './create/templates/pages/stores/exampleIndexState.tsx', 
      './create/templates/pages/stores/exampleIndexTypes.tsx', 
      './create/templates/pages/stores/index.tsx'
    ],

    views: './create/templates/pages/views/exampleIndex.tsx',
    router: './create/templates/pages/router.tsx'
  }
}

const checkPath = path => {
  return shell.test('-e', path)
}

const log = (folder, name, status) => {
  return status
    ? console.log(`${chalk.reset.inverse.green.bold(' SUCCESS ')} ${chalk.gray(`creating file ${folder}`)}${chalk.white(name)}`)
    : console.log(`${chalk.reset.inverse.red.bold(' FAILED ')} ${chalk.gray(`file ${folder}${chalk.white(name)} already exist`)}`)
}

const createFolder = (type, folder) => {
  let pathPage = ''
  let path = ''

  switch(type) {
    case 'components': 
      path = `./src/${type}/${folder}/${camelCase(`r-${name}`, { pascalCase: true })}`
      if (!checkPath(path)) shell.mkdir(path)
      break
      
    case 'pages': 
      if (!folder) {
        path = `./src/pages/${camelCase(name, { pascalCase: true })}`
        if (!checkPath(path)) shell.mkdir(path)

      } else {
        if (folder !== 'stores') {
          pathPage = `./src/${type}/${camelCase(name, { pascalCase: true })}`
          path = `${pathPage}/${folder}`
          if (!checkPath(pathPage)) shell.mkdir(pathPage)
          if (checkPath(pathPage) && !checkPath(path)) shell.mkdir(path)
          
        } else {
          pathPage = `./src/pages/${camelCase(name, { pascalCase: true })}`
          pathStores = `${pathPage}/stores`
          path = `${pathStores}/${camelCase(name, { pascalCase: true })}Index`
          if (!checkPath(pathPage)) shell.mkdir(pathPage)
          if (!checkPath(pathStores)) shell.mkdir(pathStores)
          if (checkPath(pathPage) && checkPath(pathStores) && !checkPath(path)) shell.mkdir(path)
        }
      }
      break
  }

  return path
}

const createComponent = {
  default: folderName => {
    const folder = `${createFolder('components', folderName)}/`
    const file = `r${camelCase(name)}.tsx`
    const path = folder + file
    
    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.components.default} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  typings: folderName => {
    const folder = `${createFolder('components', folderName)}/`
    const file = `r${camelCase(name)}.typings.tsx`
    const path = folder + file
    
    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.components.typings} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  }
}

const createModule = {
  components: () => {
    const folder = `${createFolder('pages', 'components')}/`
    const file = 'index.tsx'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.pages.components} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  constants: () => {
    const folder = `${createFolder('pages', 'constants')}/`
    const file = `${camelCase(name)}Constants.tsx`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.pages.constants} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  typings: () => {
    const folder = `${createFolder('pages', 'typings')}/`
    const file = `${camelCase(name)}IndexTypings.tsx`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.pages.typings} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  services: () => {
    const folder = `${createFolder('pages', 'services')}/`
    const file = [
      `${camelCase(name)}Service.tsx`,
      'index.tsx'
    ]

    const path = file.reduce((carry, item) => {
      return [...carry, folder + item]
    }, [])

    if (!checkPath(path)) {
      shell.touch(path)

      for (const index in templates.pages.services) {
        shell.exec(`cat ${templates.pages.services[index]} > ${path[index]}`)

        log(folder, file[index], true)
      }
    } else {
      for (const index in templates.pages.services) {
        log(folder, file[index], false)
      }
    }
  },

  stores: () => {
    const folder = `${createFolder('pages', 'stores')}/`
    const file = [
      `${camelCase(name)}IndexActions.tsx`,
      `${camelCase(name)}IndexMutations.tsx`,
      `${camelCase(name)}IndexState.tsx`,
      `${camelCase(name)}IndexTypes.tsx`,
      'index.tsx'
    ]

    const path = file.reduce((carry, item) => {
      return [...carry, folder + item]
    }, [])

    if (!checkPath(path)) {
      shell.touch(path)

      for (const index in templates.pages.stores) {
        shell.exec(`cat ${templates.pages.stores[index]} > ${path[index]}`)

        log(folder, file[index], true)
      }
    } else {
      for (const index in templates.pages.stores) {
        log(folder, file[index], false)
      }
    }
  },

  views: () => {
    const folder = `${createFolder('pages', 'views')}/`
    const file = `${camelCase(name)}Index.tsx`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.pages.constants} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  router: () => {
    const folder = `${createFolder('pages')}/`
    const file = 'router.tsx'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.pages.router} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  }
}

const actions = {
  'atom': componentName => {
    name = componentName

    createComponent.default('atoms')
    createComponent.typings('atoms')
  },

  'molecule': componentName => {
    name = componentName

    createComponent.default('molecules')
    createComponent.typings('molecules')
  },

  'organism': componentName => {
    name = componentName

    createComponent.default('organisms')
    createComponent.typings('organisms')
  },

  'template': componentName => {
    name = componentName

    createComponent.default('templates')
    createComponent.typings('templates')
  },

  'page': moduleName => {
    name = moduleName

    createModule.components()
    createModule.constants()
    createModule.typings()
    createModule.services()
    createModule.stores()
    createModule.views()
    createModule.router()
  }
}

program
  .version(pkg.version)
  .option('atom <required>', 'option to generate atom component')
  .option('molecule <required>', 'option to generate molecule component')
  .option('organism <required>', 'option to generate orgnism component')
  .option('template <required>', 'option to generate template component')
  .option('page <required>', 'option to generate module')
  .action(args => {
    COMMANDS.map(command => {
      if (args[command]) actions[command](args[command])
    })
  })

program.parse(process.argv)

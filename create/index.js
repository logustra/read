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
  'module'
]

let name = 'example'

const templates = {
  components: {
    default: './create/templates/components/rexample.tsx',
    typings: './create/templates/components/rexample.typings.tsx'
  },

  modules: {
    components: './create/templates/modules/components/index.tsx',
    constants: './create/templates/modules/constants/exampleConstants.tsx',
    typings: './create/templates/modules/typings/exampleIndexTypings.tsx',

    services: [
      './create/templates/modules/services/exampleService.tsx', 
      './create/templates/modules/services/index.tsx'
    ],

    stores: [
      './create/templates/modules/stores/exampleIndexActions.tsx', 
      './create/templates/modules/stores/exampleIndexMutations.tsx', 
      './create/templates/modules/stores/exampleIndexState.tsx', 
      './create/templates/modules/stores/exampleIndexTypes.tsx', 
      './create/templates/modules/stores/index.tsx'
    ],

    views: './create/templates/modules/views/exampleIndex.tsx',
    router: './create/templates/modules/router.tsx'
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
  let pathModule = ''
  let path = ''

  switch(type) {
    case 'components': 
      path = `./src/${type}/${folder}/${camelCase(`r-${name}`, { pascalCase: true })}`
      if (!checkPath(path)) shell.mkdir(path)
      break
      
    case 'modules': 
      if (!folder) {
        path = `./src/modules/${camelCase(name, { pascalCase: true })}`
        if (!checkPath(path)) shell.mkdir(path)

      } else {
        if (folder !== 'stores') {
          pathModule = `./src/${type}/${camelCase(name, { pascalCase: true })}`
          path = `${pathModule}/${folder}`
          if (!checkPath(pathModule)) shell.mkdir(pathModule)
          if (checkPath(pathModule) && !checkPath(path)) shell.mkdir(path)
          
        } else {
          pathModule = `./src/modules/${camelCase(name, { pascalCase: true })}`
          pathStores = `${pathModule}/stores`
          path = `${pathStores}/${camelCase(name, { pascalCase: true })}Index`
          if (!checkPath(pathModule)) shell.mkdir(pathModule)
          if (!checkPath(pathStores)) shell.mkdir(pathStores)
          if (checkPath(pathModule) && checkPath(pathStores) && !checkPath(path)) shell.mkdir(path)
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
    const folder = `${createFolder('modules', 'components')}/`
    const file = 'index.tsx'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.components} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  constants: () => {
    const folder = `${createFolder('modules', 'constants')}/`
    const file = `${camelCase(name)}Constants.tsx`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.constants} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  typings: () => {
    const folder = `${createFolder('modules', 'typings')}/`
    const file = `${camelCase(name)}IndexTypings.tsx`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.typings} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  services: () => {
    const folder = `${createFolder('modules', 'services')}/`
    const file = [
      `${camelCase(name)}Service.tsx`,
      'index.tsx'
    ]

    const path = file.reduce((carry, item) => {
      return [...carry, folder + item]
    }, [])

    if (!checkPath(path)) {
      shell.touch(path)

      for (const index in templates.modules.services) {
        shell.exec(`cat ${templates.modules.services[index]} > ${path[index]}`)

        log(folder, file[index], true)
      }
    } else {
      for (const index in templates.modules.services) {
        log(folder, file[index], false)
      }
    }
  },

  stores: () => {
    const folder = `${createFolder('modules', 'stores')}/`
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

      for (const index in templates.modules.stores) {
        shell.exec(`cat ${templates.modules.stores[index]} > ${path[index]}`)

        log(folder, file[index], true)
      }
    } else {
      for (const index in templates.modules.stores) {
        log(folder, file[index], false)
      }
    }
  },

  views: () => {
    const folder = `${createFolder('modules', 'views')}/`
    const file = `${camelCase(name)}Index.tsx`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.constants} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  router: () => {
    const folder = `${createFolder('modules')}/`
    const file = 'router.tsx'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.router} > ${path}`)

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

  'module': moduleName => {
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
  .option('module <required>', 'option to generate module')
  .action(args => {
    COMMANDS.map(command => {
      if (args[command]) actions[command](args[command])
    })
  })

program.parse(process.argv)

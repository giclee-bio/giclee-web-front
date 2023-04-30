import 'zx/globals'

const regexPascal = '^[A-Z].*[a-zA-Z]+$'
const directories = ['atoms', 'molecules', 'organisms', 'pages']

const isValidInputRegex = (input: string, validation: string, message: string) => {
  const regex = new RegExp(validation)
  if (regex.test(input)) return true
  message && console.error(`\u001b[31m${message}\u001b[0m`)
  return false
}

const isValidInput = (input: string, validation: string[], message: string) => {
  for (const v of validation) {
    if (v === input) return true
  }
  message && console.error(`\u001b[31m${message}\u001b[0m`)
  return false
}

const questionComponentName: () => Promise<string | boolean> = async () => {
  const componentName = await question("Type component's name: ")
  return isValidInputRegex(
    componentName,
    regexPascal,
    'Component must be pascal case. (ex: ComponentName)'
  )
    ? componentName
    : questionComponentName()
}

const questionDirectory: () => Promise<string | boolean> = async () => {
  const directory = await question('Type directory(atoms, molecules, organisms or pages): ')
  return isValidInput(directory, directories, 'select from atoms, molecules, organisms or pages')
    ? directory
    : questionDirectory()
}

const main = async () => {
  const componentName: string | boolean = await questionComponentName()

  const directory: string | boolean = await questionDirectory()

  await $`mkdir ./src/components/${directory}/${componentName}`

  const fileList = [
    {
      from: 'Example.tsx',
      to: `${componentName}.tsx`,
    },
    {
      from: 'index.tsx',
      to: 'index.tsx',
    },
    {
      from: 'Example.test.tsx',
      to: `${componentName}.test.tsx`,
    },
    {
      from: 'Example.stories.tsx',
      to: `${componentName}.stories.tsx`,
    },
  ]

  for (const file of fileList) {
    await $`sed 's/Example/${componentName}/g' ./src/components/Example/${file.from} > ./src/components/${directory}/${componentName}/${file.to}`
  }
}

main()

const yodaJedi = {
  name: 'yoda',
  type: 'light jedi'
}

const sayHelloWorld = ({ name, type }) => {
  console.log(`${name} (${type}): Hello World!`)
}

sayHelloWorld(yodaJedi)

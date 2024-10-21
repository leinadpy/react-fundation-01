interface Person {
  name: string
  age: number
  address: Address
}

interface Address {
  street: string
  number: number
  city: string
  country: string
}


export const ObjectLiterals = () => {
  const person: Person = {
    name: "Juan",
    age: 30,
    address: {
      street: "Calle de la Paz",
      number: 123,
      city: "Madrid",
      country: "Spain"
    }
  }

  return (
    <>
      <h3>Object Literals</h3>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>

    </>
  )
}
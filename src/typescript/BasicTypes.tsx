export const BasicTypes = () => {
  const name: string = 'Dani'
  const age: number = 36
  const isActive: boolean = true;

  const powers: string[] = ['React', 'React Native', 'Angular', 'Vue', 'Qwik']

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} {age} {isActive ? 'true' : 'false'}
      <br />
      {powers.join(', ')}
    </>
  )
}
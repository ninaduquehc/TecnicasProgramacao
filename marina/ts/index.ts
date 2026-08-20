import Endereco from "./endereco"

let end0 = new Endereco(`An. Andromeda`)
let end1 = new Endereco(`An. Andromeda`)
let end2 = new Endereco(`An. Andromeda`)

end0.setRua('')

console.log(end0.getRua())
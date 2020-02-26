

export function equalValidator (name1, name2) {
  return (group) => {
    const equal = group.get(name1).value === group.get(name2).value;
    return equal ? null : {'notEqual': true } 
  }
}
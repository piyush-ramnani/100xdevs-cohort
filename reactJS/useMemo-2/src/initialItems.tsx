//AN EXPENSIVE OPERATION

/*
In these mapped object of array with almost 30 million objects,
the objects will look like:

{
    id: i / index,
    isSelected: false
}

and for i === 29_99_998, the array object will look like:

{
    id: i,
    isSelected: true,
  }

*/

export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_99_998,
  };
});

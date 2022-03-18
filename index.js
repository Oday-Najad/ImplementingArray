
// class Array{
//   constructor(){
//     this.length = 0;
//     this.data ={};
//   }

//   get(index){
//     return this.data[index];
//   }

//   push(item){
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop(){
//     const lastItem = this.data[this.length-1];
//     delete this.data[this.length-1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index){
//     const deletedItem = this.data[index];
//     this.shiftItem(index);
//   }

//   shiftItem(index){
//     for (let i = index; i<this.length-1; i++){
//       this.data[i] = this.data[i+1];
      
//     }
//     delete this.data[this.length];
//     this.length--;
//   }
  
// }

// const myArray = new Array();

// myArray.push(1);
// myArray.push(2);
// myArray.push(3);
// myArray.push(4);

// console.log(myArray);

// myArray.pop();

// console.log(myArray);

// myArray.delete(1);

// console.log(myArray);



class Array{
  constructor(){
    this.data = {};
    this.length = 0;
  }
// Get element by index in an array
  get(index){
    return this.data[index];
  }

// Add an element at the end of an array

  push(item){
    let placeOfPushing = this.length;
    this.data[placeOfPushing] = item;
    this.length++;
  }

// delete an element from the end of an array

  pop(){
    const LastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return LastItem;
  }

// Delete Item based on Index

  delete(index){
    const itemDeleted = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index){
    for(let i = index; i < this.length -1; i++)
      {
        this.data[i] = this.data[i+1];
      }
    delete this.data[this.length];
    this.length--;
    
  }


}

const newArray = new Array();


newArray.push("Oday");
newArray.push("Oday");
newArray.push("Oday");
newArray.push("Oday");

newArray.delete(0);

console.log(newArray);










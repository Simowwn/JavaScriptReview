let name;
let age;
{
  let height;
  // 2
  {
    // 2
    {
      let weight; // 1 	// 2
      console.log(name); // 1 	// 2
      // 2
      console.log(name); // 2
    }
    console.log(age); // 1 	// 2
    console.log(height); // 1 	// 2
    console.log(weight); // 1 	// 2
  }
}

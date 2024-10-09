let student1 = {
    id: 1,
    name: "lê tùng",
    age: 34,
    
    }

    // let v_id = student1.id
    // let v_name = student1.name
    // let v_age = student1.age


    // Destructuring
    // let {id: v_id} = student1
    // let {name: v_name} = student1
    // let {age: v_age} = student1

    let {id: v_id, name:v_name, age: v_age} = student1

    // đối với mảng
    let Ra85 = ["Min", "Ki", "Tin"]

    let [v_name1, v_name2, v_name3] = Ra85
    console.log(`name 1: ${v_name1}`);
    console.log(`name 2: ${v_name2}`);
    console.log(`name 3: ${v_name3}`);


    // let student1 = {
    //     id: 1,
    //     name: "lê tùng",
    //     age: 34,
        
    //     }

    let student2 = {
    ...student1,
    address: "HN",
    gender: true,
    class: "Ra85"
    }

    let Ra85_update = [...Ra85, "A", "B"]

    console.log(Ra85_update);
    

    






    
   
   
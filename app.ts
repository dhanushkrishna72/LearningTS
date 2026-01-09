// var a: unknown;
// a = 12;

// a = "harsh";

// if (typeof(a) === "string") {
//     a.toUpperCase; 
// }


interface User{
    name: string;
    email: string;
    password: string;
    dob?: number;
}

interface Admin extends User{
    admin: boolean;
}

function func(obj:User) {
    obj.name = "name";
    obj.email = "email";
    obj.password = "pass";
}
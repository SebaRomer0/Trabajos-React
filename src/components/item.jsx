import CarWidget from "./NavBar/CarWidget";


export  const Productos =[
    {
        id:0,
        img: CarWidget.cam1,
        nombre:"Camisa 1",
        precio: "3000$",
        stock: 5
    },
    {
        id:1,
        img: CarWidget.cam2,
        nombre:"Camisa 2",
        precio: "3500$",
        stock: 7
    },
    {
        id:2,
        img: CarWidget.pant1,
        nombre:"Pantalon 3",
        precio: "5000$",
        stock: 8
    },
    {
        id:3,
        img: CarWidget.pant2,
        nombre:"Pantalon 4",
        precio: "7500$",
        stock: 6
    },
];


export default function mostrarProductos() {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=> resolve(Productos), 6000);
    })
}

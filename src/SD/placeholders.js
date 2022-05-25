const mens = { name: "Men's", quantity: 18 };
const womens = { name: "Womens's", quantity: 23 };
const kids = { name: "Kids", quantity: 32 };
const hats = { name: "Hats", quantity: 12 };
const sunglasses = { name: "Sunglasses", quantity: 15 };
const shoes = { name: "Shoes", quantity: 12 };
const watches = { name: "Watches", quantity: 20 };
export const categories = [mens, womens, kids, hats, sunglasses, shoes, watches];

const black = { name: "Black", quantity: 12, color: "black" };
const gray = { name: "Gray", quantity: 20, color: "grey" };
const red = { name: "Red", quantity: 18, color: "red" };
const green = { name: "Green", quantity: 25, color: "green" };
const orange = { name: "Orange", quantity: 9, color: "orange" };
const brown = { name: "Brown", quantity: 7, color: "brown" };
export const colors = [black, gray, red, green, orange, brown];

const xs = { name: "XS", quantity: 18 };
const s = { name: "S", quantity: 23 };
const m = { name: "M", quantity: 32 };
const l = { name: "L", quantity: 12 };
const xl = { name: "XL", quantity: 15 };
const xxl = { name: "XXL", quantity: 12 };
export const sizes = [xs, s, m, l, xl, xxl];

const bexim = { name: "bexim" };
const lighton = { name: "lighton" };
const dismis = { name: "dismis" };
const rosimo = { name: "rosimo" };
const dallas = { name: "dallas" };
const concord = { name: "concord" };
export const brands = [bexim, lighton, dismis, rosimo, dallas, concord];

export const orderByOptions = ["Default Sorting", "Ascendning", "Descending"];

const list = { name: "list", value: "bi bi-list-ul" };
const smallgrid = { name: "smallgrid", value: "bi bi-grid-fill" };
const largegrid = { name: "largegrid", value: "bi bi-grid-3x3-gap-fill" };
export const displayoptions = [list, smallgrid, largegrid];

export const countOptions = [9, 12, 18, 24];

const hot = { status: "hot", value: "hot" };
const sale = { status: "sale", value: "-23%" };
const news = { status: "new", value: "new" };

export const statuses = [hot, sale, news];

const pink = { color: "#E0ACD5" };
const blue = { color: "#3993DD" };
const beige = { color: "#F4EBE8" };
const turqoise = { color: "#29E7CD" };
const bole = { color: "#6A3E37" };

export const colores = [pink, blue, beige, turqoise, bole]
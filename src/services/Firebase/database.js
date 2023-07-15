import {getfirestore}from "firebase/firestore";
import conexion from "./index";
const db=getfirestore(conexion);
export default db;
import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Patel",
    email: "adarshpatel@gmail.com",
    password:"adarsh@neog",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Happy",
    lastName: "Singh",
    email: "happysingh@gmail.com",
    password: "happy123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

import {Client, Account, Databases} from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("661d7e3332400c2f7a3d");

export const account = new Account(client);
export const database = new Databases(client,"661d822edaf81534bf9d");
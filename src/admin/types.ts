import * as mongoDB from "mongodb";
export const collections: { colors?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    "mongodb://eficensit:eficensit123@docdb-2022-05-31-17-11-32.chqf9jaentj8.us-east-1.docdb.amazonaws.com:27017/sample-database?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false",
    	{
	  tlsCAFile: `rds-combined-ca-bundle.pem`, //Specify the DocDB; cert
	}
  );
  await client.connect();
  const db: mongoDB.Db = client.db("innvendt");

  const colors: mongoDB.Collection = db.collection("QAColors");

  collections.colors = colors;

  //  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${devices.collectionName}`);
}

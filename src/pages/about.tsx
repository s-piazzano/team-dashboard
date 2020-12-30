import React from "react"
import firebase from "gatsby-plugin-firebase"


export default function About() {

  const [data, setData] = React.useState("Loading...")

  React.useEffect(() => {
    firebase
      .firestore()
      .collection('data')
      .get()
      .then(docs => {
        docs.forEach(documentSnapshot => {
          console.log(`Document found at path: ${documentSnapshot.ref.path}`);
          setData(JSON.stringify({
            id: documentSnapshot.id,
            path: documentSnapshot.ref.path,
            ...documentSnapshot.data()
          })) // setting data hook with data()
        });
      })
  }, [])

  return (
    <div>
      ABOUT
      {data}
    </div>
  )
}

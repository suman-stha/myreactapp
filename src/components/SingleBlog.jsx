import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../Firebase';
import { getDoc,doc,collection } from 'firebase/firestore';

const SingleBlog = () => {

  // console.log(useParams());
  const { id } = useParams();

  const [data, setData] = useState({})

  const colRef=collection(db,'blog')
  useEffect(() => {
   
    const singleData = doc(db, 'blog', id);
    const singleFetch = () => { 

      getDoc(singleData).then((doc) => setData(doc.data()));
    }
    singleFetch();
  }, [id])
  

  return (
    <>
      <Navbar />
      <div>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="left-img">
            <img
              className="img-fluid"
              style={{ width: "70%" }}
              src={data.img}
              alt="firebase"
            />
          </div>
          <div className="right-data d-flex justify-content-center align-items-center flex-column">
            <div
              className="user-content d-flex justify-content-center align-items-center"
            
            >
              <img
                src={data.authorImg}
                alt=""
                style={{
                  width: "5%",
                  borderRadius: "50%",
                  margin: "0.5rem",
                }}
              />
              <h4>{data.authorName}</h4>
            </div>
            <div className="text-center">
              <h1>{data.title}</h1>
              <h2>{data.shortDesc}</h2> 
              <h4>{data.fullDesc}</h4>
            </div>
          </div>
        </div>
        {/* <h1>{id}</h1> */}
      </div>
    </>
  );
}

export default SingleBlog
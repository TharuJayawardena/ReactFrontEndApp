import React, { useState, useEffect } from 'react';
import NameListItem from './NameListItem';
function NameList(){
    
    const [loadData, setLoadData] =useState(new Date());
    const [nameList, setNameList] = useState([
      {
          "id": 1,
         "name": {"title": "mr", "first": "brad",  "last": "gibson" },
         "location": { "city": "kilcoole" },
         "email": "brad.gibson@example.com",
         "dob": {"date": "1993-07-20T09:44:18.674Z","age": 26 },
         "picture": {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg"},
       },
       {
           "id": 2,
         "name": {  "title":"Mr","first":"Landon","last":"Harvey"},
         "location": { "city": "kTullamore" },
         "email": "landon.harvey@example.com",
         "dob": {"date": "1962-11-13T01:01:02.313Z","age": 60 },
         "picture": {"medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
     },
       },
       {
          "id": 3,
         "name": {"title": "mr", "first": "Tonya",  "last": "Harris" },
         "location": { "city": "Queanbeyan" },
         "email": "tonya.harris@example.com",
         "dob": {"date": "1953-11-29T03:01:55.396Z","age": 69 },
         "picture": {"medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
         },
       
     
       },
     ]);

     useEffect(()=> {
      fetch("https://randomuser.me/api").then(response => {
        return response.json();
      }).then(responseData => {
        setNameList((nameList) => [...nameList, responseData.results[0]]);
      })
     }, [loadData]);


    const nameListComponent = () => {
        return (
            nameList.map(aName => {
               return(
                <NameListItem 
                key = {aName.id}
                name={`${aName.name.first} ${aName.name.last}`} 
                city={aName.location.city} 
                email={aName.email}
                dob={aName.dob.date}
                avatar={aName.picture.medium}
                />
               )
            })
        
        );
    }
    const addUserHandler = () => {
           setLoadData(new Date());
    };
    return(
        <div >
       
        <div className="container mt-4">
          <button className='btn btn-primary mb-5' onClick={addUserHandler}>Add more</button>
        <ul className="list-group">{nameListComponent()}</ul>
        </div>
        
        
      </div>
    );
}
export default NameList
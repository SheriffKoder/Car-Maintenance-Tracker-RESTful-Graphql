"use client"

import React, { useEffect, useRef, useState } from "react"

const ReadyAPI = () => {



    const [readyAPI, setReadyAPI] = useState(false);
    const counter = useRef(0);

    useEffect(()=> {

        // fetch something from the API
        const checkAPI = async () => {
            // e.preventDefault();
            console.log(readyAPI);

            try {
                const url = process.env.REACT_APP_CURRENT_URL!;
    
                //API 0.3 - GraphQl
                const graphqlQuery = {
                    query: `
                        {
                            dummyQuery(userInput: {
                                email: "0",
                                password: "0"
                                
                            })
                            {
                                text
                            }
                        }
                    `
                }

                const apiResponse = await fetch(url+"/graphql/check", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(graphqlQuery),

                })

                const res = await apiResponse.json();
                // console.log(res);
                // console.log(apiResponse.status);
                console.log(res.data.dummyQuery.text);
                let returned = typeof(res.data.dummyQuery.text);
                if (returned === "string") {
                    setReadyAPI(true);
                    return;
                } 
                    setTimeout(()=> {
                        console.log("waiting1");
                        counter.current++;
                        checkAPI();    
                    }, 5000);
                

            }

            catch {
                setTimeout(()=> {
                    console.log("waiting2");
                    counter.current++;
                    checkAPI();    
                }, 5000);
               

            } 
            // if (counter.current === 10) {
            //     setReadyAPI(true);
            // }

            // setUser(res);
            // navigate("/");
        }

        checkAPI();



    },[]);




    if (!readyAPI) {
        return (
            <div className='w-full h-full absolute bg-[#0000008e] 
            flex flex-col items-center justify-center gap-8'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-tools scale-[3]"
                    viewBox="0 0 16 16">
                        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"
                        fill="white">
                        </path>
                    </svg>
                    <p className="text-xs fadeAnim">Please wait, the API is loading !</p>
      
            </div>
          )        
    }
    else {
        return <span></span>;
    }
}

export default ReadyAPI
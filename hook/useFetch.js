import { useState, useEffect } from "react";
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const rapidApiKey = RAPID_API_KEY
let base64 = require("base-64");
const useFetch = (endpoint, what) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError] = useState(null);  
    const username = "224aa48f-4d3b-471a-ba17-899a0b67b1f5"
    const password = ""
    const options = {
        method: 'GET',
        //https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a66d5797&app_key=8fae4bba1fbc2cd1a2f726a5c6698eb9&what=react%20developer
        //https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15
       // url:` https://jsearch.p.rapidapi.com/${endpoint}`,
          url: `https://api.adzuna.com/v1/api/jobs/gb/${endpoint}/1?app_id=a66d5797&app_key=8fae4bba1fbc2cd1a2f726a5c6698eb9&`,
        //  url:`https://www.reed.co.uk/api/1.0/${endpoint}`,
         //  url: `https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15`,
        headers: {     
           // Authorization: "Basic " +" MjI0YWE0OGYtNGQzYi00NzFhLWJhMTctODk5YTBiNjdiMWY1IDo=",
            'Accept': 'application/json'
            },
        params: what,  //set params to query 
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
          const response = await axios.request(options);
          setData(response.data.results);
          console.log(response)
         // console.log(response.data)

          //console.log(response.count)
          setIsLoading(false);
        } catch (error){
          setError(error);
          alert("OOPS! There was an error")
        } finally {
          setIsLoading(false);
        }

      }
      useEffect(() => {
        fetchData();          
      }, []);

      const refetch = () => {
      //  setIsLoading(true);
        fetchData();
      };
      
      return { data, isLoading, error, refetch };
    }
export default useFetch;

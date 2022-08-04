// export const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'dc3cffc797msh72f6a3502cbcfd5p119957jsn16ea58b1ca5b',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dc3cffc797msh72f6a3502cbcfd5p119957jsn16ea58b1ca5b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



//   export const youtubeOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//       'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//     },
//   };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
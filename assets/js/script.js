const getPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    // Solicitud a la API
    let response = await fetch(url);
    // muestra la respuesta de la API
    console.log(response);
    const data = await response.json();
    // muestra todo el arreglo de post
    console.log(data);
    // obtiene el contenedor de los post con id 'post-data'
    const postData = document.getElementById("post-data");

    // deja el contenedor vacío para recibir los datos
    postData.innerHTML = "";

    // crea la el contendor de la lista no ordenada
    const ul = document.createElement("ul");
    ul.classList.add("list-group");

    // recorre el arreglo y agrega cada objeto a un list item
    data.forEach((post) => {
      const li = document.createElement("li");
      li.classList.add("mb-3");
      li.innerHTML = `<b>${post.title} . </b> <br> ${post.body} .`;
      ul.appendChild(li);
    });

    // agrega el contenedor de la lista al contenedor con id 'post-data'
    postData.appendChild(ul);
  } catch (error) {
    // Manejo de errores
    alert("Error al obtener los datos")
    console.log("Error al obtener los datos");
    console.error(error);
  }
};

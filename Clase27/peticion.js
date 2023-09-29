const peticion = async () => {
    const response = await fetch("http://localhost:8080/test");
    const data = await response.json();
    console.log(data);
}
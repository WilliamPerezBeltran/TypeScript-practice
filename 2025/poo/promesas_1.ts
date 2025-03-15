function getData() {
  fetch("https://api.escuelajs.co/api/v1/users?limit=20")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//getData();

interface Data {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: Date;
  updatedAt: Date;
}

async function getData_(): Promise<Data[]> {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/users?limit=20",
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(`Error: ${err}`);
    throw err;
  }
}

getData_();

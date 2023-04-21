import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "xxippbbnq8ru",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProject = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "project",
      });
      //console.log(response);
      const newProjects = response.items.map((item) => {
        const { title, url } = item.fields;
        const image = item.fields.image.fields.file.url;
        const id = item.sys.id;
        return { id: id, title: title, url: url, image: image };
      });
      setProjects(newProjects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

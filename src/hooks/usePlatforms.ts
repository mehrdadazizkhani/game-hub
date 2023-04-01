import useData from "./useData";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlaforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlaforms;

import platforms from "../data/platforms";

// interface Platforms {
//   id: number;
//   name: string;
//   slug: string;
// }

const usePlaforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlaforms;

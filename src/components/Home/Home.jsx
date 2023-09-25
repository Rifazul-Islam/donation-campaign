import { useState } from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";


const Home = () => {
const [value ,setValue] = useState('')

return (
<div>
<Banner setName={setValue}></Banner>
<Categories value={value} ></Categories>
</div>
);
};

export default Home;
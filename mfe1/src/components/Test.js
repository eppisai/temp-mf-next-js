import { useEffect } from "react";

const A = () => {

    useEffect(() => {
      const asyncFunc = async () => {
        console.log("Component A");
        };
        asyncFunc();
    },[])

    return (
        <div>
            <h1>Component A</h1>
        </div>
    );
};

export default A;
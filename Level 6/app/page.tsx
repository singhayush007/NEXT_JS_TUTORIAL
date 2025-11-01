// NOTE: SSR, SSG , ISR only work on Server component.


// SSR FETCH
/*
import React from "react";

const Page = async () => {
  // async function directly component pe hi
  const response = await fetch("http://localhost:3000/api/user", {
    cache: "no-store", // SSR (Server Side Rendering)
  });

  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>Users Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page;
*/

// SSG FECTH

/*
import React from "react";

const Page = async () => {
  //  Ye fetch sirf build time pe chalega
  const response = await fetch("http://localhost:3000/api/user", {
    cache: "force-cache", // ⚡ Default for SSG
  });

  const data = await response.json();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🧱 Static Site Generation (SSG)</h1>
      <p>
        Ye data build time pe fetch hua hai, har refresh pe API call nahi hoti.
      </p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page;
*/


// ISR FETCH


import React from "react";

const Page = async () => {
  // ✅ ISR: page static render hoga, but har 10 sec me revalidate hoga
  const response = await fetch("http://localhost:3000/api/user", {
    next: { revalidate: 10 }, // ⏱ revalidate time in seconds
  });

  const data = await response.json();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>♻️ Incremental Static Regeneration (ISR)</h1>
      <p>
        Ye page static hai, but har <strong>10 seconds</strong> me background me
        update hota rahega.
      </p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page;




const mutations = [
  {
    createOrReplace: {
      _id: "123",
      _type: "cms.article",
      title: "An article",
    },
  },
];

fetch(
  `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  {
    method: "post",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer skdeQfr5jAh7OKuKxDBggKXilD2SWJKAu1BGfcEMcL5TA47qLh3v70OMzt4PgGWD2kH01uoMuiHrmL5Sn`,
    },
    body: JSON.stringify({ mutations }),
  }
)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

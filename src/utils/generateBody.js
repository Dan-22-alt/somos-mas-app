export const bodyGenerateWithName = (apiRes, values) => {
  let body = {
    id: apiRes.id,
    name: apiRes.name,
  };
  for (const key in values) {
    if (apiRes[key] !== values[key]) {
      body[key] = values[key];
    }
  }
  return body;
};

export const bodyGenerateWithId = (apiRes, values) => {
  let body = {
    id: apiRes.id,
  };
  for (const key in values) {
    if (apiRes[key] !== values[key]) {
      body[key] = values[key];
    }
  }
  return body;
};

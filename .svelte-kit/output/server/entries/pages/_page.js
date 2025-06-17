async function load({ fetch }) {
  const response = await fetch("/data.json");
  const data = await response.json();
  return {
    data
  };
}
export {
  load
};

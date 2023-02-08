export const getRewards = async () => {
  const response = await fetch('./rewards.json');
  const data = await response.json();
  console.log(data);
  return data;
}
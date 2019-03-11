export const addCampaign = (title, time) => ({
  type: "ADD CAMPAIGN",
  title,
  time
});

export const editCampaign = (id, title, time) => ({
  type: "EDIT CAMPAIGN",
  id,
  title,
  time
});

export const deleteCampaign = id => ({
  type: "DELETE CAMPAIGN",
  id
});

export const pauseCampaign = id => ({
  type: "ALTER CAMPAIGN",
  id
});

export const fetchData = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(resp => resp.json())
    .then(data => dispatch(saveData(data)))
    .catch(e => console.log(e));
};

export const saveData = data => ({
  type: "SAVE DATA",
  data
});

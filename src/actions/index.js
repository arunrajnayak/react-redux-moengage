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

let campaignId = 0;
const campaigns = (state = [], action) => {
  switch (action.type) {
    case "ADD CAMPAIGN":
      if (!action.title) return state;
      return [
        ...state,
        {
          id: campaignId++,
          title: action.title,
          time: action.time
        }
      ];
    case "EDIT CAMPAIGN":
      if (!action.title) return state;
      const id = state.findIndex(item => item.id === action.id);
      return [
        ...state.slice(0, id),
        {
          id,
          title: action.title,
          time: action.time
        },
        ...state.slice(id + 1)
      ];
    case "DELETE CAMPAIGN":
      const index = state.findIndex(item => item.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];

    default:
      return state;
  }
};

export default campaigns;

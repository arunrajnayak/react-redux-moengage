let logId = 0;
const logs = (state = [], action) => {
  switch (action.type) {
    case "ADD CAMPAIGN":
      if (!action.title) return state;
      return [
        ...state,
        {
          logType: "Campaign created",
          info: action.title,
          label: "title: "
        }
      ];
    case "EDIT CAMPAIGN":
      if (!action.title) return state;
      return [
        ...state,
        {
          logType: "Campaign edited",
          info: action.title,
          label: "title: "
        }
      ];
    case "DELETE CAMPAIGN":
      return [
        ...state,
        {
          logType: "Campaign Deleted",
          info: action.id + 1,
          label: "number: "
        }
      ];
    case "ALTER CAMPAIGN":
      return [
        ...state,
        {
          logType: "Campaign Status Changed",
          info: action.id + 1,
          label: "number: "
        }
      ];
    case "SAVE DATA":
      console.log(action.data);
      return [...state, action.data];

    default:
      return state;
  }
};

export default logs;

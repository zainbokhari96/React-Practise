const initialState = {
  companies: [],
};

const companyReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_COMPANIES":
      return { ...state, companies: payload };
    case "DELETE_COMPANY":
      const deleteCompany = state.companies.filter((item) => {
        return item.id !== payload.id;
      });
      state.companies = deleteCompany;
      return { ...state };
    default:
      return state;
  }
};

export { companyReducers };

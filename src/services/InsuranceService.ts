import http from "../http-common";

const getQuote = () => {
  return http.get("/quote");
};

const getAddons = () => {
  return http.get("/addons");
};

const getAddonsById = (id: any) => {
  return http.get(`/addons/${id}}`);
};

const selectExtraQuote = (id: any, data: any) => {
  return http.put(`/quote/${id}`, data);
}

const InsuranceService = {
  getQuote,
  getAddons,
  getAddonsById,
  selectExtraQuote
};

export default InsuranceService;